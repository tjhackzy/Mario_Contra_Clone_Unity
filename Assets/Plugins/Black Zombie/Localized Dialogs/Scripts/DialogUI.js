////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// 	DialogUI.js
//
//	Show The Dialogs UI, resolution independant.
//
//	© 2012-2013 Melli Georgiou
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#pragma downcast

// Screen Options
static var status : DUISTATUS = DUISTATUS.ENDED;							// Current internal status of the DialogUI
	enum DUISTATUS{ SHOW,FADEOUT,WAITFORSCREEN,ENDDIALOG,FORCECLOSE,ENDED };
static var ended : boolean = true;											// The UI has completely finished fading out

// Static Component
static var dui : DialogUI;

// GUI Resolution Matrix
private var originalWidth : float = 960.0;  								// define here the original resolution
private var originalHeight : float = 640.0; 								// you used to create the GUI contents 
private var scale : Vector3;
private var svMat : Matrix4x4;

// Skins
@System.NonSerialized														// Comment this line out to see the debug status in the editor
var skin : GUISkin;															// Default English GUISkin
var localizedSkins : DUI_LocalizedSkins;									// Skins for different languages
	
	// Languages
	class DUI_LocalizedSkins {
		var english : String = "UI/DialogSkin - English";
		var chinese : String = "UI/DialogSkin - Chinese";
		var korean : String = "UI/DialogSkin - Korean";
		var japanese : String = "UI/DialogSkin - Japanese";
		var german : String = "UI/DialogSkin - German";
		var french : String = "UI/DialogSkin - French";
		var spanish : String = "UI/DialogSkin - Spanish";
		var italian : String = "UI/DialogSkin - Italian";
		var portuguese : String = "UI/DialogSkin - Portuguese";
		var russian : String = "UI/DialogSkin - Russian";		
	}
	
// References
static var isActive : boolean;												// Should we show the UI?
private var alpha : float;													// The opacity of the black bg

// Content Fade
@System.NonSerialized														// Comment this line out to see the debug status in the editor
var fade : float;															// The opacity of the content (Portrait, text, etc.)
	
// Screen Setup	
static var portrait : Texture2D;
static var actorName : String = "Actor's Name";
static var dialogText : String = "This is my dialog text.";					// What the ACTUAL digalog text is
static var currentDialogText : String;										// This is the "real time" dialogtext, ie to be used with typewriter effect

static var dialogStyle : DIALOGSTYLE;
static var customButton1 : String;
static var customButton2 : String;
static var multipleButtons : String[];
static var dataEntryToken : int = 0;										// Which token should we use for Data Entry
static var dataEntryFormat : DS_DATA_FORMAT = DS_DATA_FORMAT.Text;			// The format of the data (number or text)
static var dataEntryCharacterLimit : int = 25;								// The character limit of the text
static var dataEntryDefaultValue : String = "";								// The default value of the field
static var dataEntryString : String = "";									// Temporary string to hold the data entry
static var dataEntryAnchor : DS_DATA_ANCHOR = DS_DATA_ANCHOR.Bottom;		// How to position the Data Entry form

static var passwordMatchToToken : boolean = false;							// Password must match dataEntryToken.
static var passwordAnswer : String;											// The correct password for this screen.
static var passwordCaseSensitive : boolean = false;							// Should we enforce caps when comparing the password?
static var passwordMask : boolean = false;									// Hide Chars with ****

static var hideNextButton : boolean = false;	
static var noPortraitFadeIn : boolean = false;								// Don't allow any portrait transitions / fades while showing (fading in phase)
static var noPortraitFadeOut : boolean = false;								// Don't allow any portrait transitions / fades while showing (fading in phase)
static var screen : DialogScreen;
static var screenDuration : float;											// How long to display the screen before auto-skipping


// Options
var options : DialogUIOptions;
class DialogUIOptions{
	var fadeDuration : float = 0.75;										// How long to fade content	
	var usePortraitFades : boolean = true;									// Allow the portrait to fade in
	var useButtonFades : boolean = true;									// Allow the buttons to fade in
	var useTextFades : boolean = true;										// Allow the buttons to fade in
	var usePortraitTransitions : boolean = true;							// Allow the portrait to slide in
	var useButtonTransitions : boolean = true;								// Allow buttons to slide in
	var drawTitleTextShadows : boolean = true;								// Draws a shadow for the Title / Actor text
	var drawBodyTextShadows : boolean = false;								// Draws a shadow for the body text
	var hideBackgroundFromUI : boolean = false;								// Option to hide the background image from the UI
	var hideChoicePanelFromUI : boolean = false;							// Option to hide the multiple choice background panel from the UI
	var hideAllTextFromUI : boolean = false;								// Option to hide the text from the UI
	var hideAllTitleTextFromUI : boolean = false;							// Option to hide the actor names and title text from the UI
	var hideAllBodyTextFromUI : boolean = false;							// Option to hide the main body of text from the UI
	var hideAllSingleButtonsFromUI : boolean = false;						// Option to force hide ALL "Next" or custom single buttons in the UI. Overrides hideNextButton.
	var ignoreAllDialogDuration : boolean;									// Option to ignore the duration on certain dialogs. Requires the user to press a button to continue.
	var ResizeTextIfNoPortraitsAreSetup : boolean = true;					// Text is moved all the way to the left when we have no icon / portrait setup
	var useTypeWriterEffectForText : boolean = true;						// Text is written on screen like a typewriter
	var typeWriterEffectSpeed : float = 1;									// Time modifier for typeWriter Effect.
	var audioFilepathPrefix : String = "Audio/";							// Allows us to put it in the root of our audio files to make setting up dialogs faster / cleaner
}

// Force close any playing Dialog
@System.NonSerialized														// Comment this line out to see this in the editor
var forceClose : boolean = false;

// Debug
@System.NonSerialized														// Comment this line out to see the debug status in the editor
var debugStatus : DUISTATUS = DUISTATUS.ENDED;								// allows us to view the status in the editor


// Background Layers
enum DUI_LAYER_STATUS{FadeIn,FadeOut,Hide,Show}								// Fades in and out texture, hide and show are instant!
@HideInInspector
var displayBackgroundLayers : boolean;										// Optimization variable to run background layers
@HideInInspector
var bgLayers : DialogUIBackgroundLayers[];									// We always have 5 background layers
class DialogUIBackgroundLayers{
	
	var setLayer : boolean;													// If this is flagged in the DialogScreen version of bgLayers, we should set the changes here too!
	var tex : Texture2D;													// the actual texture of the background
	var scale : ScaleMode;													// The scale mode to use
	
	// Hidden from player
	var opacity : float;													// the opacity of the texture
	var display : DUI_LAYER_STATUS = DUI_LAYER_STATUS.Hide;					// We should be hiding this layer by default.
}

// Actor Layers
enum DUI_ACTOR_MOTION{Static,Left,Right,Top,Bottom }						// How the Actor moves IN to the frame.
enum DUI_ACTOR_ALLIGN{TopLeft,Top,TopRight,MidLeft,Middle,MidRight,BotLeft,Bottom,BotRight}			// How the Actor moves IN to the frame.
@HideInInspector
var displayActorLayers : boolean;											// Optimization variable to run Actor layers
@HideInInspector
var bgActors : DialogUIActorLayers[];										// We always have 5 Actor layers
class DialogUIActorLayers{
	
	var setLayer : boolean;													// If this is flagged in the DialogScreen version of bgLayers, we should set the changes here too!
	var tex : Texture2D;													// the actual texture of the background
	var scale : ScaleMode;													// The scale mode to use
	var size : float = 100;													// The size in percentage by ( 100 = original size, 50 = half size, 200 = double ) 
	var allignment : DUI_ACTOR_ALLIGN = DUI_ACTOR_ALLIGN.Middle;			// How to position the image on the screen (We use the built-in Unity TextAnchor for this), 
	var offset : Vector2 = Vector2.zero;									// Position Offset (After allignment has taken place)
	var motion : DUI_ACTOR_MOTION = DUI_ACTOR_MOTION.Static;				// Don't set tweening on by default.
	
	// Hidden from player
	var rect : Rect;														// Calculated Rect of the image (after size and allignment has been figured out)
	var motionRect : Rect;													// The above rect with "Tweening" Applied
	var opacity : float;													// the opacity of the texture
	var display : DUI_LAYER_STATUS = DUI_LAYER_STATUS.Hide;					// We should be hiding this layer by default.
}

// Audio Source
@HideInInspector
var musicSource : AudioSource;
@HideInInspector
var sfx1Source : AudioSource;
@HideInInspector
var sfx2Source : AudioSource;
@HideInInspector
var sfx3Source : AudioSource;

// AudioSetups ( class from DialogScreen )
@HideInInspector
var musicSetup : DSAudioSetup;												// AudioSetup
@HideInInspector
var sfx1Setup : DSAudioSetup;												// AudioSetup
@HideInInspector
var sfx2Setup : DSAudioSetup;												// AudioSetup
@HideInInspector
var sfx3Setup : DSAudioSetup;												// AudioSetup


// Tokens
var tokens : DUITokens[];
var useGlobalTokens : boolean = false;										// If this is on, it will cause the tokens to be shared across different levels / scenes.
@System.NonSerialized														// Comment this line out to see the debug status in the editor
var globalTokenStatus : DUI_GTS = DUI_GTS.None;
enum DUI_GTS{None,Initialized,Synchronized}									// None == not using Global Tokens, Initialized == first sync, Synchronized == 2nd+ frame
static var globalTokens : DUITokens[] = new DUITokens[0];

class DUITokens{
	var name : String;
	var value : String;
	var localizedValue : DUI_LocalizedValue;
}
	// Languages
	class DUI_LocalizedValue {
		var english : String;
		var chinese : String;
		var korean : String;
		var japanese : String;
		var german : String;
		var french : String;
		var spanish : String;
		var italian : String;
		var portuguese : String;
		var russian : String;		
	}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	PARSE FUNCTIONS
//	Workaround For TryParse On Flash
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class floatRef{	var value : float = 0;	}	// We have to use this as a workaround in JS too.
static function ParseTokenAsFloat( stringToParse : String, destination : floatRef ){
	try {
    	destination.value = float.Parse(stringToParse);
    	return true;
	}
	catch (err) {
	   return false;
	}
	// If something weird happens, just return false ..
	return false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	TOKEN API
//	Set / Get Tokens externally
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ====================
//	SET TOKEN
// ====================

static function SetToken( tokenToSet : String, tokenValue : String ){
	
	// Handle null as an argument
	if( tokenValue == null){ tokenValue = ""; }
	
	// Set the token
	if(DialogUI.dui != null){
	
		// If we have tokens setup	
		var tokenWasFound : boolean = false;
		if( DialogUI.dui.tokens.length > 0 ){
			for( var token : DUITokens in DialogUI.dui.tokens ){
				// If this token's name matches:
				if( token.name == tokenToSet ){
					token.value = tokenValue;
					tokenWasFound = true;
				}
			}
		}
		
		// Update Global Tokens
		DialogUI.UpdateGlobalTokens();
		
		// Token wasn't found
		if(!tokenWasFound){
			Debug.Log("DIALOG UI: (SetToken) The Token \"" + tokenToSet+"\" wasn't found and couldn't be set.");	
		}
	
	// If DialogUI.dui isn't ready yet, throw an error.	
	} else {
		Debug.Log("DIALOG UI: (SetToken) Couldn't set token because DialogUI.dui isn't ready yet. This usually happens when calling SetToken from the Awake() function, try using Start() instead!");	
	}
}

// ====================
//	SET TOKEN
// ====================

static function SetToken( tokenToSet : String, sentFloat : float ){
	
	// Convert the float into a string
	if( sentFloat == null){ sentFloat = 0; }
	var tokenValue : String = sentFloat.ToString();
	
	// Set the token
	if(DialogUI.dui != null){
	
		// If we have tokens setup	
		var tokenWasFound : boolean = false;
		if( DialogUI.dui.tokens.length > 0 ){
			for( var token : DUITokens in DialogUI.dui.tokens ){
				// If this token's name matches:
				if( token.name == tokenToSet ){
					token.value = tokenValue;
					tokenWasFound = true;
				}
			}
		}
		
		// Update Global Tokens
		DialogUI.UpdateGlobalTokens();
		
		// Token wasn't found
		if(!tokenWasFound){
			Debug.Log("DIALOG UI: (SetToken) The Token \"" + tokenToSet+"\" wasn't found and couldn't be set.");	
		}
	
	// If DialogUI.dui isn't ready yet, throw an error.	
	} else {
		Debug.Log("DIALOG UI: (SetToken) Couldn't set token because DialogUI.dui isn't ready yet. This usually happens when calling SetToken from the Awake() function, try using Start() instead!");	
	}
}

// ====================
//	GET TOKEN
// ====================

static function GetToken( tokenToGet : String ){
	
	// Set the token
	if(DialogUI.dui != null){
	
		// If we have tokens setup	
		var tokenWasFound : boolean = false;
		if( DialogUI.dui.tokens.length > 0 ){
			for( var token : DUITokens in DialogUI.dui.tokens ){
				// If this token's name matches:
				if( token.name == tokenToGet ){
					tokenWasFound = true;
					return token.value;
				}
			}
		}
		
		// Token wasn't found
		if(!tokenWasFound){
			Debug.Log("DIALOG UI: (GetToken) The Token \"" + tokenToGet+"\" wasn't found.");	
			return "";
		}
	
	// If DialogUI.dui isn't ready yet, throw an error.	
	} else {
		Debug.Log("DIALOG UI: (GetToken) Couldn't set token because DialogUI.dui isn't ready yet. This usually happens when calling SetToken from the Awake() function, try using Start() instead!");	
	}
	
	// Return "" by default if no tokens were found.
	return "";
}

// ====================
//	GET TOKEN AS FLOAT
// ====================

static function GetTokenAsFloat( tokenToGet : String ){
	
	// Set the token
	if(DialogUI.dui != null){
	
		// If we have tokens setup	
		var tokenWasFound : boolean = false;
		if( DialogUI.dui.tokens.length > 0 ){
			for( var token : DUITokens in DialogUI.dui.tokens ){
				// If this token's name matches:
				if( token.name == tokenToGet ){
					tokenWasFound = true;
					
					// Try and convert the string into a float, and then return it!
					//var theFloat : float = 0;
					//if ( float.TryParse(token.value, theFloat) ){
					//	return theFloat;
					var theFloat = floatRef(); // Flash workaround.
					if ( DialogUI.ParseTokenAsFloat(token.value, theFloat) ){
						return theFloat.value;	
						
					// If it couldn't be converted, show an error and return 0.	
					} else {
						Debug.Log("DIALOG UI: (GetTokenAsFloat) Couldn't convert Token \"" + tokenToGet+"\" into a float. Returned 0.");
						return 0.0;
					}
				}
			}
		}
		
		// Token wasn't found
		if(!tokenWasFound){
			Debug.Log("DIALOG UI: (GetTokenAsFloat) The Token \"" + tokenToGet+"\" wasn't found.");	
			return 0.0;
		}
	
	// If DialogUI.dui isn't ready yet, throw an error.	
	} else {
		Debug.Log("DIALOG UI: (GetTokenAsFloat) Couldn't set token because DialogUI.dui isn't ready yet. This usually happens when calling SetToken from the Awake() function, try using Start() instead!");	
	}
	
	
	// Return "" by default if no tokens were found.
	return 0.0;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	TOKEN ACTIONS
//	Sets up token actions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function TokenActions( actions : DSTokenActions[] ){

	if( tokens.length > 0 ){
		
		// Start the loop through the actions
		var counter : int = 0;
		for( var action : DSTokenActions in actions ){
			
			// Make sure the action is valid and that our token index is within range ..
			if( action != null && action.index <= tokens.length-1 ){
				
				// Cache the actual token we're going to modify
				var token : DUITokens = tokens[action.index];
				
				// Helper variables
				var valueAsFloat = floatRef(); // Flash workaround.
				var argumentAsFloat = floatRef(); // Flash workaround.
				var parseFailed : boolean = false;
				
				// SET TOKEN
				if( action.action == DSTokenActionType.Set ){
					
					token.value = action.argument;
					// Add localization code here.
					
				}
				
				// ADD TO TOKEN
				else if( action.action == DSTokenActionType.Add ){
					
					// Parse Original Value
					//if( float.TryParse(token.value, valueAsFloat)){		
					if ( DialogUI.ParseTokenAsFloat(token.value, valueAsFloat) ){
									  
					//	 Debug.Log(valueAsFloat);
					}else{
					   Debug.Log("Unable to parse '{0}'." + token.value); 
					   parseFailed = true; 
					}
					
					// Parse Argument
					//if( float.TryParse(action.argument, argumentAsFloat)){
					if ( DialogUI.ParseTokenAsFloat(action.argument, argumentAsFloat) ){					  
					//	 Debug.Log(argumentAsFloat);
					}else{
					   Debug.Log("Unable to parse '{0}'." + action.argument);
					   parseFailed = true;  
					}

					// Add the 2 new variables together if everything parsed ok ..
					if(!parseFailed){
						valueAsFloat.value += argumentAsFloat.value;
						token.value = valueAsFloat.value.ToString();
					}
				}
				
				// SUBTRACT FROM TOKEN
				else if( action.action == DSTokenActionType.Subtract ){
					
					// Parse Original Value
					//if( float.TryParse(token.value, valueAsFloat)){
					if ( DialogUI.ParseTokenAsFloat(token.value, valueAsFloat) ){
					//	 Debug.Log(valueAsFloat);
					}else{
					   Debug.Log("Unable to parse '{0}'." + token.value); 
					   parseFailed = true; 
					}
					
					// Parse Argument
					//if( float.TryParse(action.argument, argumentAsFloat)){	
					if ( DialogUI.ParseTokenAsFloat(action.argument, argumentAsFloat) ){						  
					  
					//	 Debug.Log(argumentAsFloat);
					}else{
					   Debug.Log("Unable to parse '{0}'." + action.argument);
					   parseFailed = true;  
					}

					// Add the 2 new variables together if everything parsed ok ..
					if(!parseFailed){
						valueAsFloat.value -= argumentAsFloat.value;
						token.value = valueAsFloat.value.ToString();
					}
				}
				
			}
			
		}
		
		// Update Global Tokens
		DialogUI.UpdateGlobalTokens();
	}
	
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	GET TOKEN STRING ARRAY
//	function to recieve a String[] with the token names
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function GetTokenStringArray(){
	
	// Setup temporary Array
	var tokenArray : String[];

	// javascript Array
	var arr : Array = new Array();
	arr.Clear();
	
	// Populate the array
	if(tokens.Length > 0 ){
		for(var token : DUITokens in tokens){
			arr.Add(token.name);
		}
	}
	// Convert the javascript array into the token array
	tokenArray = arr.ToBuiltin(String) as String[];
		
	// return the array
	return tokenArray;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	SETUP DIALOG TEXT EFFECTS
//	We use this to start the typewriter effect, and later on for tokens, etc.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SetupDialogTextEffects() {
	
	// Setup Tokens
	DialogUI.dialogText = ApplyTokens(DialogUI.dialogText);
	DialogUI.actorName = ApplyTokens(DialogUI.actorName);
		
	// If the dialogText isn't empty and we've enabled typewriter effect
	if( DialogUI.dialogText != "" && DialogUI.dui.options.useTypeWriterEffectForText ){
		DialogUI.currentDialogText = "";
		
		StopCoroutine("TypeWriterEffect");
		yield StartCoroutine( "TypeWriterEffect" );
			
	} else {
		DialogUI.currentDialogText = DialogUI.dialogText;
	}
		
}

// Creates a type writer effect when displaying the dialog text
function TypeWriterEffect(){

	// Wait until the screen has faded in enough before we start the typewriter effect ..
	while(fade < 0.25){		
		yield;
	}
	
	// Once the content has faded in enough, lets start the typewriter effect
	while( DialogUI.dialogText != "" && DialogUI.dialogText != DialogUI.currentDialogText ){
		
		DialogUI.currentDialogText = DialogUI.dialogText.Substring(0, DialogUI.currentDialogText.length+1);
		
		// Delay
		yield WaitForSeconds(Time.deltaTime / options.typeWriterEffectSpeed);
	}
}

// Replaces tokens with their real values
function ApplyTokens( source : String ){
	
	// Loop through the tokens
	if( source != "" && tokens.length > 0 ){
		for(var token : DUITokens in tokens){
			if(token!=null && token.name != "" && token.value != ""){
				
				// Helper variables
				var tokenAsFloat = floatRef();
				var updatedTokenValue : String;
				
				// This will help format numeric tokens better ( for example 004, will become 4 )
				//if( float.TryParse(token.value, tokenAsFloat)){	
				if ( DialogUI.ParseTokenAsFloat(token.value, tokenAsFloat) ){						  
	
					updatedTokenValue = tokenAsFloat.value.ToString();
				} else {
					updatedTokenValue = token.value;
				}
				
				// If the source string contains the token variable, then replace it with the token value..
				if( source.Contains("$"+token.name) ){
					source = source.Replace("$"+token.name, updatedTokenValue );
				}
				
			}
		}
	}
	
	
	// Return the source when we're done
	return source;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	UPDATE GLOBAL TOKENS
//	Whenever we do anything with tokens, we should update Global Tokens to keep it synced across different frames
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

static function UpdateGlobalTokens(){

	// if we're using Global tokens and we can access the DialogUI, lets update them!
	if( DialogUI.dui != null && DialogUI.dui.useGlobalTokens && DialogUI.dui.globalTokenStatus != DUI_GTS.None){
		// Debug.Log("LDC: Updated Global Tokens");
		DialogUI.globalTokens = DialogUI.dui.tokens;
	}
	
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	AWAKE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Awake () {
	
	// Make this component statically available
	DialogUI.dui = this;

	// GLOBAL TOKENS
	// Note: In the beginning of each frame, if the static tokens array is empty, we know to copy from the main one. 
	// On every scene after that it should show up as length > 0.
	if( useGlobalTokens ){
		
		// This is the first time we're setting up global tokens, lets copy it from the main one.
		if( DialogUI.dui.tokens.length > 0 && DialogUI.globalTokens.length == 0 ){	
			//Debug.Log("LDC: Initializing Global Tokens");
			globalTokenStatus = DUI_GTS.Initialized;
			DialogUI.globalTokens = DialogUI.dui.tokens;
		
		// This a new scene - lets copy the Global Tokens back to the main one
		} else if ( DialogUI.globalTokens != null && DialogUI.globalTokens.length == DialogUI.dui.tokens.length) {
		//	Debug.Log("LDC: Syncing Global Tokens");
			globalTokenStatus = DUI_GTS.Synchronized;
			DialogUI.dui.tokens = DialogUI.globalTokens;
		
		// Something has gone wrong and we can't sync the Global Tokens
		} else {
			globalTokenStatus = DUI_GTS.None;
			Debug.Log("LDC: (DialogUI) ERROR - Syncing Global Tokens Failed. Are there tokens setup in the DialogUI component?");
		}
		
	}
	
	// BG / ACTOR LAYERS
	// Make sure the graphics Layer arrays have 10 entries!
	bgLayers = new DialogUIBackgroundLayers[10];
	for(var bgLayer : DialogUIBackgroundLayers in bgLayers){bgLayer = new DialogUIBackgroundLayers(); }
	bgActors = new DialogUIActorLayers[10];
	for(var bgActor : DialogUIActorLayers in bgActors){bgActor = new DialogUIActorLayers(); }
	
	// CREATE AUDIO GAMEOBJECTS AND ATTACH
	// Music
	var music : GameObject = new GameObject();
	music.name = "Dialog UI - Music Channel";
	music.transform.parent = transform;
	musicSource = music.AddComponent(AudioSource);
	musicSource.loop = true;
	musicSource.playOnAwake = false;
	
	// SFX
	var sfx1 : GameObject = new GameObject();
	sfx1.name = "Dialog UI - SFX Channel 1";
	sfx1.transform.parent = transform;
	sfx1Source = sfx1.AddComponent(AudioSource);
	sfx1Source.loop = false;
	sfx1Source.playOnAwake = false;
	
	// SFX
	var sfx2 : GameObject = new GameObject();
	sfx2.name = "Dialog UI - SFX Channel 2";
	sfx2.transform.parent = transform;
	sfx2Source = sfx2.AddComponent(AudioSource);
	sfx2Source.loop = false;
	sfx2Source.playOnAwake = false;
	
	// SFX
	var sfx3 : GameObject = new GameObject();
	sfx3.name = "Dialog UI - SFX Channel 3";
	sfx3.transform.parent = transform;
	sfx3Source = sfx3.AddComponent(AudioSource);
	sfx3Source.loop = false;
	sfx3Source.playOnAwake = false;
	
	// Set Status to ended at start
	DialogUI.status = DUISTATUS.ENDED;
	
	// Create Origin Object (so we can create objects there using Dialog Screens)
	transform.position = Vector3.zero; transform.rotation = Quaternion.identity;
	var theOrigin : GameObject = new GameObject("Origin");
	if(theOrigin!=null){theOrigin.transform.parent = transform;}
	
	// ==================
	// OPTION FIXES
	// ==================
	
	// Transitions won't play properly if the fade duration is too quick .. so we can automatically turn them off here
	if( options.fadeDuration < 0.1 ){
		options.fadeDuration = 0.001;
		options.usePortraitFades = false;
		options.useButtonFades = false;
		options.useTextFades = false;
		options.usePortraitTransitions = false;
		options.useButtonTransitions = false;
	}
	
	// If we are ignoring dialog duration, we NEED to have single buttons in the UI. So we automatically turn them back on at start!
	if( options.ignoreAllDialogDuration ){
		options.hideAllSingleButtonsFromUI = false;
	}
	
	// Make sure the typewriter speed isn't too low
	if(options.typeWriterEffectSpeed < 0.1){
		options.typeWriterEffectSpeed = 0.1;
	}
	
	
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	START
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Start () {
	
	// Localize Tokens
	LocalizeTokens();
	
	// Load in the correct "localized" GUI Skins
	
	// ENGLISH
	if ( DialogLocalization.language == "English" ){
		skin = Resources.Load(localizedSkins.english) as GUISkin;
	}
	
	// CHINESE
	else if ( DialogLocalization.language == "Chinese" ){
		skin = Resources.Load(localizedSkins.chinese) as GUISkin;
	}
	
	// KOREAN
	else if ( DialogLocalization.language == "Korean" ){
		skin = Resources.Load(localizedSkins.korean) as GUISkin;
	}
	
	// JAPANESE
	else if ( DialogLocalization.language == "Japanese" ){
		skin = Resources.Load(localizedSkins.japanese) as GUISkin;
	}
	
	// GERMAN
	else if ( DialogLocalization.language == "German" ){
		skin = Resources.Load(localizedSkins.german) as GUISkin;
	}
	
	// FRENCH
	else if ( DialogLocalization.language == "French" ){
		skin = Resources.Load(localizedSkins.french) as GUISkin;
	}
	
	// SPANISH
	else if ( DialogLocalization.language == "Spanish" ){
		skin = Resources.Load(localizedSkins.spanish) as GUISkin;
	}
	
	// ITALIAN
	else if ( DialogLocalization.language == "Italian" ){
		skin = Resources.Load(localizedSkins.italian) as GUISkin;
	}
	
	// PORTUGUESE
	else if ( DialogLocalization.language == "Portuguese" ){
		skin = Resources.Load(localizedSkins.portuguese) as GUISkin;
	}
	
	// RUSSIAN
	else if ( DialogLocalization.language == "Russian" ){
		skin = Resources.Load(localizedSkins.russian) as GUISkin;
	}

	// FINAL ERROR CHECK
	// If there was a problem with the skin
	if ( skin == null ){
		// Problem loading dialog skin
		Debug.Log("LDC: (DialogUI) ERROR -> There was a problem loading localized skin for language: " + DialogLocalization.language);	
	}

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	LOCALIZE TOKENS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function LocalizeTokens(){
	
	if( !useGlobalTokens || globalTokenStatus != DUI_GTS.Synchronized ){
	
		// Loop through the tokens and localize them
		if(tokens.length > 0){
			for(var token : DUITokens in tokens ){
				if(token!=null && token.name!=""){
			
					// ENGLISH
					if ( DialogLocalization.language == "English" ){
						if(token.localizedValue.english !=""){ token.value = token.localizedValue.english; }
					}
					
					// CHINESE
					else if ( DialogLocalization.language == "Chinese" ){
						if(token.localizedValue.chinese !=""){ token.value = token.localizedValue.chinese; }
					}
					
					// KOREAN
					else if ( DialogLocalization.language == "Korean" ){
						if(token.localizedValue.korean !=""){ token.value = token.localizedValue.korean; }
					}
					
					// JAPANESE
					else if ( DialogLocalization.language == "Japanese" ){
						if(token.localizedValue.japanese !=""){ token.value = token.localizedValue.japanese; }
					}
					
					// GERMAN
					else if ( DialogLocalization.language == "German" ){
						if(token.localizedValue.german !=""){ token.value = token.localizedValue.german; }
					}
					
					// FRENCH
					else if ( DialogLocalization.language == "French" ){
						if(token.localizedValue.french !=""){ token.value = token.localizedValue.french; }
					}
					
					// SPANISH
					else if ( DialogLocalization.language == "Spanish" ){
						if(token.localizedValue.spanish !=""){ token.value = token.localizedValue.spanish; }
					}
					
					// ITALIAN
					else if ( DialogLocalization.language == "Italian" ){
						if(token.localizedValue.italian !=""){ token.value = token.localizedValue.italian; }
					}
					
					// PORTUGUESE
					else if ( DialogLocalization.language == "Portuguese" ){
						if(token.localizedValue.portuguese !=""){ token.value = token.localizedValue.portuguese; }
					}
					
					// RUSSIAN
					else if ( DialogLocalization.language == "Russian" ){
						if(token.localizedValue.russian !=""){ token.value = token.localizedValue.russian; }
					}
			
				}
			}
		}
		
		// Update Global Tokens
		DialogUI.UpdateGlobalTokens();
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	UPDATE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Update () {
	
	// If the force Close flag is on, make sure we stay in the Force Close mode
	if (forceClose){ DialogUI.status = DUISTATUS.FORCECLOSE; }
	
	// FORCE CLOSE
	// This overrides everything
	if ( DialogUI.status == DUISTATUS.FORCECLOSE || forceClose ){
	
		DialogUI.screen = null;
		DialogUI.screenDuration = 0;
		
		// First fade content
		if ( fade > 0 ){
			fade -= Time.deltaTime;
		
		// If fade out has already completed
		} else {
			
			// Now fade out the main background
			if( alpha > 0 ){
				alpha -= Time.deltaTime;
			
			// Now we have faded out content and the main background, reset DialogUI
			} else if ( alpha<=0 && fade <=0) {
			//	Debug.Log("Finished Force Close Routine!");
				DialogUI.isActive = false;
				DialogUI.status = DUISTATUS.ENDED;
				DialogUI.ended = true;
				DialogUI.screenDuration = 0;

				forceClose = false;
				screen = null;
				portrait = null;
				actorName = "";
				dialogText = "";
				currentDialogText = "";
				alpha = 0;
				fade = 0;
				
			}
			
		}
	
	// STANDARD ROUTINES
	// Otherwise, do the normal routines
	} else {
	
		// Fade in the Opacity of the BG
		if( isActive && alpha < 1 ){
			alpha += Time.deltaTime;
		} else if (!isActive && alpha > 0 && fade <= 0) {
			alpha -= Time.deltaTime;
		}
		
		// Has the UI completely faded out?
		if ( alpha <= 0 && fade <= 0 && status == DUISTATUS.ENDED ){
			DialogUI.ended = true;	
		} else {
			DialogUI.ended = false;	
		}
	
		// SHOW THE SCREEN
		if ( status == DUISTATUS.SHOW ) {
			
			if( alpha >= 1 && fade < 1 ){
				fade += Time.deltaTime/options.fadeDuration;
			}
			
			// If this is a standard screen with a duration, countdown!
			if (DialogUI.dialogStyle == DIALOGSTYLE.NextButton && DialogUI.screen != null && !options.ignoreAllDialogDuration ){
				if( screenDuration > 0 && alpha >= 1 && fade >= 1){
					screenDuration -= Time.deltaTime;	
				} else if( screenDuration <= 0 && alpha >= 1 && fade >= 1) {
					
					// Dont skip if we're forcing this screen to close
					if ( !forceClose ){
						screen.Skip();
					} 
				}
			}
		
		// FADE OUT THE SCREEN	
		} else if ( status == DUISTATUS.FADEOUT ) {
			if( fade > 0 ){
				fade -= Time.deltaTime/options.fadeDuration;
				
				// If we're using the typewriter effect, set the full text when skipping a dialog
				if(options.useTypeWriterEffectForText){
					currentDialogText = dialogText;	
				}
				
			} else {
				status = DUISTATUS.WAITFORSCREEN;	
			}
		}
		
		// FADE OUT CONTENT
		if (!isActive && fade > 0 ){
			fade -= Time.deltaTime/options.fadeDuration;
			
			// If we're using the typewriter effect, hide the text as soon as we are fading out!
			if(options.useTypeWriterEffectForText){
				dialogText = "";
				currentDialogText = "";	
			}
		}
	}
	
	// Show debug status
	if ( Application.isEditor){
		debugStatus = DialogUI.status;	
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	FIXED UPDATE
//	This function is usually more performance friendly than Update. So we do our array looping here!
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function FixedUpdate(){
	
	// BACKGROUND LAYERS
	// If we are displaying Background Layers, let's update them!
	if( displayBackgroundLayers && bgLayers.length > 0){
	
		// Loop through the background layers
		for( var bgLayer : DialogUIBackgroundLayers in bgLayers ){
			
			// FADE IN
			if(bgLayer.display == DUI_LAYER_STATUS.FadeIn ){
				
				// Fade in ..
				if( bgLayer.opacity < 1 ){
					bgLayer.opacity += Time.deltaTime / options.fadeDuration;
					
				// If we have reached 1, then automatically change its display mode to "Show"	
				} else {
					bgLayer.opacity = 1;
					bgLayer.display = DUI_LAYER_STATUS.Show;	
				}
			}
			
			// FADE OUT
			else if(bgLayer.display == DUI_LAYER_STATUS.FadeOut ){
				
				// Fade Out ..
				if( bgLayer.opacity > 0 ){
					bgLayer.opacity -= Time.deltaTime / options.fadeDuration;
					
				// If we have reached 0, then automatically change its display mode to "Hide"	
				} else {
					bgLayer.opacity = 0;
					bgLayer.display = DUI_LAYER_STATUS.Hide;	
					bgLayer.tex = null;	
				}
			}
			
		}
	}
	
	// ACTOR LAYERS
	// If we are displaying Background Layers, let's update them!
	if( displayActorLayers && bgActors.length > 0){
	
		// Loop through the background layers
		for( var bgActor : DialogUIActorLayers in bgActors ){
			
			// FADE IN
			if(bgActor.display == DUI_LAYER_STATUS.FadeIn ){
				
				// Fade in ..
				if( bgActor.opacity < 1 ){
					bgActor.opacity += Time.deltaTime / options.fadeDuration;
					
				// If we have reached 1, then automatically change its display mode to "Show"	
				} else {
					bgActor.opacity = 1;
					bgActor.display = DUI_LAYER_STATUS.Show;	
				}
			}
			
			// FADE OUT
			else if(bgActor.display == DUI_LAYER_STATUS.FadeOut ){
				
				// Fade Out ..
				if( bgActor.opacity > 0 ){
					bgActor.opacity -= Time.deltaTime / options.fadeDuration;
					
				// If we have reached 0, then automatically change its display mode to "Hide"	
				} else {
					bgActor.opacity = 0;
					bgActor.display = DUI_LAYER_STATUS.Hide;	
					bgActor.tex = null;	
				}
			}
			
			// TWEEN RECT
			// If we're using static motion (or the actor is now on "Show" mode), simply use the Standard Rect
			if( bgActor.motion == DUI_ACTOR_MOTION.Static || bgActor.display == DUI_LAYER_STATUS.Show){
				bgActor.motionRect = bgActor.rect;
				
			// Otherwise, calculate the motion	
			} else {
				bgActor.motionRect = CalculateMotionRect(bgActor.rect, bgActor.motion, bgActor.opacity );
			}
			
		}
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	DO BACKGROUND UI
//	Draws the Background UI
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// enum DUI_ACTOR_MOTION{Static,Left,Right,Top,Bottom }						// How the Actor moves IN to the frame.
function CalculateMotionRect( theRect : Rect, motion : DUI_ACTOR_MOTION, fade : float ){
		
	// STATIC
	if( motion == DUI_ACTOR_MOTION.Static){
		// Do nothing..
	}
	
	// From Left
	else if( motion == DUI_ACTOR_MOTION.Left){
				
		theRect.x = (theRect.x - 256) + (256 * fade );
	}
	
	// From Right
	else if( motion == DUI_ACTOR_MOTION.Right){
		
		theRect.x = (theRect.x + 256) - (256 * fade );
	}
	
	// From Top
	else if( motion == DUI_ACTOR_MOTION.Top){
		
		theRect.y = (theRect.y - 256) + (256 * fade );
	}
	
	// From Bottom
	else if( motion == DUI_ACTOR_MOTION.Bottom){
		
		theRect.y = (theRect.y + 256) - (256 * fade );
	}
	
	// Return the Motion Rect
	return theRect;
	
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	DO BACKGROUND UI
//	Draws the Background UI
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Helper Rects
private var fullScreenRect = Rect(0,0,960,640);

// Main Function
function DoBackgroundUI(){
	
	// If we are displaying Background Layers, let's update them!
	if( displayBackgroundLayers && bgLayers.length > 0){
		
		// Loop through the background layers
		for( var bgLayer : DialogUIBackgroundLayers in bgLayers ){
		
			// Set the opacity of this background layer
			if( bgLayer.display != DUI_LAYER_STATUS.Hide ){
				GUI.color.a = bgLayer.opacity;
			}
			
			// If there's a texture, display it
			if( bgLayer.tex != null ){
				GUI.DrawTexture(fullScreenRect, bgLayer.tex, bgLayer.scale, true );
			}
			
		}
	
	}
	
}

// Main Function
function DoActorUI(){
	
	// If we are displaying Background Layers, let's update them!
	if( displayActorLayers && bgActors.length > 0){
		
		// Loop through the background layers
		for( var bgActor : DialogUIActorLayers in bgActors ){
		
			// Set the opacity of this background layer
			if( bgActor.display != DUI_LAYER_STATUS.Hide ){
				GUI.color.a = bgActor.opacity;
			}
			
			// If there's a texture, display it
			if( bgActor.tex != null ){
				GUI.DrawTexture(bgActor.motionRect, bgActor.tex, bgActor.scale, true );
			}
			
		}
	
	}
	
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	STOP SCREEN NOW
//	Begins the Force Close Routine
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function StopScreenNow(){
	screenDuration = 0;	
	DialogUI.status = DUISTATUS.FORCECLOSE;
	forceClose = true;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	SETUP GUI MATRIX
//	This Scales up the UI so things originally designed for Retina Display on iPhone will fit on other resolutions.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SetupGUIMatrix(){
	
	// Dynamic Resolution UI
	scale.x = Screen.width/originalWidth; // calculate horizontal scale
    scale.y = Screen.height/originalHeight; // calculate vertical scale
    scale.z = 1;
    svMat = GUI.matrix; // save current matrix	
    
    // substitute matrix - only scale is altered from standard
    GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, scale);
}

function EndGUIMatrix(){
	
	// restore matrix before returning
    GUI.matrix = svMat; // restore matrix	
    
    // Always make sure the color is restored too
	GUI.color = Color.white;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	ON GUI
//	Setup the GUI Matrix and run the UI
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function OnGUI () {

	// Make sure the alpha is higher than 0 otherwise there's nothing to show.
	if ( alpha > 0 ){
		
		// Setup GUI Matrix
		SetupGUIMatrix();
	
			// Run the Background UI Code
			DoBackgroundUI();
			
			// Run the Actor UI Code
			DoActorUI();
	
			// Run the Main UI Code (Dialogs)
			DoDialogUI();

		// Setup GUI Matrix
		EndGUIMatrix();

	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	DO DIALOG UI
//	The Main Dialog UI
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Helper Rects
private var bgRect : Rect;
private var portraitRect : Rect;
private var actorRect : Rect;
private var actorRectShadow : Rect;
private var dialogRect : Rect;
private var dialogRectShadow : Rect;		
private var yesRect : Rect;
private var noRect : Rect;
private var skipRect : Rect;
private var verticalOffset : int; 


// Function		
function DoDialogUI(){
	
	// Use this GUI Skin
	if(skin){GUI.skin = skin;}
	
	// =================
	//	BACKGROUND
	// =================
	
	// Show Background If Not Hidden
	if( !options.hideBackgroundFromUI ){
		
		// Setup the fade in / out alpha
		GUI.color.a = alpha;
		
		// Draw the bottom Black Strip
		bgRect = Rect(0,640-159,960,160);
		GUI.Box(bgRect, "", skin.customStyles[2]);
	}
	
	// =================
	//	PORTRAIT
	// =================

	if( portrait != null && 
		DialogUI.dialogStyle != DIALOGSTYLE.MultipleButtons &&
		DialogUI.dialogStyle != DIALOGSTYLE.DataEntry &&
		DialogUI.dialogStyle != DIALOGSTYLE.Password
	){
		
		DoPortrait();
	}
	
	// =================
	//	TEXT
	// =================
	
	// Show Text If Not Hidden
	if( !options.hideAllTextFromUI ){
		
		// Don't show text on 3 buttons or more
		if ( 	DialogUI.dialogStyle != DIALOGSTYLE.MultipleButtons && 
				DialogUI.dialogStyle != DIALOGSTYLE.DataEntry && 
				DialogUI.dialogStyle != DIALOGSTYLE.Password ) {
			
			// Draw Actor String ( with shadow )
			actorRect = Rect(266,640-175,500,50);
			
			// Resize the text field to take up the whole screen if there is no portrait icon setup
			if( options.ResizeTextIfNoPortraitsAreSetup && DialogUI.portrait==null){
				actorRect.x = 20;
				actorRect.width += 246;
			}
			
			// Setup Shadow based on the Actor Rect
			actorRectShadow = actorRect;
			actorRectShadow.x += 1;
			actorRectShadow.y += 1;
			
			// Make sure we're not hiding all the title text
			if(!options.hideAllTitleTextFromUI){
				
				// Actor Shadow
				if( options.drawTitleTextShadows ){
				 
					// Setup the fade in / out alpha
					GUI.color = Color.black;
					if( options.useTextFades || alpha < 1){
						GUI.color.a = fade;
					} else {
						GUI.color.a = 1;	
					}
					
					// Draw Actor Name Shadow
					GUI.Label(actorRectShadow, actorName, skin.customStyles[1]);
				}
				
				// Setup the fade in / out alpha
				GUI.color = Color.white; 
				if( options.useTextFades || alpha < 1){
					GUI.color.a = fade;
				} else {
					GUI.color.a = 1;	
				}
				
				// Draw Actor Name
				GUI.Label(actorRect, actorName, skin.customStyles[1]);
			
			}
			
			// Dialog String
			// Lets make sure we're not hiding the body text
			if( !options.hideAllBodyTextFromUI ){
				
				dialogRect = Rect(266,640-125,500,125);
				
				// Resize the text field to take up the whole screen if there is no portrait icon setup
				if( options.ResizeTextIfNoPortraitsAreSetup && DialogUI.portrait==null){
					dialogRect.x = 20;
					dialogRect.width += 246;
				}
				
				// Setup Shadow based on the Dialog Rect
				dialogRectShadow = dialogRect;
				dialogRectShadow.x += 1;
				dialogRectShadow.y += 1;
				
				// Make text space smaller if we're showing 2 buttons
				if( DialogUI.dialogStyle == DIALOGSTYLE.YesOrNo || DialogUI.dialogStyle == DIALOGSTYLE.TwoButtons){
					dialogRect.width = 340;
					dialogRectShadow.width = 340;
				}
			
				// Body Text Shadow
				if( options.drawBodyTextShadows ){
					
					// Setup the fade in / out alpha
					GUI.color = Color.black;
					if( options.useTextFades || alpha < 1){
						GUI.color.a = fade;
					} else {
						GUI.color.a = 1;	
					}
					
					// Draw Body Name Shadow
					GUI.Label(dialogRectShadow, DialogUI.currentDialogText, skin.customStyles[0]);
				}
				
				// Setup the fade in / out alpha
				GUI.color = Color.white; 
				if( options.useTextFades || alpha < 1){
					GUI.color.a = fade;
				} else {
					GUI.color.a = 1;	
				}
				
				// Draw Dialog Text
				if( options.useTypeWriterEffectForText ){
			//		GUI.color.a = 1;
				}
				GUI.Label(dialogRect, DialogUI.currentDialogText, skin.customStyles[0]);
			
			}
		}
	}
	
	// =================
	//	BUTTONS
	// =================
	
	// Use Standard Next Button	
	if ( DialogUI.dialogStyle == DIALOGSTYLE.NextButton ) {
		
		// Show Next Button if we've not set it to be hidden
		if( !options.hideAllSingleButtonsFromUI && !DialogUI.hideNextButton ){
			
			// Setup the fade in / out alpha
			if( options.useButtonFades || alpha < 1){
				GUI.color.a = fade;
			} else {
				GUI.color.a = 1;	
			}
		
			// Setup Skip Rect
			if(options.useButtonTransitions){
				
				// If fade has already completed, set up the rect to absolute positions
				if( fade >= 1 ){
					skipRect = Rect( 800, 640-100, 140, 64 );
				} else {
					skipRect = Rect( 800+(255*(1-fade)), 640-100, 140, 64 );
				}
				
			} else {
				skipRect = Rect( 800, 640-100, 140, 64 );
			}
			
			// Draw Skip Button
			if( GUI.Button(skipRect, LocalizeNextButton() ) ){
				// Make sure the button has finished fading in first!
				if(fade>=1){
					if(screen){screen.Skip();}
				}
			}
		}
	}
	
	// Use Standard Yes / No Options
	else if( DialogUI.dialogStyle == DIALOGSTYLE.YesOrNo ){
		
		// Setup the fade in / out alpha
		if( options.useButtonFades || alpha < 1){
			GUI.color.a = fade;
		} else {
			GUI.color.a = 1;	
		}
		
		// Setup Yes Button
		if( options.useButtonTransitions ){
			 
			// If fade has already completed, set up the rect to absolute positions
			if( fade >= 1 ){
				yesRect = Rect( 800, 640-100, 140, 64 );
			} else {
				yesRect = Rect( 800+(255*(1-fade)), 640-100, 140, 64 );
			}
			 
		} else {
			yesRect = Rect( 800, 640-100, 140, 64 );
		}
		
		// Draw Yes Button
		if( GUI.Button(yesRect, LocalizeYesButton() ) ){
			// Make sure the button has finished fading in first!
			if(fade>=1){
				if(screen){screen.Yes();}
			}
		}
		
		// No Button
		if( options.useButtonTransitions ){
			
			// If fade has already completed, set up the rect to absolute positions
			if( fade >= 1 ){
				noRect = Rect( 640, 640-100, 140, 64 );
			} else {
				noRect = Rect( 640+(255*(1-fade)), 640-100, 140, 64 );
			}
			
		} else {
			noRect = Rect( 640, 640-100, 140, 64 );
		}
		
		// Draw No Button
		if( GUI.Button(noRect, LocalizeNoButton() ) ){
			// Make sure the button has finished fading in first!
			if(fade>=1){
				if(screen){screen.No();}
			}
		}
	} 
	
	// Use Custom Single Button	
	else if ( DialogUI.dialogStyle == DIALOGSTYLE.OneButton ) {
		
		// Show Next Button if we've not set it to be hidden
		if( !options.hideAllSingleButtonsFromUI && !DialogUI.hideNextButton ){
			
			// Setup the fade in / out alpha
			if( options.useButtonFades || alpha < 1){
				GUI.color.a = fade;
			} else {
				GUI.color.a = 1;	
			}
		
			// Setup Skip Rect
			if(options.useButtonTransitions){
				
				// If fade has already completed, set up the rect to absolute positions
				if( fade >= 1 ){
					skipRect = Rect( 800, 640-100, 140, 64 );
				} else {
					skipRect = Rect( 800+(255*(1-fade)), 640-100, 140, 64 );
				}
				
			} else {
				skipRect = Rect( 800, 640-100, 140, 64 );
			}
			
			// Draw Skip Button
			if( GUI.Button(skipRect, DialogUI.customButton1 ) ){
				// Make sure the button has finished fading in first!
				if(fade>=1){
					if(screen){screen.Skip();}
				}
			}
		}
	}
	
	// Custom 2 Buttons
	else if( DialogUI.dialogStyle == DIALOGSTYLE.TwoButtons ){
		
		// Setup the fade in / out alpha
		if( options.useButtonFades || alpha < 1){
			GUI.color.a = fade;
		} else {
			GUI.color.a = 1;	
		}
		
		// Setup Yes Button
		if( options.useButtonTransitions ){

			 // If fade has already completed, set up the rect to absolute positions
			if( fade >= 1 ){
				yesRect = Rect( 800, 640-100, 140, 64 );
			} else {
				yesRect = Rect( 800+(255*(1-fade)), 640-100, 140, 64 );
			}
			 
		} else {
			yesRect = Rect( 800, 640-100, 140, 64 );
		}
		
		// Draw Yes Button
		if( GUI.Button(yesRect, DialogUI.customButton1 ) ){
			// Make sure the button has finished fading in first!
			if(fade>=1){
				if(screen){screen.Yes();}
			}
		}
		
		// No Button
		if( options.useButtonTransitions ){
			
			// If fade has already completed, set up the rect to absolute positions
			if( fade >= 1 ){
				noRect = Rect( 640, 640-100, 140, 64 );
			} else {
				noRect = Rect( 640+(255*(1-fade)), 640-100, 140, 64 );
			}
			
		} else {
			noRect = Rect( 640, 640-100, 140, 64 );
		}
		
		// Draw No Button
		if( GUI.Button(noRect, DialogUI.customButton2 ) ){
			// Make sure the button has finished fading in first!
			if(fade>=1){
				if(screen){screen.No();}
			}
		}
	}
	
	// Use Multiple Buttons
	else if ( DialogUI.dialogStyle == DIALOGSTYLE.MultipleButtons ) {
		
		// Calculate the Offset for the button Panel
		var panelOffset : int = (DialogUI.multipleButtons.length) * (48+20);
		
		//	BACKGROUND
		
		// Show Background If Not Hidden
		if( !options.hideChoicePanelFromUI ){
			
			// Setup the fade in / out alpha
			GUI.color.a = fade;
			
			// Draw the bottom Black Strip
			bgRect = Rect(256,640-(82+panelOffset),690,(62+panelOffset)  );
			if(actorName=="" || options.hideAllTextFromUI  || options.hideAllTitleTextFromUI ){
				bgRect.height = panelOffset + 20;
				bgRect.y += 40;
			}
			
			// If we dont have a portrait setup, use the whole width of the screen
			if( portrait == null ){
				bgRect.x -= 246;
				bgRect.width += 246;
			}
			
			// Draw the box
			GUI.Box(bgRect, "", skin.customStyles[3]);
		}
		
		// PORTRAIT
		
		// Draw the portrait
		DoPortrait();
		
		// TITLE
		
		// Make sure we're not hiding all the title text
		if(!options.hideAllTitleTextFromUI){
				
			// Draw Actor String ( with shadow )
			actorRect = Rect(276,640-(72+panelOffset),650, 50);
			
			// If we dont have a portrait setup, use the whole width of the screen
			if( portrait == null ){
				actorRect.x -= 246;
				actorRect.width += 246;
			}
			
			// Setup the Shadow Rect
			actorRectShadow = actorRect;
			actorRectShadow.x += 1;
			actorRectShadow.y += 1;
			
			// Actor Shadow
			if( options.drawTitleTextShadows && !options.hideAllTextFromUI ){
			 
				// Setup the fade in / out alpha
				GUI.color = Color.black;
				if( options.useTextFades || alpha < 1){
					GUI.color.a = fade;
				} else {
					GUI.color.a = 1;	
				}
				
				// Draw Actor Name Shadow
				GUI.Label(actorRectShadow, actorName, skin.customStyles[4]);
			}
			
			// Setup the fade in / out alpha
			GUI.color = Color.white; 
			if( options.useTextFades || alpha < 1){
				GUI.color.a = fade;
			} else {
				GUI.color.a = 1;	
			}
			
			// Draw Actor Name
			if ( !options.hideAllTextFromUI ){
				GUI.Label(actorRect, actorName, skin.customStyles[4]);
			}
		
		}
		
		//	BUTTONS
		
		// Loop through the multiple options
		if(DialogUI.multipleButtons.length > 0 ){
			var moCounter : int = 0;
			for( var mButtonChoice : String in DialogUI.multipleButtons ){
				if(mButtonChoice){
					
					// Setup the fade in / out alpha
					if( options.useButtonFades || alpha < 1){
						GUI.color.a = fade;
					} else {
						GUI.color.a = 1;	
					}
					
					verticalOffset = moCounter * (48+20);
					
					// Setup Skip Rect
					skipRect = Rect( 276, (640 -(22+panelOffset) )+verticalOffset, 650, 48 );
					
					// If we dont have a portrait setup, use the whole width of the screen
					if( portrait == null ){
						skipRect.x -= 246;
						skipRect.width += 246;
					}
				
				//Decision Time
					
					// Draw Skip Button
					if( GUI.Button(skipRect, mButtonChoice ) ){
						// Make sure the button has finished fading in first!
						if(fade>=1){
							if(screen){
								screen.MultipleChoiceNext(moCounter);
							}
						}
					}
					
					// Increment the 3 button spacer
					moCounter++;
				}
			}
		}
	}
	

	// USE DATA ENTRY
	else if ( DialogUI.dialogStyle == DIALOGSTYLE.DataEntry ) {
		
		// Setup the fade in / out alpha
		GUI.color = Color.white; 
		if( options.useTextFades || alpha < 1){
			GUI.color.a = fade;
		} else {
			GUI.color.a = 1;	
		}
		
		// dataEntryAnchor
		
		// Create the background rect (border rect)	
		var dataEntryBorderRect : Rect = Rect((960/2)-(800/2),50,800,120);
		
		// Add the ANCHOR offsets here
		if( DialogUI.dataEntryAnchor == DS_DATA_ANCHOR.Middle ){
			dataEntryBorderRect.y = (640/2) - (dataEntryBorderRect.height/2);
		} else if( DialogUI.dataEntryAnchor == DS_DATA_ANCHOR.Bottom ){
			dataEntryBorderRect.y = 640 - (dataEntryBorderRect.height + 50);
		}
		
		// Title
		var dataEntryTitleRect : Rect = dataEntryBorderRect;
		dataEntryTitleRect.y += 10;
		
		// Draw the box
		GUI.Box(dataEntryBorderRect, "", skin.customStyles[3]);
		GUI.Box(dataEntryTitleRect, DialogUI.actorName, skin.customStyles[4]);
		
		// Text field Rect
		var textFieldRect : Rect = dataEntryBorderRect;
		textFieldRect.width -= 20;
		textFieldRect.x += 10;
		textFieldRect.y += 60;
		textFieldRect.width -= (128+10);
		textFieldRect.height = 48;
		
		// Data Entry Button
		var dataEntryButton : Rect = textFieldRect;
		dataEntryButton.width = 128;
		dataEntryButton.x += (textFieldRect.width+10);
		
		// If the Data Entry String is valid ..
		if(DialogUI.dataEntryString!=null){ 
			
			// Show the Data Entry Text Field
			DialogUI.dataEntryString = GUI.TextField (textFieldRect, DialogUI.dataEntryString, DialogUI.dataEntryCharacterLimit, skin.customStyles[5]); 
			
			// Remove all line breaks
			DialogUI.dataEntryString = DialogUI.dataEntryString.Replace("\n","");
			
			// If we are using the number format, and this isn't one, reset to the default value!
			var outputFloat = floatRef();	// Needed for the TryParse function!
		//	if( DialogUI.dataEntryFormat == DS_DATA_FORMAT.Number && !float.TryParse(DialogUI.dataEntryString, outputFloat) ){
			if ( DialogUI.dataEntryFormat == DS_DATA_FORMAT.Number && !DialogUI.ParseTokenAsFloat(DialogUI.dataEntryString, outputFloat) ){	
					
				if(DialogUI.dataEntryDefaultValue != ""){
					DialogUI.dataEntryString = DialogUI.dataEntryDefaultValue;
				} else {
					DialogUI.dataEntryString = "0";
				}
			}
			
			// Enter Button
			if( GUI.Button(dataEntryButton, DialogUI.customButton1) ){
				
				// Apply string to the token first
				if( tokens.length > 0 && DialogUI.dataEntryToken < tokens.length){
					tokens[DialogUI.dataEntryToken].value = DialogUI.dataEntryString;
				} else {
					Debug.Log("LDC: (DialogUI) Couldn't set Token (with ID: "+DialogUI.dataEntryToken+" ) from Data Entry screen because the token could not be found.");	
				}
				
				// Make sure the button has finished fading in first!
				if(fade>=1 && screen){
					screen.Skip();
				}
			}
		}
	}
	
		
	// USE PASSWORD
	else if ( DialogUI.dialogStyle == DIALOGSTYLE.Password ) {
		
		// Setup the fade in / out alpha
		GUI.color = Color.white; 
		if( options.useTextFades || alpha < 1){
			GUI.color.a = fade;
		} else {
			GUI.color.a = 1;	
		}
		
		// dataEntryAnchor
		
		// Create the background rect (border rect)	
		var passwordBorderRect : Rect = Rect((960/2)-(800/2),50,800,120);
		
		// Add the ANCHOR offsets here
		if( DialogUI.dataEntryAnchor == DS_DATA_ANCHOR.Middle ){
			passwordBorderRect.y = (640/2) - (passwordBorderRect.height/2);
		} else if( DialogUI.dataEntryAnchor == DS_DATA_ANCHOR.Bottom ){
			passwordBorderRect.y = 640 - (passwordBorderRect.height + 50);
		}
		
		// Title
		var passwordTitleRect : Rect = passwordBorderRect;
		passwordTitleRect.y += 10;
		
		// Draw the box
		GUI.Box(passwordBorderRect, "", skin.customStyles[3]);
		GUI.Box(passwordTitleRect, DialogUI.actorName, skin.customStyles[4]);
		
		// Text field Rect
		var passwordTextFieldRect : Rect = passwordBorderRect;
		passwordTextFieldRect.width -= 20;
		passwordTextFieldRect.x += 10;
		passwordTextFieldRect.y += 60;
		passwordTextFieldRect.width -= (128+10);
		passwordTextFieldRect.height = 48;
		
		// Data Entry Button
		var passwordButton : Rect = passwordTextFieldRect;
		passwordButton.width = 128;
		passwordButton.x += (passwordTextFieldRect.width+10);
		
		// If the Data Entry String is valid ..
		if(DialogUI.dataEntryString!=null){ 
			
			// Show the Data Entry Text Field
			//DialogUI.dataEntryString = GUI.TextField (passwordTextFieldRect, DialogUI.dataEntryString, 255, skin.customStyles[5]); 
			DialogUI.dataEntryString = GUI.PasswordField (passwordTextFieldRect, DialogUI.dataEntryString, "*"[0], 255, skin.customStyles[5] );
			
			
			// Remove all line breaks
			DialogUI.dataEntryString = DialogUI.dataEntryString.Replace("\n","");
			
			// Enter Button
			if( GUI.Button(passwordButton, DialogUI.customButton1) ){
				
				// Make sure the button has finished fading in first!
				if(fade>=1 && screen){
				
				
					// If we are matching a token and the token is NOT ""
					if( DialogUI.passwordMatchToToken && 
						tokens.length > 0 && 
						DialogUI.dataEntryToken < tokens.length
					){
					
						// See if the token matches
						if( tokens[DialogUI.dataEntryToken].value == DialogUI.dataEntryString ||
							!DialogUI.passwordCaseSensitive && tokens[DialogUI.dataEntryToken].value.ToLower() == DialogUI.dataEntryString.ToLower()
						){
							Debug.Log("LDC: (DialogUI) The Token Matches - Password Match Successful");
							screen.Yes();
							
						} else {
						
							Debug.Log("LDC: (DialogUI) The Token does NOT match - Password Match Failed");
							screen.No();
						}
					
					// If we are matching a string
					} else if( !DialogUI.passwordMatchToToken ){
					
						// See if the String matches
						if( DialogUI.dataEntryString == DialogUI.passwordAnswer ||
							!DialogUI.passwordCaseSensitive && DialogUI.dataEntryString.ToLower() == DialogUI.passwordAnswer.ToLower()
						){
							Debug.Log("LDC: (DialogUI) The String Matches - Password Match Successful");
							screen.Yes();
							
						} else {
						
							Debug.Log("LDC: (DialogUI) The String does NOT match - Password Match Failed");
							screen.No();
						}
					
						
					
					// If something went wrong
					} else {
						Debug.Log("LDC: (DialogUI) Password Screen Error - This token is probably not setup correctly. Will default as a password failure.");
						screen.No();
					}
				
				
				//	screen.Skip();
				}
			}
		}
	}	
	
	
	
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	DO PORTRAIT
//	Draws the Portrait in OnGUI
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function DoPortrait(){

	// We are not allowing any FADE INs on this screen
	if( DialogUI.noPortraitFadeIn && status == DUISTATUS.SHOW ) {
	
		// Set color to full opacity
		GUI.color.a = 1;
		
		// Setup the rect
		portraitRect = Rect(0,640-255,256,256);
		
		// Draw Portrait
		if( portrait != null ){
			GUI.DrawTexture(portraitRect, portrait, ScaleMode.ScaleToFit, true );
		}
		
	// We are not allowing any FADE OUTs on this screen
	} else if( DialogUI.noPortraitFadeOut && (status == DUISTATUS.FADEOUT || status == DUISTATUS.WAITFORSCREEN) ) {
	
		// Set color to full opacity
		GUI.color.a = 1;
		
		// Setup the rect
		portraitRect = Rect(0,640-255,256,256);
		
		// Draw Portrait
		if( portrait != null ){
			GUI.DrawTexture(portraitRect, portrait, ScaleMode.ScaleToFit, true );
		}
	
	// Otherwise ..
	} else {

		// Setup the fade in / out alpha
		if( options.usePortraitFades || alpha < 1 ){
			GUI.color.a = fade;
		} else {
			GUI.color.a = 1;	
		}
	
		// Setup the rect
		if( options.usePortraitTransitions ){
			
			if( fade >= 1){
				portraitRect = Rect(0-(255*(0) )  ,640-255,256,256);
			} else {
				portraitRect = Rect(0-(255*(1-fade))  ,640-255,256,256);
			}
			
		} else {
			portraitRect = Rect(0,640-255,256,256);
		}
		
		// Draw Portrait
		if( portrait != null ){
			GUI.DrawTexture(portraitRect, portrait, ScaleMode.ScaleToFit, true );
		}
	}	
	
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	LOCALIZE BUTTONS
//	Converts Yes, No and Skip between all supported languages
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function LocalizeYesButton(){

	// ENGLISH
	if ( DialogLocalization.language == "English" ){ return "Yes"; }
	
	// CHINESE
	else if ( DialogLocalization.language == "Chinese" ){ return "是"; }
	
	// KOREAN
	else if ( DialogLocalization.language == "Korean" ){ return "예"; }
	
	// JAPANESE
	else if ( DialogLocalization.language == "Japanese" ){ return "はい"; }
	
	// GERMAN
	else if ( DialogLocalization.language == "German" ){ return "Ja"; }
	
	// FRENCH
	else if ( DialogLocalization.language == "French" ){ return "Oui"; }
	
	// SPANISH
	else if ( DialogLocalization.language == "Spanish" ){ return "Sí"; }
	
	// ITALIAN
	else if ( DialogLocalization.language == "Italian" ){ return "Sì"; }
	
	// PORTUGUESE
	else if ( DialogLocalization.language == "Portuguese" ){ return "Sim"; }
	
	// RUSSIAN
	else if ( DialogLocalization.language == "Russian" ){ return "да"; }
	
	// DEFAULT ENGLISH IF ANYTHING GOES WRONG
	else {
		return "Yes";
	}
}

function LocalizeNoButton(){

	// ENGLISH
	if ( DialogLocalization.language == "English" ){ return "No"; }
	
	// CHINESE
	else if ( DialogLocalization.language == "Chinese" ){ return "没有"; }
	
	// KOREAN
	else if ( DialogLocalization.language == "Korean" ){ return "아니"; }
	
	// JAPANESE
	else if ( DialogLocalization.language == "Japanese" ){ return "ノー"; }
	
	// GERMAN
	else if ( DialogLocalization.language == "German" ){ return "Nicht"; }
	
	// FRENCH
	else if ( DialogLocalization.language == "French" ){ return "Aucun"; }
	
	// SPANISH
	else if ( DialogLocalization.language == "Spanish" ){ return "No"; }
	
	// ITALIAN
	else if ( DialogLocalization.language == "Italian" ){ return "No"; }
	
	// PORTUGUESE
	else if ( DialogLocalization.language == "Portuguese" ){ return "Não"; }
	
	// RUSSIAN
	else if ( DialogLocalization.language == "Russian" ){ return "нет"; }

	// DEFAULT ENGLISH IF ANYTHING GOES WRONG
	else {
		return "No";
	}
}

function LocalizeNextButton(){

	// ENGLISH
	if ( DialogLocalization.language == "English" ){ return "Next"; }
	
	// CHINESE
	else if ( DialogLocalization.language == "Chinese" ){ return "下"; }
	
	// KOREAN
	else if ( DialogLocalization.language == "Korean" ){ return "다음"; }
	
	// JAPANESE
	else if ( DialogLocalization.language == "Japanese" ){ return "次の"; }
	
	// GERMAN
	else if ( DialogLocalization.language == "German" ){ return "NÃ¤chste"; }
	
	// FRENCH
	else if ( DialogLocalization.language == "French" ){ return "Next"; }
	
	// SPANISH
	else if ( DialogLocalization.language == "Spanish" ){ return "Próximo"; }
	
	// ITALIAN
	else if ( DialogLocalization.language == "Italian" ){ return "Seguente"; }
	
	// PORTUGUESE
	else if ( DialogLocalization.language == "Portuguese" ){ return "Próximo"; }
	
	// RUSSIAN
	else if ( DialogLocalization.language == "Russian" ){ return "следующий"; }

	// DEFAULT ENGLISH IF ANYTHING GOES WRONG
	else {
		return "Next >>";
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	PLAY AUDIO
//	All Speech should be loaded from Resources/Audio/Speech/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function PlayAudio( filePathToLoad : String, pitch : float ){

	//Debug.Log("Playing: "+ options.audioFilepathPrefix+filePathToLoad);

	// A Brief delay gives the UI a chance to fade in first!
	yield WaitForSeconds(DialogUI.dui.options.fadeDuration); 

	// Make sure we can access this component locally and that the Audio is available.
	if( DialogUI.dui != null && DialogUI.dui.GetComponent.<AudioSource>() != null ){
		
		// Load the Audio file into a temporary variable
		var theAudio : AudioClip = Resources.Load(options.audioFilepathPrefix+filePathToLoad) as AudioClip;
		
		// If theAudio is valid, let's set the pitch and go ahead and play it!
		if( theAudio != null ){
			DialogUI.dui.GetComponent.<AudioSource>().pitch = pitch;
			DialogUI.dui.GetComponent.<AudioSource>().clip = theAudio;
			DialogUI.dui.GetComponent.<AudioSource>().Play();
		}
	}
	
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	SETUP AUDIO
//	Notes:	id 0 = music, id 1 == sfx1, id 2 == sfx2, id 3 = sfx3 ..
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SetupAudio( id : int, setup : DSAudioSetup ){
	
	// MUSIC
	if( id == 0 ){
		musicSetup = setup;
		musicSetup = SetupAudioHelper(musicSetup);
		
		// Start the Fade Routines if we need it
		if( musicSetup.action == DSAudioAction.FadeInAndPlay ){
			StopCoroutine("AudioFadeIn");
			yield StartCoroutine( AudioFadeIn( musicSetup ));
		
		} else if( musicSetup.action == DSAudioAction.FadeOut ){
			StopCoroutine("AudioFadeOut");
			yield StartCoroutine( AudioFadeOut( musicSetup ));
		}
	
	// SFX 1
	} else if ( id == 1 ){
		sfx1Setup = setup;
		sfx1Setup = SetupAudioHelper(sfx1Setup);
		
		// Start the Fade Routines if we need it
		if( sfx1Setup.action == DSAudioAction.FadeInAndPlay ){
			StopCoroutine("AudioFadeIn");
			yield StartCoroutine( AudioFadeIn( sfx1Setup ));
		
		} else if( sfx1Setup.action == DSAudioAction.FadeOut ){
			StopCoroutine("AudioFadeOut");
			yield StartCoroutine( AudioFadeOut( sfx1Setup ));
		}
		
	// SFX 2
	} else if ( id == 2 ){
		sfx2Setup = setup;
		sfx2Setup = SetupAudioHelper(sfx2Setup);
		
		// Start the Fade Routines if we need it
		if( sfx2Setup.action == DSAudioAction.FadeInAndPlay ){
			StopCoroutine("AudioFadeIn");
			yield StartCoroutine( AudioFadeIn( sfx2Setup ));
		
		} else if( sfx2Setup.action == DSAudioAction.FadeOut ){
			StopCoroutine("AudioFadeOut");
			yield StartCoroutine( AudioFadeOut( sfx2Setup ));
		}
		
	// SFX 3
	} else if ( id == 3 ){
		sfx3Setup = setup;
		sfx3Setup = SetupAudioHelper(sfx3Setup);
		
		// Start the Fade Routines if we need it
		if( sfx3Setup.action == DSAudioAction.FadeInAndPlay ){
			StopCoroutine("AudioFadeIn");
			yield StartCoroutine( AudioFadeIn( sfx3Setup ));
		
		} else if( sfx3Setup.action == DSAudioAction.FadeOut ){
			StopCoroutine("AudioFadeOut");
			yield StartCoroutine( AudioFadeOut( sfx3Setup ));
		}
		
	}
	
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	SETUP AUDIO HELPER
//	Configures the new DSAudioSetup sent from DialogScreen
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SetupAudioHelper( setup : DSAudioSetup ){
	
	// Should We Stop?
	if( setup.action == DSAudioAction.Stop ){
		setup.source.Stop();
		setup.source.clip == null;
		setup.action = DSAudioAction.None;
	}
	
	// Should We Play?
	else if( setup.action == DSAudioAction.Play || setup.action == DSAudioAction.FadeInAndPlay ){
		
		// LOAD FROM PATH
		// Check if we should load in the AudioClip dynamically
		if( setup.useAudioPath && setup.playFromPath != null ){
			
			// Load the Audio file into a temporary variable
			setup.clip = Resources.Load(options.audioFilepathPrefix+setup.playFromPath) as AudioClip;
			
			// If the Audio clip wasn't valid, Change to "Stop" mode
			if( setup.clip == null ){
				
				Debug.Log("DIALOG UI: Couldn't Play Audio. No file was located at \""+options.audioFilepathPrefix+setup.playFromPath+"\"" );
				setup.action = DSAudioAction.None;
				setup.source.Stop();
				setup.clip == null;
			
			}
		
		// NO CLIP WAS SENT	
		// No AudioClip was passed - Change to "Stop" mode
		} else if ( !setup.useAudioPath && setup.clip == null ){
			
			Debug.Log("DIALOG UI: Couldn't play Audio. No AudioClip was set up." );
			setup.action = DSAudioAction.None;
			setup.source.Stop();
			setup.clip == null;
		
		}
		
		// If we have an audio clip setup, looks like we're ok!
		if(setup.clip != null){
		
			// We should fade in this audio and play it
			if(setup.action == DSAudioAction.FadeInAndPlay ){
				setup.currentVolume = 0.001;
				setup.source.volume = 0.001;
				setup.source.clip = setup.clip;
				setup.source.pitch = setup.pitch;
				setup.source.loop = setup.loop;
				setup.source.Play();
			}
			
			// We Play the Audio now
			else if(setup.action == DSAudioAction.Play ){
				setup.currentVolume = setup.volume;
				setup.source.clip = setup.clip;
				setup.source.volume = setup.volume;
				setup.source.pitch = setup.pitch;
				setup.source.loop = setup.loop;
				setup.source.Play();
			}
		}
	}
	
	// Return the setup
	return setup;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	AUDIO FADE IN
//	Fades Audio In
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function AudioFadeIn( setup : DSAudioSetup ){
	
	// Wait one frame before we do anything
	yield;
	
	// Make sure this Audio Setup is valid
	if(setup != null){

		// FADE IN
		// If we're fading
		while( setup != null && setup.action == DSAudioAction.FadeInAndPlay && setup.source.clip != null && setup.source.volume < setup.volume ) {
    	
    		// do fade in
    		setup.source.volume += Time.deltaTime / setup.fadeDuration;
    		
    		// Set Action to "None" when done
			if( setup.action == DSAudioAction.FadeInAndPlay && setup.source.volume >= setup.volume  ){
				setup.action = DSAudioAction.None;
			}
    		
    		// wait for one frame
    		yield; 
    
		}
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	AUDIO FADE OUT
//	Fades Audio Out
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function AudioFadeOut( setup : DSAudioSetup ){
	
	// Wait one frame before we do anything
	yield;
	
	// Make sure this Audio Setup is valid
	if(setup != null){
		
		// FADE OUT
		// If we're fading
		while( setup != null && setup.action == DSAudioAction.FadeOut && setup.source.clip != null && setup.source.volume > 0.1 ) {
    		
    		// do fade out
    		setup.source.volume -= Time.deltaTime / setup.fadeDuration;
    		
    		// Stop
			if( setup.action == DSAudioAction.FadeOut && setup.source.volume <= 0.1  ){
				setup.source.Stop();
				setup.source.volume = 0.001;
				setup.action = DSAudioAction.None;
				setup.clip = null;
			}
			
			// Wait for one frame
    		yield; 
    
		}
	}
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	API
//	Functions for 3rd party tools
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Instantiates A Dialog and overrides any existing dialogs
static function API_CreateDialogNow( go : GameObject ){
	if(Application.isPlaying){ // Make sure the application is running to avoid issues.
		if(go!=null){ 
			Instantiate(go); 
		} else { 
			Debug.Log("DialogUI API (API_CreateDialogNow): No GameObject was sent to be created!"); 
		}
	}
}

// Instantiates A Dialog when the current dialog has ended
static function API_CreateDialog( go : GameObject ){
	if(Application.isPlaying){ // Make sure the application is running to avoid issues.
		if( go!=null && DialogUI.dui != null ){ 
			DialogUI.dui.StopCoroutine("API_CreateDialogCoroutine"); // Stop any previous co-routine for instantiation ..	
			DialogUI.dui.StopCoroutine("API_PlayDialogCoroutine"); // Stop any previous co-routine for triggers..		
			DialogUI.dui.StartCoroutine("API_CreateDialogCoroutine", go); 
		} else {
			Debug.Log("DialogUI API (API_CreateDialog): No GameObject was sent to be created!"); 
		}
	}
}
	// Wait for DialogUI to finish its current dialog, and then start the new one.
	function API_CreateDialogCoroutine( go : GameObject){
		while( !DialogUI.ended ){ yield; }	// Wait for DialogUI to become available ..
		if(DialogUI.ended && go!=null){ Instantiate(go); } // And then launch the Dialog!
	}

// Plays A Dialog now and overrides any existing dialogs
static function API_PlayDialogNow( dc : DialogController ){
	if(Application.isPlaying){ // Make sure the application is running to avoid issues.
		if(dc!=null){ dc.Play(); }
	}
}

// Plays A Dialog now and overrides any existing dialogs
static function API_PlayDialog( dc : DialogController ){
	if(Application.isPlaying){ // Make sure the application is running to avoid issues.
		if(dc!=null){  
			DialogUI.dui.StopCoroutine("API_CreateDialogCoroutine"); // Stop any previous co-routine for instantiation ..	
			DialogUI.dui.StopCoroutine("API_PlayDialogCoroutine"); // Stop any previous co-routine for triggers..	
			DialogUI.dui.StartCoroutine("API_PlayDialogCoroutine", dc ); 
		}
	}
}
	// Wait for DialogUI to finish its current dialog, and then trigger a new one!
	function API_PlayDialogCoroutine( dc : DialogController ){
		while( !DialogUI.ended ){ yield; }	// Wait for DialogUI to become available ..
		if(DialogUI.ended && dc!=null){ dc.Play(); } // And then play the Dialog!
	}

// Set Token - forwards to the main function
static function API_SetToken( tokenToSet : String, tokenValue : String ){
	if(Application.isPlaying){ // Make sure the application is running to avoid issues.
		DialogUI.SetToken(tokenToSet, tokenValue);
	}
}

// Set Token - forwards to the main function
static function API_SetToken( tokenToSet : String, sentFloat : float ){
	if(Application.isPlaying){ // Make sure the application is running to avoid issues.
		DialogUI.SetToken(tokenToSet, sentFloat);
	}
}

// Get Token As String - forwards to the main function
static function API_GetTokenAsString( tokenToGet : String ){
	if(Application.isPlaying){ // Make sure the application is running to avoid issues.
		return DialogUI.GetToken(tokenToGet);
	}
	// .. Otherwise Return an empty string if in edit mode.
	return "";
}

// Get Token As Float- forwards to the main function
static function API_GetTokenAsFloat( tokenToGet : String ){
	if(Application.isPlaying){ // Make sure the application is running to avoid issues.
		return DialogUI.GetTokenAsFloat(tokenToGet);
	}
	// .. Otherwise Return 0 if in edit mode.
	return 0;
}


//	This function finds all dialog controller and tells them, and their children screens to stop.
static function API_StopAllDialogs() {
	if(Application.isPlaying){ // Make sure the application is running to avoid issues.
		
		// Only allow one Dialog Controller to run at a time.
		var searchForDialogs : GameObject[] = GameObject.FindGameObjectsWithTag("DialogController");
	
		// Loop through the Dialog Controllers
		for ( var theDCObject : GameObject in searchForDialogs ) {
		
			// Make sure its not an empty reference - safety step!
			if ( theDCObject != null ) {
				
				// Make sure the object is not THIS one and it has a dialog controller attached!
				if ( theDCObject.GetComponent(DialogController) != null ) {
					
					// Get the DialogController			
					var theDC : DialogController = theDCObject.GetComponent(DialogController);
					
					// Send message.
					Debug.Log( "LDC: (DialogUI) telling another DialogController to stop -> object to stop is called "+ theDC.gameObject.name );
					
					// Tell it to end - as long as it's safe!
					if ( theDC != null && theDC.status != DCSTATUS.ENDED ) {
						
						// Tell the other Dialog Controller to stop
						theDC.status = DCSTATUS.ENDED;
						theDC.currentScreen = null;
						theDC.currentID = 0;
						
						// Loop through the screens and make sure they have also stopped.
						var theComponents = theDC.gameObject.GetComponents (DialogScreen);
						for (var ds : DialogScreen in theComponents) {
					    	if ( ds != null ) {
					    		ds.isActive = false;
					    	}
						}
						
						// Now we need to update the Dialog UI to reset the screen
						if(DialogUI!=null && DialogUI.dui!=null ){
							DialogUI.dui.StopScreenNow();
						}
						
						// If the dialog controller is an auto-play dialog, we should automatically destroy it.
						// We'll keep it if it's not as it may be used as a complex triggerable dialog system.
						if( theDC.autoPlay ){
							Debug.Log( "LDC: (DialogUI) Destroying DialogController of name: "+ theDC.gameObject);
							Destroy(theDC.gameObject);	
						}
					} 
				}
			}
		}
	}
}

//	BASE DIALOG
//	Create Base part of the Dialog GameObject
static function API_DialogCreate(){	// Assumes its an autoplay if left blank
	
	// Create GameObject
	var go : GameObject = new GameObject();
	go.name = "New LDC Dialog";
	
	// Add DialogController
	var dc : DialogController = go.AddComponent(DialogController);
	if(dc != null){ dc.autoPlay = true; dc.startAfterXSeconds = 1; }
	
	// Return the GameObject
	return go;
}

static function API_DialogCreate( isAutoPlay : boolean, howManySeconds : float ){

	// Create GameObject
	var go : GameObject = new GameObject();
	go.name = "New LDC Dialog";
	
	// Add DialogController
	var dc : DialogController = go.AddComponent(DialogController);
	if(dc != null ){
		dc.startAfterXSeconds = Mathf.Clamp(howManySeconds, 1, 9999999);
		if(isAutoPlay){ dc.autoPlay = true; }
	}
	
	// Return the GameObject
	return go;
}

//	NEXT
//	Create A Next Screen
static function API_DialogAddNextScreen( 	go : GameObject,			// <- Make sure you send the gameObject we are adding to here!
												dialogID : int,
												portrait : Texture2D, 
												title : String, 
												dialogText : String, 
												audioFilePath : String, 
												secondsToDisplay : float, 
												hideNextButton : boolean,
												endAfterThis : boolean, 
												destroyAfterThis : boolean,
												noPortraitFadeIn : boolean,
												noPortraitFadeOut : boolean, 
												nextID : int
											){
	
	// Create the new Dialog Screen
	var ds : DialogScreen = go.AddComponent( DialogScreen );
	if( ds != null ){ // Make sure the DialogScreen is valid, and then apply the settings
	
		ds.dialogID = dialogID;
		
		ds.screen.dialogStyle = DIALOGSTYLE.NextButton;
		ds.screen.actorName = title;
		ds.screen.dialogText = dialogText;
		ds.screen.soundToLoad = audioFilePath;
		ds.screen.portrait = portrait;
		
		ds.navigation.screenToLoadOnNext = nextID;
		ds.navigation.secondsToDisplay = secondsToDisplay;
		ds.navigation.hideNextButton = hideNextButton;
		ds.navigation.endDialogAfterThis = endAfterThis;
		ds.navigation.destroyAtEnd = destroyAfterThis;
		
		ds.navigation.noPortraitFadeIn = noPortraitFadeIn;
		ds.navigation.noPortraitFadeOut = noPortraitFadeOut;
				
	}
}

//	ONE BUTTON
//	Create A One-Button Screen
static function API_DialogAddOneButtonScreen( 	go : GameObject,			// <- Make sure you send the gameObject we are adding to here!
												dialogID : int,
												portrait : Texture2D, 
												title : String, 
												dialogText : String, 
												audioFilePath : String, 
												secondsToDisplay : float, 
												hideNextButton : boolean,
												endAfterThis : boolean, 
												destroyAfterThis : boolean, 
												noPortraitFadeIn : boolean,
												noPortraitFadeOut : boolean,
												buttonLabel : String,
												nextID : int
											){
	
	// Create the new Dialog Screen
	var ds : DialogScreen = go.AddComponent( DialogScreen );
	if( ds != null ){ // Make sure the DialogScreen is valid, and then apply the settings
	
		ds.dialogID = dialogID;
		
		ds.screen.dialogStyle = DIALOGSTYLE.OneButton;
		ds.screen.actorName = title;
		ds.screen.dialogText = dialogText;
		ds.screen.soundToLoad = audioFilePath;
		ds.screen.portrait = portrait;
		ds.screen.customButton1 = buttonLabel;
		
		ds.navigation.screenToLoadOnNext = nextID;
		ds.navigation.secondsToDisplay = secondsToDisplay;
		ds.navigation.hideNextButton = hideNextButton;
		ds.navigation.endDialogAfterThis = endAfterThis;
		ds.navigation.destroyAtEnd = destroyAfterThis;
		
		ds.navigation.noPortraitFadeIn = noPortraitFadeIn;
		ds.navigation.noPortraitFadeOut = noPortraitFadeOut;
				
	}
}

// 	YES / NO
//	Create A Yes / No Screen
static function API_DialogAddYesNoScreen( 	go : GameObject,			// <- Make sure you send the gameObject we are adding to here!
												dialogID : int,
												portrait : Texture2D, 
												title : String, 
												dialogText : String, 
												audioFilePath : String, 
												endAfterThis : boolean, 
												destroyAfterThis : boolean, 
												noPortraitFadeIn : boolean,
												noPortraitFadeOut : boolean,
												yesID : int,
												noID : int
											){
	
	// Create the new Dialog Screen
	var ds : DialogScreen = go.AddComponent( DialogScreen );
	if( ds != null ){ // Make sure the DialogScreen is valid, and then apply the settings
	
		ds.dialogID = dialogID;
		
		ds.screen.dialogStyle = DIALOGSTYLE.YesOrNo;
		ds.screen.actorName = title;
		ds.screen.dialogText = dialogText;
		ds.screen.soundToLoad = audioFilePath;
		ds.screen.portrait = portrait;
		
		ds.navigation.screenToLoadOnYes = yesID;
		ds.navigation.screenToLoadOnNo = noID;
		ds.navigation.endDialogAfterThis = endAfterThis;
		ds.navigation.destroyAtEnd = destroyAfterThis;
		
		ds.navigation.noPortraitFadeIn = noPortraitFadeIn;
		ds.navigation.noPortraitFadeOut = noPortraitFadeOut;
		
		}
}

// 	TWO BUTTON
//	Create A Custom 2 Button Screen
static function API_DialogAddTwoButtonScreen( 	go : GameObject,			// <- Make sure you send the gameObject we are adding to here!
												dialogID : int,
												portrait : Texture2D, 
												title : String, 
												dialogText : String, 
												audioFilePath : String, 
												endAfterThis : boolean, 
												destroyAfterThis : boolean,
												noPortraitFadeIn : boolean,
												noPortraitFadeOut : boolean,
												buttonLabelRight : String, 
												buttonLabelLeft : String, 
												yesID : int,
												noID : int
											){
	
	// Create the new Dialog Screen
	var ds : DialogScreen = go.AddComponent( DialogScreen );
	if( ds != null ){ // Make sure the DialogScreen is valid, and then apply the settings
	
		ds.dialogID = dialogID;
		
		ds.screen.dialogStyle = DIALOGSTYLE.TwoButtons;
		ds.screen.actorName = title;
		ds.screen.dialogText = dialogText;
		ds.screen.soundToLoad = audioFilePath;
		ds.screen.portrait = portrait;
		
		ds.screen.customButton1 = buttonLabelRight;
		ds.screen.customButton2 = buttonLabelLeft;
		
		ds.navigation.screenToLoadOnYes = yesID;
		ds.navigation.screenToLoadOnNo = noID;
		ds.navigation.endDialogAfterThis = endAfterThis;
		ds.navigation.destroyAtEnd = destroyAfterThis;
		
		ds.navigation.noPortraitFadeIn = noPortraitFadeIn;
		ds.navigation.noPortraitFadeOut = noPortraitFadeOut;
				
	}
}

// 	MULTIPLE BUTTONS
//	Create A Custom Multiple Choice Screen
static function API_DialogAddMultipleButtonScreen( 	go : GameObject,			// <- Make sure you send the gameObject we are adding to here!
													dialogID : int,
													portrait : Texture2D, 
													title : String, 
													dialogText : String, 
													audioFilePath : String, 
													endAfterThis : boolean, 
													destroyAfterThis : boolean, 
													noPortraitFadeIn : boolean,
													noPortraitFadeOut : boolean,
													multipleButtons : String[],
													multipleButtonsID : int[]
												){
	
	// Create the new Dialog Screen
	var ds : DialogScreen = go.AddComponent( DialogScreen );
	if( ds != null && multipleButtons.length > 0 && multipleButtons.length == multipleButtonsID.length ){ // Make sure the DialogScreen is valid, and the arrays match up in length
	
		ds.dialogID = dialogID;
		
		ds.screen.dialogStyle = DIALOGSTYLE.MultipleButtons;
		ds.screen.actorName = title;
		ds.screen.dialogText = dialogText;
		ds.screen.soundToLoad = audioFilePath;
		ds.screen.portrait = portrait;
		
		ds.screen.multipleButtons = multipleButtons;
		ds.navigation.multipleButtons = multipleButtonsID;

		ds.navigation.endDialogAfterThis = endAfterThis;
		ds.navigation.destroyAtEnd = destroyAfterThis;
		
		ds.navigation.noPortraitFadeIn = noPortraitFadeIn;
		ds.navigation.noPortraitFadeOut = noPortraitFadeOut;
			
	// Show a message if there was a problem
	} else {
		Debug.Log("LDC ERROR: Couldnt Add Multiple Button Screen because the button label and ID array lengths don't match (or were empty)! This screen was skipped!");	
	}
}

//	ONE BUTTON
//	Create A One-Button Screen
static function API_DialogAddPasswordScreen( 	go : GameObject,			// <- Make sure you send the gameObject we are adding to here!
												dialogID : int,
												portrait : Texture2D, 
												title : String, 
												audioFilePath : String, 
												endAfterThis : boolean, 
												destroyAfterThis : boolean, 
												noPortraitFadeIn : boolean,
												noPortraitFadeOut : boolean,
												buttonLabel : String,
												password : String,
												position : DS_DATA_ANCHOR,
												passwordCaseSensitive : boolean,
												usePasswordMask : boolean,
												correctID : int,
												wrongID : int
											){
	
	// Create the new Dialog Screen
	var ds : DialogScreen = go.AddComponent( DialogScreen );
	if( ds != null ){ // Make sure the DialogScreen is valid, and then apply the settings
	
		ds.dialogID = dialogID;
		
		ds.screen.dialogStyle = DIALOGSTYLE.Password;
		ds.screen.actorName = title;
		ds.screen.soundToLoad = audioFilePath;
		ds.screen.portrait = portrait;
		ds.screen.customButton1 = buttonLabel;
		
		ds.screen.passwordMatchToToken = false;	// dont allow tokens with API (always false)
		ds.screen.passwordAnswer = password;
		ds.screen.dataEntryAnchor = position;
		ds.screen.passwordCaseSensitive = passwordCaseSensitive;
		ds.screen.passwordMask = usePasswordMask;
		
		ds.navigation.screenToLoadOnYes = correctID;
		ds.navigation.screenToLoadOnNo = wrongID;
		
		ds.navigation.endDialogAfterThis = endAfterThis;
		ds.navigation.destroyAtEnd = destroyAfterThis;
		
		ds.navigation.noPortraitFadeIn = noPortraitFadeIn;
		ds.navigation.noPortraitFadeOut = noPortraitFadeOut;
	}
}


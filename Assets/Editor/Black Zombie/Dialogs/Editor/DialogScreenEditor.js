////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// 	DialogsScreenEditor.js
//
//	Editor for DialogScreen.js
//	© 2012 - 2013 Melli Georgiou
//
//	IMPORTANT:
//	This ScreenDialogEditor file must be located at: "Assets/Editor/Black Zombie/Dialogs/DialogScreenEditor.js" 
//	or there will be issues! Also, icon resources should be in "Editor Default Resources/Black Zombie/Dialogs/"!
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@CustomEditor (DialogScreen)
class DialogScreenEditor extends Editor {	
	
	// THE 4 MAIN TABS
	var selStrings : String[] = ["Dialog", "Navigation", "Actions", "Localization"];
	
	// Images
	var dialogsImage : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/DialogsIcon.png") as Texture2D;
	var navigationImage : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/NavigationIcon.png") as Texture2D;
	var actionsImage : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/ActionsIcon.png") as Texture2D;
	var localizationImage : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/LocalizeIcon.png") as Texture2D;
	var selImages : Texture[] = [ dialogsImage, navigationImage, actionsImage, localizationImage ];
	
	// Buttons
	var addButton : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/addButton.png") as Texture2D;
	var removeButton : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/removeButton.png") as Texture2D;
	
	// Labels
	var nameLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/nameLabel.png") as Texture2D;
	var speechLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/speechLabel.png") as Texture2D;
	var fileLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/fileLabel.png") as Texture2D;
	var audioLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/audioLabel.png") as Texture2D;
	var checkLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/checkLabel.png") as Texture2D;
	var cameraLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/cameraLabel.png") as Texture2D;
	var nextLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/nextLabel.png") as Texture2D;
	var timeLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/timeLabel.png") as Texture2D;
	var skipLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/skipLabel.png") as Texture2D;
	var stopLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/stopLabel.png") as Texture2D;
	var deleteLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/deleteLabel.png") as Texture2D;
	var memoryLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/memoryLabel.png") as Texture2D;
	var findLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/findLabel.png") as Texture2D;
	var originLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/originLabel.png") as Texture2D;
	var fadeInLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/fadeInLabel.png") as Texture2D;
	var fadeOutLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/fadeOutLabel.png") as Texture2D;
	var hideLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/hideLabel.png") as Texture2D;
	var buttonLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/buttonLabel.png") as Texture2D;
	var castLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/castLabel.png") as Texture2D;
	var actorLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/actorLabel.png") as Texture2D;
	var gearLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/gearLabel.png") as Texture2D;
	var layersLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/layersLabel.png") as Texture2D;
	var resizeLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/resizeLabel.png") as Texture2D;
	var positionLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/positionLabel.png") as Texture2D;
	var loopLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/loopLabel.png") as Texture2D;
	var pitchLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/pitchLabel.png") as Texture2D;
	var xLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/xLabel.png") as Texture2D;
	var yLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/yLabel.png") as Texture2D;
	var redBoxTex : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/redBox.png") as Texture2D;
	var playLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/playLabel.png") as Texture2D;
	var keyLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/keyLabel.png") as Texture2D;
	var cubeLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/cubeLabel.png") as Texture2D;
	
	// Logic Labels
	var ifLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/if.png") as Texture2D;
	var elseifLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/elseif.png") as Texture2D;
	var elseLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/else.png") as Texture2D;
	
	
	// Flags
	var ukFlag : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/ukFlag.png") as Texture2D;
	var chinaFlag : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/chinaFlag.png") as Texture2D;
	var koreaFlag : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/koreaFlag.png") as Texture2D;
	var japanFlag : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/japanFlag.png") as Texture2D;
	var germanyFlag : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/germanyFlag.png") as Texture2D;
	var franceFlag : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/franceFlag.png") as Texture2D;
	var spainFlag : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/spainFlag.png") as Texture2D;
	var italyFlag : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/italyFlag.png") as Texture2D;
	var portugalFlag : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/portugalFlag.png") as Texture2D;
	var russiaFlag : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/russiaFlag.png") as Texture2D;
	
	// DialogStyle Icons
	var dataEntryIcon : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/DataEntryIcon.png") as Texture2D;
	var passwordIcon : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/PasswordIcon.png") as Texture2D;
	var logicIcon : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/LogicIcon.png") as Texture2D;
	
	// Warning
	var warningIcon : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/WarningIcon.png") as Texture2D;
	
	// Third Party Icons
	var uSequencerIcon : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/uSequencer.png") as Texture2D;
	
	// CHOOSE LOCALIZATION.
	var selectLocalization : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/Localization.png") as Texture2D;
	var selLanguageStrings : String[] = ["Chinese", "Korean","Japanese","Spanish", "Italian", "German","French","Portuguese","Russian"];
	var selLanguageImages : Texture[] = [ chinaFlag, koreaFlag, japanFlag, spainFlag, italyFlag, germanyFlag, franceFlag, portugalFlag, russiaFlag ];
	
	// THE ACTION TABS
	var actionStrings : String[] = ["GameObject Actions", "Background Layer Actions", "Actor Layer Actions", "Audio Actions", "Token Actions", "3rd Party Actions"];
	var actionImages : Texture[] = [ gearLabel, cameraLabel, actorLabel, audioLabel, keyLabel, nextLabel ];
	
	// THIRD PARTY TABS
	var thirdPartyTools : String[] = ["uSequencer"];
	var thirdPartyIcons : Texture2D[] = [uSequencerIcon];
	
	// AUDIO CHANNEL
	var audioTabStrings : String[] = ["Music","SFX 1", "SFX 2", "SFX 3"];
	
	// tab variables ( for actions tabs )
	var openCreateObjectsAtStart : boolean = false;
	var openCreateObjectsAtEnd : boolean = false;
	var openActivateObjectsAtStart : boolean = false;
	var openActivateTheseObjectsAtEnd : boolean = false;
	var openFindAndDestroyTheseObjectsAtEnd : boolean = false;
		
	// BROWSE MODE
	var browseMode : boolean = false;	
	var browseOutput : BrowseOutput;
	enum BrowseOutput{Portrait,Actor1,Actor2,Actor3,Actor4,Actor5,Actor6,Actor7,Actor8,Actor9,Actor10,Scene1,Scene2,Scene3,Scene4,Scene5,Scene6,Scene7,Scene8,Scene9,Scene10};
	var DCs : DialogCast[];
	var DSs : DialogScenes[];
	var DUIs : DialogUI[];
	
	// Display
	function OnInspectorGUI() {

		// If we have a selected gameObject.
        if( Selection.activeGameObject && target != null ) {
		
			// Important option
			// Allows us to use textfields that wrap text!
			EditorStyles.textField.wordWrap = true;
			
			// Cache the Object's MaterialSetup
			var theObject : DialogScreen = target as DialogScreen;

			// Sometimes the editor wont be able to see the component, we pretty much end things here when that happens ..
			if( theObject.screen == null || theObject.actions == null ) {
				//	Debug.Log("Can't access anything!");
			} else {
			
			// BUGFIX: Reimport the Editor for DialogScreens - this stops the errors we get when we click into actions. WEIRD!
			if ( theObject.created ){	// <- this is only set to true when this object is first created by the editor!
				
				theObject.created = false;
				// Debug.Log("Fixing Weird glitch!");
				var script = MonoScript.FromScriptableObject( this );
				var path : String = AssetDatabase.GetAssetPath( script );
				if(path!=null){AssetDatabase.ImportAsset(path);}
			}
			
			// SHOW WHEN DIALOG IS PLAYING
			if( Application.isPlaying && theObject.isActive ){
			
				// Create a new Red Box to use
				var redBoxStyle : GUIStyle = new GUIStyle();	
				redBoxStyle.normal.background = redBoxTex;
				redBoxStyle.border = RectOffset (4, 4, 4, 4);
				
				var whiteTextStyle : GUIStyle = new GUIStyle();	
				whiteTextStyle.normal.textColor = Color.white;
				whiteTextStyle.alignment = TextAnchor.MiddleCenter;
				whiteTextStyle.fontStyle = FontStyle.Bold;
				
				EditorGUILayout.Space();
				EditorGUILayout.BeginHorizontal("Box");
				//	GUILayout.Label("", GUILayout.MaxWidth(20));
					
					EditorGUILayout.BeginVertical(redBoxStyle, GUILayout.MinHeight(32) );
						//GUILayout.Label(, GUILayout.MaxWidth(20));
						GUILayout.Label("", GUILayout.MaxHeight(1));
						
						var playingGUIContent : GUIContent = new GUIContent("  Playing Dialog ...",playLabel ,"");
						GUILayout.Label(playingGUIContent,  whiteTextStyle, GUILayout.MinHeight(20));
						
						GUILayout.Label("", GUILayout.MaxHeight(1));
					EditorGUILayout.EndVertical();
					
				//	GUILayout.Label("", GUILayout.MaxWidth(20));
				EditorGUILayout.EndHorizontal();
			
			}
			
			// SYNC EDITOR VALUES WITH THE OBJECT
			
			
			// Show Tabs
			EditorGUILayout.BeginVertical("Box");
			EditorGUILayout.Space();
				EditorGUILayout.BeginHorizontal();
					GUILayout.Label("", GUILayout.MaxWidth(5));
           			theObject.tab = GUILayout.SelectionGrid (theObject.tab, selImages, 4, GUILayout.MaxHeight(30), GUILayout.MinWidth(500));
           			GUILayout.Label("", GUILayout.MaxWidth(5));
				EditorGUILayout.EndHorizontal();
			EditorGUILayout.Space();
			EditorGUILayout.EndVertical();
			
			// Check to see if the DialogCast and DialogScenes component ate available (we use this when showing the browse screen!)
			DCs = FindObjectsOfType (DialogCast);
			DSs = FindObjectsOfType (DialogScenes);
			DUIs = FindObjectsOfType (DialogUI);
			if(Application.isPlaying){
				DCs = null;	
				DSs = null;
			}
			
			// ---------------------------------------------------------------------------------------------
			//	BROWSE CAST / SELECT PORTRAIT
			// ---------------------------------------------------------------------------------------------
			if( browseMode ){
				
				BrowseCast(theObject, browseOutput);		
						
			// ---------------------------------------------------------------------------------------------
			//	TAB 0 - DIALOGS
			// ---------------------------------------------------------------------------------------------
			
			} else if ( theObject.tab == 0 ) { // The selected tab is "Dialogs"
			
					// Add Space
					EditorGUILayout.Space();
				
					// TITLE
					EditorGUILayout.BeginHorizontal();
						EditorGUILayout.BeginHorizontal("", GUILayout.MaxWidth(10));
							GUILayout.Label("  Dialog Screen Setup - " + selStrings[theObject.tab], "BoldLabel", GUILayout.MinWidth(190), GUILayout.MaxWidth(190));
						EditorGUILayout.EndHorizontal();
						GUILayout.FlexibleSpace();
						
						// Fix DialogID if there is anything wrong.
						if ( theObject.dialogID == null || theObject.dialogID < 1 ) {
							theObject.dialogID = 1;
						} 
						
						//theObject.dialogID = System.Int32.Parse( EditorGUILayout.TextField("Dialog ID: ", theObject.dialogID.ToString()) );
						GUILayout.Label(speechLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
						theObject.dialogID = EditorGUILayout.IntField("Dialog ID: ", theObject.dialogID,  GUILayout.MinWidth(200),GUILayout.MaxHeight(20) );
						
						
						
						GUILayout.Label("", GUILayout.MaxWidth(10));
					EditorGUILayout.EndHorizontal();
					EditorGUILayout.Space();
					
					// Horizontal
					EditorGUILayout.BeginHorizontal();
					
						// Add indent
						GUILayout.Label("", GUILayout.MaxWidth(5));
						
						// Add the Portrait / Icon
						EditorGUILayout.BeginVertical(GUILayout.MaxWidth(105));
						
							// Use Icons
							if( theObject.screen.dialogStyle == DIALOGSTYLE.DataEntry ){
								
								GUILayout.Label(dataEntryIcon, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100) );
								theObject.screen.portrait = null;
								
							} else if( theObject.screen.dialogStyle == DIALOGSTYLE.Password){
								
								GUILayout.Label(passwordIcon, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100));
								theObject.screen.portrait = null;
								
							} else if( theObject.screen.dialogStyle == DIALOGSTYLE.Logic ){
								
								GUILayout.Label(logicIcon, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100));
								theObject.screen.portrait = null;
										
							// Show portrait	
							} else {
						
								GUILayout.Label("Portrait Icon:", GUILayout.MinWidth(100), GUILayout.MaxWidth(100));
								theObject.screen.portrait = EditorGUILayout.ObjectField(theObject.screen.portrait, Texture2D, false, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100));
								
								// If the Dialog Cast is available, show the View Cast button
								if( DCs && DCs.length>0 ){ 
									EditorGUILayout.BeginHorizontal(GUILayout.MaxWidth(100));
									
										GUILayout.Label(cameraLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
										if( GUILayout.Button("View Cast", GUILayout.MinWidth(75), GUILayout.MaxWidth(75),GUILayout.MaxHeight(20) ) ){
											browseMode = true;
											output = BrowseOutput.Portrait;
										}
									EditorGUILayout.EndHorizontal();
									
									EditorGUILayout.BeginHorizontal(GUILayout.MaxWidth(100));
									
										GUILayout.Label(deleteLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
										if( GUILayout.Button("No Portrait", GUILayout.MinWidth(75), GUILayout.MaxWidth(75),GUILayout.MaxHeight(20) ) ){
											browseMode = false;
											theObject.screen.portrait = null;
										}
									EditorGUILayout.EndHorizontal();
								}
							}
							
						// End of Portrait
						EditorGUILayout.EndVertical();
			
						// Add indent
						//GUILayout.Label("", GUILayout.MaxWidth(5));
						
						// Vertical
						EditorGUILayout.BeginVertical();
							
							// Add Space
							EditorGUILayout.Space();
							EditorGUILayout.Space();
							
							// Dialog Style
							EditorGUILayout.BeginHorizontal();
								GUILayout.Label(nextLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
								theObject.screen.dialogStyle = EditorGUILayout.EnumPopup("Dialog Style: ", theObject.screen.dialogStyle);
							EditorGUILayout.EndHorizontal();
							
							// Add Space
							EditorGUILayout.Space();
							
							// Actor Name
							if( theObject.screen.dialogStyle != DIALOGSTYLE.Logic ){
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(nameLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.screen.actorName = EditorGUILayout.TextField("Title / Name: ", theObject.screen.actorName); 
								EditorGUILayout.EndHorizontal();
							}
							
							// Add Space
							EditorGUILayout.Space();
							EditorGUILayout.Space();
					
							// Show Dialog Speech if we are using a relevant dialog style
							if( theObject.screen.dialogStyle != DIALOGSTYLE.MultipleButtons && 
								theObject.screen.dialogStyle != DIALOGSTYLE.DataEntry && 
								theObject.screen.dialogStyle != DIALOGSTYLE.Password &&
								theObject.screen.dialogStyle != DIALOGSTYLE.Logic
								){
								
								// Dialog Speech
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(speechLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.screen.dialogText = EditorGUILayout.TextField("Dialog Text: ", theObject.screen.dialogText, GUILayout.MinHeight(60) );
								EditorGUILayout.EndHorizontal();
	
								// Add Space
								EditorGUILayout.Space();
								EditorGUILayout.Space();
							
							}
							
							// USE DATA ENTRY STYLE
							if (theObject.screen.dialogStyle == DIALOGSTYLE.DataEntry){
								
								// Make sure we can see the Dialog UI
								if( DUIs == null || DUIs.length == 0){
								
									// Show Warning Message
									EditorGUILayout.BeginVertical("Box");
										GUILayout.Label("IMPORTANT: Data Entry", "BoldLabel");
										GUILayout.Label("You cannot use the 'Data Entry' style yet. \nThis is because a DialogUI component wasn't found in the scene. \n");
									EditorGUILayout.EndVertical();
									
									EditorGUILayout.Space();
									
								// Otherwise
								} else {	
								
									// Cache the token Array
									var tokenArray : String[] = DUIs[0].GetTokenStringArray();
									
									// Tokens have been setup ..
									if( tokenArray.length > 0 ){
										
										// Position / Anchor
										EditorGUILayout.BeginHorizontal();	
											GUILayout.Label(positionLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
											theObject.screen.dataEntryAnchor = EditorGUILayout.EnumPopup("Position: ",theObject.screen.dataEntryAnchor, GUILayout.MaxHeight(32));
										EditorGUILayout.EndHorizontal();
										
										// Add Space
										EditorGUILayout.Space();
										
										// Token To Set
										EditorGUILayout.BeginHorizontal();	
											GUILayout.Label(keyLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
											theObject.screen.dataEntryToken = EditorGUILayout.Popup("Token To Set: ",theObject.screen.dataEntryToken, tokenArray, GUILayout.MaxHeight(32));
										EditorGUILayout.EndHorizontal();
									
										// Add Space
										EditorGUILayout.Space();
										
										// Data Format
										EditorGUILayout.BeginHorizontal();	
											GUILayout.Label(cubeLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
											theObject.screen.dataEntryFormat = EditorGUILayout.EnumPopup("Data Format: ",theObject.screen.dataEntryFormat, GUILayout.MaxHeight(32));
										EditorGUILayout.EndHorizontal();
										
										// Add Space
										EditorGUILayout.Space();
										
										// Character Limit
										EditorGUILayout.BeginHorizontal();	
											GUILayout.Label(resizeLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
											theObject.screen.dataEntryCharacterLimit = EditorGUILayout.IntField("Character Limit: ",theObject.screen.dataEntryCharacterLimit );
										EditorGUILayout.EndHorizontal();
										
										// Add Space
										EditorGUILayout.Space();
								
										// Default
										EditorGUILayout.BeginHorizontal();	
											GUILayout.Label(buttonLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
											theObject.screen.dataEntryDefaultValue = EditorGUILayout.TextField("Default Value: ",theObject.screen.dataEntryDefaultValue );
										EditorGUILayout.EndHorizontal();
										
									// Tokens have not been setup	
									} else {
										
										// Show Warning Message
										EditorGUILayout.BeginVertical("Box");
											GUILayout.Label("IMPORTANT: Data Entry", "BoldLabel");
											GUILayout.Label("You cannot use the 'Data Entry' style yet. \nThis is because you have not set up any 'Tokens' in the DialogUI component. \n");
										EditorGUILayout.EndVertical();
										
										EditorGUILayout.Space();
									}
								}
								
							}
							
							// USE PASSWORD STYLE
							if (theObject.screen.dialogStyle == DIALOGSTYLE.Password){
								
								// Make sure we can see the Dialog UI
								if( DUIs == null || DUIs.length == 0){
								
									// Show Warning Message
									EditorGUILayout.BeginVertical("Box");
										GUILayout.Label("IMPORTANT: Password", "BoldLabel");
										GUILayout.Label("You cannot use the 'Password' style yet. \nThis is because a DialogUI component wasn't found in the scene. \n");
									EditorGUILayout.EndVertical();
									
									EditorGUILayout.Space();
									
								// Otherwise
								} else {	
								
									// Cache the token Array
									var tokenArray2 : String[] = DUIs[0].GetTokenStringArray();
									
									// Tokens have been setup ..
									if( tokenArray2.length > 0 ){
										
										// Position / Anchor
										EditorGUILayout.BeginHorizontal();	
											GUILayout.Label(positionLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
											theObject.screen.dataEntryAnchor = EditorGUILayout.EnumPopup("Position: ",theObject.screen.dataEntryAnchor, GUILayout.MaxHeight(32));
										EditorGUILayout.EndHorizontal();
										
										// Add Space
										//EditorGUILayout.Space();
										
										// Case Sensitive
										EditorGUILayout.BeginHorizontal();	
											GUILayout.Label(buttonLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
											theObject.screen.passwordCaseSensitive = EditorGUILayout.Toggle("Case Sensitive: ",theObject.screen.passwordCaseSensitive );
										EditorGUILayout.EndHorizontal();
																				
										// Password Mask
										EditorGUILayout.BeginHorizontal();	
											GUILayout.Label(findLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
											theObject.screen.passwordMask = EditorGUILayout.Toggle("Password Mask (***): ",theObject.screen.passwordMask );
										EditorGUILayout.EndHorizontal();
										
										
										// Use Token As an Answer
										EditorGUILayout.BeginHorizontal();	
											GUILayout.Label(keyLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
											theObject.screen.passwordMatchToToken = EditorGUILayout.Toggle("Use Token As Answer: ",theObject.screen.passwordMatchToToken );
										EditorGUILayout.EndHorizontal();
																					
										// If we are using A Token as the answer ..
										if(theObject.screen.passwordMatchToToken){
											
											// Token To Set
											EditorGUILayout.BeginHorizontal();	
											GUILayout.Label(keyLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
											theObject.screen.dataEntryToken = EditorGUILayout.Popup("Use Value Of: ",theObject.screen.dataEntryToken, tokenArray2, GUILayout.MaxHeight(32));
											EditorGUILayout.EndHorizontal();
										
										// Otherwise, use a Text Answer
										} else {
										
											// Default
											EditorGUILayout.BeginHorizontal();	
												GUILayout.Label(buttonLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
												theObject.screen.passwordAnswer = EditorGUILayout.TextField("Password Answer: ",theObject.screen.passwordAnswer );
											EditorGUILayout.EndHorizontal();
										
										}
										
									// Tokens have not been setup	
									} else {
										
										// Show Warning Message
										EditorGUILayout.BeginVertical("Box");
											GUILayout.Label("IMPORTANT: Passwords", "BoldLabel");
											GUILayout.Label("You cannot use the 'Password' style yet. \nThis is because you have not set up any 'Tokens' in the DialogUI component. \n");
										EditorGUILayout.EndVertical();
										
										EditorGUILayout.Space();
									}
								}
								
							}
							
							// USE LOGIC STYLE
							if (theObject.screen.dialogStyle == DIALOGSTYLE.Logic){
								
								// Make sure we can see the Dialog UI
								if( DUIs == null || DUIs.length == 0){
								
									// Show Warning Message
									EditorGUILayout.BeginVertical("Box");
										GUILayout.Label("IMPORTANT: Logic", "BoldLabel");
										GUILayout.Label("You cannot use the 'Logic' style yet. \nThis is because a DialogUI component wasn't found in the scene. \n");
									EditorGUILayout.EndVertical();
									
									EditorGUILayout.Space();
									
								// Otherwise
								} else {	
								
									// Cache the token Array
									var tokenArray3 : String[] = DUIs[0].GetTokenStringArray();
									
									// Tokens have been setup ..
									if( tokenArray3.length > 0 ){
										
										// Logic info
										EditorGUILayout.BeginHorizontal();
											GUILayout.FlexibleSpace();
											EditorGUILayout.BeginVertical( GUILayout.MinHeight(16), GUILayout.MaxHeight(16), GUILayout.MinWidth(530), GUILayout.MaxWidth(530) );
												GUILayout.Label( "Logic Events ", "BoldLabel");
												GUILayout.Label( "Logic events can test tokens and use the result to move to a different screen. \nUse the [+] button to add more logic Events, and the [-] button to remove the last one." );
											EditorGUILayout.EndVertical();
											GUILayout.FlexibleSpace();
										EditorGUILayout.EndHorizontal();
										
										// Make sure we have some logic screens so we can loop them in and create the logic UI
										if( theObject.screen.logicStatements != null && theObject.screen.logicStatements.length > 0){
											
											// Helper variables
											var logicCounter : int = 0;
											
											// Loop through the statements
											for( var statement : LogicStatements in theObject.screen.logicStatements ){
												if(statement!=null){ // Make sure this statement is valid
													
													// ==============
													// STATEMENT UI
													// ==============
													
													// Statement
													EditorGUILayout.BeginHorizontal();
													GUILayout.FlexibleSpace();
													EditorGUILayout.BeginHorizontal("Box");
													
														// Formatting
														EditorGUILayout.BeginVertical();
														GUILayout.Label("", GUILayout.MinWidth(5), GUILayout.MaxWidth(5), GUILayout.MinHeight(10), GUILayout.MaxHeight(10));
														EditorGUILayout.BeginHorizontal();
														
														// Space
														GUILayout.Label("", GUILayout.MinWidth(5), GUILayout.MaxWidth(5), GUILayout.MinHeight(5), GUILayout.MaxHeight(5));
													
														// IF / ELSE IF label
														if( logicCounter == 0){
															GUILayout.Label(ifLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(50), GUILayout.MaxWidth(50));
														} else {
															GUILayout.Label(elseifLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(50), GUILayout.MaxWidth(50));
														}
													
														// Token To Set
														GUILayout.Label(keyLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
														statement.token = EditorGUILayout.Popup(statement.token, tokenArray3, GUILayout.MaxHeight(32), GUILayout.MinWidth(120), GUILayout.MaxWidth(120));
														
														// Operator
														GUILayout.Label(gearLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
														statement.operator = EditorGUILayout.EnumPopup("", statement.operator, GUILayout.MaxHeight(32), GUILayout.MinWidth(120), GUILayout.MaxWidth(120));
														// Comparison
														GUILayout.Label(buttonLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
														statement.compare = EditorGUILayout.TextField(statement.compare, GUILayout.MinHeight(20), GUILayout.MinWidth(120), GUILayout.MaxWidth(120));
														
														// Space
														GUILayout.Label("", GUILayout.MinWidth(5), GUILayout.MaxWidth(5), GUILayout.MinHeight(5), GUILayout.MaxHeight(5));
														
														// End formatting
														EditorGUILayout.EndHorizontal();
														EditorGUILayout.EndVertical();
														
													EditorGUILayout.EndHorizontal();
													GUILayout.FlexibleSpace();
													EditorGUILayout.EndHorizontal();
													
													// Navigation
													EditorGUILayout.BeginHorizontal();
													
														// Space
														GUILayout.FlexibleSpace();
														GUILayout.Label("", GUILayout.MinWidth(320), GUILayout.MaxWidth(320), GUILayout.MinHeight(5), GUILayout.MaxHeight(5));
														GUILayout.Label("", GUILayout.MinWidth(5), GUILayout.MaxWidth(5), GUILayout.MinHeight(5), GUILayout.MaxHeight(5));
														
														EditorGUILayout.BeginVertical();
														
															// Go To Screen
															if( !statement.endDialogAfterThis ){
																EditorGUILayout.BeginHorizontal();
																GUILayout.Label( nextLabel, GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
	
																GUILayout.Label( "Go To Screen: ", "BoldLabel", GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(100), GUILayout.MaxWidth(100));
																statement.goToScreen = EditorGUILayout.IntField(statement.goToScreen, GUILayout.MinHeight(20), GUILayout.MinWidth(60), GUILayout.MaxWidth(60));
																EditorGUILayout.EndHorizontal();
															}
															
															// End Dialog After This
															EditorGUILayout.BeginHorizontal();
															GUILayout.Label( stopLabel, GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
															GUILayout.Label( "Last Dialog: ", "BoldLabel", GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(100), GUILayout.MaxWidth(100));
															statement.endDialogAfterThis = EditorGUILayout.Toggle(statement.endDialogAfterThis, GUILayout.MinHeight(20), GUILayout.MinWidth(60), GUILayout.MaxWidth(60));
															EditorGUILayout.EndHorizontal();
															
															// Destroy At End
															if( statement.endDialogAfterThis ){
																EditorGUILayout.BeginHorizontal();
																GUILayout.Label( deleteLabel, GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
																GUILayout.Label( "Destroy At End: ", "BoldLabel", GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(100), GUILayout.MaxWidth(100));
																statement.destroyAtEnd = EditorGUILayout.Toggle(statement.destroyAtEnd, GUILayout.MinHeight(20), GUILayout.MinWidth(60), GUILayout.MaxWidth(60));
																EditorGUILayout.EndHorizontal();
																
															} else {
																statement.destroyAtEnd = false;	
															}
															
															// Spacer
															EditorGUILayout.BeginHorizontal();
															GUILayout.Label( "", GUILayout.MinHeight(10), GUILayout.MaxHeight(10), GUILayout.MinWidth(10), GUILayout.MaxWidth(10));
															EditorGUILayout.EndHorizontal();
															
														EditorGUILayout.EndVertical();
														
														GUILayout.FlexibleSpace();
													EditorGUILayout.EndHorizontal();
													
													EditorGUILayout.BeginHorizontal();
													
													EditorGUILayout.EndHorizontal();
													// Add to the logicCounter
													logicCounter++;
												}
											}
										}
										
										// =========================
										// ADD / REMOVE BUTTONS
										// =========================
										
										EditorGUILayout.BeginHorizontal();
										
											GUILayout.FlexibleSpace();
											EditorGUILayout.BeginHorizontal( GUILayout.MinHeight(16), GUILayout.MaxHeight(16), GUILayout.MinWidth(525), GUILayout.MaxWidth(525) );
											
												GUILayout.FlexibleSpace();
												
												// Show Remove Button if we have more than 1 option
												if( theObject.screen.logicStatements != null && theObject.screen.logicStatements.length > 0 ){
													
													if( GUILayout.Button(removeButton, GUILayout.MaxWidth(48)) ){
														DeleteLogicStatement( theObject );
													}
												}
											
												// Show add Button (we can use unlimited comparisons)
												if( theObject.screen.logicStatements != null ){
													if( GUILayout.Button(addButton, GUILayout.MaxWidth(48)) ){
														AddNewLogicStatement( theObject );
													}
												}
												
											EditorGUILayout.EndHorizontal();
											GUILayout.FlexibleSpace();
											
										EditorGUILayout.EndHorizontal();
										
										// ==============
										// ELSE UI
										// ==============
										
										// Default Screen info
										EditorGUILayout.BeginHorizontal();
											GUILayout.FlexibleSpace();
											EditorGUILayout.BeginVertical( GUILayout.MinHeight(16), GUILayout.MaxHeight(16), GUILayout.MinWidth(530), GUILayout.MaxWidth(530) );
												GUILayout.Label( "Default Screen ", "BoldLabel");
												GUILayout.Label( "If the above logic fails, this screen will be used." );
											EditorGUILayout.EndVertical();
											GUILayout.FlexibleSpace();
										EditorGUILayout.EndHorizontal();
										
										// Statement
										EditorGUILayout.BeginHorizontal();
										GUILayout.FlexibleSpace();
										EditorGUILayout.BeginHorizontal("Box", GUILayout.MinHeight(16), GUILayout.MaxHeight(16), GUILayout.MinWidth(520), GUILayout.MaxWidth(520));
										
											// Formatting
											EditorGUILayout.BeginVertical();
											GUILayout.Label("", GUILayout.MinWidth(5), GUILayout.MaxWidth(5), GUILayout.MinHeight(10), GUILayout.MaxHeight(10));
											EditorGUILayout.BeginHorizontal();
											
											// Space
											GUILayout.Label("", GUILayout.MinWidth(5), GUILayout.MaxWidth(5), GUILayout.MinHeight(5), GUILayout.MaxHeight(5));
										
											// ELSE label
											GUILayout.Label(elseLabel, GUILayout.MinHeight(32), GUILayout.MaxHeight(32), GUILayout.MinWidth(50), GUILayout.MaxWidth(50));
										
											// Flexible space
											GUILayout.FlexibleSpace();
											
											
											EditorGUILayout.BeginVertical();
												
												// Go To Screen
												if(!theObject.navigation.endDialogAfterThis){
													EditorGUILayout.BeginHorizontal();
													GUILayout.Label( nextLabel, GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
	
													GUILayout.Label( "Go To Screen: ", "BoldLabel", GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(100), GUILayout.MaxWidth(100));
													theObject.navigation.logicDefaultNavigation = EditorGUILayout.IntField(theObject.navigation.logicDefaultNavigation, GUILayout.MinHeight(20), GUILayout.MinWidth(60), GUILayout.MaxWidth(60));
													EditorGUILayout.EndHorizontal();
												}
														
												// End Dialog After This
												EditorGUILayout.BeginHorizontal();
												GUILayout.Label( stopLabel, GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
												GUILayout.Label( "Last Dialog: ", "BoldLabel", GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(100), GUILayout.MaxWidth(100));
												theObject.navigation.endDialogAfterThis = EditorGUILayout.Toggle(theObject.navigation.endDialogAfterThis, GUILayout.MinHeight(20), GUILayout.MinWidth(60), GUILayout.MaxWidth(60));
												EditorGUILayout.EndHorizontal();
												
												// Destroy At End
												if( theObject.navigation.endDialogAfterThis ){
													EditorGUILayout.BeginHorizontal();
													GUILayout.Label( deleteLabel, GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
													GUILayout.Label( "Destroy At End: ", "BoldLabel", GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(100), GUILayout.MaxWidth(100));
													theObject.navigation.destroyAtEnd = EditorGUILayout.Toggle(theObject.navigation.destroyAtEnd, GUILayout.MinHeight(20), GUILayout.MinWidth(60), GUILayout.MaxWidth(60));
													EditorGUILayout.EndHorizontal();
												} else {
													theObject.navigation.destroyAtEnd = false;	
												}
												
												// Spacer
												EditorGUILayout.BeginHorizontal();
												GUILayout.Label( "", GUILayout.MinHeight(10), GUILayout.MaxHeight(10), GUILayout.MinWidth(10), GUILayout.MaxWidth(10));
												EditorGUILayout.EndHorizontal();
												
											EditorGUILayout.EndVertical();
											
											// Space
											GUILayout.Label("", GUILayout.MinWidth(5), GUILayout.MaxWidth(5), GUILayout.MinHeight(5), GUILayout.MaxHeight(5));
											
											// End formatting
											EditorGUILayout.EndHorizontal();
											EditorGUILayout.EndVertical();
											
										EditorGUILayout.EndHorizontal();
										GUILayout.FlexibleSpace();
										EditorGUILayout.EndHorizontal();
										
										
										
										
									// Tokens have not been setup	
									} else {
										
										// Show Warning Message
										EditorGUILayout.BeginVertical("Box");
											GUILayout.Label("IMPORTANT: Logic", "BoldLabel");
											GUILayout.Label("You cannot use the 'Logic' style yet. \nThis is because you have not set up any 'Tokens' in the DialogUI component. \n");
										EditorGUILayout.EndVertical();
										
										EditorGUILayout.Space();
									}
								}
								
								// =========================
								// CHECK FOR INFINATE LOOPS
								// =========================
								
								// Check to see if any of the navigation paths reference the same screen (infinate loop)
								var referencingSameID : boolean = false;
								if(  theObject.screen.logicStatements != null && theObject.screen.logicStatements.length > 0 ){
									for( var theEvent : LogicStatements in theObject.screen.logicStatements ){
										if( theEvent != null && !theEvent.endDialogAfterThis && theEvent.goToScreen == theObject.dialogID ){
											referencingSameID = true;
										}
									}
								}
								
								// Check to see if the default navigation paths reference the same screen (infinate loop)
								if( theObject.navigation.logicDefaultNavigation == theObject.dialogID || referencingSameID ){

									// Warning info
									EditorGUILayout.Space();
									EditorGUILayout.BeginHorizontal();
										GUILayout.FlexibleSpace();
										EditorGUILayout.BeginHorizontal(  GUILayout.MinHeight(16), GUILayout.MaxHeight(16), GUILayout.MinWidth(530), GUILayout.MaxWidth(530) );
											
											//GUILayout.Label("", GUILayout.MinWidth(0), GUILayout.MaxWidth(0), GUILayout.MinHeight(5), GUILayout.MaxHeight(5)); // weird spacing fix.
											EditorGUILayout.BeginHorizontal();
											GUILayout.Label(warningIcon, GUILayout.MinWidth(64), GUILayout.MaxWidth(64), GUILayout.MinHeight(64), GUILayout.MaxHeight(64));
											EditorGUILayout.BeginVertical();
											
												GUILayout.Label("WARNING: Infinate Loop Detected",  "boldLabel");
												GUILayout.Label("One or more of your \"Go To Screens\" has the same ID as this Dialog Screen. \nUnless this is fixed, this will create an infinate loop. \n");
											EditorGUILayout.EndVertical();
											EditorGUILayout.EndHorizontal();
										EditorGUILayout.EndHorizontal();
										GUILayout.FlexibleSpace();
									EditorGUILayout.EndHorizontal();	
								}
								
								
							}
							
							// Show Custom Button 1
							if( theObject.screen.dialogStyle == DIALOGSTYLE.OneButton || 
								theObject.screen.dialogStyle == DIALOGSTYLE.TwoButtons ||
								theObject.screen.dialogStyle == DIALOGSTYLE.DataEntry ||
								theObject.screen.dialogStyle == DIALOGSTYLE.Password  ){
							
								// Dialog Speech
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(buttonLabel, GUILayout.MaxWidth(20),GUILayout.MinHeight(20),GUILayout.MaxHeight(20));
									if(theObject.screen.dialogStyle == DIALOGSTYLE.OneButton){
										theObject.screen.customButton1 = EditorGUILayout.TextField("Custom Button Label: ", theObject.screen.customButton1 );
									} else if (theObject.screen.dialogStyle == DIALOGSTYLE.TwoButtons){
										theObject.screen.customButton1 = EditorGUILayout.TextField("Custom Right Button: ", theObject.screen.customButton1 );
									} else if (theObject.screen.dialogStyle == DIALOGSTYLE.DataEntry){
										theObject.screen.customButton1 = EditorGUILayout.TextField("Custom Button Label: ", theObject.screen.customButton1 );
									} else if (theObject.screen.dialogStyle == DIALOGSTYLE.Password){
										theObject.screen.customButton1 = EditorGUILayout.TextField("Custom Button Label: ", theObject.screen.customButton1 );
									}
								EditorGUILayout.EndHorizontal();
	
								// Add Space
								EditorGUILayout.Space();
								EditorGUILayout.Space();
							
							}
							
							// Show Custom Button 2
							if( theObject.screen.dialogStyle == DIALOGSTYLE.TwoButtons ){
							
								// Dialog Speech
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(buttonLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.screen.customButton2 = EditorGUILayout.TextField("Custom Left Button: ", theObject.screen.customButton2 );
								EditorGUILayout.EndHorizontal();
	
								// Add Space
								EditorGUILayout.Space();
							
							}
							
							// USE MULTIPLE BUTTON DIALOG STYLE
							if (theObject.screen.dialogStyle == DIALOGSTYLE.MultipleButtons){
							
								// Make sure these options are valid
								if(theObject.screen.multipleButtons != null && theObject.screen.multipleButtons.length > 0 ){
									var multipleOptionCount : int = 0;
									for( var buttonOption : String in theObject.screen.multipleButtons ){
										if(buttonOption!=null){
											
											// Option Name
											EditorGUILayout.BeginHorizontal();
												GUILayout.Label(buttonLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
												buttonOption = EditorGUILayout.TextField("Button "+(multipleOptionCount+1).ToString()+": ", buttonOption); 
											EditorGUILayout.EndHorizontal();
											
											// Add Space
											EditorGUILayout.Space();
											EditorGUILayout.Space();
											
											// increment count
											multipleOptionCount++;
											
										}
									}
								
								// RECREATE THE CUSTOM ARRAY IF IT IS NULL OR EMPTY
								// If there are no multiple options setup in the array, create a new one!	
								} else if( theObject.screen.multipleButtons == null || theObject.screen.multipleButtons != null && theObject.screen.multipleButtons.length == 0 ){
									
									theObject.screen.multipleButtons = ["Option 1"];
									theObject.navigation.multipleButtons = [0];
									
									// Reset Languages
									theObject.localization.chinese.multipleButtons = ["Option 1"];
									theObject.localization.korean.multipleButtons = ["Option 1"];
									theObject.localization.japanese.multipleButtons = ["Option 1"];
									theObject.localization.spanish.multipleButtons = ["Option 1"];
									theObject.localization.italian.multipleButtons = ["Option 1"];
									theObject.localization.german.multipleButtons = ["Option 1"];
									theObject.localization.french.multipleButtons = ["Option 1"];
									theObject.localization.portuguese.multipleButtons = ["Option 1"];
									theObject.localization.russian.multipleButtons = ["Option 1"];
								}
								
								EditorGUILayout.BeginHorizontal();
									GUILayout.FlexibleSpace();
										
									// Show Remove Button if we have more than 1 option
									if( theObject.screen.multipleButtons != null && theObject.screen.multipleButtons.length > 1 ){
										
										if( GUILayout.Button(removeButton, GUILayout.MaxWidth(48)) ){
											DeleteMultipleChoiceOption( theObject );
										}
									}
								
									// Show add Button if we have more less than 8 options
									if( theObject.screen.multipleButtons != null && theObject.screen.multipleButtons.length < 8 ){
										if( GUILayout.Button(addButton, GUILayout.MaxWidth(48)) ){
											AddNewMultipleChoiceOption( theObject );
										}
									}
										
								EditorGUILayout.EndHorizontal();
									
								// Add indent
								GUILayout.Label("", GUILayout.MaxWidth(5));
								
								
							}
							
							// Show Audio options if we are NOT using the Logic screen
							if( theObject.screen.dialogStyle != DIALOGSTYLE.Logic ){
						
								// Audio FilePath
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(fileLabel, GUILayout.MaxWidth(20),GUILayout.MinHeight(20),GUILayout.MaxHeight(20));
									theObject.screen.soundToLoad = EditorGUILayout.TextField("Audio Path: ", theObject.screen.soundToLoad); 
								EditorGUILayout.EndHorizontal();
								
								// Add indent
								GUILayout.Label("", GUILayout.MaxWidth(5));
						
								// Audio Pitch
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(audioLabel, GUILayout.MaxWidth(20),GUILayout.MinHeight(20),GUILayout.MaxHeight(20));
									theObject.screen.soundPitch = EditorGUILayout.FloatField("Pitch: ", theObject.screen.soundPitch, GUILayout.MinWidth(200) ); 
								EditorGUILayout.EndHorizontal();
								
							}
					
							
						// Vertical
						EditorGUILayout.EndVertical();
						
						// Add indent
						GUILayout.Label("", GUILayout.MaxWidth(5));
						
					// Horizontal
					EditorGUILayout.EndHorizontal();
					
					// Add Space
					EditorGUILayout.Space();
					
					// Add Space
					EditorGUILayout.Space();
			
				// End Box
				//GUILayout.EndHorizontal();
			
			}
		
		
			// ---------------------------------------------------------------------------------------------
			//	TAB 1 - NAVIGATION
			// ---------------------------------------------------------------------------------------------
			
			else if ( theObject.tab == 1 ) { // The selected tab is "Navigation"
			
				// Box
				//GUILayout.BeginVertical ("box", GUILayout.MaxWidth(3000) );
			
					// Add Space
					EditorGUILayout.Space();
				
					// TITLE
					EditorGUILayout.BeginHorizontal();
						EditorGUILayout.BeginHorizontal("", GUILayout.MaxWidth(10));
							GUILayout.Label("  Dialog Screen Setup - " + selStrings[theObject.tab], "BoldLabel", GUILayout.MinWidth(210), GUILayout.MaxWidth(210));
						EditorGUILayout.EndHorizontal();
						GUILayout.FlexibleSpace();
						
						// Fix DialogID if there is anything wrong.
						if ( theObject.dialogID == null || theObject.dialogID < 1 ) {
							theObject.dialogID = 1;
						} 
						
						//theObject.dialogID = System.Int32.Parse( EditorGUILayout.TextField("Dialog ID: ", theObject.dialogID.ToString()) );
						GUILayout.Label(speechLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
						theObject.dialogID = EditorGUILayout.IntField("Dialog ID: ", theObject.dialogID,  GUILayout.MinWidth(200),GUILayout.MaxHeight(20) );
						
						
						GUILayout.Label("", GUILayout.MaxWidth(10));
					EditorGUILayout.EndHorizontal();
					EditorGUILayout.Space();
				
					// Horizontal
					EditorGUILayout.BeginHorizontal();
					
						// Add indent
						GUILayout.Label("", GUILayout.MaxWidth(5));
						
						// Add the Portrait / Icon
						EditorGUILayout.BeginVertical(GUILayout.MaxWidth(105));
						
							// Use Icons
							if( theObject.screen.dialogStyle == DIALOGSTYLE.DataEntry ){
								
								GUILayout.Label(dataEntryIcon, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100) );
								theObject.screen.portrait = null;
								
							} else if( theObject.screen.dialogStyle == DIALOGSTYLE.Password){
								
								GUILayout.Label(passwordIcon, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100));
								theObject.screen.portrait = null;
								
							} else if( theObject.screen.dialogStyle == DIALOGSTYLE.Logic ){
								
								GUILayout.Label(logicIcon, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100));
								theObject.screen.portrait = null;
										
							// Show portrait	
							} else {
						
								GUILayout.Label("Portrait Icon:", GUILayout.MinWidth(100), GUILayout.MaxWidth(100));
								theObject.screen.portrait = EditorGUILayout.ObjectField(theObject.screen.portrait, Texture2D, false, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100));
								
								// If the Dialog Cast is available, show the View Cast button
								if( DCs && DCs.length>0 ){ 
									EditorGUILayout.BeginHorizontal(GUILayout.MaxWidth(100));
									
										GUILayout.Label(cameraLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
										if( GUILayout.Button("View Cast", GUILayout.MinWidth(75), GUILayout.MaxWidth(75),GUILayout.MaxHeight(20) ) ){
											browseMode = true;
											output = BrowseOutput.Portrait;
										}
									EditorGUILayout.EndHorizontal();
									
									EditorGUILayout.BeginHorizontal(GUILayout.MaxWidth(100));
									
										GUILayout.Label(deleteLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
										if( GUILayout.Button("No Portrait", GUILayout.MinWidth(75), GUILayout.MaxWidth(75),GUILayout.MaxHeight(20) ) ){
											browseMode = false;
											theObject.screen.portrait = null;
										}
									EditorGUILayout.EndHorizontal();
								}
							}
							
						// End of Portrait
						EditorGUILayout.EndVertical();
			
						// Add indent
						//GUILayout.Label("", GUILayout.MaxWidth(5));
						
						// Vertical
						EditorGUILayout.BeginVertical();
							
							// Add Space
							EditorGUILayout.Space();
							EditorGUILayout.Space();
							
							// USE STANDARD NEXT BUTTON DIALOG STYLE
							if ( theObject.screen.dialogStyle == DIALOGSTYLE.NextButton){
								
								// Options Label
								GUILayout.Label( "Next Button (Auto-Localized)", "BoldLabel", GUILayout.MaxWidth(320));

								// Add Space
								EditorGUILayout.Space();
															
								// screen To Load Next
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(nextLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.screenToLoadOnNext = EditorGUILayout.IntField("Next Screen: ", theObject.navigation.screenToLoadOnNext );
								EditorGUILayout.EndHorizontal();
	
								// Add Space
								EditorGUILayout.Space();
								
								// Seconds To Display
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(timeLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.secondsToDisplay = EditorGUILayout.IntField("Seconds To Show: ", theObject.navigation.secondsToDisplay ); 
								EditorGUILayout.EndHorizontal();
							
								// Add Space
								EditorGUILayout.Space();
														
								// Hide Next Button
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(hideLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.hideNextButton = EditorGUILayout.Toggle("Hide Next UI Button: ", theObject.navigation.hideNextButton );
								EditorGUILayout.EndHorizontal();
							
							// USE YES OR NO OPTIONS
							} else if (theObject.screen.dialogStyle == DIALOGSTYLE.YesOrNo){
								
								// Options Label
								GUILayout.Label( "Yes / No Buttons (Auto-Localized)", "BoldLabel", GUILayout.MaxWidth(320));
								
								// Add Space
								EditorGUILayout.Space();
								
								// screen To Load On Yes
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(nextLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.screenToLoadOnYes = EditorGUILayout.IntField("Yes Screen: ", theObject.navigation.screenToLoadOnYes );
								EditorGUILayout.EndHorizontal();
								
								// Add Space
								EditorGUILayout.Space();
								
								// screen To Load On No
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(nextLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.screenToLoadOnNo = EditorGUILayout.IntField("No Screen: ", theObject.navigation.screenToLoadOnNo );
								EditorGUILayout.EndHorizontal();
							
							
							// USE CUSTOM SINGLE BUTTON DIALOG STYLE
							} else if ( theObject.screen.dialogStyle == DIALOGSTYLE.OneButton || theObject.screen.dialogStyle == DIALOGSTYLE.DataEntry ){
								
								// Options Label
								if ( theObject.screen.dialogStyle == DIALOGSTYLE.OneButton ){
									GUILayout.Label( "One Button Dialog", "BoldLabel", GUILayout.MaxWidth(320));
								} else if( theObject.screen.dialogStyle == DIALOGSTYLE.DataEntry ){
									GUILayout.Label( "Data Entry Dialog", "BoldLabel", GUILayout.MaxWidth(320));
								}
								
								// Add Space
								EditorGUILayout.Space();
															
								// screen To Load Next
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(nextLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.screenToLoadOnNext = EditorGUILayout.IntField(theObject.screen.customButton1+" Screen: ", theObject.navigation.screenToLoadOnNext );
								EditorGUILayout.EndHorizontal();
								
								// Show extra options on the One Button Mode
								if ( theObject.screen.dialogStyle == DIALOGSTYLE.OneButton ){
									
									// Add Space
									EditorGUILayout.Space();
									
									// Seconds To Display
									EditorGUILayout.BeginHorizontal();
										GUILayout.Label(timeLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
										theObject.navigation.secondsToDisplay = EditorGUILayout.IntField("Seconds To Show: ", theObject.navigation.secondsToDisplay ); 
									EditorGUILayout.EndHorizontal();
									
									// Add Space
									EditorGUILayout.Space();
																
									// Hide Next Button
									EditorGUILayout.BeginHorizontal();
										GUILayout.Label(hideLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
										theObject.navigation.hideNextButton = EditorGUILayout.Toggle("Hide Custom UI Button: ", theObject.navigation.hideNextButton );
									EditorGUILayout.EndHorizontal();
							
								}
							
							// USE CUSTOM TWO BUTTON DIALOG STYLE
							} else if (theObject.screen.dialogStyle == DIALOGSTYLE.TwoButtons){
								
								// Options Label
								GUILayout.Label( "Two Button Dialog", "BoldLabel", GUILayout.MaxWidth(320));
								
								// Add Space
								EditorGUILayout.Space();
								
								// screen To Load On Yes
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(nextLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.screenToLoadOnYes = EditorGUILayout.IntField(theObject.screen.customButton1+" Screen: ", theObject.navigation.screenToLoadOnYes );
								EditorGUILayout.EndHorizontal();
								
								// Add Space
								EditorGUILayout.Space();
								
								// screen To Load On No
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(nextLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.screenToLoadOnNo = EditorGUILayout.IntField(theObject.screen.customButton2+" Screen: ", theObject.navigation.screenToLoadOnNo );
								EditorGUILayout.EndHorizontal();
								
							}

							// USE MULTIPLE BUTTON DIALOG STYLE
							else if (theObject.screen.dialogStyle == DIALOGSTYLE.MultipleButtons){
							
								// Options Label
								GUILayout.Label( "Multiple Button Dialog", "BoldLabel", GUILayout.MaxWidth(320));
								
								// Add Space
								EditorGUILayout.Space();
								
								// If the size of the navigation multiple Buttons array doesn't match the main one ..
								if( theObject.navigation.multipleButtons != null &&
									theObject.navigation.multipleButtons.length != theObject.screen.multipleButtons.length
								){
									// Create a new one that matches!
									theObject.navigation.multipleButtons = new int[theObject.screen.multipleButtons.length];
								}
								
								// Make sure these options are valid
								if(theObject.screen.multipleButtons != null && theObject.navigation.multipleButtons != null && theObject.navigation.multipleButtons.length > 0 ){
									var multipleOptionCountNav : int = 0;
									for( var navOption : int in theObject.navigation.multipleButtons ){
										if(navOption != null){
											
											// Option Name
											EditorGUILayout.BeginHorizontal();
												GUILayout.Label(nextLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
												
												// Shorten the label to make it look better in the editor
												if( theObject.screen.multipleButtons[multipleOptionCountNav].length > 20 ){
													navOption = EditorGUILayout.IntField(theObject.screen.multipleButtons[multipleOptionCountNav].Substring(0,20)+".. ", navOption); 
												} else {
												
													navOption = EditorGUILayout.IntField(theObject.screen.multipleButtons[multipleOptionCountNav]+" ", navOption); 
												
												}
												
											EditorGUILayout.EndHorizontal();
											
											// Add Space
											EditorGUILayout.Space();
											EditorGUILayout.Space();
											
											// increment count
											multipleOptionCountNav++;
											
										}
									}
								} 
							}
								
							// USE PASSWORD OPTIONS
							else if (theObject.screen.dialogStyle == DIALOGSTYLE.Password){
								
								// Options Label
								GUILayout.Label( "Password Results", "BoldLabel", GUILayout.MaxWidth(320));
								
								// Add Space
								EditorGUILayout.Space();
								
								// screen To Load On Yes
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(nextLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.screenToLoadOnYes = EditorGUILayout.IntField("Correct Screen: ", theObject.navigation.screenToLoadOnYes );
								EditorGUILayout.EndHorizontal();
								
								// Add Space
								EditorGUILayout.Space();
								
								// screen To Load On No
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(nextLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.screenToLoadOnNo = EditorGUILayout.IntField("Incorrect Screen: ", theObject.navigation.screenToLoadOnNo );
								EditorGUILayout.EndHorizontal();
							
							}
							
							// Show the Hide Next Button UI in the options section
							if ( !theObject.navigation.useYesNoOptions ){
								
								
							}
							
							// Show the info message if we are using the Logic Mode
							if( theObject.screen.dialogStyle == DIALOGSTYLE.Logic ){
							
								// Warning info
								EditorGUILayout.Space();
								EditorGUILayout.BeginHorizontal();
									GUILayout.FlexibleSpace();
									EditorGUILayout.BeginHorizontal(  GUILayout.MinHeight(16), GUILayout.MaxHeight(16), GUILayout.MinWidth(530), GUILayout.MaxWidth(530) );
										
										//GUILayout.Label("", GUILayout.MinWidth(0), GUILayout.MaxWidth(0), GUILayout.MinHeight(5), GUILayout.MaxHeight(5)); // weird spacing fix.
										EditorGUILayout.BeginHorizontal();
										GUILayout.Label(warningIcon, GUILayout.MinWidth(64), GUILayout.MaxWidth(64), GUILayout.MinHeight(64), GUILayout.MaxHeight(64));
										EditorGUILayout.BeginVertical();
										
											GUILayout.Label("Logic Mode",  "boldLabel");
											GUILayout.Label("The Navigation tab is not used while using the \"Logic\" Dialog Style.");
										EditorGUILayout.EndVertical();
										EditorGUILayout.EndHorizontal();
									EditorGUILayout.EndHorizontal();
									GUILayout.FlexibleSpace();
								EditorGUILayout.EndHorizontal();
							
							// Show the extra options if we are not using the Logic style
							} else {
								
								// Add Space
								EditorGUILayout.Space();
							
								// Options Label
								GUILayout.Label("Options", "BoldLabel", GUILayout.MaxWidth(220));
							
								// Add Space
								EditorGUILayout.Space();
								
								// No Portrait Fade In
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(fadeInLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.noPortraitFadeIn = EditorGUILayout.Toggle("No Portrait Fade In: ", theObject.navigation.noPortraitFadeIn );
								EditorGUILayout.EndHorizontal();
								
								// Add Space
								EditorGUILayout.Space();
								
								// No Portrait Fade Out
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(fadeOutLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.noPortraitFadeOut = EditorGUILayout.Toggle("No Portrait Fade Out: ", theObject.navigation.noPortraitFadeOut );
								EditorGUILayout.EndHorizontal();
								
								
								// Add Space
								EditorGUILayout.Space();
								
								// Is This The Last Dialog
								EditorGUILayout.BeginHorizontal();
									GUILayout.Label(stopLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
									theObject.navigation.endDialogAfterThis = EditorGUILayout.Toggle("Last Dialog: ", theObject.navigation.endDialogAfterThis );
								EditorGUILayout.EndHorizontal();
								
								// Allow us to destroy this Dialog object if this is the last dialog screen
								if( theObject.navigation.endDialogAfterThis ){
									
									// Add Space
									EditorGUILayout.Space();
									
									// Destroy GameObject At End
									EditorGUILayout.BeginHorizontal();
										GUILayout.Label(deleteLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
										theObject.navigation.destroyAtEnd  = EditorGUILayout.Toggle("Destroy At End: ", theObject.navigation.destroyAtEnd );
									EditorGUILayout.EndHorizontal();
								
								// Otherwise always set it to false to keep this clean	
								} else {
									theObject.navigation.destroyAtEnd = false;
								}
							
							}
													
						// Vertical
						EditorGUILayout.EndVertical();
					
						// Add indent
						GUILayout.Label("", GUILayout.MaxWidth(5));
						
					// Horizontal
					EditorGUILayout.EndHorizontal();
					
					// Add Space
					EditorGUILayout.Space();
			
				// End Box
				//GUILayout.EndHorizontal();
			
			}
			
			// ---------------------------------------------------------------------------------------------
			//	TAB 2 - ACTION
			// ---------------------------------------------------------------------------------------------
			
			else if ( theObject.tab == 2 ) { // The selected tab is "Actions"
			
				// Box
				//GUILayout.BeginVertical ("box", GUILayout.MaxWidth(3000) );
			
					// Add Space
					EditorGUILayout.Space();
				
				
					// TITLE
					EditorGUILayout.BeginHorizontal();
						EditorGUILayout.BeginHorizontal("", GUILayout.MaxWidth(10));
							GUILayout.Label("  Dialog Screen Setup - " + selStrings[theObject.tab], "BoldLabel", GUILayout.MinWidth(190), GUILayout.MaxWidth(190));
						EditorGUILayout.EndHorizontal();
						GUILayout.FlexibleSpace();
						
						// Fix DialogID if there is anything wrong.
						if ( theObject.dialogID == null || theObject.dialogID < 1 ) {
							theObject.dialogID = 1;
						} 
						
						//theObject.dialogID = System.Int32.Parse( EditorGUILayout.TextField("Dialog ID: ", theObject.dialogID.ToString()) );
						GUILayout.Label(speechLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
						theObject.dialogID = EditorGUILayout.IntField("Dialog ID: ", theObject.dialogID,  GUILayout.MinWidth(200),GUILayout.MaxHeight(20) );
						
						
						
						GUILayout.Label("", GUILayout.MaxWidth(10));
					EditorGUILayout.EndHorizontal();
					EditorGUILayout.Space();
				
					// Horizontal
					EditorGUILayout.BeginHorizontal();
					
						// Add indent
						GUILayout.Label("", GUILayout.MaxWidth(5));
						
						// Add the Portrait / Icon
						EditorGUILayout.BeginVertical(GUILayout.MaxWidth(105));
						
							// Use Icons
							if( theObject.screen.dialogStyle == DIALOGSTYLE.DataEntry ){
								
								GUILayout.Label(dataEntryIcon, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100) );
								theObject.screen.portrait = null;
								
							} else if( theObject.screen.dialogStyle == DIALOGSTYLE.Password){
								
								GUILayout.Label(passwordIcon, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100));
								theObject.screen.portrait = null;
								
							} else if( theObject.screen.dialogStyle == DIALOGSTYLE.Logic ){
								
								GUILayout.Label(logicIcon, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100));
								theObject.screen.portrait = null;
										
							// Show portrait	
							} else {
						
								GUILayout.Label("Portrait Icon:", GUILayout.MinWidth(100), GUILayout.MaxWidth(100));
								theObject.screen.portrait = EditorGUILayout.ObjectField(theObject.screen.portrait, Texture2D, false, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100));
								
								// If the Dialog Cast is available, show the View Cast button
								if( DCs && DCs.length>0 ){ 
									EditorGUILayout.BeginHorizontal(GUILayout.MaxWidth(100));
									
										GUILayout.Label(cameraLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
										if( GUILayout.Button("View Cast", GUILayout.MinWidth(75), GUILayout.MaxWidth(75),GUILayout.MaxHeight(20) ) ){
											browseMode = true;
											output = BrowseOutput.Portrait;
										}
									EditorGUILayout.EndHorizontal();
									
									EditorGUILayout.BeginHorizontal(GUILayout.MaxWidth(100));
									
										GUILayout.Label(deleteLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
										if( GUILayout.Button("No Portrait", GUILayout.MinWidth(75), GUILayout.MaxWidth(75),GUILayout.MaxHeight(20) ) ){
											browseMode = false;
											theObject.screen.portrait = null;
										}
									EditorGUILayout.EndHorizontal();
								}
							}
							
						// End of Portrait
						EditorGUILayout.EndVertical();
			
						// Vertical
						EditorGUILayout.BeginVertical();
							
							// Add some extra space so it alligns with the portrait
							EditorGUILayout.Space();
							EditorGUILayout.Space();
							
							// Show the info message if we are using the Logic Mode
							if( theObject.screen.dialogStyle == DIALOGSTYLE.Logic ){
							
								// Warning info
								EditorGUILayout.Space();
								EditorGUILayout.BeginHorizontal();
									GUILayout.FlexibleSpace();
									EditorGUILayout.BeginHorizontal(  GUILayout.MinHeight(16), GUILayout.MaxHeight(16), GUILayout.MinWidth(530), GUILayout.MaxWidth(530) );
										
										//GUILayout.Label("", GUILayout.MinWidth(0), GUILayout.MaxWidth(0), GUILayout.MinHeight(5), GUILayout.MaxHeight(5)); // weird spacing fix.
										EditorGUILayout.BeginHorizontal();
										GUILayout.Label(warningIcon, GUILayout.MinWidth(64), GUILayout.MaxWidth(64), GUILayout.MinHeight(64), GUILayout.MaxHeight(64));
										EditorGUILayout.BeginVertical();
										
											GUILayout.Label("Logic Mode",  "boldLabel");
											GUILayout.Label("The Actions tab is not used while using the 'Logic' Dialog Style.");
										EditorGUILayout.EndVertical();
										EditorGUILayout.EndHorizontal();
									EditorGUILayout.EndHorizontal();
									GUILayout.FlexibleSpace();
								EditorGUILayout.EndHorizontal();
							
							// Show the extra options if we are not using the Logic style
							} else {
							
								// Show Tabs
								EditorGUILayout.BeginVertical("Box");
								EditorGUILayout.Space();
									EditorGUILayout.BeginHorizontal();
										
										GUILayout.Label("", GUILayout.MaxWidth(5));
										
										// Create a GUI Content Array to use with the Action Tabs
										var actionGC : GUIContent[] = new GUIContent[6];
										for( var gci : int; gci<actionGC.length; gci++ ){
											actionGC[gci] = new GUIContent();
											if(actionStrings[gci]!=null){	actionGC[gci].tooltip = actionStrings[gci]; }
											if(actionImages[gci]!=null){	actionGC[gci].image = actionImages[gci]; }	
										}
										
					           			theObject.actionTab = GUILayout.SelectionGrid (theObject.actionTab, actionGC, 6, GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(400));
					           			GUILayout.Label("", GUILayout.MaxWidth(5));
									
									EditorGUILayout.EndHorizontal();
									
									EditorGUILayout.Space();
									
								EditorGUILayout.EndVertical();
	
								// Add Space
								//EditorGUILayout.Space();
								EditorGUILayout.Space();
								
								// ---------------------------------------------------------------------------------------------
								
								// DO THE ADVANCED TAB
								// GameObjects
								if(theObject.actionTab == 0){
									DoGamObjectActionsTab(theObject);
									
								
								// Background
								} else if(theObject.actionTab == 1){	
									DoSceneActionsTab(theObject);
									
								
								// Actors
								} else if(theObject.actionTab == 2){	
									DoSceneActorsTab(theObject);
									
										
								// Audio	
								} else if(theObject.actionTab == 3){
									DoSceneAudioTab(theObject);
									
									
								// Tokens
								} else if(theObject.actionTab == 4){
									DoTokensTab(theObject);
								
									
								// 3RD PARTY TOOLS
								} else if(theObject.actionTab == 5){
									//DoTokensTab(theObject);
									
									//EditorGUILayout.Space();
									GUILayout.Label("3rd Party Tools", "BoldLabel");
									GUILayout.Label("Select a supported 3rd party tool to view it's actions.");
									EditorGUILayout.Space();
									
									// Create third party GUI Content Array
									var thirdPartyGC : GUIContent[] = new GUIContent[1];
										for( var tpgci : int; tpgci<thirdPartyGC.length; tpgci++ ){
											thirdPartyGC[tpgci] = new GUIContent();
											if(thirdPartyTools[tpgci]!=null){	thirdPartyGC[tpgci].text = "   "+thirdPartyTools[tpgci]; }
											if(thirdPartyTools[tpgci]!=null){	thirdPartyGC[tpgci].tooltip = thirdPartyTools[tpgci]; }
											if(thirdPartyIcons[tpgci]!=null){	thirdPartyGC[tpgci].image = thirdPartyIcons[tpgci]; }	
										}
									
									// Create selection box for third party tools
									theObject.thirdPartyActionTab = GUILayout.SelectionGrid (theObject.thirdPartyActionTab, thirdPartyGC, 4, GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(400));
									
									// Do uSequencer
									if( theObject.thirdPartyActionTab == 0){
										DoUSequencerTab(theObject);
									}
									
								}
							
							}
				
					// ---------------------------------------------------------------------------------------------

					// Vertical
					EditorGUILayout.EndVertical();
					
				// Add indent
				GUILayout.Label("", GUILayout.MaxWidth(5));
				
				// Horizontal
				EditorGUILayout.EndHorizontal();
				
				// Add Space
				EditorGUILayout.Space();	
				
				
				// End Box
				//GUILayout.EndHorizontal();
				
				
			} 
			
			
			// ---------------------------------------------------------------------------------------------
			//	TAB 3 - LOCALIZATION
			// ---------------------------------------------------------------------------------------------
			
			else if ( theObject.tab == 3 ) { // The selected tab is "Localization"
			
				// Box
				//GUILayout.BeginVertical ("box", GUILayout.MaxWidth(3000) );
			
					// Add Space
					EditorGUILayout.Space();
				
					// TITLE
					EditorGUILayout.BeginHorizontal();
						EditorGUILayout.BeginHorizontal("", GUILayout.MaxWidth(10));
							GUILayout.Label("  Dialog Screen Setup - " + selStrings[theObject.tab], "BoldLabel", GUILayout.MinWidth(220), GUILayout.MaxWidth(220));
						EditorGUILayout.EndHorizontal();
						GUILayout.FlexibleSpace();
						
						// Fix DialogID if there is anything wrong.
						if ( theObject.dialogID == null || theObject.dialogID < 1 ) {
							theObject.dialogID = 1;
						} 
						
						//theObject.dialogID = System.Int32.Parse( EditorGUILayout.TextField("Dialog ID: ", theObject.dialogID.ToString()) );
						GUILayout.Label(speechLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
						theObject.dialogID = EditorGUILayout.IntField("Dialog ID: ", theObject.dialogID,  GUILayout.MinWidth(200),GUILayout.MaxHeight(20) );
						
						GUILayout.Label("", GUILayout.MaxWidth(10));
					EditorGUILayout.EndHorizontal();
					EditorGUILayout.Space();
					
					
					//selectLocalization
					
					// SELECT LANGUAGE
					// Horizontal
					EditorGUILayout.BeginHorizontal();
						GUILayout.Label("", GUILayout.MaxWidth(5));	
							
							EditorGUILayout.BeginHorizontal("box");
						
							EditorGUILayout.BeginHorizontal();
								GUILayout.Label("", GUILayout.MaxWidth(5));
								
								GUILayout.Label(selectLocalization, GUILayout.MaxWidth(64));
								
								// Cache the old language selection
								var languageChanged : int = theObject.selLanguage;
								
								EditorGUILayout.BeginVertical();
									GUILayout.Label(" Select Language", "BoldLabel" );
									/*
									selLanguageStrings = ["Chinese", "Korean", "Japanese", "Spanish", "Italian","German", "French", "Portuguese", "Russian"];
									selLanguageImages = [ chinaFlag, koreaFlag, japanFlag, spainFlag, italyFlag, germanyFlag, franceFlag, portugalFlag, russiaFlag ];
									
									var languageGUIContentArray : GUIContent[] = new GUIContent[9];
									var langCounter : int = 0;
									for( var theLangContent : GUIContent in languageGUIContentArray ){
										theLangContent = new GUIContent();
										theLangContent.text = selLanguageStrings[langCounter];
										theLangContent.image = selLanguageImages[langCounter];
										
										// Increment
										langCounter++;
									}
									*/
									
									theObject.selLanguage = GUILayout.SelectionGrid (theObject.selLanguage, selLanguageStrings, 5);
								//	GUILayout.Label("", GUILayout.MaxWidth(5));	
								EditorGUILayout.EndVertical();
								
								// If we've made a new language selection, Apply this language to ALL dialogScreens on this gameObject.
								if( languageChanged != theObject.selLanguage ){
									var dScreens : Component[] = theObject.gameObject.GetComponents(DialogScreen);
									for( var dScreen : DialogScreen in dScreens){
										if(dScreen!=null){
											dScreen.selLanguage = theObject.selLanguage;
										}
									}
								}
								
								GUILayout.Label("", GUILayout.MaxWidth(5));				
							EditorGUILayout.EndHorizontal();
						EditorGUILayout.EndHorizontal();
						GUILayout.Label("", GUILayout.MaxWidth(5));	
					EditorGUILayout.EndHorizontal();
					
					// Setup the Translation reference
					var theTranslation : DS_Language;
					
					// REFERENCE THE CORRECT LANGUAGE
					if ( theObject.selLanguage == 0 ) {	// Chinese
						theTranslation = theObject.localization.chinese;
					} else if ( theObject.selLanguage == 1 ) {	// Korean
						theTranslation = theObject.localization.korean;
					} else if ( theObject.selLanguage == 2 ) {	// Japanese
						theTranslation = theObject.localization.japanese;
					} else if ( theObject.selLanguage == 3 ) {	// Spanish
						theTranslation = theObject.localization.spanish;
					} else if ( theObject.selLanguage == 4 ) {	// Italian
						theTranslation = theObject.localization.italian;	
					} else if ( theObject.selLanguage == 5 ) {	// German
						theTranslation = theObject.localization.german;
					} else if ( theObject.selLanguage == 6 ) {	// French
						theTranslation = theObject.localization.french;
					} else if ( theObject.selLanguage == 7 ) {	// Portuguese
						theTranslation = theObject.localization.portuguese;
					} else if ( theObject.selLanguage == 8 ) {	// Russian
						theTranslation = theObject.localization.russian;
					}
					
					
					// Make sure we've selected a language
					if ( theTranslation != null ) {
					
						// SPLIT UP THE VIEW
						EditorGUILayout.BeginHorizontal();
							GUILayout.Label("", GUILayout.MaxWidth(5));	
							EditorGUILayout.BeginVertical();
						
								// Space
								GUILayout.Label("", GUILayout.MaxHeight(5));
							
								// Title,
								EditorGUILayout.BeginHorizontal();
								
									GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
									GUILayout.Label(ukFlag, GUILayout.MaxWidth(20));
									GUILayout.Label("English", "BoldLabel", GUILayout.MaxWidth(200));
									
									// REFERENCE THE CORRECT LANGUAGE
									if ( theObject.selLanguage == 0 ) {	// Chinese
										GUILayout.Label(chinaFlag, GUILayout.MaxWidth(20));
									} else if ( theObject.selLanguage == 1 ) {	// Korean
										GUILayout.Label(koreaFlag, GUILayout.MaxWidth(20));
									} else if ( theObject.selLanguage == 2 ) {	// Japanese
										GUILayout.Label(japanFlag, GUILayout.MaxWidth(20));
									} else if ( theObject.selLanguage == 3 ) {	// Spanish
										GUILayout.Label(spainFlag, GUILayout.MaxWidth(20));
									} else if ( theObject.selLanguage == 4 ) {	// Italian
										GUILayout.Label(italyFlag, GUILayout.MaxWidth(20));	
									} else if ( theObject.selLanguage == 5 ) {	// German
										GUILayout.Label(germanyFlag, GUILayout.MaxWidth(20));
									} else if ( theObject.selLanguage == 6 ) {	// French
										GUILayout.Label(franceFlag, GUILayout.MaxWidth(20));
									} else if ( theObject.selLanguage == 7 ) {	// Portuguese
										GUILayout.Label(portugalFlag, GUILayout.MaxWidth(20));
									} else if ( theObject.selLanguage == 8 ) {	// Russian
										GUILayout.Label(russiaFlag, GUILayout.MaxWidth(20));
									}
									
									GUILayout.Label("Translation ("+selLanguageStrings[theObject.selLanguage]+")", "BoldLabel"); 
									GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
								
								EditorGUILayout.EndHorizontal();
								
								// Add Space
								EditorGUILayout.Space();
							
								// IF we are using Logic ..
								if( theObject.screen.dialogStyle == DIALOGSTYLE.Logic){
									
									// Make sure that the logic statements are valid and they match up - then create the loop
									if( theObject.screen.logicStatements != null && 
										theObject.screen.logicStatements.length > 0 &&
										theTranslation.logicStatementCompare != null && 
										theTranslation.logicStatementCompare.length == theObject.screen.logicStatements.length
									){
										var localizedEventLooper : int = 0; // Helper
										for(var localizedEvent : LogicStatements in theObject.screen.logicStatements ){
											if(localizedEvent!=null){
											
												// Localized field
												EditorGUILayout.BeginHorizontal();
											
													GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
													GUILayout.Label(keyLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));	// Label
													EditorGUILayout.TextArea(theObject.screen.logicStatements[localizedEventLooper].compare, GUILayout.MaxWidth(200));	// Label
													if( theTranslation.logicStatementCompare[localizedEventLooper] != null ){
														theTranslation.logicStatementCompare[localizedEventLooper] = EditorGUILayout.TextField(theTranslation.logicStatementCompare[localizedEventLooper]);
													}
											
												EditorGUILayout.EndHorizontal();
												
												// Increment looper
												localizedEventLooper++;
											}
										}
									} else {
									
										// DEAL WITH SYNCING PROBLEMS
										// The translation doesn't have the same array length as the main screen version. We need to recreate it.
										if( theObject.screen.logicStatements != null && 
											theObject.screen.logicStatements.length > 0 &&
											theTranslation.logicStatementCompare != null && 
											theTranslation.logicStatementCompare.length != theObject.screen.logicStatements.length 
										){
											
											// Setup a new Array that is the correct size
											var newStatements : String[] = new String[theObject.screen.logicStatements.length];
										
											// Loop through the localized Array, and copy any info that was already inside of it!
											var i : int = 0;
											for( var stringItem : String in theTranslation.logicStatementCompare ){
												
												// If the translation has an entry for this index, create new
												//newStatements[i] = "";
												stringItem = "";
												
												// Increment the counter
												i++;
											}
										
											// Replace the Translation array with these newly built one!
											theTranslation.logicStatementCompare = newStatements;
										
											Debug.Log("DIALOG SCREEN EDITOR: Fixed Array Sync problem in current localization! [Logic]");
										}
									}
								
								// If we're not using the Logic Mode, we can show the Actor name	
								} else {
							
									// Actor Name
									EditorGUILayout.BeginHorizontal();
									
										GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
										GUILayout.Label(nameLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));	// Label
										EditorGUILayout.TextArea(theObject.screen.actorName, GUILayout.MaxWidth(200));	// Label
										theTranslation.actorName = EditorGUILayout.TextField(theTranslation.actorName);
									
									EditorGUILayout.EndHorizontal();
								
								}
					
								// Show Dialog Text if we're not working with Multiple Buttons or Data Entry
								if (theObject.screen.dialogStyle != DIALOGSTYLE.MultipleButtons && 
									theObject.screen.dialogStyle != DIALOGSTYLE.DataEntry &&
									theObject.screen.dialogStyle != DIALOGSTYLE.Password &&
									theObject.screen.dialogStyle != DIALOGSTYLE.Logic
								){
									
									// Dialog Text
									EditorGUILayout.BeginHorizontal();
									
									
										GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
										GUILayout.Label(speechLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(60));	// Label
										EditorGUILayout.TextArea(theObject.screen.dialogText, GUILayout.MaxWidth(200), GUILayout.MinHeight(60));	// Label
										theTranslation.dialogText = EditorGUILayout.TextField("", theTranslation.dialogText, GUILayout.MinHeight(60) );
										
									
									EditorGUILayout.EndHorizontal();
									
									// Add Space
									EditorGUILayout.Space();
								
								// USE MULTIPLE BUTTON DIALOG STYLE
								} else if (theObject.screen.dialogStyle == DIALOGSTYLE.MultipleButtons){
									
									// Add Space
									EditorGUILayout.Space();
									
									// Make sure these options are valid
									if(theObject.screen.multipleButtons != null && theTranslation.multipleButtons != null && theTranslation.multipleButtons.length == theObject.screen.multipleButtons.length ){
										var multipleLangCount : int = 0;
										for( var langOption : String in theTranslation.multipleButtons ){
											if(langOption != null){
												
												// Option Name
												EditorGUILayout.BeginHorizontal();
													
													GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
													GUILayout.Label(buttonLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));	// Label
													EditorGUILayout.TextArea(theObject.screen.multipleButtons[multipleLangCount], GUILayout.MaxWidth(200) );
													langOption = EditorGUILayout.TextField(langOption);
													
												EditorGUILayout.EndHorizontal();

												
												// increment count
												multipleLangCount++;
												
											}
										}
										
										// Add a space
										EditorGUILayout.Space();
										
									// DEAL WITH SYNC PROBLEMS:
									} else {
										
										// PROBLEM: The localized string array length doesn't match the dialog screen array!
										if( theObject.screen.multipleButtons != null && theTranslation.multipleButtons != null && 
											theTranslation.multipleButtons.length != theObject.screen.multipleButtons.length ){
										
											// Setup a new Array that is the correct size
											var newMB : String[] = new String[theObject.screen.multipleButtons.length];
										
											// Loop through the localized Array, and copy any info that was already inside of it!
											var i2 : int = 0;
											for( var stringItem2 : String in theTranslation.multipleButtons ){
												
												// If the translation has an entry for this index, copy into the new array
												if( theTranslation.multipleButtons[i2] != null ){
													newMB[i2] = theTranslation.multipleButtons[i2];
												}
												
												// Increment the counter
												i2++;
											}
										
											// Replace the Translation array with these newly built one!
											theTranslation.multipleButtons = newMB;
										
											Debug.Log("DIALOG SCREEN EDITOR: Fixed Array Sync problem in current localization! [Multiple Screens]");
										
										}
									}
								}
								
								// Add the Default Value in Data Entry for Localization
								if( theObject.screen.dialogStyle == DIALOGSTYLE.DataEntry ){
									
									// Dialog Text
									EditorGUILayout.BeginHorizontal();
									
										GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
										GUILayout.Label(buttonLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));	// Label
										EditorGUILayout.TextArea(theObject.screen.dataEntryDefaultValue, GUILayout.MaxWidth(200));	// Label
										theTranslation.dataEntryDefaultValue = EditorGUILayout.TextField(theTranslation.dataEntryDefaultValue);
											
									EditorGUILayout.EndHorizontal();
								}
								
								// Add the Password Answer in "Password" mode for Localization (if we're not using tokens)
								else if( theObject.screen.dialogStyle == DIALOGSTYLE.Password && !theObject.screen.passwordMatchToToken ){
									
									// Dialog Text
									EditorGUILayout.BeginHorizontal();
									
										GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
										GUILayout.Label(buttonLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));	// Label
										EditorGUILayout.TextArea(theObject.screen.passwordAnswer, GUILayout.MaxWidth(200));	// Label
										theTranslation.passwordAnswer = EditorGUILayout.TextField(theTranslation.passwordAnswer);
											
									EditorGUILayout.EndHorizontal();
								}
								
								// Custom Button Right
								if ( theObject.screen.dialogStyle == DIALOGSTYLE.OneButton || theObject.screen.dialogStyle == DIALOGSTYLE.TwoButtons || theObject.screen.dialogStyle == DIALOGSTYLE.DataEntry ){
									
									// Dialog Text
									EditorGUILayout.BeginHorizontal();
									
										GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
										GUILayout.Label(buttonLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));	// Label
										EditorGUILayout.TextArea(theObject.screen.customButton1, GUILayout.MaxWidth(200));	// Label
										theTranslation.customButton1 = EditorGUILayout.TextField(theTranslation.customButton1);
									
									EditorGUILayout.EndHorizontal();
								}
								
								// Custom Button Left
								if ( theObject.screen.dialogStyle == DIALOGSTYLE.TwoButtons ){
									
									// Dialog Text
									EditorGUILayout.BeginHorizontal();
									
										GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
										GUILayout.Label(buttonLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));	// Label
										EditorGUILayout.TextArea(theObject.screen.customButton2, GUILayout.MaxWidth(200));	// Label
										theTranslation.customButton2 = EditorGUILayout.TextField(theTranslation.customButton2);
											
									EditorGUILayout.EndHorizontal();
								}
								
								
								// SHOW TOKENS
								if( theObject.actions.tokens != null && theObject.actions.tokens.length > 0){
								
									// Only add this extra space if we're not using Next or YesOrNo buttons
									if( theObject.screen.dialogStyle != DIALOGSTYLE.NextButton && theObject.screen.dialogStyle != DIALOGSTYLE.YesOrNo ){
										
										// Add Space
										EditorGUILayout.Space();
									}	
											
									// Loop through the tokens and find the ones that are localized!
									for( var theToken : DSTokenActions in theObject.actions.tokens ){
										if( theToken != null && theToken.localize ){
											
											// New Row
											EditorGUILayout.BeginHorizontal();
											
												GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
												GUILayout.Label(keyLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));	// Label
												EditorGUILayout.TextArea(theToken.argument, GUILayout.MaxWidth(200));	// Label
											
												// Setup the Translation reference
												var theArgument : String;
						
												// REFERENCE THE CORRECT TOKEN LOCALIZATION
												if ( theObject.selLanguage == 0 ) {	// Chinese
													theToken.localizedArgument.chinese = EditorGUILayout.TextField(theToken.localizedArgument.chinese);
												} else if ( theObject.selLanguage == 1 ) {	// Korean
													theToken.localizedArgument.korean = EditorGUILayout.TextField(theToken.localizedArgument.korean);
												} else if ( theObject.selLanguage == 2 ) {	// Japanese
													theToken.localizedArgument.japanese = EditorGUILayout.TextField(theToken.localizedArgument.japanese);
												} else if ( theObject.selLanguage == 3 ) {	// Spanish
													theToken.localizedArgument.spanish = EditorGUILayout.TextField(theToken.localizedArgument.spanish);
												} else if ( theObject.selLanguage == 4 ) {	// Italian
													theToken.localizedArgument.italian = EditorGUILayout.TextField(theToken.localizedArgument.italian);	
												} else if ( theObject.selLanguage == 5 ) {	// German
													theToken.localizedArgument.german = EditorGUILayout.TextField(theToken.localizedArgument.german);
												} else if ( theObject.selLanguage == 6 ) {	// French
													theToken.localizedArgument.french = EditorGUILayout.TextField(theToken.localizedArgument.french);
												} else if ( theObject.selLanguage == 7 ) {	// Portuguese
													theToken.localizedArgument.portuguese = EditorGUILayout.TextField(theToken.localizedArgument.portuguese);
												} else if ( theObject.selLanguage == 8 ) {	// Russian
													theToken.localizedArgument.russian = EditorGUILayout.TextField(theToken.localizedArgument.russian);
												}
											
											// End of row
											EditorGUILayout.EndHorizontal();
										
										}
									}
									
								}
								
								
								// Change Audio (if we're not using logic mode)
								if( theObject.screen.dialogStyle != DIALOGSTYLE.Logic ){
									
									EditorGUILayout.BeginHorizontal();
									
										GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
										GUILayout.Label(audioLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));	// Label
										GUILayout.Label("Override Audio", GUILayout.MaxWidth(200));	// Label
										theTranslation.changeAudio = EditorGUILayout.Toggle(theTranslation.changeAudio); 
									
									EditorGUILayout.EndHorizontal();
	
									// Show the Audio Options if we have enabled it.
									if ( theTranslation.changeAudio ){ 
										
										// Sound To Load
										EditorGUILayout.BeginHorizontal();
									
									
											GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
											GUILayout.Label(fileLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));	// Label
											GUILayout.Label("New Audio Filepath:", GUILayout.MaxWidth(200));	// Label
											theTranslation.soundToLoad = EditorGUILayout.TextField(theTranslation.soundToLoad); 
									
										EditorGUILayout.EndHorizontal();
										
										// Audio Pitch
										EditorGUILayout.BeginHorizontal();
									
									
											GUILayout.Label("", GUILayout.MaxWidth(5));		// Space
											GUILayout.Label(audioLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));	// Label
											GUILayout.Label("Pitch: ( Original = " +theObject.screen.soundPitch.ToString()+" )", GUILayout.MaxWidth(200));	// Label
											theTranslation.soundPitch = EditorGUILayout.FloatField(theTranslation.soundPitch); 
									
										EditorGUILayout.EndHorizontal();
										
										
									}
									
								// If we are using the Logic mode, default changing audio to false	
								} else {
									theTranslation.changeAudio = false;
								}
						
						
							// Close the group
							EditorGUILayout.EndVertical();
							GUILayout.Label("", GUILayout.MaxWidth(5));	
						EditorGUILayout.EndHorizontal();
					
					
					}
					
					// ---->
					
					// Add Space
					EditorGUILayout.Space();
			
				// End Box
				//GUILayout.EndHorizontal();
			
			}	// <-- End of check object		
			}
			
        } else {
        
        	 // Show default inspector property editor
       		DrawDefaultInspector ();
        	
        }
        
        // Save Changes
        if( Selection.activeGameObject && target != null ) {
			if (GUI.changed) {
				EditorUtility.SetDirty(target);
			}
        }
        
        // ADD NEW DIALOG SCREEN
        // If this is the last dialog screen, it creates a handy shortcut button to add a new dialog screen!
        if(!Application.isPlaying){
        
	        // Check if this is the last DialogScreen
	        var theScreens = theObject.gameObject.GetComponents(DialogScreen);
	        if(theScreens.length > 0 && theObject == theScreens[theScreens.length - 1] ){
	        	
	        	// Space
	        	EditorGUILayout.Space();
	        	EditorGUILayout.Space();
	        	
	        	EditorGUILayout.BeginHorizontal();
	        	
	        		// Space
	        		GUILayout.FlexibleSpace();
	        		
		        	// Add New Dialog
		        	var addDialogScreenContent : GUIContent = new GUIContent("   Add New Screen", addButton, "Click To Add Another DialogScreen Component!");
		        	if( GUILayout.Button(addDialogScreenContent, GUILayout.MaxWidth(175) ) ){
		        	
		        		AddNewDialogScreen(theObject);
		        		
		        	}
		        	
		        	// Space
	        		GUILayout.FlexibleSpace();
	        	
	        	EditorGUILayout.EndHorizontal();
	        	
	        	// Space
	        	EditorGUILayout.Space();
	        	EditorGUILayout.Space();
	        }
        }
	
	}
	

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	BROWSE CAST
	//	Allows us to select an image to use from the Cast
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function BrowseCast( theObject : DialogScreen, output : BrowseOutput ){
	
		// Make sure we have access to the DialogCast component
		if( DialogCast != null ){
				
			// Add Space
			EditorGUILayout.Space();
		
			// Title
			EditorGUILayout.BeginHorizontal();
					
				// Add Indent
				GUILayout.Label("", GUILayout.MaxWidth(5));
						
				// Label
				if( output == BrowseOutput.Portrait ||
					output == BrowseOutput.Actor1 ||
					output == BrowseOutput.Actor2 ||
					output == BrowseOutput.Actor3 ||
					output == BrowseOutput.Actor4 ||
					output == BrowseOutput.Actor5 ||
					output == BrowseOutput.Actor6 ||
					output == BrowseOutput.Actor7 ||
					output == BrowseOutput.Actor8 ||
					output == BrowseOutput.Actor9 ||
					output == BrowseOutput.Actor10
				 ){
					GUILayout.Label("Select An Actor from the Dialog Cast:", "BoldLabel", GUILayout.MinWidth(350), GUILayout.MaxWidth(350));
				 } else {
				 	GUILayout.Label("Select A Background from the Scenes Library:", "BoldLabel", GUILayout.MinWidth(350), GUILayout.MaxWidth(350));
				 }
				 
				// Add indent
				GUILayout.FlexibleSpace();
								
				if( GUILayout.Button("Cancel") ){
					browseMode = false;
				}
			
				// Fix DialogID if there is anything wrong.
				if ( theObject.dialogID == null || theObject.dialogID < 1 ) {
					theObject.dialogID = 1;
				}
				
				// Add Indent
				GUILayout.Label("", GUILayout.MaxWidth(5));
				
			EditorGUILayout.EndHorizontal();
			
			// Add Space
			EditorGUILayout.Space();
			
			// Track if we've found any Actors
			var foundActors : boolean = false;
			
			// Cache the Dialog Groups
			var dcGroups : DialogCastGroup[];
			
			// Cache Actor Cast ..
			if( output == BrowseOutput.Portrait ||
					output == BrowseOutput.Actor1 ||
					output == BrowseOutput.Actor2 ||
					output == BrowseOutput.Actor3 ||
					output == BrowseOutput.Actor4 ||
					output == BrowseOutput.Actor5 ||
					output == BrowseOutput.Actor6 ||
					output == BrowseOutput.Actor7 ||
					output == BrowseOutput.Actor8 ||
					output == BrowseOutput.Actor9 ||
					output == BrowseOutput.Actor10
			 ){
				if( DialogCast != null && DialogCast.GetDialogCastGroups() != null ){
					dcGroups = DialogCast.GetDialogCastGroups();
				}
			
			// Cache Scene Cast ..
			} else {
				
				if( DialogScenes != null && DialogScenes.GetDialogCastGroups() != null ){
					dcGroups = DialogScenes.GetDialogCastGroups();
				}
			}
			
			// If we've got a cast to work with.. lets continue
			if( dcGroups != null ){
			
				// Loop through the Cast Groups
				for( var dcGroup : DialogCastGroup in dcGroups ){
					if(dcGroup && dcGroup.actors && dcGroup.actors.length > 0){ // Make sure this Group is valid
						
						// Let us know that some actors have been found!
						foundActors = true;
						
						// First horizontal space
						EditorGUILayout.BeginHorizontal();
							
							// Add Indent
							GUILayout.Label("", GUILayout.MaxWidth(5));
							
							// Draw Box
							EditorGUILayout.BeginVertical("Box");
								
								// ========================
								// LABEL / NAME OF GROUP
								// ========================
								
								// Horizontal
								EditorGUILayout.BeginHorizontal();
							
									// Add indent
									GUILayout.Label("", GUILayout.MaxWidth(5));
								
									// Box Label
									GUILayout.Label(dcGroup.name, "BoldLabel", GUILayout.MinWidth(300), GUILayout.MaxWidth(300));
									
									// Add indent
									GUILayout.Label("", GUILayout.MaxWidth(5));
							
								// End Horizontal
								EditorGUILayout.EndHorizontal();
							
								// Add Vertical Space
								GUILayout.Label("", GUILayout.MaxWidth(5));
								
								// ========================
								// CONTENT INSIDE OF BOX
								// ========================
								
								// Horizontal
								EditorGUILayout.BeginHorizontal();
									
									// Add indent
									GUILayout.Label("", GUILayout.MaxWidth(5));
									GUILayout.FlexibleSpace();
								
									// Loop through the Actors
									var ActorCount : int = 0;
									for( var actor : DialogCastActor in dcGroup.actors ){
										if(actor){
											
											// Fix Rows on every 8th actor, create a new row!
											if( ActorCount != 0 && ActorCount%5 == 0 ){
												
													// Add indent
													GUILayout.FlexibleSpace();
													GUILayout.Label("", GUILayout.MaxWidth(5));
												
												// End the current row
												EditorGUILayout.EndHorizontal();
												
												// Add Vertical Space
												GUILayout.Label("", GUILayout.MaxWidth(5));
												
												// Begin a new row
												EditorGUILayout.BeginHorizontal();
												
													// Add indent
													GUILayout.Label("", GUILayout.MaxWidth(5));
													GUILayout.FlexibleSpace();
													
											// Add flexible space
											} else if (ActorCount != 0) {
											//	GUILayout.FlexibleSpace();
											}
											
											// Create the button!
											EditorGUILayout.BeginVertical();
												
												// Draw Actor Button
												if( GUILayout.Button(actor.icon, GUILayout.MaxHeight(90),GUILayout.MinWidth(90), GUILayout.MaxWidth(90) ) ){
													
													// PORTRAIT
													if( output == BrowseOutput.Portrait ){
														print("yes!");
														theObject.screen.portrait = actor.icon;
														theObject.screen.actorName = actor.name;
													
													// ACTOR 1
													} else if( output == BrowseOutput.Actor1 ) {
														theObject.actions.actorLayers[0].tex = actor.icon;
													
													// ACTOR 2
													} else if( output == BrowseOutput.Actor2 ) {
														theObject.actions.actorLayers[1].tex = actor.icon;
													
													// ACTOR 3
													} else if( output == BrowseOutput.Actor3 ) {
														theObject.actions.actorLayers[2].tex = actor.icon;
													
													// ACTOR 4
													} else if( output == BrowseOutput.Actor4 ) {
														theObject.actions.actorLayers[3].tex = actor.icon;
													
													// ACTOR 5
													} else if( output == BrowseOutput.Actor5 ) {
														theObject.actions.actorLayers[4].tex = actor.icon;
													
													// ACTOR 6
													} else if( output == BrowseOutput.Actor6 ) {
														theObject.actions.actorLayers[5].tex = actor.icon;
													
													// ACTOR 7
													} else if( output == BrowseOutput.Actor7 ) {
														theObject.actions.actorLayers[6].tex = actor.icon;
													
													// ACTOR 8
													} else if( output == BrowseOutput.Actor8 ) {
														theObject.actions.actorLayers[7].tex = actor.icon;
													
													// ACTOR 9
													} else if( output == BrowseOutput.Actor9 ) {
														theObject.actions.actorLayers[8].tex = actor.icon;
													
													// ACTOR 10
													} else if( output == BrowseOutput.Actor10 ) {
														theObject.actions.actorLayers[9].tex = actor.icon;
													
													
													// SCENE 1
													} else if( output == BrowseOutput.Scene1 ) {
														theObject.actions.sceneLayers[0].tex = actor.icon;
													
													// SCENE 2
													} else if( output == BrowseOutput.Scene2 ) {
														theObject.actions.sceneLayers[1].tex = actor.icon;
													
													// SCENE 3
													} else if( output == BrowseOutput.Scene3 ) {
														theObject.actions.sceneLayers[2].tex = actor.icon;
													
													// SCENE 4
													} else if( output == BrowseOutput.Scene4 ) {
														theObject.actions.sceneLayers[3].tex = actor.icon;
													
													// SCENE 5
													} else if( output == BrowseOutput.Scene5 ) {
														theObject.actions.sceneLayers[4].tex = actor.icon;
														
													// SCENE 6
													} else if( output == BrowseOutput.Scene6 ) {
														theObject.actions.sceneLayers[5].tex = actor.icon;
														
													// SCENE 7
													} else if( output == BrowseOutput.Scene7 ) {
														theObject.actions.sceneLayers[6].tex = actor.icon;
														
													// SCENE 8
													} else if( output == BrowseOutput.Scene8 ) {
														theObject.actions.sceneLayers[7].tex = actor.icon;
														
													// SCENE 9
													} else if( output == BrowseOutput.Scene9 ) {
														theObject.actions.sceneLayers[8].tex = actor.icon;
														
													// SCENE 10
													} else if( output == BrowseOutput.Scene10 ) {
														theObject.actions.sceneLayers[9].tex = actor.icon;
														
													}
													
													browseMode = false;
												}
												
												// Draw Actor label
												var centeredStyle = GUI.skin.GetStyle("Label");
	 													centeredStyle.alignment = TextAnchor.UpperCenter;
												GUILayout.Label(actor.name, centeredStyle, GUILayout.MinWidth(90), GUILayout.MaxWidth(90)  );
												centeredStyle.alignment = TextAnchor.UpperLeft;
												
											EditorGUILayout.EndVertical();
											
											// increment count
											ActorCount++;
										}
									}
								
									// Add indent
									GUILayout.FlexibleSpace();
									GUILayout.Label("", GUILayout.MaxWidth(5));
									
									
								// End Horizontal
								EditorGUILayout.EndHorizontal();
								
								// Add Vertical Space
								GUILayout.Label("", GUILayout.MaxWidth(5));
								
							// End Box	
							EditorGUILayout.EndVertical();
						
							// Add indent
							GUILayout.Label("", GUILayout.MaxWidth(5));
							
						// End horizontal	
						EditorGUILayout.EndHorizontal();
						
						// Add Space
						EditorGUILayout.Space();
					
					// Empty Group
					} else if (dcGroup) {
						//GUILayout.Label( "No Actors have been setup in "+dcGroup.name+"." );
					}
				}
				
				
			
			// If the Dialog Groups are null, automatically cancel this mode.	
			} else {
				browseMode = false;	
			}
			
			// No Actors were found in any of the Dialog Cast Groups
			if(!foundActors){
				
				// Horizontal
				EditorGUILayout.BeginHorizontal();
				
					// Add indent
					GUILayout.Label("", GUILayout.MaxWidth(5));
					
					// Let the user know that no actors have been setup yet					
					GUILayout.Label( "No Actors have been setup yet." );				
					
					// Add indent
					GUILayout.Label("", GUILayout.MaxWidth(5));
				
				// End horizontal	
				EditorGUILayout.EndHorizontal();
				
				// Add Space
				EditorGUILayout.Space();
				
					// check if we already have a DialogCast in the scene first
					var TheDialogCasts : DialogCast[] = FindObjectsOfType (DialogCast);
					
					// If we found a Dialog Cast .. Check to make sure if the first one is valid!
					if ( TheDialogCasts.length > 0 && TheDialogCasts[0]!=null && TheDialogCasts[0].transform!=null){
						
						// Horizontal
						EditorGUILayout.BeginHorizontal();
						
							// Add indent
							GUILayout.Label("", GUILayout.MaxWidth(5));
							
							// Let the user know that no actors have been setup yet					
							GUILayout.Label( "Would you like to setup your Cast and Actors Now?" );				
							
							// Add indent
							GUILayout.Label("", GUILayout.MaxWidth(5));
						
						// End horizontal	
						EditorGUILayout.EndHorizontal();
						
						// Add Space
						EditorGUILayout.Space();
						
						// SETUP CAST BUTTON
						EditorGUILayout.BeginHorizontal();
							GUILayout.FlexibleSpace();
								
								// Setup Cast Button
								if( GUILayout.Button("Setup The Cast") ){
									browseMode = false;
									Selection.activeTransform = TheDialogCasts[0].transform;
								}
								
								GUILayout.FlexibleSpace();
						EditorGUILayout.EndHorizontal();
					}
					
			// Actors were found!			
			} else {
			
				// Cancel Button
				EditorGUILayout.BeginHorizontal();
					GUILayout.FlexibleSpace();
					if( GUILayout.Button("Cancel Selection") ){
						browseMode = false;
					}
					GUILayout.FlexibleSpace();
				EditorGUILayout.EndHorizontal();
			
			}
			
			// Add Space
			EditorGUILayout.Space();
		
		// If we cannot see the DialogCast component, then turn off the view Cast mode
		} else {
			browseMode = false;	
		}
	
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// ADD NEW DIALOG SCREEN
	// Adds a new Dialog Screen to this gameObject
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function AddNewDialogScreen( theObject : DialogScreen ){
	
		// Add a new Dialog Screen Component
		var newDS : DialogScreen = theObject.gameObject.AddComponent (DialogScreen);
		
		// Preset Dialog ID to the number of DialogScreen components
		var theComponents = theObject.gameObject.GetComponents(DialogScreen);
		newDS.dialogID = theComponents.length;
		
		// If there was a DialogScreen component previous to this one, try to get the icon image
		if( theComponents.length > 1 && theComponents[theComponents.length-2] != null ){
			
			// Cache the previous DialogScreen
			var previousDS: DialogScreen = theComponents[theComponents.length-2];
			
			// If the previous component had a Portrait setup, copy that over
			if(previousDS.screen.portrait!=null){
				newDS.screen = new DS_Screen();
				newDS.screen.portrait = previousDS.screen.portrait;
				newDS.screen.actorName = previousDS.screen.actorName;
			}
		}
		
		// BUGFIX: Reimport the Editor for DialogScreens - this stops the errors we get when we click into actions. WEIRD!
		var script = MonoScript.FromScriptableObject( this );
		var path : String = AssetDatabase.GetAssetPath( script );
		if(path!=null){AssetDatabase.ImportAsset(path);}	
		
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// ADD NEW MULTIPLE CHOICE OPTION
	// Adds a new choice to the multipleChoiceOption
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function AddNewMultipleChoiceOption( theObject : DialogScreen ){
		
		theObject.screen.multipleButtons = AddAnotherSlot( theObject.screen.multipleButtons, true );
		theObject.navigation.multipleButtons = AddAnotherSlotInt( theObject.navigation.multipleButtons );
		
		// Add new Language Option
		theObject.localization.chinese.multipleButtons = AddAnotherSlot( theObject.localization.chinese.multipleButtons, false );
		theObject.localization.korean.multipleButtons = AddAnotherSlot( theObject.localization.korean.multipleButtons, false );
		theObject.localization.japanese.multipleButtons = AddAnotherSlot( theObject.localization.japanese.multipleButtons, false );
		theObject.localization.spanish.multipleButtons = AddAnotherSlot( theObject.localization.spanish.multipleButtons, false );
		theObject.localization.italian.multipleButtons = AddAnotherSlot( theObject.localization.italian.multipleButtons, false );
		theObject.localization.german.multipleButtons = AddAnotherSlot( theObject.localization.german.multipleButtons, false );
		theObject.localization.french.multipleButtons = AddAnotherSlot( theObject.localization.french.multipleButtons, false );
		theObject.localization.portuguese.multipleButtons = AddAnotherSlot( theObject.localization.portuguese.multipleButtons, false );
		theObject.localization.russian.multipleButtons = AddAnotherSlot( theObject.localization.russian.multipleButtons, false );
		
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// ADD NEW LOGIC STATEMENT 
	// Adds a new statement to a logic block
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function AddNewLogicStatement( theObject : DialogScreen ){
		
		print("doing it!");
		
		theObject.screen.logicStatements = AddAnotherSlotLogic( theObject.screen.logicStatements );
		
		// Add new Language Option
		theObject.localization.chinese.logicStatementCompare = AddAnotherSlot( theObject.localization.chinese.logicStatementCompare, false );
		theObject.localization.korean.logicStatementCompare = AddAnotherSlot( theObject.localization.korean.logicStatementCompare, false );
		theObject.localization.japanese.logicStatementCompare = AddAnotherSlot( theObject.localization.japanese.logicStatementCompare, false );
		theObject.localization.spanish.logicStatementCompare = AddAnotherSlot( theObject.localization.spanish.logicStatementCompare, false );
		theObject.localization.italian.logicStatementCompare = AddAnotherSlot( theObject.localization.italian.logicStatementCompare, false );
		theObject.localization.german.logicStatementCompare = AddAnotherSlot( theObject.localization.german.logicStatementCompare, false );
		theObject.localization.french.logicStatementCompare = AddAnotherSlot( theObject.localization.french.logicStatementCompare, false );
		theObject.localization.portuguese.logicStatementCompare = AddAnotherSlot( theObject.localization.portuguese.logicStatementCompare, false );
		theObject.localization.russian.logicStatementCompare = AddAnotherSlot( theObject.localization.russian.logicStatementCompare, false );
		
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// ADD ANOTHER ARRAY SLOT
	// Helper Function that adds another slot to a string array
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function AddAnotherSlot( arr : String[], autoName : boolean ){
		
		// Create a new String Array
		var newArr : String[] = new String[0];
		
		// If existing Array is valid ..
		if(arr!=null){
			
			// Create a new String Array 1 size bigger than the existing one
			newArr = new String[arr.length+1];
			
			// Copy the old values into the new array
			newArr.Copy( arr, newArr, arr.length);
			
			// Name the new Option
			if(autoName){
				newArr[newArr.length-1] = "Option "+ newArr.length.ToString();
			} else {
				newArr[newArr.length-1] = "";
			}
				
		// If it isn't valid, create an entirely new one with a single option
		} else {
			if(autoName){
				newArr = ["Option 1"];
			} else {
				newArr = [""];
			}
		}
		
		// Replace the existing array
		return newArr;
	}
	
	// The int version
	function AddAnotherSlotInt( arr : int[] ){
		
		// Create a new int Array
		var newArr : int[] = new int[0];
		
		// If existing Array is valid ..
		if(arr!=null){
			
			// Create a new int Array 1 size bigger than the existing one
			newArr = new int[arr.length+1];
			
			// Copy the old values into the new array
			newArr.Copy( arr, newArr, arr.length);
		
		// If it isn't valid, create an entirely new one with a single option
		} else {
			newArr = [0];
		}
		
		// Replace the existing array
		return newArr;
	}
	
	// The Logic version
	function AddAnotherSlotLogic( arr : LogicStatements[] ){
		
		// Create a new int Array
		var newArr : LogicStatements[] = new LogicStatements[0];
		
		// If existing Array is valid ..
		if(arr!=null){
			
			// Create a new int Array 1 size bigger than the existing one
			newArr = new LogicStatements[arr.length+1];
			
			// Copy the old values into the new array
			newArr.Copy( arr, newArr, arr.length);
		
		// If it isn't valid, create an entirely new one with a single option
		} else {
			newArr = [new LogicStatements()];
		}
		
		// Replace the existing array
		return newArr;
	}
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// DELETE MULTIPLE CHOICE OPTION
	// Adds a new choice to the multipleChoiceOption
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	function DeleteMultipleChoiceOption( theObject : DialogScreen ){
		
		// Make sure we've got at least 1 option
		if( theObject.screen.multipleButtons.length > 1 ){
			
			theObject.screen.multipleButtons = DeleteAnotherSlot( theObject.screen.multipleButtons );
			theObject.navigation.multipleButtons = DeleteAnotherSlotInt( theObject.navigation.multipleButtons );
			
			// Add new Language Option
			theObject.localization.chinese.multipleButtons = DeleteAnotherSlot( theObject.localization.chinese.multipleButtons );
			theObject.localization.korean.multipleButtons = DeleteAnotherSlot( theObject.localization.korean.multipleButtons );
			theObject.localization.japanese.multipleButtons = DeleteAnotherSlot( theObject.localization.japanese.multipleButtons );
			theObject.localization.spanish.multipleButtons = DeleteAnotherSlot( theObject.localization.spanish.multipleButtons );
			theObject.localization.italian.multipleButtons = DeleteAnotherSlot( theObject.localization.italian.multipleButtons );
			theObject.localization.german.multipleButtons = DeleteAnotherSlot( theObject.localization.german.multipleButtons );
			theObject.localization.french.multipleButtons = DeleteAnotherSlot( theObject.localization.french.multipleButtons );
			theObject.localization.portuguese.multipleButtons = DeleteAnotherSlot( theObject.localization.portuguese.multipleButtons );
			theObject.localization.russian.multipleButtons = DeleteAnotherSlot( theObject.localization.russian.multipleButtons );
		
		}
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// DELETE LOGIC STATEMENT 
	// Adds a new statement to a logic block
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function DeleteLogicStatement( theObject : DialogScreen ){
		
		// Make sure we've got at least 1 option
		if( theObject.screen.logicStatements.length > 0 ){
			
			theObject.screen.logicStatements = DeleteAnotherSlotLogic( theObject.screen.logicStatements );
			
			// Add new Language Option
			theObject.localization.chinese.logicStatementCompare = DeleteAnotherSlot( theObject.localization.chinese.logicStatementCompare );
			theObject.localization.korean.logicStatementCompare = DeleteAnotherSlot( theObject.localization.korean.logicStatementCompare );
			theObject.localization.japanese.logicStatementCompare = DeleteAnotherSlot( theObject.localization.japanese.logicStatementCompare );
			theObject.localization.spanish.logicStatementCompare = DeleteAnotherSlot( theObject.localization.spanish.logicStatementCompare );
			theObject.localization.italian.logicStatementCompare = DeleteAnotherSlot( theObject.localization.italian.logicStatementCompare );
			theObject.localization.german.logicStatementCompare = DeleteAnotherSlot( theObject.localization.german.logicStatementCompare );
			theObject.localization.french.logicStatementCompare = DeleteAnotherSlot( theObject.localization.french.logicStatementCompare );
			theObject.localization.portuguese.logicStatementCompare = DeleteAnotherSlot( theObject.localization.portuguese.logicStatementCompare );
			theObject.localization.russian.logicStatementCompare = DeleteAnotherSlot( theObject.localization.russian.logicStatementCompare );
		
		}
	}
	
	// ADD ANOTHER ARRAY SLOT
	// Helper Function that adds another slot to an array
	function DeleteAnotherSlot( arr : String[] ){
		
		// Create a new String Array
		var newArr : String[] = new String[0];
		
		// If existing Array is valid ..
		if(arr!=null){
			
			// Create a new String Array 1 size bigger than the existing one
			newArr = new String[arr.length-1];
			
			// Copy the old values into the new array
			newArr.Copy( arr, newArr, newArr.length);
				
		// If it isn't valid, create an entirely new one with a single option
		} else {
			newArr = ["Option 1"];
		}
		
		// Replace the existing array
		return newArr;
	}
	
	// The int version
	function DeleteAnotherSlotInt( arr : int[] ){
		
		// Create a new int Array
		var newArr : int[] = new int[0];
		
		// If existing Array is valid ..
		if(arr!=null){
			
			// Create a new int Array 1 size bigger than the existing one
			newArr = new int[arr.length-1];
			
			// Copy the old values into the new array
			newArr.Copy( arr, newArr, newArr.length);
		
		// If it isn't valid, create an entirely new one with a single option
		} else {
			newArr = [0];
		}
		
		// Replace the existing array
		return newArr;
	}
	
	// The Logic version
	function DeleteAnotherSlotLogic( arr : LogicStatements[] ){
		
		// Create a new int Array
		var newArr : LogicStatements[] = new LogicStatements[0];
		
		// If existing Array is valid ..
		if(arr!=null){
			
			// Create a new int Array 1 size bigger than the existing one
			newArr = new LogicStatements[arr.length-1];
			
			// Copy the old values into the new array
			newArr.Copy( arr, newArr, newArr.length);
		
		// If it isn't valid, create an entirely new one with a single option
		} else {
			newArr = [new LogicStatements()];
		}
		
		// Replace the existing array
		return newArr;
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	DO SCENE ACTIONS TAB
	//	Renders the "Scene Actions tab
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function DoSceneActionsTabEXPERIMENTAL( theObject : DialogScreen ){
	
		// Make sure theObject (Dialog Screen is valid)
		if( theObject != null){
			
			// Make sure we have 5 background layers!
			if( theObject.actions.sceneLayers.length != 5){
				theObject.actions.sceneLayers = new DialogUIBackgroundLayers[5];
			}
		
				// FADE OUT ENTIRE SCENE
				//EditorGUILayout.Space();
				GUILayout.Label("Remove Background", "BoldLabel");
				GUILayout.Label("Use this to quickly change scenes. All Background Layers will be completed faded out.");
				EditorGUILayout.Space();
				
				GUILayout.BeginHorizontal("Box");
					GUILayout.BeginVertical();
	
						// Fade Out all scene layers
						GUILayout.BeginHorizontal();
							GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
							GUILayout.Label(cameraLabel, GUILayout.MaxWidth(20));
							theObject.actions.fadeAllSceneLayers = EditorGUILayout.Toggle("Fade Out All Layers", theObject.actions.fadeAllSceneLayers);
							GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
						GUILayout.EndHorizontal();
				
						GUILayout.EndVertical();
					GUILayout.EndHorizontal();
				EditorGUILayout.Space();
				
				// SCENE LAYERS
				if(!theObject.actions.fadeAllSceneLayers){
					
					EditorGUILayout.Space();
					GUILayout.Label("Background Layers", "BoldLabel");
					GUILayout.Label("Modify 'Background Layers' to build up multi-layer backgrounds for your scenes. These");
					GUILayout.Label("changes are global and continue across different dialog screens! If you don't change");
					GUILayout.Label("a layer, it will just carry on using whatever settings you had setup before.");
					EditorGUILayout.Space();
					
					GUILayout.BeginVertical();
						
						// Add space indent
						//GUILayout.Label("", GUILayout.MaxWidth(5));
						
						// Loop through the background layers
						var actionCount : int = 0;
						var setLayerFound : boolean = false;	// See if we are setting any layers in this dialog!
						//for( var layer : DialogUIBackgroundLayers in theObject.actions.sceneLayers ){
						for(var i = theObject.actions.sceneLayers.length-1; i > -1; i--){
							var layer : DialogUIBackgroundLayers = theObject.actions.sceneLayers[i];
							var realCount : int = theObject.actions.sceneLayers.length-(actionCount+1);
							
							// Indent Space
							if( actionCount != 0 ){
								GUILayout.FlexibleSpace();
							}
							
							GUILayout.BeginHorizontal("Box");
								
								// SET LAYER
								GUILayout.BeginVertical("");
									
									GUILayout.BeginHorizontal("", GUILayout.MinHeight(26));
										GUILayout.Label(layersLabel, GUILayout.MaxWidth(20));
										GUILayout.Label("Layer "+(theObject.actions.sceneLayers.length-(actionCount)).ToString(), "BoldLabel");
										layer.setLayer = EditorGUILayout.Toggle("", layer.setLayer, GUILayout.MaxWidth(20));
									GUILayout.EndHorizontal();
									
									// Rows	
									//if(layer.setLayer){
										// Start Row
										if(layer.setLayer){
										GUILayout.BeginHorizontal("");
											
											// Column Layer
											/*
											GUILayout.BeginVertical("", GUILayout.MinHeight(26), GUILayout.MinWidth(110), GUILayout.MaxWidth(110));
												GUILayout.BeginHorizontal("", GUILayout.MinHeight(26), GUILayout.MinWidth(110), GUILayout.MaxWidth(110));
												GUILayout.Label(layersLabel, GUILayout.MaxWidth(20));
												GUILayout.Label("Layer "+(theObject.actions.sceneLayers.length-(actionCount)).ToString(), "BoldLabel");
												layer.setLayer = EditorGUILayout.Toggle("", layer.setLayer, GUILayout.MaxWidth(20));
												GUILayout.EndHorizontal();
												
											GUILayout.EndVertical();
											*/
											
											// Tiny spacer from the edge(makes things more balanced!)
											GUILayout.Label("", GUILayout.MaxWidth(0));
												
												// COLUMN 1 - Image Box
												GUILayout.BeginVertical( GUILayout.MinWidth(52), GUILayout.MaxWidth(52) );
													
													GUILayout.Label("Image:");
													
													// Draw Texture Box
													layer.tex = EditorGUILayout.ObjectField(layer.tex,Texture2D,false,GUILayout.MinWidth(48),GUILayout.MinHeight(48),GUILayout.MaxWidth(48),GUILayout.MaxHeight(48));
													
												// END OF COLUMN
												GUILayout.EndVertical();
												
												// Tiny spacer from the edge(makes things more balanced!)
												GUILayout.Label("", GUILayout.MaxWidth(0));
												
												// COLUMN 2 - Scale Mode and Browse
												GUILayout.BeginVertical( GUILayout.MinWidth(100), GUILayout.MaxWidth(100) );
													
													GUILayout.Label("Browse:", GUILayout.MaxWidth(80));
													if( DSs && DSs.length>0 ){ // If the Dialog Scenes component is available, show the View Scenes button
														
														GUILayout.BeginHorizontal();
															GUILayout.Label(cameraLabel, GUILayout.MaxWidth(20));
															if( GUILayout.Button("Scenes", GUILayout.MaxWidth(60) ) ){
																
																// Set the correct Destination
																if( realCount == 0 ){
																	browseOutput = BrowseOutput.Scene1;
																} else if( realCount == 1 ){
																	browseOutput = BrowseOutput.Scene2;
																} else if( realCount == 2 ){
																	browseOutput = BrowseOutput.Scene3;
																} else if( realCount == 3 ){
																	browseOutput = BrowseOutput.Scene4;
																} else if( realCount == 4 ){
																	browseOutput = BrowseOutput.Scene5;
																}
																
																// Turn on browse mode
																browseMode = true;
																
															}
														GUILayout.EndHorizontal();
														
														// Indent Space
														EditorGUILayout.Space();
													}
																										
												// END OF COLUMN	
												GUILayout.EndVertical();
												
												// Tiny spacer from the edge(makes things more balanced!)
												GUILayout.Label("", GUILayout.MaxWidth(0));
												
												// COLUMN 2 - Scale Mode and Browse
												GUILayout.BeginVertical( GUILayout.MinWidth(100), GUILayout.MaxWidth(100) );
													
													// Display Mode		
													GUILayout.Label("Display:", GUILayout.MaxWidth(80));
													GUILayout.BeginHorizontal();
														GUILayout.Label(fadeInLabel, GUILayout.MaxWidth(20));
														layer.display = EditorGUILayout.EnumPopup("", layer.display, GUILayout.MaxWidth(58));
													GUILayout.EndHorizontal();
													
													EditorGUILayout.Space();
																										
												// END OF COLUMN	
												GUILayout.EndVertical();


												
												// Tiny spacer from the edge(makes things more balanced!)
												GUILayout.Label("", GUILayout.MaxWidth(0));
												
												// COLUMN 3 - Display
												GUILayout.BeginVertical( GUILayout.MinWidth(50), GUILayout.MaxWidth(50) );
													
													// Scale Mode
													GUILayout.Label("Scale Mode:");
													GUILayout.BeginHorizontal();
														GUILayout.Label(resizeLabel, GUILayout.MaxWidth(20));
														layer.scale = EditorGUILayout.EnumPopup("", layer.scale, GUILayout.MaxWidth(90));
													GUILayout.EndHorizontal();
												// END OF COLUMN		
												GUILayout.EndVertical();
											
											
										// End Row
										GUILayout.EndHorizontal();
										
									// end of if active
									}
								GUILayout.EndVertical();
								
							// End of Columns	
							GUILayout.EndHorizontal();
							
							
							// increment the ActionCount
							actionCount++;
						}
						
						// Indent Space
						EditorGUILayout.Space();
						
					GUILayout.EndVertical();
				}
				
				
			
			// theObject.screen.portrait = EditorGUILayout.ObjectField(theObject.screen.portrait, Texture2D, false, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100));
		}
		
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	DO SCENE ACTIONS TAB
	//	Renders the "Scene Actions tab
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function DoSceneActionsTab( theObject : DialogScreen ){
	
		// Make sure theObject (Dialog Screen is valid)
		if( theObject != null){
			
			// Make sure we have 5 background layers!
			if( theObject.actions.sceneLayers.length != 10){
				
				// Backup the old layers
				var oldLayers : DialogUIBackgroundLayers[] = theObject.actions.sceneLayers;
				
				// Create a new list
				theObject.actions.sceneLayers = new DialogUIBackgroundLayers[10];
				
				// Populate the array with the new layers
				var fixCounter : int = 0;
				for( var newSceneLayer : DialogUIBackgroundLayers in theObject.actions.sceneLayers){
					
					// If we can copy from the old array, do that ..
					if( fixCounter < oldLayers.length && oldLayers[fixCounter]!=null){
						newSceneLayer = oldLayers[fixCounter];
					
					// Otherwise, create a new blank layer
					} else {
						newSceneLayer = new DialogUIBackgroundLayers();
					}
					
					// Increment counter
					fixCounter++;
				}
			}
		
				// FADE OUT ENTIRE SCENE
				//EditorGUILayout.Space();
				GUILayout.Label("Remove Background", "BoldLabel");
				GUILayout.Label("Use this to quickly change scenes. All Background Layers will be completed faded out.");
				EditorGUILayout.Space();
				
				GUILayout.BeginHorizontal("Box");
					GUILayout.BeginVertical();
	
						// Fade Out all scene layers
						GUILayout.BeginHorizontal();
							GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
							GUILayout.Label(cameraLabel, GUILayout.MaxWidth(20));
							theObject.actions.fadeAllSceneLayers = EditorGUILayout.Toggle("Fade Out All Layers", theObject.actions.fadeAllSceneLayers);
							GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
						GUILayout.EndHorizontal();
				
						GUILayout.EndVertical();
					GUILayout.EndHorizontal();
				EditorGUILayout.Space();
				
				// SCENE LAYERS
				if(!theObject.actions.fadeAllSceneLayers){
					
					EditorGUILayout.Space();
					GUILayout.Label("Background Layers", "BoldLabel");
					GUILayout.Label("Modify 'Background Layers' to build up multi-layer backgrounds for your scenes. These");
					GUILayout.Label("changes are global and continue across different dialog screens! If you don't change");
					GUILayout.Label("a layer, it will just carry on using whatever settings you had setup before.");
					EditorGUILayout.Space();
					
					GUILayout.BeginVertical();
						GUILayout.BeginHorizontal();
						
							// Add space indent
							//GUILayout.Label("", GUILayout.MaxWidth(5));
							
							// Loop through the background layers
							var actionCount : int = 0;
							var setLayerFound : boolean = false;	// See if we are setting any layers in this dialog!
							for( var layer : DialogUIBackgroundLayers in theObject.actions.sceneLayers ){
						
								// Add a new row on every 5 columns
								if( actionCount % 5 == 0){
										GUILayout.EndHorizontal();
									GUILayout.EndVertical();
									
									EditorGUILayout.Space();
									
									GUILayout.BeginVertical();
										GUILayout.BeginHorizontal();
								}
						
								// Indent Space
								if( actionCount != 0 && actionCount % 5 != 0 ){
									GUILayout.FlexibleSpace();
								}
								
								// Columns
								GUILayout.BeginHorizontal("Box");
								GUILayout.BeginVertical( GUILayout.MinWidth(90), GUILayout.MaxWidth(90));
									
									// Label
								//	GUILayout.Label("Layer "+(actionCount+1).ToString(), "BoldLabel", GUILayout.MaxWidth(80));
									
									// SET LAYER
									GUILayout.BeginHorizontal();
										GUILayout.Label(layersLabel, GUILayout.MaxWidth(20));
										if(actionCount+1 != 10){
											GUILayout.Label("Lyr "+(actionCount+1).ToString(), "BoldLabel", GUILayout.MaxWidth(40));
										} else {
											GUILayout.Label("Lyr"+(actionCount+1).ToString(), "BoldLabel", GUILayout.MaxWidth(40));
										}
										layer.setLayer = EditorGUILayout.Toggle("", layer.setLayer, GUILayout.MaxWidth(20));
									GUILayout.EndHorizontal();
									
									// Indent Space
									EditorGUILayout.Space();
									
									// If we are setting up this layer, show the settings
									if(layer.setLayer){
									
										// Set flag to true
										setLayerFound = true;
									
										// Image Label
										GUILayout.Label("Image:", GUILayout.MaxWidth(80));
										
										// Draw Texture Box
										layer.tex = EditorGUILayout.ObjectField(layer.tex, Texture2D, false, GUILayout.MinWidth(64), GUILayout.MinHeight(80) , GUILayout.MaxWidth(80), GUILayout.MaxHeight(80));
									
										// Browse Scenes Button
										if( DSs && DSs.length>0 ){ // If the Dialog Scenes component is available, show the View Scenes button
											GUILayout.BeginHorizontal();
												GUILayout.Label(cameraLabel, GUILayout.MaxWidth(20));
												if( GUILayout.Button("Scenes", GUILayout.MaxWidth(56)) ){
													
													// Set the correct Destination
													if( actionCount == 0 ){
														browseOutput = BrowseOutput.Scene1;
													} else if( actionCount == 1 ){
														browseOutput = BrowseOutput.Scene2;
													} else if( actionCount == 2 ){
														browseOutput = BrowseOutput.Scene3;
													} else if( actionCount == 3 ){
														browseOutput = BrowseOutput.Scene4;
													} else if( actionCount == 4 ){
														browseOutput = BrowseOutput.Scene5;
													} else if( actionCount == 5 ){
														browseOutput = BrowseOutput.Scene6;
													} else if( actionCount == 6 ){
														browseOutput = BrowseOutput.Scene7;
													} else if( actionCount == 7 ){
														browseOutput = BrowseOutput.Scene8;
													} else if( actionCount == 8 ){
														browseOutput = BrowseOutput.Scene9;
													} else if( actionCount == 9 ){
														browseOutput = BrowseOutput.Scene10;
													}
													
													// Turn on browse mode
													browseMode = true;
													
												}
											GUILayout.EndHorizontal();
											
											// Indent Space
											EditorGUILayout.Space();
										}
										
										// ScaleMode Label
										GUILayout.Label("Scale Mode:", GUILayout.MaxWidth(80));
										
										// Scale Mode
										layer.scale = EditorGUILayout.EnumPopup("", layer.scale, GUILayout.MaxWidth(80));
										
										// Indent Space
										EditorGUILayout.Space();
										
										// Use Transitions
										GUILayout.Label("Display:", GUILayout.MaxWidth(80));
										GUILayout.BeginHorizontal();
											GUILayout.Label(fadeInLabel, GUILayout.MaxWidth(20));
											layer.display = EditorGUILayout.EnumPopup("", layer.display, GUILayout.MaxWidth(58));
										GUILayout.EndHorizontal();
									
									}
									
								// End of column 1	
								GUILayout.EndVertical();
								GUILayout.EndHorizontal();
								
								// increment the ActionCount
								actionCount++;
							}
							
							// Indent Space
							//GUILayout.FlexibleSpace();
							//GUILayout.Label("", GUILayout.MaxWidth(5));
					
							// Add space indent
							//GUILayout.Label("", GUILayout.MaxWidth(5));
					
						GUILayout.EndHorizontal();
						
						// Show help text if the user is setting a layer
						if(setLayerFound){
						
							// Indent Space
							EditorGUILayout.Space();
							
							// Foot note
							GUILayout.BeginHorizontal();
							//	GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
								GUILayout.Label("NOTE: Layer 1 is furthest behind and Layer 10 is nearest to the front.");
							//	GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
							GUILayout.EndHorizontal();
						
						}
						
						// Indent Space
						EditorGUILayout.Space();
						
					GUILayout.EndVertical();
				}
				
				
			
			// theObject.screen.portrait = EditorGUILayout.ObjectField(theObject.screen.portrait, Texture2D, false, GUILayout.MinWidth(100), GUILayout.MinHeight(100) , GUILayout.MaxWidth(100), GUILayout.MaxHeight(100));
		}
		
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	DO SCENE ACTIONS TAB
	//	Renders the Actors Actions tab
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function DoSceneActorsTab( theObject : DialogScreen ){
	
		// Make sure theObject (Dialog Screen is valid)
		if( theObject != null){
			
			// Make sure we have 5 background layers!
			if( theObject.actions.actorLayers.length != 10){
				
				// Backup the old layers
				var oldLayers : DialogUIActorLayers[] = theObject.actions.actorLayers;
				
				// Create a new list
				theObject.actions.actorLayers = new DialogUIActorLayers[10];
				
				// Populate the array with the new layers
				var fixCounter : int = 0;
				for( var newSceneActor : DialogUIActorLayers in theObject.actions.actorLayers){
					
					// If we can copy from the old array, do that ..
					if( fixCounter < oldLayers.length && oldLayers[fixCounter]!=null){
						newSceneActor = oldLayers[fixCounter];
					
					// Otherwise, create a new blank layer
					} else {
						newSceneActor = new DialogUIActorLayers();
					}
					
					// Increment counter
					fixCounter++;
				}
			}
		
				// FADE OUT ALL ACTORS
				//EditorGUILayout.Space();
				GUILayout.Label("Remove Actors", "BoldLabel");
				GUILayout.Label("Use this to quickly change scenes. All Actor Layers will be completed faded out.");
				EditorGUILayout.Space();
				
				GUILayout.BeginHorizontal("Box");
					GUILayout.BeginVertical();
	
						// Fade Out all scene layers
						GUILayout.BeginHorizontal();
							GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
							GUILayout.Label(actorLabel, GUILayout.MaxWidth(20));
							theObject.actions.fadeAllActorLayers = EditorGUILayout.Toggle("Fade Out All Actor Layers", theObject.actions.fadeAllActorLayers);
							GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
						GUILayout.EndHorizontal();
				
						GUILayout.EndVertical();
					GUILayout.EndHorizontal();
				EditorGUILayout.Space();
				
				// ACTOR LAYERS
				if(!theObject.actions.fadeAllActorLayers){
					
					EditorGUILayout.Space();
					GUILayout.Label("Actor Layers", "BoldLabel");
					GUILayout.Label("Modify 'Actor Layers' to introduce various actors or objects in the foreground of the scene.");
					GUILayout.Label("Changes are global and continue across different dialog screens! If you don't change");
					GUILayout.Label("a layer, it will just carry on using whatever settings you had setup before.");
					EditorGUILayout.Space();
					
					GUILayout.BeginVertical();
						GUILayout.BeginHorizontal();
						
							// Add space indent
							//GUILayout.Label("", GUILayout.MaxWidth(5));
							
							// Loop through the background layers
							var actionCount : int = 0;
							var setLayerFound : boolean = false;	// See if we are setting any layers in this dialog!
							for( var layer : DialogUIActorLayers in theObject.actions.actorLayers ){
						
								// Add a new row on every 5 columns
								if( actionCount % 5 == 0){
										GUILayout.EndHorizontal();
									GUILayout.EndVertical();
									
									EditorGUILayout.Space();
									
									GUILayout.BeginVertical();
										GUILayout.BeginHorizontal();
								}
						
								// Indent Space
								if( actionCount != 0 && actionCount % 5 != 0 ){
									GUILayout.FlexibleSpace();
								}
								
								// Columns
								GUILayout.BeginHorizontal("Box");
								GUILayout.BeginVertical( GUILayout.MinWidth(90), GUILayout.MaxWidth(90));
									
									// Label
								//	GUILayout.Label("Layer "+(actionCount+1).ToString(), "BoldLabel", GUILayout.MaxWidth(80));
									
									// SET LAYER
									GUILayout.BeginHorizontal();
										GUILayout.Label(layersLabel, GUILayout.MaxWidth(20));
										//GUILayout.Label("Lyr "+(actionCount+1).ToString(), "BoldLabel", GUILayout.MaxWidth(40));
										if(actionCount+1 != 10){
											GUILayout.Label("Lyr "+(actionCount+1).ToString(), "BoldLabel", GUILayout.MaxWidth(40));
										} else {
											GUILayout.Label("Lyr"+(actionCount+1).ToString(), "BoldLabel", GUILayout.MaxWidth(40));
										}
										layer.setLayer = EditorGUILayout.Toggle("", layer.setLayer, GUILayout.MaxWidth(20));
									GUILayout.EndHorizontal();
									
									// Indent Space
									EditorGUILayout.Space();
									
									// If we are setting up this layer, show the settings
									if(layer.setLayer){
									
										// Set flag to true
										setLayerFound = true;
									
										// Image Label
										GUILayout.Label("Image:", GUILayout.MaxWidth(80));
										
										// Draw Texture Box
										layer.tex = EditorGUILayout.ObjectField(layer.tex, Texture2D, false, GUILayout.MinWidth(64), GUILayout.MinHeight(80) , GUILayout.MaxWidth(80), GUILayout.MaxHeight(80));
									
										// Browse Actors Button
										if( DCs && DCs.length>0 ){ // If the Dialog Cast is available, show the View Cast button
											GUILayout.BeginHorizontal();
												GUILayout.Label(cameraLabel, GUILayout.MaxWidth(20));
												if( GUILayout.Button("Cast", GUILayout.MaxWidth(56)) ){
													
													// Set the correct Destination
													if( actionCount == 0 ){
														browseOutput = BrowseOutput.Actor1;
													} else if( actionCount == 1 ){
														browseOutput = BrowseOutput.Actor2;
													} else if( actionCount == 2 ){
														browseOutput = BrowseOutput.Actor3;
													} else if( actionCount == 3 ){
														browseOutput = BrowseOutput.Actor4;
													} else if( actionCount == 4 ){
														browseOutput = BrowseOutput.Actor5;
													} else if( actionCount == 5 ){
														browseOutput = BrowseOutput.Actor6;
													} else if( actionCount == 6 ){
														browseOutput = BrowseOutput.Actor7;
													} else if( actionCount == 7 ){
														browseOutput = BrowseOutput.Actor8;
													} else if( actionCount == 8 ){
														browseOutput = BrowseOutput.Actor9;
													} else if( actionCount == 9 ){
														browseOutput = BrowseOutput.Actor10;
													}
													
													// Turn on browse mode
													browseMode = true;
													
												}
											GUILayout.EndHorizontal();
											
											// Indent Space
											EditorGUILayout.Space();
										}
									
										// Scale Mode
										// For Actors, they're always being stretched to fill anyway, so might as well hide this control
									//	layer.scale = EditorGUILayout.EnumPopup("", layer.scale, GUILayout.MaxWidth(80));
										layer.scale = ScaleMode.StretchToFill;
										
										
										// Indent Space
										EditorGUILayout.Space();
										
										// Display Mode
										GUILayout.Label("Display:", GUILayout.MaxWidth(80));
										GUILayout.BeginHorizontal();
											GUILayout.Label(fadeInLabel, GUILayout.MaxWidth(20));
											layer.display = EditorGUILayout.EnumPopup("", layer.display, GUILayout.MaxWidth(58));
										GUILayout.EndHorizontal();
										
										// If we're not hiding the layer, then show the extra options
										if( layer.display != DUI_LAYER_STATUS.Hide ){
										
											// Size
											GUILayout.Label("Size In %:", GUILayout.MaxWidth(80));
											GUILayout.BeginHorizontal();
												GUILayout.Label(resizeLabel, GUILayout.MaxWidth(20));
												layer.size = EditorGUILayout.FloatField("", layer.size, GUILayout.MaxWidth(58) );
												layer.size = Mathf.Clamp(layer.size, 1,1000);
											GUILayout.EndHorizontal();
											
											// Indent Space
											EditorGUILayout.Space();
											
											// Position
											GUILayout.Label("Position:", GUILayout.MaxWidth(80));
											GUILayout.BeginHorizontal();
												GUILayout.Label(positionLabel, GUILayout.MaxWidth(20));
												layer.allignment = EditorGUILayout.EnumPopup("", layer.allignment, GUILayout.MaxWidth(58));
												layer.size = Mathf.Clamp(layer.size, 1,1000);
											GUILayout.EndHorizontal();
											
											// Indent Space
											EditorGUILayout.Space();
											
											// Offset
											GUILayout.Label("Offset:", GUILayout.MaxWidth(80));
											GUILayout.BeginHorizontal();
												GUILayout.Label(xLabel, GUILayout.MaxWidth(20));
												layer.offset.x = EditorGUILayout.FloatField("", layer.offset.x, GUILayout.MaxWidth(58));
											GUILayout.EndHorizontal();
											GUILayout.BeginHorizontal();
												GUILayout.Label(yLabel, GUILayout.MaxWidth(20));
												layer.offset.y = EditorGUILayout.FloatField("", layer.offset.y, GUILayout.MaxWidth(58));
											GUILayout.EndHorizontal();
											
											// Indent Space
											EditorGUILayout.Space();
											
											// Indent Space
											//EditorGUILayout.Space();
											
											// Show Transition / Tweening if we are not using an instant "Show" transition
											if( layer.display != DUI_LAYER_STATUS.Show ){
											
												// Use Transitions
												GUILayout.Label("Motion From:", GUILayout.MaxWidth(80));
												GUILayout.BeginHorizontal();
													GUILayout.Label(nextLabel, GUILayout.MaxWidth(20));
													layer.motion = EditorGUILayout.EnumPopup("", layer.motion, GUILayout.MaxWidth(58));
												GUILayout.EndHorizontal();
											
											// Set motion to static automatically if we are using an instant transition
											} else {
												layer.motion = DUI_ACTOR_MOTION.Static;
											}
										
										// Set motion to static automatically if we are using Hide
										} else {
											layer.motion = DUI_ACTOR_MOTION.Static;
										}
									
									}
									
								// End of column 1	
								GUILayout.EndVertical();
								GUILayout.EndHorizontal();
								
								// increment the ActionCount
								actionCount++;
							}
							
							// Indent Space
							//GUILayout.FlexibleSpace();
							//GUILayout.Label("", GUILayout.MaxWidth(5));
					
							// Add space indent
							//GUILayout.Label("", GUILayout.MaxWidth(5));
					
						GUILayout.EndHorizontal();
						
						// Show help text if the user is setting a layer
						if(setLayerFound){
						
							// Indent Space
							EditorGUILayout.Space();
							
							// Foot note
							GUILayout.BeginHorizontal();
							//	GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
								GUILayout.Label("NOTE: Layer 1 is furthest behind and Layer 10 is nearest to the front.");
							//	GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
							GUILayout.EndHorizontal();
						
						}
						
						// Indent Space
						EditorGUILayout.Space();
						
					GUILayout.EndVertical();
				}
		}
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	DO SCENE AUDIO TAB
	//	Renders the Audio Actions tab
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function DoSceneAudioTab( theObject : DialogScreen ){
		
		// CACHE AUDIO SETUP CHANNEL
		// Cache the correct audio
		var channel : DSAudioSetup;
		
		// Music
		if( theObject.audioTab == 0 ){
			channel = theObject.actions.music;
			GUILayout.Label("Music Channel", "BoldLabel");
		}
		// SFX 1
		else if( theObject.audioTab == 1 ){
			channel = theObject.actions.sfx1;
			GUILayout.Label("Sound Effects Channel 1", "BoldLabel");
		}
		// SFX 2
		else if( theObject.audioTab == 2 ){
			channel = theObject.actions.sfx2;
			GUILayout.Label("Sound Effects Channel 2", "BoldLabel");
		}
		// SFX 3
		else if( theObject.audioTab == 3 ){
			channel = theObject.actions.sfx3;
			GUILayout.Label("Sound Effects Channel 3", "BoldLabel");
		}
		
		// Info text
		GUILayout.Label("Use these custom sound channels to play, stop or fade audio.");
		
		// Space
		EditorGUILayout.Space();
		
		// Audio Channel Selector
		GUILayout.BeginHorizontal();
			theObject.audioTab = GUILayout.SelectionGrid (theObject.audioTab, audioTabStrings, 4, GUILayout.MinHeight(20), GUILayout.MaxHeight(20), GUILayout.MinWidth(380));
		GUILayout.EndHorizontal();
		
		
		// Main Layout
		GUILayout.BeginVertical();
		
			// Vertical Box
			GUILayout.BeginVertical("Box");
				/*
				// Indent Space
				EditorGUILayout.Space();
				
				// Title
				GUILayout.BeginHorizontal();
					GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
					GUILayout.BeginVertical();
					GUILayout.Label("Audio Actions", "BoldLabel");
					GUILayout.Label("Modify 'Actor Layers' to introduce various actors or objects in the foreground of the scene.");
					GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
					GUILayout.EndVertical();
				GUILayout.EndHorizontal();
				*/
				// Space
				EditorGUILayout.Space();
				
				
			
				// Indent Space
			//	EditorGUILayout.Space();
				
				// Content
				GUILayout.BeginHorizontal();
					GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
					GUILayout.BeginVertical();
						
						// AUDIO ACTION		
						GUILayout.Label("Select An Action", "BoldLabel");
						GUILayout.BeginHorizontal();
							GUILayout.Label(gearLabel, GUILayout.MaxWidth(20));
							channel.action = EditorGUILayout.EnumPopup("", channel.action);
						GUILayout.EndHorizontal();
						
						// Space
						EditorGUILayout.Space();
						
						// Remove the audioclip if we're not using it!
						if( channel.action == DSAudioAction.Stop || channel.action == DSAudioAction.None || channel.action == DSAudioAction.FadeOut ){	
							channel.clip = null;
						}
						
						// Show extra options if we are playing audio			
						if( channel.action != DSAudioAction.None && channel.action != DSAudioAction.Stop ){			
							
							// Dont show the main Play Audio controls if we're fading the audio out
							if( channel.action != DSAudioAction.FadeOut ){
									
								// Launch audio from clip
								channel.useAudioPath = EditorGUILayout.Toggle("Load Audio from Filepath:", channel.useAudioPath);
								
								// If we're using an Audio filepath, show the text editor 
								if( channel.useAudioPath ){
									
									// Remove the AudioClip
									channel.clip = null;
									
									// Launch audio from clip
									GUILayout.BeginHorizontal();
										GUILayout.Label(fileLabel, GUILayout.MaxWidth(20));
										channel.playFromPath = EditorGUILayout.TextField("Filepath (Without Prefix):", channel.playFromPath);
									GUILayout.EndHorizontal();
								
								// Use AudioClip	
								} else {
									
									// Launch audio from clip
									GUILayout.BeginHorizontal();
										GUILayout.Label(fileLabel, GUILayout.MaxWidth(20)); // indent
											channel.clip = EditorGUILayout.ObjectField("Audio Clip:",channel.clip, AudioClip, false );
									GUILayout.EndHorizontal();
								}
								
								// Volume
								GUILayout.BeginHorizontal();
									GUILayout.Label(audioLabel, GUILayout.MaxWidth(20)); // indent
									channel.volume = EditorGUILayout.FloatField("Volume:", channel.volume);
									channel.volume = Mathf.Clamp(channel.volume, 0.01, 1);
								GUILayout.EndHorizontal();
								
								// Pitch
								GUILayout.BeginHorizontal();
									GUILayout.Label(pitchLabel, GUILayout.MaxWidth(20)); // indent
									channel.pitch = EditorGUILayout.FloatField("Pitch:", channel.pitch);
									channel.pitch = Mathf.Clamp(channel.pitch, -3, 3);
								GUILayout.EndHorizontal();
								
								// Loop
								GUILayout.BeginHorizontal();
									GUILayout.Label(loopLabel, GUILayout.MaxWidth(20)); // indent
									channel.loop = EditorGUILayout.Toggle("Loop:", channel.loop);
								GUILayout.EndHorizontal();
							}
							
							// If this is a fade action, show the fade commands
							if( channel.action == DSAudioAction.FadeOut || channel.action == DSAudioAction.FadeInAndPlay ){
								
								// Fade Duration
								GUILayout.BeginHorizontal();
									GUILayout.Label(fadeInLabel, GUILayout.MaxWidth(20)); // indent
									channel.fadeDuration = EditorGUILayout.FloatField("Fade Duration:", channel.fadeDuration);
									channel.fadeDuration = Mathf.Clamp(channel.fadeDuration, 0.1, 10);
								GUILayout.EndHorizontal();
								
							}
						}
						
						// Bottom space
						EditorGUILayout.Space();
						EditorGUILayout.Space();
						
					GUILayout.EndVertical();
					GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
					
				// End of Content	
				GUILayout.EndHorizontal();
				
			
			GUILayout.EndVertical();
				
			
		// End Main Layout
		GUILayout.EndVertical();
		
		// Indent Space
		EditorGUILayout.Space();				
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	DO TOKENS TAB
	//	Renders the Tokens Actions tab
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function DoTokensTab( theObject : DialogScreen ){
		
		// Make sure we can find the DialogUI so we can access the components 
		var theDUIs : Component[] = FindObjectsOfType (DialogUI);
		if(theDUIs.length > 0){
		
			// Show the UI if we have some tokens
			var tokenArray : String[] = theDUIs[0].GetTokenStringArray();
			if( tokenArray != null && tokenArray.length > 0 ){
			
				// Header
				GUILayout.Label("Setup Tokens", "BoldLabel");
				GUILayout.Label("Tokens can be used to create dynamic variables such as player names, age,");
				GUILayout.Label("currency, etc. They are initially created in the DialogUI, and can be used");
				GUILayout.Label("in dialog text and titles by typing '$TokenName'.");
				EditorGUILayout.Space();
			
				// Make sure we have tokens to display
				if(theObject.actions.tokens.length > 0){
					
					// Space
					EditorGUILayout.Space();
				
					// Loop through the Token actions
					for( var token : DSTokenActions in theObject.actions.tokens ){
				
						// Fade Duration
						GUILayout.BeginVertical("Box", GUILayout.MaxHeight(32));
							
							// Space
							EditorGUILayout.Space();
					
							// ROW 1
							GUILayout.BeginHorizontal();
								
								// Space
								GUILayout.FlexibleSpace();
												
								// Index
								GUILayout.Label(keyLabel, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
								GUILayout.Label("Token: ", GUILayout.MaxHeight(32), GUILayout.MinWidth(40), GUILayout.MaxWidth(40));
								token.index = EditorGUILayout.Popup(token.index, tokenArray, GUILayout.MaxHeight(32), GUILayout.MinWidth(80), GUILayout.MaxWidth(80));
								
								// Space
								GUILayout.Label("", GUILayout.MaxHeight(32), GUILayout.MinWidth(10), GUILayout.MaxWidth(10));
								
								// Action
								GUILayout.Label(gearLabel, GUILayout.MaxHeight(32),GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
								//GUILayout.Label("Action: ", GUILayout.MinWidth(50), GUILayout.MaxWidth(50));
								token.action = EditorGUILayout.EnumPopup(token.action, GUILayout.MaxHeight(32), GUILayout.MinWidth(60), GUILayout.MaxWidth(60));
								
								// Space
								GUILayout.Label("", GUILayout.MaxHeight(32), GUILayout.MinWidth(10), GUILayout.MaxWidth(10));
								
								// Argument
								GUILayout.Label( buttonLabel, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
								GUILayout.Label("Value: ", GUILayout.MaxHeight(32), GUILayout.MinWidth(40), GUILayout.MaxWidth(40));
								token.argument = EditorGUILayout.TextField(token.argument, GUILayout.MinWidth(80), GUILayout.MaxWidth(80));
								
								// Space
								GUILayout.Label("", GUILayout.MaxHeight(32), GUILayout.MinWidth(10), GUILayout.MaxWidth(10));
								
								// Localize
								GUILayout.Label( selectLocalization, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
								//GUILayout.Label("Localize: ", GUILayout.MinWidth(50), GUILayout.MaxWidth(50));
								token.localize = EditorGUILayout.Toggle(token.localize, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
							
								GUILayout.FlexibleSpace();
								
							GUILayout.EndHorizontal();
							
							// ROW 2
							if(token.localize){
								
								// Header
								GUILayout.BeginHorizontal();
									GUILayout.FlexibleSpace();
									GUILayout.Label( "Localized Values", "BoldLabel");
									GUILayout.FlexibleSpace();
								GUILayout.EndHorizontal();
								
								// SubHeader
								GUILayout.BeginHorizontal();
									GUILayout.FlexibleSpace();
									GUILayout.Label( "You can also access these entries from the 'Localize' tab!");
									GUILayout.FlexibleSpace();
								GUILayout.EndHorizontal();
								
								
								// Space
								EditorGUILayout.Space();
								EditorGUILayout.Space();
								
								// Localizations - Row 1
								GUILayout.BeginHorizontal();
								
									// Flexible Space
									GUILayout.FlexibleSpace();
									
									// CHINESE
									GUILayout.Label( chinaFlag, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
									GUILayout.Label("Chinese: ", GUILayout.MaxHeight(32), GUILayout.MinWidth(70), GUILayout.MaxWidth(70));
									token.localizedArgument.chinese = EditorGUILayout.TextField(token.localizedArgument.chinese, GUILayout.MinWidth(80), GUILayout.MaxWidth(80));
									
									// Flexible Space
									GUILayout.FlexibleSpace();
								
									// KOREAN
									GUILayout.Label( koreaFlag, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
									GUILayout.Label("Korean: ", GUILayout.MaxHeight(32), GUILayout.MinWidth(70), GUILayout.MaxWidth(70));
									token.localizedArgument.korean = EditorGUILayout.TextField(token.localizedArgument.korean, GUILayout.MinWidth(80), GUILayout.MaxWidth(80));

									// Flexible Space
									GUILayout.FlexibleSpace();
								
								// End Row
								GUILayout.EndHorizontal();
								
								// Localizations - Row 2
								GUILayout.BeginHorizontal();
								
									// Flexible Space
									GUILayout.FlexibleSpace();
									
									// JAPANESE
									GUILayout.Label( japanFlag, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
									GUILayout.Label("Japanese: ", GUILayout.MaxHeight(32), GUILayout.MinWidth(70), GUILayout.MaxWidth(70));
									token.localizedArgument.japanese = EditorGUILayout.TextField(token.localizedArgument.japanese, GUILayout.MinWidth(80), GUILayout.MaxWidth(80));
									
									// Flexible Space
									GUILayout.FlexibleSpace();
								
									// GERMAN
									GUILayout.Label( germanyFlag, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
									GUILayout.Label("German: ", GUILayout.MaxHeight(32), GUILayout.MinWidth(70), GUILayout.MaxWidth(70));
									token.localizedArgument.german = EditorGUILayout.TextField(token.localizedArgument.german, GUILayout.MinWidth(80), GUILayout.MaxWidth(80));

									// Flexible Space
									GUILayout.FlexibleSpace();
								
								// End Row
								GUILayout.EndHorizontal();
								
								// Localizations - Row 3
								GUILayout.BeginHorizontal();
								
									// Flexible Space
									GUILayout.FlexibleSpace();
									
									// FRENCH
									GUILayout.Label( franceFlag, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
									GUILayout.Label("French: ", GUILayout.MaxHeight(32), GUILayout.MinWidth(70), GUILayout.MaxWidth(70));
									token.localizedArgument.french = EditorGUILayout.TextField(token.localizedArgument.french, GUILayout.MinWidth(80), GUILayout.MaxWidth(80));
									
									// Flexible Space
									GUILayout.FlexibleSpace();
								
									// SPANISH
									GUILayout.Label( spainFlag, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
									GUILayout.Label("Spanish: ", GUILayout.MaxHeight(32), GUILayout.MinWidth(70), GUILayout.MaxWidth(70));
									token.localizedArgument.spanish = EditorGUILayout.TextField(token.localizedArgument.spanish, GUILayout.MinWidth(80), GUILayout.MaxWidth(80));

									// Flexible Space
									GUILayout.FlexibleSpace();
								
								// End Row
								GUILayout.EndHorizontal();
								
								// Localizations - Row 4
								GUILayout.BeginHorizontal();
								
									// Flexible Space
									GUILayout.FlexibleSpace();
									
									// ITALIAN
									GUILayout.Label( italyFlag, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
									GUILayout.Label("Italian: ", GUILayout.MaxHeight(32), GUILayout.MinWidth(70), GUILayout.MaxWidth(70));
									token.localizedArgument.italian = EditorGUILayout.TextField(token.localizedArgument.italian, GUILayout.MinWidth(80), GUILayout.MaxWidth(80));
									
									// Flexible Space
									GUILayout.FlexibleSpace();
								
									// PORTUGUESE
									GUILayout.Label( portugalFlag, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
									GUILayout.Label("Portuguese: ", GUILayout.MaxHeight(32), GUILayout.MinWidth(70), GUILayout.MaxWidth(70));
									token.localizedArgument.portuguese = EditorGUILayout.TextField(token.localizedArgument.portuguese, GUILayout.MinWidth(80), GUILayout.MaxWidth(80));

									// Flexible Space
									GUILayout.FlexibleSpace();
								
								// End Row
								GUILayout.EndHorizontal();
								
								// Localizations - Row 4
								GUILayout.BeginHorizontal();
								
									// Flexible Space
									GUILayout.FlexibleSpace();
									
									// RUSSIAN
									GUILayout.Label( russiaFlag, GUILayout.MaxHeight(32), GUILayout.MinWidth(20), GUILayout.MaxWidth(20));
									GUILayout.Label("Russian: ", GUILayout.MaxHeight(32), GUILayout.MinWidth(70), GUILayout.MaxWidth(70));
									token.localizedArgument.russian = EditorGUILayout.TextField(token.localizedArgument.russian, GUILayout.MinWidth(80), GUILayout.MaxWidth(80));

									// Flexible Space
									GUILayout.FlexibleSpace();
									
									// Empty Space
									GUILayout.Label( "", GUILayout.MaxHeight(32), GUILayout.MinWidth(178), GUILayout.MaxWidth(178));
									
									// Flexible Space
									GUILayout.FlexibleSpace();
								
								// End Row
								GUILayout.EndHorizontal();
								
								// Localizations - Row 4
								GUILayout.BeginHorizontal();
								// Empty Space
									GUILayout.Label( "", GUILayout.MaxHeight(32), GUILayout.MinWidth(178), GUILayout.MaxWidth(178));
								GUILayout.EndHorizontal();
							}
							
						// End of Content	
						GUILayout.EndVertical();
					
					}	
				}
			
				// Button Row
				if(!Application.isPlaying){
					GUILayout.BeginHorizontal("");
								
						// Space
						GUILayout.FlexibleSpace();							
						
						// Remove Token Button
						if(theObject.actions.tokens.length > 0){
							if(GUILayout.Button(removeButton, GUILayout.MaxWidth(32))){
								theObject.actions.tokens = RemoveTokenAction(theObject.actions.tokens);	
							}
						}
						
						// Add Token Button
						if( GUILayout.Button(addButton, GUILayout.MaxWidth(32)) ){
							theObject.actions.tokens = AddTokenAction(theObject.actions.tokens);
						}
						
					GUILayout.EndHorizontal();
				}
				
			// If we have no Tokens setup in Dialog UI ..
			} else {
				
				GUILayout.Label("Setup Tokens", "BoldLabel");
				GUILayout.Label("You cannot use Token Actions because you haven't set up any tokens yet.");
				GUILayout.Label("You can create Tokens in the Dialog UI component.");
				
				EditorGUILayout.Space();
				
			}
		
		// Cant find Dialog UI
		} else {
		
			GUILayout.Label("Setup Tokens", "BoldLabel");
			GUILayout.Label("You must have a DialogUI component in the scene to use this tab!");
				
			EditorGUILayout.Space();
			
		}
		
		// Space
		EditorGUILayout.Space();	
	}
	
	// Remove the last token in an array
	function RemoveTokenAction( actions : DSTokenActions[] ){
		
		// If we have 0 items, create a new array
		if( actions != null || actions.length > 0){
			
			// backup the old Actions
			var oldActions : DSTokenActions[] = actions;
			
			// create the new actions list (but remove 1)
			actions = new DSTokenActions[(actions.length - 1)];
			for(var n : int = 0; n < actions.length; n++){
				actions[n] = oldActions[n];
			}
			
		}
		
		// return actions
		return actions;
	}
	
	// Remove the last token in an array
	function AddTokenAction( actions : DSTokenActions[] ){
		
		// If we have 0 items, create a new array
		if( actions == null || actions.length == 0){
		
			actions = new DSTokenActions[1];
			actions[0] = new DSTokenActions();
		
		// If we have more than 1 item already ..
		} else if( actions != null && actions.length > 0 ){
			
			// backup the old Actions
			var oldActions : DSTokenActions[] = actions;
			
			// Create a new list (+1)
			actions = new DSTokenActions[(actions.length + 1)];
			for(var n : int = 0; n < actions.length; n++){
				// Copy from the old Actions if we find an entry
				if( n < actions.length-1){
					actions[n] = oldActions[n];
				// If we don't find one (the last entry), create a new one!
				// NOTE: for some reason we need to setup the values too otherwise there are bugs in the editor)!	
				} else {
					actions[n] = new DSTokenActions();
					actions[n].index = 0;
					actions[n].action = DSTokenActionType.Set;
					actions[n].argument = "";
					actions[n].localize = false;
					actions[n].localizedArgument = new DS_LocalizedTokenArgument();
				}
			}
		}
		
		// return actions
		return actions;
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	DO ADVANCED ACTIONS TAB
	//	Renders the Advanced Action Tab
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function DoGamObjectActionsTab( theObject : DialogScreen ){
	
		// TITLE
		GUILayout.Label("GameObject Actions", "BoldLabel");
		GUILayout.Label("Sequence the creation, destruction and activation of other GameObjects.");
		EditorGUILayout.Space();
		
		// CREATE OBJECTS AT START
		GUILayout.BeginVertical ("box");
		
		if ( theObject.actions.createObjectsAtStart != null ) {
			
			openCreateObjectsAtStart = EditorGUILayout.Foldout(openCreateObjectsAtStart, "  Create Objects At Start ("+theObject.actions.createObjectsAtStart.length.ToString() +")");
		
		// BUGFIX
		// If this has come back as null, let's automatically 
		} else {
			// ?
		}
		
		// When we open this object
		if(openCreateObjectsAtStart) {
			
			// Show the editor for DS_ObjectCreation
			theObject.actions.createObjectsAtStart = PopulateDSOC(theObject.actions.createObjectsAtStart);
			
		}
		
		
		
		// End Box	
		GUILayout.EndVertical();	
		
		// Add Space
		EditorGUILayout.Space();
		
		// ---------------------------------------------------------------------------------------------
		
		// CREATE OBJECTS AT END
		GUILayout.BeginVertical ("box");
		
			// Make sure we can see this ..
			if ( theObject.actions.createObjectsAtEnd != null ) {
				
				openCreateObjectsAtEnd = EditorGUILayout.Foldout(openCreateObjectsAtEnd, "  Create Objects At End ("+theObject.actions.createObjectsAtEnd.length.ToString() +")");
			
			}
			
			// When we open this object
			if(openCreateObjectsAtEnd) {
			
				// Show the editor for DS_ObjectCreation
				theObject.actions.createObjectsAtEnd = PopulateDSOC(theObject.actions.createObjectsAtEnd);
			
			}
		
		// End Box	
		GUILayout.EndVertical();		
								
		// Add Space
		EditorGUILayout.Space();
		
		// ---------------------------------------------------------------------------------------------	
	
		// FIND AND ACTIVATE OBJECTS AT START
		GUILayout.BeginVertical ("box");
		
			// Make sure we can see this ..
			if ( theObject.actions.createObjectsAtEnd != null ) {
				
				openActivateObjectsAtStart = EditorGUILayout.Foldout(openActivateObjectsAtStart, "  Activate At Start ("+theObject.actions.activateTheseObjectsAtStart.length.ToString() +")");
		
			}
		
			// When we open this object
			if(openActivateObjectsAtStart) {
			
				// Show the editor for Strings
				theObject.actions.activateTheseObjectsAtStart = PopulateStrings(theObject.actions.activateTheseObjectsAtStart, " Search For These GameObjects");
	
			}
			
		
		// End Box	
		GUILayout.EndVertical();		
								
		// Add Space
		EditorGUILayout.Space();
		
	// ---------------------------------------------------------------------------------------------
	
		// Create Objects At Start with Box
		GUILayout.BeginVertical ("box");
		
			// Make sure we can see this ..
			if ( theObject.actions.activateTheseObjectsAtEnd != null ) {
				
				openActivateTheseObjectsAtEnd= EditorGUILayout.Foldout(openActivateTheseObjectsAtEnd, "  Activate At End ("+theObject.actions.activateTheseObjectsAtEnd.length.ToString() +")");
			
			}
		
			// When we open this object
			if(openActivateTheseObjectsAtEnd) {
			
				// Show the editor for GameObjects
				theObject.actions.activateTheseObjectsAtEnd = PopulateGameObjects(theObject.actions.activateTheseObjectsAtEnd, " Activate These GameObjects");
			
			}
		
		
		// End Box	
		GUILayout.EndVertical();		
								
		// Add Space
		EditorGUILayout.Space();
		
	// ---------------------------------------------------------------------------------------------
	
		// Create Objects At Start with Box
		GUILayout.BeginVertical ("box");
		
			// Make sure we can see this ..
			if ( theObject.actions.findAndDestroyTheseObjectsAtEnd != null ) {
				
				openFindAndDestroyTheseObjectsAtEnd = EditorGUILayout.Foldout(openFindAndDestroyTheseObjectsAtEnd, "  Destroy Objects At End ("+theObject.actions.findAndDestroyTheseObjectsAtEnd.length.ToString() +")");
			
			}
		
			// When we open this object
			if(openFindAndDestroyTheseObjectsAtEnd) {
			
				// Show the editor for Strings
				theObject.actions.findAndDestroyTheseObjectsAtEnd = PopulateStrings(theObject.actions.findAndDestroyTheseObjectsAtEnd, " Search For These GameObjects");
				
			}
		
		
		// End Box	
		GUILayout.EndVertical();		
								
		// Add Space
		EditorGUILayout.Space();
		
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	DO uSEQUENCER TAB
	//	Third Party Tool Support For uSequencer
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function DoUSequencerTab( theObject : DialogScreen ){
		
		// Main Box
		EditorGUILayout.BeginVertical("Box");
			
			// Add Space
			EditorGUILayout.Space();
			
			// Add horizontal row
			EditorGUILayout.BeginHorizontal();
			
				// Icon
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				GUILayout.Label(uSequencerIcon, GUILayout.MinWidth(48), GUILayout.MaxWidth(48));	// uSequencer Icon
				
				// Title
				EditorGUILayout.BeginVertical( GUILayout.MaxWidth(0));
					GUILayout.Label("uSequencer Actions", "BoldLabel");
					GUILayout.Label("Setup a uSequence at the Start and/or End of this Dialog Screen.\nNOTE: Only use these actions if you have the uSequencer plugin.");
				EditorGUILayout.EndVertical();
				
			// End of row
			EditorGUILayout.EndHorizontal();
		
			
			// TITLE - WHICH SEQUENCE?
			EditorGUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				GUILayout.Label("Select uSequence", "BoldLabel");
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
			EditorGUILayout.EndHorizontal();
			
			// Add Space
			EditorGUILayout.Space();
				
			// GameObject Reference
			EditorGUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				GUILayout.Label(uSequencerIcon, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
				theObject.actions.uSequencer.go = EditorGUILayout.ObjectField("uSequence GameObject: ", theObject.actions.uSequencer.go, GameObject, true); 
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
			EditorGUILayout.EndHorizontal();	
				
			// Sequence Name
			EditorGUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				GUILayout.Label(findLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
				theObject.actions.uSequencer.findGo = EditorGUILayout.TextField("OR Find By Name: ", theObject.actions.uSequencer.findGo); 
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
			EditorGUILayout.EndHorizontal();
			
			// Add Space
			EditorGUILayout.Space();
			
			// TITLE - Setup
			EditorGUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				GUILayout.Label("Setup", "BoldLabel");
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
			EditorGUILayout.EndHorizontal();
			
			// Add Space
			EditorGUILayout.Space();
			
			// Playback Time
			EditorGUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				GUILayout.Label(uSequencerIcon, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
				theObject.actions.uSequencer.setup = EditorGUILayout.Toggle("Setup Sequence: ", theObject.actions.uSequencer.setup); 
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
			EditorGUILayout.EndHorizontal();
			
			// If we're setting up this sequence, show the extra options
			if(theObject.actions.uSequencer.setup){
				
				// Playback Time
				EditorGUILayout.BeginHorizontal();
					GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
					GUILayout.Label(timeLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
					theObject.actions.uSequencer.setPlaybackTime = EditorGUILayout.FloatField("Set Playback Time: ", theObject.actions.uSequencer.setPlaybackTime); 
					GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				EditorGUILayout.EndHorizontal();
				
				// Playback Time
				EditorGUILayout.BeginHorizontal();
					GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
					GUILayout.Label(timeLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
					theObject.actions.uSequencer.setPlaybackRate = EditorGUILayout.FloatField("Set Playback Rate: ", theObject.actions.uSequencer.setPlaybackRate); 
					GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				EditorGUILayout.EndHorizontal();
			
			}
			
			// Add Space
			EditorGUILayout.Space();
			
			
			// TITLE - ACTIONS
			EditorGUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				GUILayout.Label("Actions", "BoldLabel");
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
			EditorGUILayout.EndHorizontal();
		
			// Add Space
			EditorGUILayout.Space();
				
			// START ACTIONS
		
			// TITLE - Start Action
			EditorGUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				GUILayout.Label("Perform this action at the start of this Dialog Screen.");
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
			EditorGUILayout.EndHorizontal();
			
			// Action Popup
			GUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				GUILayout.Label(gearLabel, GUILayout.MaxWidth(20));
				theObject.actions.uSequencer.startAction = EditorGUILayout.EnumPopup("", theObject.actions.uSequencer.startAction);
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
			GUILayout.EndHorizontal();
			
			GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
			
			
			// END ACTIONS
			
			// TITLE - End Action
			EditorGUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				GUILayout.Label("Perform this action at the end of this Dialog Screen.");
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
			EditorGUILayout.EndHorizontal();
			
			// Action Popup
			GUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
				GUILayout.Label(gearLabel, GUILayout.MaxWidth(20));
				theObject.actions.uSequencer.endAction = EditorGUILayout.EnumPopup("", theObject.actions.uSequencer.endAction);
				GUILayout.Label("", GUILayout.MaxWidth(0));	// indent
			GUILayout.EndHorizontal();
			
		
			// Add Space
			EditorGUILayout.Space();
		
		// End Main Box
		EditorGUILayout.EndVertical();
		
		// Add Space
		EditorGUILayout.Space();
	}
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	POPULATE DSOC
	//	Dynamic GUI for the DSObjectCreation[] class
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function PopulateDSOC( mainDSOC : DSObjectCreation[] ) {
		
	// If we have objects setup, setup the loop.
		//theObject.actions.createObjectsAtStart								
		if ( mainDSOC.length > 0 ) {
										
			// Add Space
			EditorGUILayout.Space();
											
			// Setup Labels
			EditorGUILayout.BeginHorizontal();
												
				GUILayout.Label("", GUILayout.MaxWidth(5));
				GUILayout.Label("", GUILayout.MaxWidth(25));
				GUILayout.Label("Object To Create", "BoldLabel", GUILayout.MaxWidth(200));
				GUILayout.Label("Location", "BoldLabel", GUILayout.MaxWidth(200));
				GUILayout.Label("Find Location", "BoldLabel", GUILayout.MaxWidth(200));
				GUILayout.Label("", GUILayout.MaxWidth(18));
				GUILayout.Label("", GUILayout.MaxWidth(5));
												
			EditorGUILayout.EndHorizontal();
										
			// Populate Each Entry
			var theCount : int = 0;
			for ( var theDSOC : DSObjectCreation in mainDSOC ) {
				theCount = theCount + 1;
	
				if ( theDSOC != null ) {
			
					EditorGUILayout.BeginHorizontal();
						GUILayout.Label("", GUILayout.MaxWidth(5));
						GUILayout.Label(theCount.ToString(), GUILayout.MaxWidth(25));
				
							theDSOC.createObject = EditorGUILayout.ObjectField(theDSOC.createObject, GameObject,  false, GUILayout.MaxWidth(200));
							
							if ( theDSOC.createObject == target.gameObject ){
								Debug.Log("Creating an identical Dialog Object is not allowed!");	
								theDSOC.createObject = null;
							}
							
							// Check to make sure this is a prefab!
							//Debug.Log( EditorUtility.IsPersistent(Selection.activeObject) );
							
							theDSOC.createLocation = EditorGUILayout.ObjectField(theDSOC.createLocation, Transform,  true, GUILayout.MaxWidth(200));
							theDSOC.findGameObjectLocation = EditorGUILayout.TextField(theDSOC.findGameObjectLocation, GUILayout.MaxWidth(200));
							
							// Origin shortcut button
							if( GUILayout.Button (originLabel, GUILayout.MaxWidth(18), GUILayout.MaxHeight(18)) ) {
								theDSOC.findGameObjectLocation = "Origin";
							}
					
						GUILayout.Label("", GUILayout.MaxWidth(5));
					EditorGUILayout.EndHorizontal();
				}
			}
											
			// Add Space
			EditorGUILayout.Space();
											
			// Add Space
			EditorGUILayout.Space();
			
			// Add Buttons
			EditorGUILayout.BeginHorizontal();
											
				GUILayout.FlexibleSpace();	// Space
												
				if( GUILayout.Button(removeButton, GUILayout.MaxWidth(32)) ) {		// Remove Button
					mainDSOC = ResizeArray( mainDSOC, false );
				}
												
				if(GUILayout.Button(addButton, GUILayout.MaxWidth(32))) {			// Add Button
					mainDSOC = ResizeArray( mainDSOC, true );
				}
												
				GUILayout.Label("", GUILayout.MaxWidth(5));	// Indent
										
			EditorGUILayout.EndHorizontal();EditorGUILayout.Space();EditorGUILayout.Space(); // End horizontal and space
			
			// Return the array
			return mainDSOC;
											
		} else {
			
			// Add Buttons
			EditorGUILayout.BeginHorizontal();
											
				GUILayout.FlexibleSpace();	// Space
												
				if( GUILayout.Button(removeButton, GUILayout.MaxWidth(32)) ) {		// Remove Button
					mainDSOC = ResizeArray( mainDSOC, false );
				}
												
				if(GUILayout.Button(addButton, GUILayout.MaxWidth(32))) {			// Add Button
					mainDSOC = ResizeArray( mainDSOC, true );
				}
												
				GUILayout.Label("", GUILayout.MaxWidth(5));	// Indent
										
			EditorGUILayout.EndHorizontal();EditorGUILayout.Space();EditorGUILayout.Space(); // End horizontal and space
			
			// Return the array
			return mainDSOC;
			
		}
		
	}
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	RESIZE ARRAY
	//	Resizes Arrays of different custom class types
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function ResizeArray( theDSOC : DSObjectCreation[], increase : boolean ) {		// Using DS_ObjectCreation argument
		
		// If our values are correct
		if ( theDSOC != null && increase != null ) {
	
			// Create a dynamic array to store the old static built-in one.
			var newarr = new Array (theDSOC);
			
			// Create a new DSOC to use as a new slot
			var pushBuiltIn = new DSObjectCreation();
			pushBuiltIn.createObject = null;
			pushBuiltIn.createLocation = null;
			pushBuiltIn.findGameObjectLocation = "";
			
			// Add a slot or delete one depending on increase argument ..
			if ( increase ) {
				newarr.Push(pushBuiltIn);
			} else if ( theDSOC.length > 0 ){
				newarr.Pop();
			}
			
			// Convert the array back to a built-in one..
			var newBuiltinArray : DSObjectCreation[] = newarr.ToBuiltin(DSObjectCreation);
			
			// Return it.
			return newBuiltinArray;
	
		}
	}
	
	function ResizeArray( theStrings : String[], increase : boolean ) {		// Using String Argument
		
		// If our values are correct
		if ( theStrings != null && increase != null ) {
													
			// Create a dynamic array to store the old static built-in one.
			var newarr = new Array (theStrings);
			
			// Add a slot or delete one depending on increase argument ..
			if ( increase ) {
				newarr.Push("");
			} else if ( theStrings.length > 0 ) {
				newarr.Pop();
			}
			
			// Convert the array back to a built-in one..
			var newBuiltinArray : String[] = newarr.ToBuiltin(String);
			
			// Return it.
			return newBuiltinArray;
		}
	}
	
	function ResizeArray( theGameObjects : GameObject[], resize : int ) {		// Using GameObject Argument
		
		// If our values are correct
		if ( theGameObjects != null && resize != 0 ) {
													
			// backup variable
			var theGameObjects_Backup : GameObject[] = theGameObjects;
													
			// Recreate The List
			if ( theGameObjects.length > 0 || resize > 0 ) {
				theGameObjects = new GameObject[theGameObjects.length + resize];
			}
													
			// Loop the values back
			for( var i : int =0;i<theGameObjects_Backup.length;i++) {
														
				// Make sure we're still bounds
				if ( i <= theGameObjects.length -1 ) {
					theGameObjects[i] = theGameObjects_Backup[i];
				}
			}
			
			return theGameObjects;
		}
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	POPULATE STRINGS
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function PopulateStrings( theTexts : String[], theLabel : String ) {
		
		
		// Make sure we have strings setup first ..
		if ( theTexts != null && theTexts.length > 0 ) {
		
			var theStrings : String[] = theTexts;
			
			// Add Space
			EditorGUILayout.Space();
											
			// Setup Labels
			EditorGUILayout.BeginHorizontal();
												
				GUILayout.Label("", GUILayout.MaxWidth(5));
				GUILayout.Label("", GUILayout.MaxWidth(25));
				GUILayout.Label(theLabel, "BoldLabel");
				GUILayout.Label("", GUILayout.MaxWidth(5));
												
			EditorGUILayout.EndHorizontal();
										
			// Populate Each Entry
			var theCount : int = 0;
			for ( var theText : String in theStrings ) {
				theCount = theCount + 1;
			
				EditorGUILayout.BeginHorizontal();
					GUILayout.Label("", GUILayout.MaxWidth(5));
					GUILayout.Label(theCount.ToString(), GUILayout.MaxWidth(25));
					theText = EditorGUILayout.TextField( theText );
					GUILayout.Label("", GUILayout.MaxWidth(5));
				EditorGUILayout.EndHorizontal();
			
			}
											
			// Add Space
			EditorGUILayout.Space();
											
			// Add Space
			EditorGUILayout.Space();
			
			// Add Buttons
			EditorGUILayout.BeginHorizontal();
											
				GUILayout.FlexibleSpace();	// Space
												
				if( GUILayout.Button(removeButton, GUILayout.MaxWidth(32)) ) {		// Remove Button
					theStrings = ResizeArray( theStrings, false );
				}
												
				if(GUILayout.Button(addButton, GUILayout.MaxWidth(32))) {			// Add Button
					theStrings = ResizeArray( theStrings, true );
				}
												
				GUILayout.Label("", GUILayout.MaxWidth(5));	// Indent
										
			EditorGUILayout.EndHorizontal();EditorGUILayout.Space();EditorGUILayout.Space(); // End horizontal and space
			
			// Return
			return theStrings;
											
		} else {
			
			// Add Buttons
			EditorGUILayout.BeginHorizontal();
											
				GUILayout.FlexibleSpace();	// Space
												
				if( GUILayout.Button(removeButton, GUILayout.MaxWidth(32)) ) {		// Remove Button
					theTexts = ResizeArray( theTexts, false );
				}
												
				if(GUILayout.Button(addButton, GUILayout.MaxWidth(32))) {			// Add Button
					theTexts = ResizeArray( theTexts, true );
				}
												
				GUILayout.Label("", GUILayout.MaxWidth(5));	// Indent
										
			EditorGUILayout.EndHorizontal();EditorGUILayout.Space();EditorGUILayout.Space(); // End horizontal and space
			
			// Return
			return theTexts;
			
		}
		
	}
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	POPULATE GAME OBJECTS
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function PopulateGameObjects( theGameObjects : GameObject[], theLabel : String ) {
		
		// Make sure we have strings setup first ..
		if ( theGameObjects != null && theGameObjects.length > 0 ) {
										
			// Add Space
			EditorGUILayout.Space();
											
			// Setup Labels
			EditorGUILayout.BeginHorizontal();
												
				GUILayout.Label("", GUILayout.MaxWidth(5));
				GUILayout.Label("", GUILayout.MaxWidth(25));
				GUILayout.Label(theLabel, "BoldLabel");
				GUILayout.Label("", GUILayout.MaxWidth(5));
												
			EditorGUILayout.EndHorizontal();
										
			// Populate Each Entry
			var theCount : int = 0;
			for ( var theGameObject : GameObject in theGameObjects ) {
				theCount = theCount + 1;
			
				EditorGUILayout.BeginHorizontal();
					GUILayout.Label("", GUILayout.MaxWidth(5));
					GUILayout.Label(theCount.ToString(), GUILayout.MaxWidth(25));
				//	theString = EditorGUILayout.TextField( theString );
					theGameObject = EditorGUILayout.ObjectField(theGameObject, GameObject, true );
					GUILayout.Label("", GUILayout.MaxWidth(5));
				EditorGUILayout.EndHorizontal();
			
			}
											
			// Add Space
			EditorGUILayout.Space();
											
			// Add Space
			EditorGUILayout.Space();
			
			// Add Buttons
			EditorGUILayout.BeginHorizontal();
											
				GUILayout.FlexibleSpace();	// Space
											
					if( GUILayout.Button(removeButton, GUILayout.MaxWidth(32)) ) {		// Remove Button
						theGameObjects = ResizeArray( theGameObjects, -1 );
					}
												
					if(GUILayout.Button(addButton, GUILayout.MaxWidth(32))) {			// Add Button
						theGameObjects = ResizeArray( theGameObjects, 1 );
					}
												
					GUILayout.Label("", GUILayout.MaxWidth(5));	// Indent
										
				EditorGUILayout.EndHorizontal();EditorGUILayout.Space();EditorGUILayout.Space(); // End horizontal and space
			
			// Return the GameObjects			
			return theGameObjects;		
										
		} else {
		
			// Add Buttons
			EditorGUILayout.BeginHorizontal();
											
				GUILayout.FlexibleSpace();	// Space
											
					if( GUILayout.Button(removeButton, GUILayout.MaxWidth(32)) ) {		// Remove Button
						theGameObjects = ResizeArray( theGameObjects, -1 );
					}
												
					if(GUILayout.Button(addButton, GUILayout.MaxWidth(32))) {			// Add Button
						theGameObjects = ResizeArray( theGameObjects, 1 );
					}
												
					GUILayout.Label("", GUILayout.MaxWidth(5));	// Indent
										
				EditorGUILayout.EndHorizontal();EditorGUILayout.Space();EditorGUILayout.Space(); // End horizontal and space
			
			// Return the GameObjects			
			return theGameObjects;		
			
		}
		
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////


}	// <- End of class!


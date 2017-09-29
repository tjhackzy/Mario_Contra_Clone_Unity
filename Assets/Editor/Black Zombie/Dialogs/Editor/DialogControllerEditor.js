//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	DialogControllerEditor.js
//
//	Main Controller For Dialog Threads
//	(C) 2012 Melli Georgiou
//
//	IMPORTANT:
//	The ScreenDialogEditor file must be located at: "Assets/Editor/Black Zombie/Dialogs/DialogScreenEditor.js" 
//	or there will be issues! Also, icon resources should be in "Editor Default Resources/Black Zombie/Dialogs/"!
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@CustomEditor (DialogController)
class DialogControllerEditor extends Editor {	
	
	// Debug
	var debug : boolean = false;																	// Debug ON / OFF
	
	// Button Texutre
	var tex : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/Layers.png") as Texture2D;
	var addTex : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/addButton.png") as Texture2D;
	var portraitTex : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/portraitLabel.png") as Texture2D;
	var theObject : DialogController;
	
	// Labels.
	var speechLabel : Texture = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/speechLabel.png") as Texture2D;
	var navigationLabel : Texture = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/navigationLabel.png") as Texture2D;
	var actionsLabel : Texture = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/actionsLabel.png") as Texture2D;
	var localizeLabel : Texture = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/localizeLabel.png") as Texture2D;
	var timeLabel : Texture = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/timeLabel.png") as Texture2D;
	var autoplayLabel : Texture = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/skipLabel.png") as Texture2D;
	
	
	// Display
	function OnInspectorGUI () {
	
		// If we have a selected gameObject.
        if( Selection.activeGameObject && target.GetComponent(DialogController) != null ) {

			theObject = target;
			
			// ---------------------------------------------------------------------------------------------
			// CONTROLS
			// ---------------------------------------------------------------------------------------------
			
			EditorGUILayout.BeginVertical("box");
			EditorGUILayout.Space();
			
			
			EditorGUILayout.BeginHorizontal();
				
				GUILayout.Label("", GUILayout.MaxWidth(5));
				
				// Start ID
				GUILayout.Label(speechLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
				GUILayout.Label("Start ID: ", GUILayout.MaxWidth(50),GUILayout.MaxHeight(20));
				theObject.startID = EditorGUILayout.IntField("", theObject.startID, GUILayout.MinHeight(20), GUILayout.MaxWidth(20) );
			
				// Gap
				GUILayout.Label("", GUILayout.MaxWidth(25));
		
				// Start After X Secs
				GUILayout.Label(timeLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
				GUILayout.Label("Start In X Secs: ", GUILayout.MaxWidth(85),GUILayout.MaxHeight(20));
				theObject.startAfterXSeconds = EditorGUILayout.FloatField("", theObject.startAfterXSeconds, GUILayout.MinHeight(20), GUILayout.MaxWidth(25) );
					
				// Gap
				GUILayout.Label("", GUILayout.MaxWidth(25));
			
				// AutoPlay
				GUILayout.Label(autoplayLabel, GUILayout.MaxWidth(20),GUILayout.MaxHeight(20));
				GUILayout.Label("Auto Play: ", GUILayout.MaxWidth(75),GUILayout.MaxHeight(20));
				theObject.autoPlay = EditorGUILayout.Toggle("", theObject.autoPlay, GUILayout.MaxWidth(20) );
				
				// Gap
				GUILayout.Label("", GUILayout.MaxWidth(25));
				
				GUILayout.FlexibleSpace();	
				
				
				// Portrait Label
				var guiPortrait : GUIContent = new GUIContent("", speechLabel, "View All In Dialogs Tab");
				if ( !Application.isPlaying  ) { 
					if(GUILayout.Button (guiPortrait, GUILayout.MaxHeight(22), GUILayout.MinWidth(32), GUILayout.MaxWidth(32), GUILayout.ExpandWidth(false), GUILayout.ExpandHeight(false) )) {
					
						// Reset the Screens
						var theScreens = theObject.gameObject.GetComponents(DialogScreen);
						if(theScreens.length > 0 ){
							for( var s : DialogScreen in theScreens ){
								if(s!=null){
									s.tab = 0;
									s.selLanguage = 0;
									s.actionTab = 0;
									s.audioTab = 0;
								}
							}
						}
					
					}
				}
				
				// Navigation Label
				var guiNvigation : GUIContent = new GUIContent("", navigationLabel, "View All In Navigation Tab");
				if ( !Application.isPlaying  ) { 
					if(GUILayout.Button (guiNvigation, GUILayout.MaxHeight(22), GUILayout.MinWidth(32), GUILayout.MaxWidth(32), GUILayout.ExpandWidth(false), GUILayout.ExpandHeight(false) )) {
					
						// Reset the Screens
						var theScreens2 = theObject.gameObject.GetComponents(DialogScreen);
						if(theScreens2.length > 0 ){
							for( var s2 : DialogScreen in theScreens2 ){
								if(s2!=null){
									s2.tab = 1;
									s2.selLanguage = 0;
									s2.actionTab = 0;
									s2.audioTab = 0;
								}
							}
						}
					
					}
				}
				
				// Actions Label
				var guiActions : GUIContent = new GUIContent("", actionsLabel, "View All In Actions Tab");
				if ( !Application.isPlaying  ) { 
					if(GUILayout.Button (guiActions, GUILayout.MaxHeight(22), GUILayout.MinWidth(32), GUILayout.MaxWidth(32), GUILayout.ExpandWidth(false), GUILayout.ExpandHeight(false) )) {
					
						// Reset the Screens
						var theScreens3 = theObject.gameObject.GetComponents(DialogScreen);
						if(theScreens3.length > 0 ){
							for( var s3 : DialogScreen in theScreens3 ){
								if(s3!=null){
									s3.tab = 2;
									s3.selLanguage = 0;
									s3.actionTab = 0;
									s3.audioTab = 0;
								}
							}
						}
					
					}
				}
				
				// Localization Label
				var guiLocalize : GUIContent = new GUIContent("", localizeLabel, "View All In Localization Tab");
				if ( !Application.isPlaying  ) { 
					if(GUILayout.Button (guiLocalize, GUILayout.MaxHeight(22), GUILayout.MinWidth(32), GUILayout.MaxWidth(32), GUILayout.ExpandWidth(false), GUILayout.ExpandHeight(false) )) {
					
						// Reset the Screens
						var theScreens4 = theObject.gameObject.GetComponents(DialogScreen);
						if(theScreens4.length > 0 ){
							for( var s4 : DialogScreen in theScreens4 ){
								if(s4!=null){
									s4.tab = 3;
									s4.selLanguage = 0;
									s4.actionTab = 0;
									s4.audioTab = 0;
								}
							}
						}
					
					}
				}
				
				// Sort Dialog
				var guiSort : GUIContent = new GUIContent("", tex, "Sort All Dialogs By ID");
				if ( !Application.isPlaying  ) { 
					if(GUILayout.Button (guiSort, GUILayout.MaxHeight(22), GUILayout.MinWidth(32), GUILayout.MaxWidth(32), GUILayout.ExpandWidth(false), GUILayout.ExpandHeight(false) )) {
						
						// Make sure we're Resorting on a gameObject, not a prefab.
						if( PrefabUtility.GetPrefabParent(theObject) != null ){
							Resort(theObject);
						} else {
							Debug.Log("You must use the Re-Sort Function on a prefab in the scene!");	
						}
					}
				}
				
				// Gap
				//GUILayout.Label("", GUILayout.MaxWidth(25));
				
				// Add New Dialog
				if ( !Application.isPlaying ) { 
					var guiAdd : GUIContent = new GUIContent("", addTex, "Add New Dialog Screen");
					if(GUILayout.Button(guiAdd, GUILayout.MinWidth(32), GUILayout.MaxWidth(32))) {			// Add Button
					
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
				}
				
				 // Gap
				GUILayout.Label("", GUILayout.MaxWidth(5));	
			 	
			EditorGUILayout.EndHorizontal();
			EditorGUILayout.Space();
			EditorGUILayout.EndVertical();
      
        } else {
        
        	 // Show default inspector property editor
 		     DrawDefaultInspector ();
        	
        }
	}
	
////////////////////////////////////////////////////////////////////////////////////////////////////////
// RE-SORT FUNCTION
////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Re-Sort Dialog Functions
	function Resort( theObject : DialogController ) {
		
		// Function Start Message.
		if(debug){Debug.Log( theObject.gameObject.name + ": Resorting Dialog Order ..");}
		
		// Variables
		var theComponents = theObject.gameObject.GetComponents(DialogScreen);						// group all the DialogScreens in a built in array.
		
		var newArr = new Array ();																	// A New Array to store the sorted items
		var lastSelected : int = -1;																// Last selected object in the array.
		var currentPos : int = 0;
		var highestID : int = -1;
		
		// ---------------------------------------------------------------------------------------------
		// FIND THE HIGHEST DIALOG ID
		// ---------------------------------------------------------------------------------------------
		
		// New loop ( loop through the dialogs to find the highest value dialogID )
    	for( var compare : DialogScreen in theComponents ) {
			
			if ( compare.dialogID > highestID ) {
				highestID = compare.dialogID;
			}
			
    	}
    	
    	// Debug Message
    	if(debug){Debug.Log("HighestID is now: "+highestID);}
		
		// ---------------------------------------------------------------------------------------------
		// SORT THE NEW ARRAY
		// ---------------------------------------------------------------------------------------------
		
		// Setup the loop ( this one is essentially the order )
    	for(var i=0;i<highestID+1;i++) {
    	
    		// New loop ( this one loops through each dialog and finds which one should be next )
    		for( var ds : DialogScreen in theComponents ) {
    	
    			// Compare dialog ID with the current order position
    			if ( ds.dialogID == i ) {
    				newArr.Push(ds);																// Add the DialogScreen to the new Array	
    				if(debug){Debug.Log("Added: "+ds.dialogID+" to position: "+currentPos);}		// Debug Message
    				currentPos = currentPos+1;														// Add 1 to the current order.
    			}
    			
    		}
    		
		}
		
		// ---------------------------------------------------------------------------------------------
		// CREATE THE NEW COMPONENTS
		// ---------------------------------------------------------------------------------------------
		
		// Create the rebuild Array
		var rebuiltArray : DialogScreen[] =newArr.ToBuiltin(DialogScreen);
		
		if(debug){Debug.Log("The Rebuilt Array was created and holds "+rebuiltArray.length+" Dialog Screens.");}
		
		// Keep track of the loop
		var addCounter : int = 0;
		
		// Add the new Components
		for ( var newDS : DialogScreen in rebuiltArray ) {
			
			// Create a variable to cache the new component
			var addedDS : DialogScreen;			
			
			// Add the new component and attach it to the variable.
			addedDS = theObject.gameObject.AddComponent (DialogScreen);								
			
			// Copy the data from the previous Dialog Screens.
			addedDS.isActive = rebuiltArray[addCounter].isActive;
			addedDS.dialogID = rebuiltArray[addCounter].dialogID;
			addedDS.screen = rebuiltArray[addCounter].screen;
			addedDS.navigation = rebuiltArray[addCounter].navigation;
			addedDS.actions = rebuiltArray[addCounter].actions;
			
			// Add to the counter
			addCounter = addCounter +1;																
			
		}
		
		// ---------------------------------------------------------------------------------------------
		// DESTROY THE ORIGINAL COMPONENTS
		// ---------------------------------------------------------------------------------------------
		
		// Loop through the old components
		for ( var oldDS : DialogScreen in theComponents ) {
		
			DestroyImmediate(oldDS);
			
		}
		
	}
	
}




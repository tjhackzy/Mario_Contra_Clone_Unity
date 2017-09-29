////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// 	DialogSceneEditor.js
//
//	Editor for DialogScene.js
//	(C) 2012 - 2013 Melli Georgiou
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@CustomEditor (DialogScenes)
class DialogScenesEditor extends Editor {	
	
	// Buttons
	var addButton : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/addButton.png") as Texture2D;
	var removeButton : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/removeButton.png") as Texture2D;
	
	// Labels
	var castLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/castLabel.png") as Texture2D;
	var cameraLabel : Texture2D = EditorGUIUtility.Load("Black Zombie/Localized Dialogs/scenesLabel.png") as Texture2D;
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	ON INSPECTOR GUI
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function OnInspectorGUI() {

		// If we have a selected gameObject.
        if( Selection.activeGameObject && target != null && target.GetComponent(DialogCast) ) {
				
			// Vertical Space
			GUILayout.Label("", GUILayout.MaxHeight(5));
			
			// Title	
			EditorGUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(5));
				GUILayout.Label(cameraLabel, GUILayout.MaxWidth(32) );
				EditorGUILayout.BeginVertical();
					GUILayout.Label("Dialog Scenes", "BoldLabel", GUILayout.MinWidth(190), GUILayout.MaxWidth(190));
					if(!Application.isPlaying){
						GUILayout.Label("Optional Library to quickly setup backgrounds in Dialog Screens.", GUILayout.MinWidth(450), GUILayout.MaxWidth(450));
					} else {
						GUILayout.Label("The Cast cannot be modified while the application is running!", GUILayout.MinWidth(450), GUILayout.MaxWidth(450));	
					}
				EditorGUILayout.EndVertical();
				GUILayout.FlexibleSpace();
			EditorGUILayout.EndHorizontal();
			
			// Vertical Space
			GUILayout.Label("", GUILayout.MaxHeight(5));
			
			// Main Horizontal space
			EditorGUILayout.BeginHorizontal();
			GUILayout.Label("", GUILayout.MaxWidth(5));
			
				// Main UI Box
				//EditorGUILayout.BeginVertical("Box");
				EditorGUILayout.BeginVertical();
				EditorGUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.MaxWidth(5)); // Extra space
				EditorGUILayout.BeginVertical();
				
					// Add Space
					EditorGUILayout.Space();
								
					// Loop through each of the Actor groups
					if( target.theCast != null && target.theCast.length > 0 ){
						var groupID : int = 0;	// Keep track of the current Group
						for( var castGroup : DialogCastGroup in target.theCast ){
							if( castGroup != null ){
							
								
								
								// Create a horizontal space for the group, as well as the delete button
								EditorGUILayout.BeginHorizontal();
								
									// Draw the box that represents this group
									EditorGUILayout.BeginVertical("Box");
									
										castGroup.open = EditorGUILayout.Foldout(castGroup.open, " "+castGroup.name);
																		
										// Let's see if this Cast Group is open
										if(castGroup.open){
											DrawActorGroup(castGroup);	
										}
									
									// End of Actor Group box Box							
									EditorGUILayout.EndVertical();	
																
									// REMOVE CAST GROUP							
									GUILayout.Label("", GUILayout.MaxWidth(5));	// Indent
									if( GUILayout.Button(removeButton, GUILayout.MaxWidth(32)) ) {		// Remove Button
									//	Debug.Log("Remove Group: "+groupID);
										DeleteCastGroup(groupID);
									}
									
									// Increment GroupID
									groupID++;
								
								// End of horizontal group space	
								EditorGUILayout.EndHorizontal();
								
								// Add Space
								EditorGUILayout.Space();
							
								//GUILayout.Label("", GUILayout.MaxHeight(5));
								//EditorGUILayout.EndHorizontal();
							}
						}
					}
					
					// Add new Actor Group
					if(!Application.isPlaying){
						EditorGUILayout.BeginHorizontal();
						GUILayout.FlexibleSpace();	// Space
						if(GUILayout.Button(addButton, GUILayout.MaxWidth(32))) {			// Add Button
							AddNewCastGroup();
						}
						EditorGUILayout.EndHorizontal();
					}
					
					// Add Space
					EditorGUILayout.Space();
				
				
				EditorGUILayout.EndVertical();
				GUILayout.Label("", GUILayout.MaxWidth(5)); // extra space
				EditorGUILayout.EndHorizontal();
				EditorGUILayout.EndVertical();
			
			// End Main Space	
			GUILayout.Label("", GUILayout.MaxWidth(5));
			EditorGUILayout.EndHorizontal();
			
			// Vertical Space
			GUILayout.Label("", GUILayout.MaxHeight(5));

        }
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	DRAW ACTOR GROUP
	//	Used to draw the rest of the group
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function DrawActorGroup( dca : DialogCastGroup ){
		
		// Add Space
		EditorGUILayout.Space();
							
		// Draw name of group
		EditorGUILayout.BeginHorizontal();
			GUILayout.Label("", GUILayout.MaxWidth(5));	// indent
			GUILayout.Label(castLabel, GUILayout.MaxWidth(64),GUILayout.MaxHeight(48));
			dca.name = EditorGUILayout.TextField("Scene Name:", dca.name );
			GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
		EditorGUILayout.EndHorizontal();
		
		// Add Actors Label
		EditorGUILayout.BeginHorizontal();
			GUILayout.Label("", GUILayout.MaxWidth(5));	// indent
			GUILayout.Label( "The Backgrounds", "BoldLabel");
			GUILayout.Label("", GUILayout.MaxWidth(5));	// indent
		EditorGUILayout.EndHorizontal();
		
		// Add Space
		EditorGUILayout.Space();
		EditorGUILayout.Space();
		
		// Loop through the images
		if(dca.actors != null && dca.actors.length > 0){
			var actorID : int = 0;	// Keep track of the current Actor
			for( var actor : DialogCastActor in dca.actors ){
				if(actor){ // make sure style is not null
				
					// Draw name of group
					EditorGUILayout.BeginHorizontal();
						GUILayout.Label("", GUILayout.MaxWidth(5));	// indent
						actor.icon = EditorGUILayout.ObjectField(actor.icon, Texture2D, false, GUILayout.MinWidth(64), GUILayout.MinHeight(64) , GUILayout.MaxWidth(64), GUILayout.MaxHeight(64));
						actor.name = EditorGUILayout.TextField("Image Name: ", actor.name );
						GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
						
						// Remove Actor Button
						if( GUILayout.Button(removeButton, GUILayout.MaxWidth(32)) ) {		
						//	Debug.Log("Remove Actor: "+actorID);
							DeleteActorFromCast(dca, actorID);
						}
						
						GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
					
					// increment Actor ID
					actorID++;
						
					EditorGUILayout.EndHorizontal();
					
					// Add Space
					EditorGUILayout.Space();
				
				}
			}
		}
		
		// Draw Add button
		EditorGUILayout.BeginHorizontal();
			GUILayout.Label("", GUILayout.MaxWidth(5));	// indent
			GUILayout.FlexibleSpace();
			
			// Add New Actor Button
			if( GUILayout.Button(addButton, GUILayout.MaxWidth(32)) ) {		
			//	Debug.Log("Add Actor!");
				AddNewActorToCast(dca);
			}
			
			GUILayout.Label("", GUILayout.MaxWidth(5)); // indent
			
		EditorGUILayout.EndHorizontal();
		
		// Add Space
		EditorGUILayout.Space();
		
		
		
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	ADD NEW CAST GROUP
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function AddNewCastGroup(){
		
		// Create a new array from the built-in Cast
		var newarr = new Array (target.theCast);
		
		// Create a new Cast Group
		var newCastGroup : DialogCastGroup = new DialogCastGroup();
		
		// Create a new Actor Group and add it to the Cast Group!
		// First, we create an empty JS array
		var dcgArray : Array = new Array();
		dcgArray.Clear();
		
		// Then, we convert the empty JS array into an empty DialogCastActor array (this prevents the editor bug)!
		var blankDCG : DialogCastActor[] = dcgArray.ToBuiltin(DialogCastActor);	
		
		// We add this blank DialogCastActor[] variable into our newCastGroup to act as an empty Actors variable
		newCastGroup.actors = blankDCG;
		 
		// Add the new Cast Group into the JS array
		newarr.Add(newCastGroup);
		
		// Convert it all to the main array
		target.theCast = newarr.ToBuiltin(DialogCastGroup);
				
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	DELETE CAST GROUP
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function DeleteCastGroup( id : int ){
		
		// Create a new array from the built-in Cast
		var newarr = new Array (target.theCast);
		
		// Make sure the needed array element exists
		if( newarr[id] != null ){
			
			// Delete that element ( Cast Group )
			newarr.RemoveAt(id);
			
			// Convert it all to the main array
			target.theCast = newarr.ToBuiltin(DialogCastGroup);
		
		} else {
			Debug.Log("ERROR: Could not delete Cast Group because the array element was not found.");	
		}
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	ADD NEW ACTOR TO CAST
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function AddNewActorToCast( dcg : DialogCastGroup ){
		
			// If this Cast doesn't have any elements setup, create a blank one to replace it with first
			if(dcg.actors == null){
				
				// Create empty Javascript Array
				var dcgArray : Array = new Array();
				dcgArray.Clear();
				
				// Convert it into an empty DialogCastActor array and apply it to this Cast
				var blankCast : DialogCastActor[] = dcgArray.ToBuiltin(DialogCastActor);	
				dcg.actors = blankCast;
			}
			
			// Create a new array from this current built-in Cast Group
			var newarr = new Array (dcg.actors);
			
			// Create a new DialogCastActor and add it to the array
			var newDCG : DialogCastActor = new DialogCastActor();
			newarr.Add(newDCG);
			
			// Apply it back to the original array
			dcg.actors = newarr.ToBuiltin(DialogCastActor);
			
		
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	DELETE ACTOR FROM CAST
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function DeleteActorFromCast( dcg : DialogCastGroup, id : int ){
	
		// Make sure all references are valid
		if( dcg != null && dcg.actors != null && dcg.actors[id] != null ){
			
			// Create a new array from the built-in Cast
			var newarr = new Array (dcg.actors);
			
			// Delete that element ( Cast Group )
			newarr.RemoveAt(id);
			
			// Convert it all to the main array
			dcg.actors = newarr.ToBuiltin(DialogCastActor);
			
		} else {
			Debug.Log("ERROR: Could not delete Actor from Cast because an array element was not found.");	
		}

	}
	
}
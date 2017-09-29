///////////////////////////////////////////////////////////////////////////////////////////////
//
//	DialogMenuShortcutsEditor.js
//
//	Some helpful dialog shortcuts.
//	(C) 2012 Melli Georgiou
//
///////////////////////////////////////////////////////////////////////////////////////////////

class DialogMenuShortcuts extends EditorWindow {

	// Create New DialogUI Object
	@MenuItem ("GameObject/Create Dialog UI")
	static function NewDialogUI()
	{
		
		// check if we already have a DialogUI in the scene first
		var DUIs : DialogUI[] = FindObjectsOfType (DialogUI);
		
		// If we found any
		if ( DUIs.length > 0 ){
		
			EditorUtility.DisplayDialog ("DialogUI Already Exists", "An object in your scene already exists with a DialogUI component. There should only ever be one in your scene at the same time. \n \nThe name of this gameObject is: "+DUIs[0].gameObject.name, "OK");
		
		// Otherwise let's create the DialogUI	
		} else {
			
			//Show existing window instance. If one doesn't exist, make one.
			Debug.Log("Created New Dialog UI!");
			
			// Create the Dialog UI Object
			var dialog : GameObject = new GameObject("Dialog UI");
			if(dialog!=null){
				dialog.AddComponent(DialogUI);
				dialog.AddComponent(DialogLocalization);
				var AS : AudioSource = dialog.AddComponent(AudioSource);
				if(AS!=null){AS.playOnAwake = false;}
				
				EditorUtility.DisplayDialog("Dialog UI", "Don't forget to make your Dialog UI into a prefab!\n\nYou must make sure this prefab is in every scene of your project so you can use Tokens and other advanced features!", "OK");
			}
			
		}
	}
	
	// Create New Dialog Library Object
	@MenuItem ("GameObject/Create Dialog Library")
	static function NewDialogLibrary()
	{
		
		// check if we already have a DialogUI in the scene first
		var DCs : DialogCast[] = FindObjectsOfType (DialogCast);
		var DSs : DialogScenes[] = FindObjectsOfType (DialogScenes);
		
		// If we found any DialogCasts
		if ( DCs.length > 0 ){
		
			EditorUtility.DisplayDialog ("DialogCast Already Exists", "An object in your scene already exists with a DialogCast component. There should only ever be one in your scene at the same time. \n \nThe name of this gameObject is: "+DCs[0].gameObject.name, "OK");
		
		// If we found any DialogScenes
		} else if ( DSs.length > 0 ){
		
			EditorUtility.DisplayDialog ("DialogScenes Already Exists", "An object in your scene already exists with a DialogScenes component. There should only ever be one in your scene at the same time. \n \nThe name of this gameObject is: "+DSs[0].gameObject.name, "OK");
		
		// Otherwise let's create the DialogUI	
		
		// Otherwise let's create the DialogUI	
		} else {
			
			//Show existing window instance. If one doesn't exist, make one.
			Debug.Log("Created New Dialog UI!");
			
			// Create the Dialog UI Object
			var dialog : GameObject = new GameObject("Dialog Library");
			if(dialog!=null){
				dialog.AddComponent(DialogCast);
				dialog.AddComponent(DialogScenes);
				
				EditorUtility.DisplayDialog ("Dialog Library", "Don't forget to make your Dialog Library a prefab!\n\nHINT: Once you finish your game, you should remove the Dialog Library from every scene to free up extra memory for your application!", "OK");
			}
			
		}
	}

	// Create New Dialog Object
	@MenuItem ("GameObject/Create New Dialog")
	static function NewDialog()
	{
		// Show existing window instance. If one doesn't exist, make one.
		Debug.Log("Created New Dialog Object!");
		
		// Create a new Dialog Object
		var dialog : GameObject = new GameObject("New Dialog");
		if(dialog!=null){
			dialog.tag = "DialogController";
			dialog.AddComponent(DialogController);
			var screen : DialogScreen = dialog.AddComponent(DialogScreen);
			if(screen!=null){screen.created = true;}
		}
	}

}
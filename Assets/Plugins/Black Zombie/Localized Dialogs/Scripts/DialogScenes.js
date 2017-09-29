////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// 	DialogScenes.js
//
//	Sets up a library of Scenes to be easily selected in the editor
//
//	(C) 2012-2013 Melli Georgiou
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#pragma downcast

var theCast : DialogCastGroup[];		// This class is from the DialogCast

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	AWAKE
//	The Cast's memory is dumped at the start of each frame to maximize memory
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Awake(){

	// Dump memory On device
	if( theCast.length > 0){
		theCast = null;
		Resources.UnloadUnusedAssets();
	}
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	GET DIALOG CAST GROUPS
//	Returns the DialogCastGroup[] array so we can build a selection interface in the DialogScreen editor.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

static function GetDialogCastGroups(){

	// check if we have DialogCast objects in the scene
	var DCs : DialogScenes[] = FindObjectsOfType (DialogScenes);
	
	// If a DialogCast object was found and the first element is valid..
	if( DCs.length > 0 && DCs[0] != null){
		
		// Return theCast as a DialogCastGroup[]
		return DCs[0].theCast;
		
	}
	
	// Return null if there was a problem
	return null;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	GET POPUP
//	Returns an GUIContent[] array to be used in a Popup
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

static function GetPopup(){

	// check if we have DialogCast objects in the scene
	var DCs : DialogCast[] = FindObjectsOfType (DialogCast);
	
	// If a DialogCast object was found and the first element is valid..
	if( DCs.length > 0 && DCs[0] != null){
		
		// Get the first DialogCastGroup[] in the array (most likely, there'll only be one component anyway!)
		var dc : DialogCastGroup[] = DCs[0].theCast;
		
		// Create a new array to hold the GUIContent
		var array : Array = new Array();
		array.Clear();	// make sure the array is clean
		
		// Loop through the Dialog Casts
		for( var dcast : DialogCastGroup in dc){
			
			// Create the main Cast Group Header
			var castGroup : GUIContent = new GUIContent();
			castGroup.image = null;	// Dialog Groups wont have images!
			castGroup.text = dcast.name;
			castGroup.tooltip = "";
			
			// Add Cast Group Header to the array
			//array.Add(castGroup);
			
			// Do a loop to add its images here!
			for( var actor : DialogCastActor in dcast.actors ){
				
				// Make sure this actor has a valid icon before adding it to the array
				if( actor.icon != null ){
					
					// Create Actor entries
					var castActor : GUIContent = new GUIContent();
					castActor.image = actor.icon;
					castActor.text = dcast.name + " - " + actor.name;
					castActor.tooltip = "";
					
					// Add Actor to the array
					array.Add(castActor);
				
				}
			}
		}
		
		// Convert the array into a static list and return it
		var builtinArray : GUIContent[] = array.ToBuiltin(GUIContent);
		return builtinArray;
		
	}
	
	// Return null if there was a problem
	return null;
}


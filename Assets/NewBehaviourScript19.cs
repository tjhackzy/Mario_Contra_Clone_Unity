using UnityEngine;
using System.Collections;

public class NewBehaviourScript19 : MonoBehaviour {

	Rect messageRect;
	public string message	 = "Where we're going, we don't need roads. askdljas fasklfjasd fklasjdflasdf aoosdjfalsdf aksldjflaskfd";
	public float scrollSpeed = 10;
	public Font myFont;
	GUIStyle gs;
	// Use this for initialization
	void Start () {
	}

	void OnGUI () {


			//GUI.Box (Rect( Screen.width /2 -100, Screen.height - 60, 200,50), "sdfsdfsdf",gs);
			if (messageRect.height == 0) {
				Vector2 dimensions = GUI.skin.label.CalcSize(new GUIContent(message));
				
				// Start the message past the left side of the screen
				messageRect.y      = -dimensions.y;
				messageRect.width  =  dimensions.x;
				messageRect.height =  dimensions.y;

			}

			messageRect.x = messageRect.x;
			//messageRect.x += Time.deltaTime * scrollSpeed;
			messageRect.y += Time.deltaTime * scrollSpeed;
			// If the message has moved past the right side, move it back to the left
			if (messageRect.y > Screen.height) {
				messageRect.y = -messageRect.height;
			}
			gs = new GUIStyle();
			gs.font = myFont;
			gs.fontSize = 8;
			gs.normal.textColor= Color.white;
			GUI.Label(messageRect, message,gs);
			//GUI.Box (new Rect (Screen.width / 2 -200,Screen.height - 30,450,200), "Blah Blah Bla!");

	}

	// Update is called once per frame
	void Update () {
		//timeElapsed += Time.deltaTime;
		//GUIText gt = GetComponent<GUIText> ();
		//textShownOnScreen = GetWords(fullText,(int)( timeElapsed * wordsPerSecond));
		//gt.guiText.text = textShownOnScreen;
		//gt.guiText.richText = true;

	}
}

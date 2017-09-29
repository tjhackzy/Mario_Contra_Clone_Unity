using UnityEngine;
using System.Collections;

public class NewBehaviourScript15 : MonoBehaviour {

	public float  charPerSec = 7.0f;
	public string text = "some text is here...go for it...yeahhh..>!!!";
	public Rect rect;


	string textUsing;
	string scrollBasis;
	string scrollText;
	int currChar=0;
	float timer = 0.0f;
	// Use this for initialization
	void Start () {
		NewText ();
	}
	
	// Update is called once per frame
	void Update () {
		if (textUsing != text)
			NewText();
		
		float secondsPerCharacter  = ((float) 1.0f) / charPerSec;
		if (timer > secondsPerCharacter) {
			int iT  = Mathf.FloorToInt(timer / secondsPerCharacter);
			currChar = (currChar + iT) % textUsing.Length;
			timer -= iT * secondsPerCharacter;
			scrollText = scrollBasis.Substring(currChar, textUsing.Length);   
		}
		timer += Time.deltaTime;
	}
	void OnGUI() {
		GUI.Label(rect, scrollText);
	}

	void NewText() {
		textUsing = text;
		scrollBasis = textUsing+textUsing;
		currChar = 0;
		scrollText = scrollBasis.Substring(currChar, textUsing.Length);
		timer = 0.0f;
	}
}

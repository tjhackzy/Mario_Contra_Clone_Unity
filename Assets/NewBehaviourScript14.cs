using UnityEngine;
using System.Collections;

public class NewBehaviourScript14 : MonoBehaviour {

	// Use this for initialization
	public int secondsToWait = 3;
	
	int startTime;
	
	// Use this for initialization
	void Start () {
		startTime = (int)Time.time;
		
		
	}
	
	// Update is called once per frame
	void Update () {
		if (Time.time - startTime >= secondsToWait)
		{
			
			//AutoFade.LoadLevel("mainGame", 1, 3, Color.black);
			Application.LoadLevel("mainGame2");
		}
		
		//        Application.LoadLevel("mainGame"); 
		
	}
}

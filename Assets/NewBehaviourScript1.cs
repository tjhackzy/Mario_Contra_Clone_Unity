using UnityEngine;
using System.Collections;

public class NewBehaviourScript1 : MonoBehaviour {

    public int secondsToWait = 4;

    int startTime;
 
	// Use this for initialization
	void Start () {
        startTime = (int) Time.time;
	}
	
	// Update is called once per frame
	void Update () {

        if (Time.time - startTime >= secondsToWait)
        {
         //   AutoFade.LoadLevel("mainMenu", 1, 3, Color.black);
			Application.LoadLevel("loading22");
		}
    
    }
}
  
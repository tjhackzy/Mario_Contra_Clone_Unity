using UnityEngine;
using System.Collections;

public class NewBehaviourScript17 : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerExit2D  (Collider2D col22){
				if (col22.gameObject.tag == "Player") {
						if (gameObject.tag == "BoxCol1") {
								Debug.Log ("reset");
				
						}
						if (gameObject.tag == "BoxCol2") {
								Debug.Log ("reset");
						}
						if (gameObject.tag == "BoxCol3") {
								Debug.Log ("reset");
						}
				}
		}

	void OnTriggerEnter2D(Collider2D col22){
		if (col22.gameObject.tag == "Player") {
			if(gameObject.tag=="BoxCol1"){
				Debug.Log ("1");
			
			}
			if(gameObject.tag=="BoxCol2"){
				Debug.Log ("2");
			}
			if(gameObject.tag=="BoxCol3"){
				Debug.Log ("3");
			}
		}
		//
	}
}

using UnityEngine;
using System.Collections;

public class NewBehaviourScript10 : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnCollisionEnter2D(Collision2D col1){
		if (col1.gameObject.tag == "Goli" || col1.gameObject.tag == "GumbaFire") {
			Debug.Log("in destroy");
						Destroy (col1.gameObject);
				}
	}

}

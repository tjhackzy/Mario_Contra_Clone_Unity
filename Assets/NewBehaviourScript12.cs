using UnityEngine;
using System.Collections;

public class NewBehaviourScript12 : MonoBehaviour {

	// Use this for initialization
	void Start () {
		GameObject mar = GameObject.FindWithTag ("Player") as GameObject;
		GameObject cont = GameObject.FindWithTag ("ContraPlayer") as GameObject;
		if (mar != null) {

			MoveLeftRight mvlr = mar.GetComponent<MoveLeftRight>();
			PlayerJUMP pjj = mar.GetComponent<PlayerJUMP>();
			mvlr.enabled = true;
			pjj.enabled = true;
		}
		if (cont != null) {

			contra_jump cj1 = cont.GetComponent<contra_jump>();
			contra_Move mvlr1 = cont.GetComponent<contra_Move>();
			mvlr1.enabled = true;
			cj1.enabled = true;

		}

	}
	
	// Update is called once per frame
	void Update () {
	
	}
}

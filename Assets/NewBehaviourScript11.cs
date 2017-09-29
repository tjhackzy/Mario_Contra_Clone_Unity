using UnityEngine;
using System.Collections;

public class NewBehaviourScript11 : MonoBehaviour {

	// Use this for initialization
	void Start () {
		GameObject mar = GameObject.FindWithTag ("Player") as GameObject;
		GameObject cont = GameObject.FindWithTag ("ContraPlayer") as GameObject;
		if (mar != null) {
			
			MoveLeftRight mvlr = mar.GetComponent<MoveLeftRight>();
			mvlr.enabled = false;
			Animator anim1 = mar.GetComponent<Animator> ();
			anim1.SetFloat ("Speed",0f);
			PlayerJUMP pjj = mar.GetComponent<PlayerJUMP>();
			pjj.enabled = false;

		//	mar.GetComponent<Animator>.animation.Play ("idle");
		}
		if (cont != null) {
			Animator anim12 = cont.GetComponent<Animator> ();
			anim12.SetFloat ("Speed",0f);

			contra_Move mvlr1 = cont.GetComponent<contra_Move>();
			contra_jump cj1 = cont.GetComponent<contra_jump>();
			mvlr1.enabled = false;
			cj1.enabled = false;

		//	cont.animation.Play ("contra_idle");
		}

	}
	
	// Update is called once per frame
	void Update () {
	
	
	}
}

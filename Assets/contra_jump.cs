using UnityEngine;
using System.Collections;

public class contra_jump : MonoBehaviour {
	public string jumpButton = "Fire1";
	public float jumpPower = 250.0f;
	public Animator anim;
	//public Rigidbody2D rigidBody2d;
	
	// Use this for initialization
	void Start () {
		anim = gameObject.GetComponent< Animator> ();
		//rigidBody2d = gameObject.GetComponent <Rigidbody2D> ();
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.Space)) {
			anim.SetTrigger ("Jump");
			GetComponent<Rigidbody2D>().AddForce(transform.up *jumpPower);
		}
	}
	void OnCollisionEnter2D(){
		anim.SetTrigger ("Land");
		
	}
}

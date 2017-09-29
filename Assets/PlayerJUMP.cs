using UnityEngine;
using System.Collections;

public class PlayerJUMP : MonoBehaviour {

	public string jumpButton = "Fire1";
	public float jumpPower = 250.0f;
	public Animator anim;
	public bool isGrounded = false;
	public Transform groundcheck;
	private float jumpTime = 0.0f;
	public float minJumpDelay  = 0.5f;
	private bool jumped = false;
	//public Rigidbody2D rigidBody2d;

	// Use this for initialization
	void Start () {
		anim = gameObject.GetComponent< Animator> ();
		//rigidBody2d = gameObject.GetComponent <Rigidbody2D> ();
	}
	
	// Update is called once per frame
	void Update () {
         

		isGrounded = Physics2D.Linecast (transform.position, groundcheck.position, 1 << LayerMask.NameToLayer("Ground"));
		jumpTime -= Time.deltaTime;

		if (jumpTime < 0) {
						jumpTime = 0;
				}
	//	if (isGrounded) {
//	anim.SetTrigger ("Land");
//				}
//		if (!isGrounded) {
//						anim.SetTrigger ("Jump");
//				}
	if (Input.GetKeyDown (KeyCode.Space)) {
			jumped = true;
			isGrounded = false;
			anim.SetTrigger ("Jump");
			GetComponent<Rigidbody2D>().AddForce(transform.up *jumpPower);
			jumpTime = minJumpDelay;
				}
	if (isGrounded && jumpTime <= 0 && jumped) {
			jumped = false;
			anim.SetTrigger ("Land");
				}

	}
	void OnCollisionEnter2D(Collision2D col1){
		if (col1.gameObject.tag == "ground") {
	//					isGrounded = true;
			anim.SetTrigger ("Land");

		}

		}
}












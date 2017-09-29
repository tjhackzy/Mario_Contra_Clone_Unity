using UnityEngine;
using System.Collections;

public class NewBehaviourScript6 : MonoBehaviour {

	public GameObject bullet6;

	// Use this for initialization
	void Start () {
	
	}
	void Fire()
	{
		//Rigidbody bulletClone = (Rigidbody) Instantiate(bullet, transform.position, transform.rotation);
		GameObject bulletClone99 = Instantiate (bullet6,transform.position,Quaternion.identity) as GameObject;//,  new Vector3(0, 0, -1), Quaternion.identity) as GameObject;
		bulletClone99.tag = "Goli";
		//bulletClone.velocity = transform.forward * bulletSpeed;
		//bulletClone99.rigidbody2D.AddForce (bulletClone99.transform.forward, bulletSpeed);
		//bulletClone99.rigidbody2D.velocity = transform.forward * bulletSpeed;
		//bulletClone99.rigidbody2D.AddForce (transform.forward * bulletSpeed);
	}
	// Update is called once per frame
	void Update () {
		GameObject rpowerobj = GameObject.FindWithTag ("RPower") as GameObject;

		if (Input.GetKeyDown (KeyCode.LeftControl) || Input.GetKeyDown (KeyCode.RightControl) ){ 
		//if (Input.GetButtonDown ("Fire1")) {
						if (GameObject.FindWithTag ("ContraPlayer").GetComponent<contra_Move> ().isDead) {
						} else { 
				if(rpowerobj==null){
				GameObject txt1 = GameObject.FindWithTag("ContraHelpText") as GameObject;
				txt1.GetComponent<GUIText>().enabled = false;
								Fire ();
				}}
				}
	
	}
}

using UnityEngine;
using System.Collections;

public class NewBehaviourScript8 : MonoBehaviour {

	public GameObject gumbaJwala;
	public int i = 0;
	public bool isFireStart = false;
	// Use this for initialization
	void Start () {
		i = 0;
	}
	void Fire()
	{
		//Rigidbody bulletClone = (Rigidbody) Instantiate(bullet, transform.position, transform.rotation);
		GameObject bulletClone99 = Instantiate (gumbaJwala,transform.position,Quaternion.identity) as GameObject;//,  new Vector3(0, 0, -1), Quaternion.identity) as GameObject;
		bulletClone99.tag = "GumbaFire";
		//bulletClone.velocity = transform.forward * bulletSpeed;
		//bulletClone99.rigidbody2D.AddForce (bulletClone99.transform.forward, bulletSpeed);
		//bulletClone99.rigidbody2D.velocity = transform.forward * bulletSpeed;
		//bulletClone99.rigidbody2D.AddForce (transform.forward * bulletSpeed);
	}
	// Update is called once per frame
	void Update () {
				GameObject go1 = GameObject.FindWithTag ("ContraPlayer") as GameObject;
			//	Debug.Log ("contra malyu");
				if (isFireStart) {
						if (go1 != null) {

								if (i == 150) {
										
										Fire ();
										i = 0;		
								} else {
										i++;
								}
						
						}
				}
		
		}
}


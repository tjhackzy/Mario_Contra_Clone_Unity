using UnityEngine;
using System.Collections;

public class contra_Move : MonoBehaviour {
	
	public float speed =0.9f ;
	public string axisName = "Horizontal";
	public Animator anim;
	public GameObject myDialog123;
	public bool isLeft = false;
	public int health1 = 5;
	int count = 0;
	public bool isDead = false;
	public float bulletSpeed = 100;
	public GameObject bullet;

	// Use this for initialization
	void Start () {
		anim = gameObject.GetComponent<Animator> ();
		count = 0;
	}
	
	// Update is called once per frame
	void Update () {
				anim.SetFloat ("Speed", Mathf.Abs (Input.GetAxis (axisName)));
				if (Input.GetAxis (axisName) < 0) {
						Vector3 newScale = transform.localScale;
						newScale.x = -1.0f;
						transform.localScale = newScale;
			isLeft = true;
				} else if (Input.GetAxis (axisName) > 0) {
						Vector3 newScale = transform.localScale;
						newScale.x = 1.0f;
						transform.localScale = newScale;
			isLeft = false;
				}
				transform.position += transform.right * Input.GetAxis (axisName) * speed * Time.deltaTime;

		if (Input.GetButtonDown ("Fire1")) {
				}
						//Fire ();
		//PlayerHealthText
		GameObject gt1 = 	GameObject.FindGameObjectWithTag ("PlayerHealthText");
		gt1.GetComponent<GUIText>().text = health1.ToString () ;
		if (health1 == 0) {
			//anim.SetTrigger ("Dead");
			//vait1();
			//Destroy (gameObject);
			isDead = true;
			StartCoroutine (Dead ());
			gt1.GetComponent<GUIText>().text = "LOL! You're dead!";
				}
	} 
	IEnumerator Dead() {
		//Debug.Log ("dead");
		GetComponent<Renderer>().enabled = false;
		yield return new WaitForSeconds(5);
		//Debug.Log ("respawn");
		GetComponent<Renderer>().enabled = true;
		isDead = false;
		health1 = 5;
	}

	void Fire()
	{
		//Rigidbody bulletClone = (Rigidbody) Instantiate(bullet, transform.position, transform.rotation);
		GameObject bulletClone99 = Instantiate (bullet,transform.position,Quaternion.identity) as GameObject;//,  new Vector3(0, 0, -1), Quaternion.identity) as GameObject;
		//bulletClone.velocity = transform.forward * bulletSpeed;
		//bulletClone99.rigidbody2D.AddForce (bulletClone99.transform.forward, bulletSpeed);
		//bulletClone99.rigidbody2D.velocity = transform.forward * bulletSpeed;
		//bulletClone99.rigidbody2D.AddForce (transform.forward * bulletSpeed);
	}

	void IniDialog(){

		Application.LoadLevel("loading33");
	}
	void OnCollisionEnter2D(Collision2D col1){
		if (count == 0)
		{
			GameObject go12 = Instantiate(myDialog123, new Vector3(0, 0, 0), Quaternion.identity) as GameObject;
			count++;
		}
		if (col1.gameObject.tag == "Flag1") {
		//	Application.LoadLevel ("iquit");
		}
		if (col1.gameObject.tag == "Star") {
//			if (contraCount == 0) {
		//		Destroy (gameObject);
		//		SpawnContra ();
//			}
		}

		if (col1.gameObject.tag == "RPower") {
			Destroy (col1.gameObject);
			IniDialog();
				}
			if (col1.gameObject.tag == "GumbaFire") {
				
				if(health1<=0){ 
				}else{
					health1--;
					Destroy (col1.gameObject);
				}
		}

	}

}

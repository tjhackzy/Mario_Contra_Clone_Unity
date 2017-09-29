using UnityEngine;
using System.Collections;

public class NewBehaviourScript9 : MonoBehaviour {
	public int speed233 = 2;
	public bool myflag1= false;
	// Use this for initialization
	void Start () {
		//contra_Move cv = GameObject.FindGameObjectWithTag ("ContraPlayer").transform.GetComponent<contra_Move> ();
		
		if (!myflag1) {
			GetComponent<Rigidbody2D>().velocity = new Vector2 (-speed233, 0);
		} else {
			GetComponent<Rigidbody2D>().velocity = new Vector2 (speed233, 0);
			
		}
	}
	
	void checkini(){
				//Transform cp = GameObject.FindGameObjectWithTag ("ContraPlayer").transform as Transform;
				GameObject cp11 = GameObject.FindGameObjectWithTag ("ContraPlayer") as GameObject;
		if (cp11 != null) {
						if (cp11.transform.position.x < gameObject.transform.position.x) {
								//Vector3 tt = transform.InverseTransformPoint (cp.position);
								//if (tt.x < 0.0) {
								myflag1 = false;
						}
		//print ("Object is to the left");
		else {
								myflag1 = true;
						}
				}
		Debug.Log (myflag1.ToString ());
				//print ("Object is to the right");
		}
	// Update is called once per frame
	void Update () {
		checkini ();
		
	}
}

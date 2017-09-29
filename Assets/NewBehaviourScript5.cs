using UnityEngine;
using System.Collections;

public class NewBehaviourScript5 : MonoBehaviour {
	public int speed23 = 10;
	// Use this for initialization
	void Start () {
		contra_Move cv = GameObject.FindGameObjectWithTag ("ContraPlayer").transform.GetComponent<contra_Move> ();

		if (cv.isLeft) {
						GetComponent<Rigidbody2D>().velocity = new Vector2 (-speed23, 0);
				} else {
			GetComponent<Rigidbody2D>().velocity = new Vector2 (speed23, 0);

				}
	}
	
	// Update is called once per frame
	void Update () {
	
	}

}

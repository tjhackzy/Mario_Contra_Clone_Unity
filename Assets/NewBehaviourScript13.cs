using UnityEngine;
using System.Collections;

public class NewBehaviourScript13 : MonoBehaviour {
	public int aa= 0;
	public GameObject myDialog124;

	// Use this for initialization
	void Start () {
	
		if (aa == 0)
		{
			GameObject go12 = Instantiate(myDialog124, new Vector3(0, 0, 0), Quaternion.identity) as GameObject;
			aa++;
		}

	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnCollisionEnter2D(Collision2D col1){
		if (col1.gameObject.tag == "Goli") {
			Destroy (col1.gameObject);
		}
		if (col1.gameObject.tag == "ContraPlayer") {
			Application.LoadLevel("iquit2");
				}
	}

}

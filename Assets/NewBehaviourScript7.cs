using UnityEngine;
using System.Collections;

public class NewBehaviourScript7 : MonoBehaviour {
	public int health = 30;

	public int count7;
	public GameObject myRPower;
	public GameObject pos2;

	// Use this for initialization
	void Start () {
		count7 = 0;
	}
	
	// Update is called once per frame
	void Update () {
		GameObject gt1 = 	GameObject.FindGameObjectWithTag ("GumbaHealthText");
		gt1.GetComponent<GUIText>().text = health.ToString ();
		if (health < 16) {
			GameObject gt12 = 	GameObject.FindGameObjectWithTag ("TimeText");
			gt12.GetComponent<GUIText>().text = "A.S.E.";
			GameObject gt123 = 	GameObject.FindGameObjectWithTag ("ODCText");
			gt123.GetComponent<GUIText>().text = "Garima-Park";

				}
		
		if (health < 6) {
			GameObject gt12 = 	GameObject.FindGameObjectWithTag ("TimeText");
			gt12.GetComponent<GUIText>().text = "S.E";
			GameObject gt123 = 	GameObject.FindGameObjectWithTag ("ODCText");
			gt123.GetComponent<GUIText>().text = "ODC-46";
		}
		if(health<=0){ 
			Destroy (gameObject);
			gt1.GetComponent<GUIText>().text = "LOL! :P";
			if (count7 == 0)
			{
				SpawnGumba1();
				count7++;
			}
		}


	}
	void SpawnGumba1()
	{
		
		GameObject go12 = Instantiate(myRPower, pos2.transform.position, Quaternion.identity) as GameObject;
	}
	void OnCollisionEnter2D(Collision2D col1){
		if (col1.gameObject.tag == "Goli") {

			if(health<=0){ 
			}else{ 
				//if (isFireStart)
				GameObject gjw = GameObject.FindWithTag ("GumbaJwalaIniTag") as GameObject;
				if(gjw!= null){
					NewBehaviourScript8 ns8 =gjw.GetComponent<NewBehaviourScript8>();
					ns8.isFireStart = true;
				}
				health--;
				Destroy (col1.gameObject);
			}
		}
	}

}

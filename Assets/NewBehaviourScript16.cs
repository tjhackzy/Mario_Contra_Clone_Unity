using UnityEngine;
using System.Collections;

public class NewBehaviourScript16 : MonoBehaviour {
	public float speed = 0.2f;
	public bool crawling = false;
	public bool isrend = false;

	// Use this for initialization
	void Start () {
		// init text here, more space to work than in the Inspector (but you could do that instead)
		GUIText tc = GetComponent<GUIText>();
		string creds = "Executive Producer:\nMr. Moneybags\n";
		creds += "Art Director:\nArt Guy\n";
		creds += "Technical Director:\nJohn Yaya\n";
		creds += "Programming:\nPoindexter Kopnik\n";
		creds += "Level Design:\nRandy Bugger\n";
		tc.text = creds;
		tc.richText = true;
	}



	// Update is called once per frame
	void Update () {
		GUIText tc = GetComponent<GUIText>();

		if (!crawling)
			return;
		if (gameObject.transform.position.y > 0.60 || gameObject.transform.position.y < 0.29) {

						isrend = false;	//crawling = false;
				} else {
			isrend = true;		
		}
		if (!isrend) {
			tc.enabled = false;
			//Vector3 vc3 = gameObject.transform.position;
			// 	vc3.z = -1f;
			//gameObject.transform.position = vc3;
				} else {
			tc.enabled = true;
		//	Vector3 vc3 = gameObject.transform.position;
	//		vc3.z = 0.0f;
		//	gameObject.transform.position = vc3;

		}
		transform.Translate(Vector3.up * Time.deltaTime * speed);

	}
}

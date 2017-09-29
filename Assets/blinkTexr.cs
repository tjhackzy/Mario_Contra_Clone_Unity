using UnityEngine;
using System.Collections;

public class blinkTexr : MonoBehaviour {

	private bool blink = false;
	public int counter = 2;
	public int blinkspeed = 20;
	public GUIText  myGuiTxt; 
	public float interval;
	public GameObject flashing_Label;
	// Use this for initialization
	void Start () {
		InvokeRepeating("FlashLabel", 0.5f, interval);
	}
	void FlashLabel()
	{
		if(flashing_Label.activeSelf)
			flashing_Label.SetActive(false);
		else
			flashing_Label.SetActive(true);
	}
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.Space)) {
						Application.LoadLevel ("loading11"); 
				}
	

	}

}

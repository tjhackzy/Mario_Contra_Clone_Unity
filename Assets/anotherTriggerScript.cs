using UnityEngine;
using System.Collections;

public class anotherTriggerScript : MonoBehaviour {

   public Texture2D[] images;
   public string[] subtitles;
   public int maxDialogue;

    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.tag == "Player")
        {
            Debug.Log("on trigger enter 2d..");
            other.gameObject.GetComponent<DialogueScript>().images=images;
            //other.gameObject.GetComponent<"DialogueScript">().voices=voices;
            other.gameObject.GetComponent<DialogueScript>().subtitles=subtitles;
            other.gameObject.GetComponent<DialogueScript>().maxDialogue=maxDialogue;
            Debug.Log("max dialogue :" + maxDialogue.ToString());
            other.gameObject.GetComponent<DialogueScript>().enableSpeech = true;
            other.gameObject.GetComponent<DialogueScript>().StartDialogue();
            Destroy(gameObject);
        }
    }

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}

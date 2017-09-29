using UnityEngine;
using System.Collections;

public class marioScript1 : MonoBehaviour {

   public string[] dialogue;
   public GUIText output;

    private int curLine = 0;

    void OnTriggerEnter2D(Collider2D collider)
    {
        if (collider.CompareTag("Player"))
        {
           // Debug.Log("here");
       
            output.enabled = true;
            output.text = dialogue[0];
        }
    }

    void OnGUI()
    {

        if (output.enabled && Event.current.type == EventType.KeyDown && Event.current.keyCode == KeyCode.Return)
        { //I used the [Return] key here but you can choose whatever key you want
            curLine++;
            if (curLine < dialogue.Length)
            {
                output.text = dialogue[curLine];
            }
            else
            {
                curLine = 0;
                output.enabled = false;
            }
        }
    }

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}

using UnityEngine;
using System.Collections;

public class DialogueScript : MonoBehaviour {
   public Texture2D[] images;
   public string[] subtitles;
   public bool enableSpeech = false;
   public int comboPointer = 0;
   public int maxDialogue;
    void OnGUI()
    {
        if (enableSpeech)
        {
            Debug.Log("enable speech");
            GUI.Box(new Rect(100, Screen.height - 100, Screen.width - 120, 40), "");
            GUI.DrawTexture(new Rect(150, Screen.height - 120, 10, 10), images[comboPointer], ScaleMode.StretchToFill, true, 10.0f);
            GUI.Label(new Rect(220, Screen.height - 120, Screen.width - 230, 110), subtitles[comboPointer]);

        }
    }

   public void StartDialogue()
    {
        Debug.Log("in start dialogue");
        if (comboPointer == maxDialogue - 1)
        {
            Debug.Log("first if");
            enableSpeech = false;
            images = null;
            subtitles = null;
            comboPointer = 0;
            maxDialogue = 0;
        }
        else
        {
            Debug.Log("else");

            comboPointer++;
            RestartDialogue();
        }
    }

    void RestartDialogue()
    {
        StartDialogue();
    }


    
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}

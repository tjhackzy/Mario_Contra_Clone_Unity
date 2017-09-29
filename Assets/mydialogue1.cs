using UnityEngine;
using System.Collections;

public class mydialogue1 : MonoBehaviour {
    Texture2D[] images;

   public string[] subtitles;
   public bool enableSpeech = false;
   public int comboPointer = 0;
   public int maxDialogue;
    void OnGUI()
    {
        if (enableSpeech)
        {
            GUI.Box(new Rect(140, Screen.height - 130, Screen.width - 300, 120), "");
            GUI.DrawTexture(new Rect(150, Screen.height - 120, 60, 60), images[comboPointer], ScaleMode.StretchToFill, true, 10.0f);
            GUI.Label(new Rect(220, Screen.height - 120, Screen.width - 230, 110), subtitles[comboPointer]);

        }
    }

    void StartDialogue()
    {
        if (comboPointer == maxDialogue - 1)
        {
            enableSpeech = false;
            images = null;
            subtitles = null;
            comboPointer = 0;
            maxDialogue = 0;
        }
        else
        {
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

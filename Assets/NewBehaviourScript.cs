using UnityEngine;
using System.Collections;

public class NewBehaviourScript : MonoBehaviour {

    public GameObject myDialog1;
    
    int count = 0;
    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.tag == "Player")
        {
            if (count == 0)
            {
                GameObject go1 = Instantiate(myDialog1, new Vector3(0,0,0), Quaternion.identity) as GameObject;
                count++;
            }
           
        }
    }

	// Use this for initialization
	void Start () {
        count = 0;
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}

using UnityEngine;
using System.Collections;

public class GumbaBorn : MonoBehaviour {

    public int count;
    public GameObject myGumba;
    public Transform pos1;

    void OnCollisionEnter2D(Collision2D col1)
    {
        if (col1.gameObject.tag == "Player")
        {
            if (count == 0)
            {
                	SpawnGumba ();
                count++;
            }
        }
    }



    void SpawnGumba()
    {

        GameObject go1 = Instantiate(myGumba, pos1.position, Quaternion.identity) as GameObject;
    }


	// Use this for initialization
	void Start () {
        count = 0;
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}

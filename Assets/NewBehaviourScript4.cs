using UnityEngine;
using System.Collections;

public class NewBehaviourScript4 : MonoBehaviour {

    public GameObject myDialog12;

    int count = 0;
    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.tag == "Player")
        {
            if (count == 0)
            {
                GameObject go12 = Instantiate(myDialog12, new Vector3(0, 0, 0), Quaternion.identity) as GameObject;
                count++;
            }

        }
    }

    // Use this for initialization
    void Start()
    {
        count = 0;
    }

    // Update is called once per frame
    void Update()
    {

    }
}

using UnityEngine;
using System.Collections;

public class SmoothCamera2D : MonoBehaviour {
	
	public float dampTime = 0.15f;
	private Vector3 velocity = Vector3.zero;
	public Transform target;
	public Transform target2;
	// Update is called once per frame
	void Update () 
	{
		GameObject go111 = GameObject.FindWithTag ("ContraPlayer") as GameObject;
		if (go111 != null) {
			target2 = go111.transform;
				}
		if (target)
		{
			Vector3 point = GetComponent<Camera>().WorldToViewportPoint(target.position);
			Vector3 delta = target.position - GetComponent<Camera>().ViewportToWorldPoint(new Vector3(0.1f, 0.1f, point.z)); //(new Vector3(0.5, 0.5, point.z));
			Vector3 destination = transform.position + delta;

            GameObject go2 = GameObject.Find("dialogPrefeb(Clone)");
            GameObject go3 = GameObject.Find("dialog2(Clone)");
			GameObject go4 = GameObject.Find("dialog3(Clone)");
			GameObject go5 = GameObject.Find("dialog4(Clone)");

            //dialog2(Clone)
            //go1
			if (go2 != null || go3!= null || go4!= null || go5!= null)
            {
                destination.y = -0.8f;
            }
            else
            {
                destination.y = 0;
                     
            }
			transform.position = Vector3.SmoothDamp(transform.position, destination, ref velocity, dampTime);
		}else
		if (target2)
		{
			Vector3 point = GetComponent<Camera>().WorldToViewportPoint(target2.position);
			Vector3 delta = target2.position - GetComponent<Camera>().ViewportToWorldPoint(new Vector3(0.1f, 0.1f, point.z)); //(new Vector3(0.5, 0.5, point.z));
			Vector3 destination = transform.position + delta;
			
			GameObject go2 = GameObject.Find("dialogPrefeb(Clone)");
			GameObject go3 = GameObject.Find("dialog2(Clone)");
			GameObject go4 = GameObject.Find("dialog3(Clone)");
			
			GameObject go5 = GameObject.Find("dialog4(Clone)");

			//dialog2(Clone)
			//go1
			if (go2 != null || go3!= null || go4!= null || go5!= null)
			{
				destination.y = -0.8f;
			}
			else
			{
				destination.y = 0;
				
			}
			transform.position = Vector3.SmoothDamp(transform.position, destination, ref velocity, dampTime);
		}
		
	}
}
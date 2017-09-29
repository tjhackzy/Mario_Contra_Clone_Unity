using UnityEngine;
using System.Collections;

public class CameraFollow : MonoBehaviour {

	private Transform player;
	
	void Start () {
		player = GameObject.Find ("Player").transform;
	}
	
	void Update () {
		Vector3 playerpos = player.position;
		playerpos.z = transform.position.z;
		transform.position = playerpos;
	}
}

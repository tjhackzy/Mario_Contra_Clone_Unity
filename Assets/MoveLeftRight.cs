using UnityEngine;
using System.Collections;

public class MoveLeftRight : MonoBehaviour {

	public float speed =0.6f ;
	public string axisName = "Horizontal";
	public Animator anim;
	public GameObject myGumba;
	public Transform pos1;
	public int count;
	public int contraCount ;
	public GameObject myContra;
	public Transform contraPost;
	public int myii;
	// Use this for initialization
	void Start () {
		anim = gameObject.GetComponent<Animator> ();
		count = 0;
		contraCount = 0;
		myii = 0;

	}
	
	// Update is called once per frame
	void Update () {
				anim.SetFloat ("Speed", Mathf.Abs (Input.GetAxis (axisName)));
				if (Input.GetAxis (axisName) < 0) {
						Vector3 newScale = transform.localScale;
						newScale.x = -1.0f;
						transform.localScale = newScale;
				} else if (Input.GetAxis (axisName) > 0) {
						Vector3 newScale = transform.localScale;
						newScale.x = 1.0f;
						transform.localScale = newScale;
				}
				transform.position += transform.right * Input.GetAxis (axisName) * speed * Time.deltaTime;

              
               

	}

	void OnCollisionEnter2D(Collision2D col1){
				if (col1.gameObject.name == "GumbaTrigger") {



						if (count == 0) {
								//	SpawnGumba ();
								count++;
						}
				}
				if (col1.gameObject.tag == "Flag1") {
						Application.LoadLevel ("iquit");
				}
				if (col1.gameObject.tag == "Star") {
						if (contraCount == 0) {
				Destroy (gameObject);
								SpawnContra ();
						}
				}
		if (col1.gameObject.tag == "BoxCol1") {
			GameObject go55 = GameObject.FindWithTag ("MyGuiText1");
			if(go55!= null){
				go55.GetComponent<GUIText>().text = @"
Thank you ‘tcs’! I got opportunity to work 
with some of The best developers and gained a lot 
of ‘Industry’ class knowledge. I really appreciate 
For all your efforts. It was all fun working with 
different people coming from different environment
having completely different mentality.";

				GameObject go66 = GameObject.FindWithTag("PlayerHealthText") as GameObject;
				go66.GetComponent<GUIText>().text = (++myii).ToString ();

			}
			//Debug.Log("here1");
				}
		if (col1.gameObject.tag == "BoxCol2") {
		//	Debug.Log("here2");
			GameObject go55 = GameObject.FindWithTag ("MyGuiText1");
			if(go55!= null){
				//go55.guiText.fontSize = 7;
				go55.GetComponent<GUIText>().text = @"
Other than coding, co-operation,team work,
I’ve learned one very important Thing here.
It is how we should value other men.
I want to live, not In a fear of ratings or
hope for better future, but for My own passion.
Where A creed of my life is defined by none but self.";
			}
			GameObject go66 = GameObject.FindWithTag("PlayerHealthText") as GameObject;
			go66.GetComponent<GUIText>().text = (++myii).ToString ();

		}
		if (col1.gameObject.tag == "BoxCol3") {
		//	Debug.Log("here3");
			GameObject go55 = GameObject.FindWithTag ("MyGuiText1");
			if(go55!= null){
				//go55.guiText.fontSize = 7;
				go55.GetComponent<GUIText>().text = @"
On that very foundation, I resigned last month
and this 19th is my last day in TCS.
I will peruse my career as indie game developer
Along with my post graduation.";
			}
			GameObject go66 = GameObject.FindWithTag("PlayerHealthText") as GameObject;
			go66.GetComponent<GUIText>().text = (++myii).ToString ();

		}
		if (col1.gameObject.tag == "BoxCol4") {
			//	Debug.Log("here3");
			GameObject go55 = GameObject.FindWithTag ("MyGuiText1");
			if(go55!= null){
				//go55.guiText.fontSize = 7;
				go55.GetComponent<GUIText>().text = @"
I do not want to wake up at 35 realizing
that I have wasted my young vigorous age 
in doing useless stuffs which I hardly liked, 
fueled not by individualistic avidity or self 
satisfaction but by the false hope and intangible 
fear given by other people by means of my personal 
virtue of pride and self-esteem.


-from my job resignation letter.";
			}
			GameObject go66 = GameObject.FindWithTag("PlayerHealthText") as GameObject;
			go66.GetComponent<GUIText>().text = (++myii).ToString ();
			
		}
		if (col1.gameObject.tag == "Rani") {
			//	Debug.Log("here3");
			GameObject go55 = GameObject.FindWithTag ("MyGuiText1");
			if(go55!= null){
				//go55.guiText.fontSize = 7;
				go55.GetComponent<GUIText>().text = @"
sorry, but my princess is in another castle.
:P
";
			}
			GameObject go66 = GameObject.FindWithTag("PlayerHealthText") as GameObject;
			go66.GetComponent<GUIText>().text = (++myii).ToString ();

		}
		}



	void SpawnGumba(){

		GameObject go1 =	Instantiate(myGumba, pos1.position, Quaternion.identity) as GameObject;
	}
	void SpawnContra(){
		GameObject go19 =	Instantiate(myContra, contraPost.position, Quaternion.identity) as GameObject;
	}
}




























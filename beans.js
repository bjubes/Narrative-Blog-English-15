
var go = false;

function clickbeans(){

	if (go == false ){
		beans();
		go = true
	}
	else {
	go = false;
	location.reload();

	}
}

function beans() {
	
	$("img").attr("src", "bean.jpg");
}
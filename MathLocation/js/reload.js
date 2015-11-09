window.onload = function (){

	document.getElementById("reload").onclick = reload;
	document.getElementById("replace").onclick = replace;
	document.getElementById("assign").onclick = assign;



	function reload(){
		window.location.reload();
	}

	function replace(){
		document.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');
	}

	function assign(){
		document.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');
	}

}
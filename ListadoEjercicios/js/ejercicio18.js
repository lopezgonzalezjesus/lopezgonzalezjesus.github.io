window.onload = function(){
	resultado = document.getElementById("resultado");
	submit = document.getElementById("submit");
	submit.addEventListener("click", function(){
		porLineas();
	});

}

function porLineas(){
	resultado.innerHTML += "</br>";
	for(var i=0;i<101;i++){
		resultado.innerHTML += i +",";
		if(i!=0 && i%7==0){
			resultado.innerHTML += "</br>";
		}
	}
}
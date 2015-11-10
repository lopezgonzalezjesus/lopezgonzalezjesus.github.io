window.onload = function(){
	resultado = document.getElementById("resultado");
	submit = document.getElementById("submit");
	submit.addEventListener("click", function(){
		piramide();
	});

}

function piramide(){
	var contador = 0;
	for(var i=1;i<11;i++){
		for(var j=1;j<i;j++){
			resultado.innerHTML += j;
			if(j==9){
				resultado.innerHTML += 0;
			}
		}
		resultado.innerHTML += "</br>";
	}
}

window.onload = function(){
	resultado = document.getElementById("resultado");
	submit = document.getElementById("submit");
	submit.addEventListener("click", function(){
		piramide();
	});

}

function piramide(){
	var contador = 0;
	for(var i=1;i<10;i++){
		for(var j=0;j<i;j++){
			resultado.innerHTML += i;
		}
		resultado.innerHTML += "</br>";
	}
	while(contador<10){
		resultado.innerHTML += 0;
		contador++;
	}
	resultado.innerHTML += "</br>";
}

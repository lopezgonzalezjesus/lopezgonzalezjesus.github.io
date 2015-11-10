window.onload = function(){

	var numero = document.getElementById("numero1");
	var resultado = document.getElementById("resultado");
	var submit = document.getElementById("submit").addEventListener("click", function(){
    	resultado.innerHTML = longitud(numero.value) + " Si lo giramos... " + rotar(numero.value);
    });
	
}

function longitud(numero){
	if(numero>=0 && numero<=10){
		return "Longitud: " + numero.length;
	} else{
		return "Introduce un numero entre 0 y 10";
	}
}

function rotar(numero){
	return numero.toString().split("").reverse().join("");
}
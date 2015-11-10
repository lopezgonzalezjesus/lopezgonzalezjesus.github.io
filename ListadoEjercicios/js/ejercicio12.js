var array = new Array();
window.onload = function(){
	resultado = document.getElementById("resultado");
	numero = document.getElementById("numero1");
	submit = document.getElementById("submit");
	submit.addEventListener("click", function(){
		anadirNumero(numero.value);
	});

}

function anadirNumero(n){
	if(n!=2){
		if(n<=1 && n>=0){
			array.push(n);
			resultado.innerHTML = "";
		}
		else{
			resultado.innerHTML = "Introduce numeros entre 0 y 1. Un 2 para terminar la secuencia.";
		}
	}
	else{
		resultado.innerHTML = "El numero de ceros existentes en : " + array + " es de " + contarCeros();
		array = [];
	}
}

function contarCeros(){
	var suma=0;
	for(var i=0;i<array.length;i++){
		if(array[i]==0){
			suma++;
		}
	}
	return suma;
}
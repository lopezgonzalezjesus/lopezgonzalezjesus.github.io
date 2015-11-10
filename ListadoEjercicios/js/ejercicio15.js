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
	if(n>=1){
		generarSecuencia(n);
		resultado.innerHTML = "Secuencia : " + array;
		array = [];
	}
	else{
		resultado.innerHTML = "No se puede generar la secuencia de dicho numero por ser menor que 1";
		array = [];
	}
}

function generarSecuencia(numero){
	for(var i=1;i<=numero;i++){
		array.push(i);
	}
}
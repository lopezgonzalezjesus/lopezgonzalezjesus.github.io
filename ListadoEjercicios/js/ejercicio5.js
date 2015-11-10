window.onload = function(){

	var numero = document.getElementById("numero1");

	var submit = document.getElementById("submit").addEventListener("click", function(){
        resultado = document.getElementById("mensaje1").innerHTML = contarPrimos(numero.value);
    });
	

}

function contarPrimos(numero){
	var primos = new Array();
	for(var i=2;i<numero;i++){
		if(esPrimo(i)){
			primos.push(i);
		}
	}
	return "Existen " + primos.length + " numeros primos entre el 1 y el " + numero + ": " + primos;
}

function esPrimo(numero){
	for(var i=2;i<numero;i++){
		if(numero%i==0){
			return false;
		}
	}
	return true;	
}
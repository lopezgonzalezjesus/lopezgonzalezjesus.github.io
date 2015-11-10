window.onload = function(){

	var numero = document.getElementById("numero1");

	var submit = document.getElementById("submit").addEventListener("click", function(){
        resultado = document.getElementById("mensaje1").innerHTML = esPrimo(numero.value);
    });
	

}

function esPrimo(numero){
	if(/^\d+$/.test(numero)){
		for(i=2;i<numero;i++){
			if(numero%i==0){
				return "El numero no es primo";
			}
		}
		return "El numero es primo";
	}
	else{
		return "Introduce un entero positivo";
	}
	
}
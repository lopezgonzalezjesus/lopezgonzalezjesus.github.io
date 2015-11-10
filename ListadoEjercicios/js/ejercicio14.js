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
	if(n>=0){
		array.push(n);
	}
	else{
		resultado.innerHTML = "La media de los siguientes numeros : " + array + " es " + media(array);
		array = [];
	}
}

function media(){
	var suma=0;
	for(var i=0;i<array.length;i++){
		suma = parseFloat(suma) + parseFloat(array[i]);
	}
	return suma/(array.length);
}
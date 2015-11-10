window.onload = function(){

	var numero1 = document.getElementById("numero1");
	var numero2 = document.getElementById("numero2");
	var numero3 = document.getElementById("numero3");
	var submit = document.getElementById("submit");
	submit.addEventListener("click",comprobar);
	
}

function comprobar(){
	var numeros = [numero1.value, numero2.value, numero3.value];
	var resultado = document.getElementById("resultado");		

	resultado.innerHTML = numeros.sort(function(a, b){return a-b});


}



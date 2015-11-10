window.onload = function(){
	resultado = document.getElementById("resultado");
	submit = document.getElementById("submit");
	submit.addEventListener("click", calcularPotencias);

}

function calcularPotencias(){
	var array = new Array();
	for(var i =0; i<11;i++){
		array[i]="</br>2^" + i + " = " + Math.pow(2,i);
	}

	resultado.innerHTML = array;
}
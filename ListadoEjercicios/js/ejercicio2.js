window.onload = function(){

	var texto = document.getElementById("mensaje");

	var mensaje = "";
	
	for(var i = 100; i>-1; i-=7){
		mensaje = mensaje + " " + i;
	}

	texto.innerHTML = mensaje;
};

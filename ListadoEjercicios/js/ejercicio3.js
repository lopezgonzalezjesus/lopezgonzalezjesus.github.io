function inicializar(){
	n1 = document.getElementById("numero1");
	m1 = document.getElementById("mensaje1");
	n2 = document.getElementById("numero2");
	m2 = document.getElementById("mensaje2");
	n3 = document.getElementById("numero3");
	m3 = document.getElementById("mensaje3");
	n4 = document.getElementById("numero4");
	m4 = document.getElementById("mensaje4");
	n5 = document.getElementById("numero5");
	m5 = document.getElementById("mensaje5");
	n6 = document.getElementById("numero6");
	m6 = document.getElementById("mensaje6");
	n7 = document.getElementById("numero7");
	m7 = document.getElementById("mensaje7");

	var submit = document.getElementById("submit").addEventListener("click",function(){
        multiplo5(n1,m1);
        multiplo5(n2,m2);
        multiplo5(n3,m3);
        multiplo5(n4,m4);
        multiplo5(n5,m5);
        multiplo5(n6,m6);
        multiplo5(n7,m7); 
    });
}

function multiplo5(numero, mensaje){
	if((numero.value)%5==0 && numero.value != 00){
		mensaje.innerHTML = "Es múltiplo de 5";
	}
	else{
		mensaje.innerHTML = "No es múltiplo de 5";
	}
}

document.addEventListener("DOMContentLoaded", inicializar);


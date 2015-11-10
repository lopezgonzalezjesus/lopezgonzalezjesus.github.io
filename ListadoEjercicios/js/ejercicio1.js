/*
Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número
entre el 1 y el 100. Mostrará un mensaje:
a. Para indicar si has acertado (en una nueva ventana)
b. Para indicar si la solución es mayor o es menor.
 */
var aleatorio;
window.onload = function(){
    numero = document.getElementById("numero1");
    submit = document.getElementById("submit");
    reset = document.getElementById("reset");
    resultado = document.getElementById("resultado");
    generarAleatorio();
    submit.addEventListener("click", function(){
        alert(aleatorio);
        comprobar(numero.value);
    });
    reset.addEventListener("click", function(){
        generarAleatorio();
        submit.disabled=false;
        numero1.disabled=false; 
    });
}
function abrirVentana(){
    var ventana = open("");
    ventana.document.write(""
        +"<!DOCTYPE html>"
        +"<html>"
        +"<head>"
        +"    <meta charset='utf-8'/>"
        +"    <title>Ejercicio 1</title>"
        +"</head>"
        +"<body>"
        +"    <h1>Has ganado!!!</h1>"
        +"</body>"
        +"</html>");
    ventana.document.close();
}

function generarAleatorio (){
    aleatorio = Math.floor(Math.random()*100)+1;
}

function comprobar(numero){
    alert(numero);
    if (/^[0-9]+$/.test(numero)) {
        if (aleatorio == numero) {
            abrirVentana();
            submit.disabled=true;
            numero1.disabled=true;
        }else{
            if (aleatorio>numero) {
                resultado.innerHTML = "El número introducido es mas pequeño";
            }else{
                resultado.innerHTML = "El número introducido es mas grande";
            }
        }
    } else{
        resultado.innerHTML = "Introduce un número";
    }
}
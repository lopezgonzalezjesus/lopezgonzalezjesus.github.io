function muestraInformacion(mensaje) {
	document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
	for(var i=1; i<mensaje.length; i++) {
		document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
	}
}

function mostrarDatos(evento){
	var elEvento = evento || window.event;

	switch(elEvento.type){
		case 'mousemove':
			var ie = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
      			var navegadorX, navegadorY, paginaX, paginaY;
		    if(ie) {
		      if(document.documentElement && document.documentElement.scrollTop){ 
		        paginaX = evento.clientX + document.documentElement.scrollLeft;
		        paginaY = evento.clientY + document.documentElement.scrollTop;
		      }
		      else { 
		        paginaX = evento.clientX + document.body.scrollLeft;
		        paginaY = evento.clientY + document.body.scrollTop;
		      }
		    }
			var navegadorX = elEvento.clientX;
			var navegadorY = elEvento.clientY;
			var paginaX = elEvento.pageX;
			var paginaY = elEvento.pageY;
			muestraInformacion(['Ratón', 'Navegador[' + navegadorX + ',' + navegadorY + ']' , 'Página[' + paginaX + ',' + paginaY + ']']);
			document.getElementById("info").style.backgroundColor="white";
			break;
		case 'keypress':
			var teclaCodigo = elEvento.charCode;
			var tecla = String.fromCharCode(teclaCodigo);
			muestraInformacion(['Teclado', 'Carácter[' + tecla + ']' , 'Código[' + teclaCodigo + ']']);
			document.getElementById("info").style.backgroundColor="#CCE6FF";
			break;
		case 'click':
			document.getElementById("info").style.backgroundColor="#FFFFCC";
			break;
		default:
			statements_def
			break;
	}
}

document.onmousemove = mostrarDatos;
document.onkeypress = mostrarDatos;
document.onclick = mostrarDatos;
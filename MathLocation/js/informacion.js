window.onload = function() {
	document.getElementById("boton").onclick = info;
	var ul = document.createElement("ul");


		function info(){
				window.history.pushState("", "", window.location.href + "?prueba");
				generaLi("Hash: ", window.location.hash);
				generaLi("Host: ", window.location.host);
				generaLi("Hostname: ", document.location.hostname);
				generaLi("Href: ", window.location.href);
				generaLi("Pathname: ", window.location.pathname);
				generaLi("Port: ", window.location.port);
				generaLi("Protocolo: ", window.location.protocol);
				generaLi("Search: ", window.location.search);
				document.body.appendChild(ul);
		}

		function generaLi(cadena, objeto){
				var li = document.createElement("li");
				licontenido = document.createTextNode(cadena + objeto);
				li.appendChild(licontenido);
				ul.appendChild(li);
		}
}
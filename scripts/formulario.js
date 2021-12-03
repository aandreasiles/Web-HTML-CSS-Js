function validarTel(){
	var tel = document.getElementById("tel").value;
	var patron = /^\d{9}$/

	if(!patron.test(tel)){
		alert("Formato de telefono erróneo");
	}
}

function validarDni(){
	var dni = document.getElementById("dni").value;
	var patron = /^[0-9]{8}[-][TRWAGMYFPDXBNJZSQVHLCKE]$/i;

	if(!patron.test(dni)){
		alert("Formato de DNI erróneo");
	}
}

function validarCP(){
	var cp = document.getElementById("codpost").value;
	var patron = /^\d{5}$/

	if(!patron.test(cp)){
		alert("Formato de código postal erróneo");
	}
}

function validarCorreo(){
	var correo = document.getElementById("email").value;
	var patron = /^[a-z].*[.][a-z].*@(estudiants.urv|urv).(cat)$/;

	if(!patron.test(correo)){
		alert("Formato de correo erróneo. Recuerda que debe ser el correo de la universidad");
	}
}

function controlContrasena(){
	var contraIni = document.getElementById("contra");
	var contraFin = document.getElementById("repecontra");

	if(contraIni.value != contraFin.value){
		alert("Las contraseñas no coinciden");
	}
}

function tablaDatos(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("ape").value;
	var correo = document.getElementById("email").value;
	var contra = document.getElementById("repecontra").value;
	var tlf = document.getElementById("tel").value;
	var dir = document.getElementById("dir").value;
	var cp = document.getElementById("codpost").value;
	var dni = document.getElementById("dni").value;
	var opt = document.getElementById("opt").value;
	var arch = document.getElementById("file").value;
	var obs = document.getElementById("obs").value;

	var div = document.getElementById("tabladatos");

	if(tlf % 2 == 0){
		div.innerHTML =
		"<table cellpadding = 5 border = '3' bordercolor = 'blue'>"+"<tr><td>Nombre</td><td>Apellido</td><td>Correo electrónico</td><td>Contraseña</td><td>Teléfono</td><td>Dirección</td><td>Código postal</td><td>DNI</td><td>Opción</td><td>Archivo</td><td>Observaciones</td></tr>"+
		"<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+correo+"</td><td>"+contra+"</td><td>"+tlf+"</td><td>"+dir+"</td><td>"+cp+"</td><td>"+dni+"</td><td>"+opt+"</td><td>"+arch+"</td><td>"+obs+"</td></tr></table>";
	}else{
		div.innerHTML =
		"<table cellpadding = 5 border = '3' bordercolor = 'red'>"+"<tr><td>Nombre</td><td>Apellido</td><td>Correo electrónico</td><td>Contraseña</td><td>Teléfono</td><td>Dirección</td><td>Código postal</td><td>DNI</td><td>Opción</td><td>Archivo</td><td>Observaciones</td></tr>"+
		"<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+correo+"</td><td>"+contra+"</td><td>"+tlf+"</td><td>"+dir+"</td><td>"+cp+"</td><td>"+dni+"</td><td>"+opt+"</td><td>"+arch+"</td><td>"+obs+"</td></tr></table>";
	}

}
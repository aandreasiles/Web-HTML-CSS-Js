window.onscroll = function(e){
	var banner = document.querySelector(".bannerinicio");
	var header = document.querySelector("body > header");

	if(window.scrollY > banner.offsetHeight - 32){
		header.classList.add("fixed");
	}else{
		header.classList.remove("fixed");
	}
}

var i = 1;
function cambia_foto1(){
	imagen1 = new Image;
	imagen1.src = "fotos/inicio1.jpg";
	imagen2 = new Image;
	imagen2.src = "fotos/inicio1_bn.jpg"
	if (i == 1){
		document.images['icono1'].src = imagen2.src;
		i=2;
	}else{
		document.images['icono1'].src = imagen1.src;
		i = 1;
	}
}

var i = 1;
function cambia_foto2(){
	imagen1 = new Image;
	imagen1.src = "fotos/inicio2.jpg";
	imagen2 = new Image;
	imagen2.src = "fotos/inicio2_bn.jpg"
	if (i == 1){
		document.images['icono2'].src = imagen2.src;
		i=2;
	}else{
		document.images['icono2'].src = imagen1.src;
		i = 1;
	}
}

var i = 1;
function cambia_foto3(){
	imagen1 = new Image;
	imagen1.src = "fotos/inicio3.jpg";
	imagen2 = new Image;
	imagen2.src = "fotos/inicio3_bn.jpg"
	if (i == 1){
		document.images['icono3'].src = imagen2.src;
		i=2;
	}else{
		document.images['icono3'].src = imagen1.src;
		i = 1;
	}
}
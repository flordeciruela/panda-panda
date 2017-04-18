window.addEventListener("load", function(){
var deleteImg = document.getElementsByClassName('delete-img');
var figures = document.getElementsByClassName('figures');

//Funciones para eliminar y restaurar imagenes:
	for(i=0; i<deleteImg.length; i++){
		 deleteImg[i].addEventListener("click", function(){
			 this.parentNode.classList.add("deleted");
		 });
	 }

	 document.getElementById('b-restaurar').addEventListener("click", function(){
		 for (var elem in figures) {
			 figures[elem].classList.remove("deleted");
		 }
	 });

//Funciones para mostrar y ocultar textos:
	document.getElementById('b-origen').addEventListener("click",function(){
			var historia = document.getElementById("historia");
			historia.classList.toggle("ocultar");
	});

	document.getElementById('b-extincion').addEventListener("click",function(){
		var origen = document.getElementById("origen");
		origen.classList.toggle("ocultar");
	});

});

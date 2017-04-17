
var deleteImg = document.getElementsByClassName('delete');
var figure = document.getElementsByTagName('figure');
//Funciones para eliminar y restaurar imagenes:
//for(var i in deleteImg){
	deleteImg[0].addEventListener("click",function(){
		figure[0].classList.add("deleted");
	});
	deleteImg[1].addEventListener("click",function(){
		figure[1].classList.add("deleted");
	});
	deleteImg[2].addEventListener("click",function(){
		figure[2].classList.add("deleted");
	});
	deleteImg[3].addEventListener("click",function(){
		figure[3].classList.add("deleted");
	});
//}
document.getElementById('b-restaurar').addEventListener("click",function(){
	for(var elem in figure){
		figure[elem].classList.remove("deleted");
	}
});

//Función para mostrar y ocultar textos:
document.getElementById('b-origen').addEventListener("click",function(){
		var historia = document.getElementById("historia");
		historia.classList.toggle("ocultar");
});

document.getElementById('b-extincion').addEventListener("click",function(){
	var origen = document.getElementById("origen");
	origen.classList.toggle("ocultar");
});

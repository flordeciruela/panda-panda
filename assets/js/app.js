
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
document.getElementById('restaurar').addEventListener("click",function(){
	for(var elem in figure){
		figure[elem].classList.remove("deleted");
	}
});

//Función para mostrar y ocultar textos:
document.getElementById('origen').addEventListener("click",function(){
		var historia = document.getElementsByClassName("historia");
		historia.classList.toggle("ocultar");
});

document.getElementById('extincion').addEventListener("click",function(){
	var origen = document.getElementsByClassName("origen");
	origen.classList.toggle("ocultar");
});

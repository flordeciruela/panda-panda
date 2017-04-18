# Panda-panda
Ejercicio evaluado - lección 22

## **Descripción:**
Desarrollar una página web con una estructura conformada por una barra de navegación con enlaces, una sección de imágenes interactiva y un área con texto en columnas para mostrar.

![screen web Panda](http://i.imgur.com/Clskglj.png)

## Galería:

Creamos un figure para cada imagen y dentro un anchor "X" que ocultará el contenido, a través del JS creamos un evento que cambiará la clase a "deleted" para ocultar los Figures, esto se logra definiendo en css un selector con la clase "deleted" que tiene como display "none".

Y una función para el boton restaurar que volverá a mostrar las imágenes quitándole la clase "deleted" a cada figure de la galería.

## Texto:

Creamos una función que oculta y muestra el texto que correspona a cada boton, a traves de la propiedad "visibility" cambiándola intermitentemente de "hidden" a "visible".

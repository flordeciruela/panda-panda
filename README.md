# Panda-panda
Es un proyecto de página web conformada por una barra de navegación por enlaces, una sección de imágenes interactiva y un área de texto en secciones para mostrar.

## Funcionalidades:
1. Cada foto debe tener una **X** en la esquina superior izquierda. Al hacerle click la foto debe eliminarse.
1. Cuando se eliminen las cuatro fotos, no deben dejar el espacio vacío, sino que el espacio debe retraerse.
1. Cuando se haga click en el botón **Restaurar** fotos deben volver a aparecer todas las fotos.
1. Al hacer click en el botón  **Origen** el texto de la izquierda debe desaparecer y si hago click nuevamente debe reaparecer.
1. Al hacer click en el botón **Extinción** el texto de la derecha debe desaparecer y si hago click nuevamente debe reaparecer.

![screen web Panda](http://i.imgur.com/Clskglj.png)
## Header:
Creado con una estructura **ul** una lista de enlaces (anchors) dentro de un elemento **nav**, a cada elemento de la lista se le definió la propiedad **display: inline-block** para alinearlos en forma horizontal.

## Galería:
Se asignó un elemento **figure** para cada imagen y dentro un **anchor** "X" que ocultará el contenido, a través de Javascript creamos un evento que cambiará la clase a "deleted" para ocultar cada **figure** a través de un bucle, esto se logra definiendo en css un selector con la clase "deleted" que tiene como propiedad **display: none**.

Y una función para el boton **Restaurar** que volverá a mostrar las imágenes con un bucle eliminando la clase "deleted" a cada **figure** de la galería.

## Texto:
Se definió función que oculta y muestra el texto que correspona a cada boton, a traves de la propiedad **visibility** cambiándola intermitentemente de **hidden** a **visible**.

## Enlace gh-pages:
[https://flordeciruela.github.io/panda-panda/] (https://flordeciruela.github.io/panda-panda/)

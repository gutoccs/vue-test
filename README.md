# TESTFLIX

Es un proyecto de prueba en Vue

Realizado por **Gustavo Escobar Cobos**


## Obervaciones:

Es un proyecto de prueba, a pesar de ser un proyecto corto fue un reto para mi ya que tenía un montón de pequeños detalles, **por ejemplo: el cambio que sufre el Navbar en las vistas Mobile** y debo acotar que la mayoría del tiempo me he desempeñado como **Desarrollador Backend**, sin embargo me gusta salir de mi zona de comfort. 

Este año me propuse ir un poco más hacia el ecosistema JS y me agradó comenzar de esta manera el año.


## Mejoras para realizar:

+ Cambiar el estilo en la subida de películas para la vista Mobile
+ El cambio que sufre el card de películas al hacer hover
+ Pequeños detalles de CSS, como por ejemplo, la última forma al indicar que se cargó la película. Creo que debe hacerse con algo llamado mask


## Sobre la subida de películas:

Gracias a un Random puedo determinar si hay un error al "subir la película o no".

Dependiendo de este valor la vista cambiará acorde a ello.


## Paquetes usados:

+ **PINIA**: Lo usé para tener una lista global de las películas **movieManagementStore**, claro dado el proyecto fue poco lo que se aprovechó. Además de crear la lista en **stores/movies.js** esta se consultó en el componente: **components/MovieVerticalSlider.vue**
+ **Vue Router**: Lo usé a pesar de trabajar con solo dos páginas.
+ **vue3-carousel**: Me ayudó a crear el slider vertical en el home, afortunadamente es bastante flexible al punto de permitir crear botones personalizados para mover el slider.
+ **filepond**: Esto sirve para subir los archivos, me gustó usarlo. Aunque debo admitir que debo leer mucho mejor la documentación para sacarle el máximo provecho. Sin embargo, con pocas líneas de código crea una pre-visualización de la imagen.
+ **vue-filepond**: Es un adaptador de filepondo para vue, hay otros paquetes relacionados, pero dado el largo de su nombre no los colocaré.Pero básicamente son complementos de filepond
+ **vue3-circle-progress**: Permitió crear la barra de subida circular de la película. Por lo rápido usé este paquete, sin embargo no me gustó es poco flexible, tal vez sea por lo desactualizado.
+ **Tailwind CSS**: Lo instalé como un paquete, gracias a Tailwind fue poco el código CSS que tuve que crear, sin embargo, aún no me acostumbro a lo largo de su código dentro de una etiqueta HTML.
+ **headlessui/vue**: Me ayudó a crear el Navbar
+ **heroicons/vue**: En todo el proyecto usé sus íconos


## Componentes:

+ **MovieCard**: Es propiamente la tarjeta de películas del home.
+ **MovieList**: Es el dropdown que hay sobre el listado de películas del home.
+ **MovieTitle**: Esto lo hice como componente porque al inicio quería que cambiara la imagen y el título, gracias al manejador de estados. Pero por tiempo no lo realicé.
+ **MovieVerticalSlider**: Es el listado de películas del home, aquí utiliza el componente MovieCard
+ **NavigationBar**: Su nombre es descriptivo.
+ **NotificationBell**: Es el ícono de campana de notificaciones. Se utiliza en el Sidebar y Navbar.
+ **ProfileDropdown**: Es la foto de perfil. Al hacer click/tap en ella aparecerá las opciones propias de la cuenta. Se utiliza en el Sidebar y Navbar.
+ **SideBar**: Al hacer click en las 3 barras del Navbar aparecerá este conjunto de liks.

*Debo pedir disculpa, redactando esta sección me he dado cuenta que los componentes no están agrupados por funcionalidad y/o sección dentro de la carpeta components*


## Algunas imágenes del proyecto


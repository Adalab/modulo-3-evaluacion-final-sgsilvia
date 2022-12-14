<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# modulo-3-evaluacion-final-sgsilvia
modulo-3-evaluacion-final-sgsilvia created by GitHub Classroom


M??dulo 3: Ejercicio de evaluaci??n final
Antes de empezar a realizar el ejercicio, hay que crear un nuevo repositorio desde GitHub Classroom
usando este enlace. Una vez creado, hay que clonarlo en nuestro ordenador y en la carpeta creada
empezaremos a trabajar en el ejercicio.
El ejercicio consiste en desarrollar una p??gina web con un listado de personajes de Harry Potter, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.
Vamos de definir las distintas partes del ejercicio:
1. Listado de personajes
En primer lugar, vamos a realizar una web con el listado de personajes de Harry Potter. Para eso, vamos a
utilizar el servicio de https://hp-api.herokuapp.com/ que nos devuelve informaci??n sobre los personajes de
Harry Potter filtrados por la casa a la que pertenece. Sobre cada uno, vamos a pintar al menos:
Foto
Nombre
Especie
Puedes ingresar a su p??gina oficial del servicio https://hp-api.herokuapp.com/
Im??genes
enunciado.md8/26/2022
2 / 6
Algunas de los personajes que devuelve el API no tienen imagen (como, por ejemplo, los Dursley: Vernon
Dursley, Petunia Dursley, ... o James Potter). En ese caso hay que mostrar una imagen de relleno. Podemos
crear una imagen de relleno con el servicio de placeholder.com donde en la propia URL indicamos el
tama??o, colores, texto: https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter, o puedes usar
tu creatividad...
2. Filtrado de personajes
Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos
por nombre. Para eso, a??adimos un input a la interfaz, de forma que al ir escribiendo un nombre queden
en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al
escribir 'h' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.
Nota: en principio no es necesario tener en cuenta si las letras est??n en may??scula / min??scula para
la b??squeda, pero si quer??is a??adir esta mejora pues genial.
3. Filtrado por casa
Ahora que ya tenemos el listado de personajes en pantalla, y filtrado por nombre la siguiente parte consiste
en poder buscarlos por casa. Para eso, a??adimos un select a la interfaz, de forma que al seleccionar una
casa queden en la interfaz solo los personajes cuya casa es la seleccionada.
Nota: Por defecto, cuando carga la p??gina debe aparecer la casa gryffindor.
4. Componentes del listado de personajes
El listado debe tener los siguientes componentes como m??nimo:
Componente para el filtro de nombre.
Componente para el listado.
Componente para la tarjeta de cada personaje del listado.
Componente para el detalle de cada personaje.
Como en el ejemplo:
5. Detalle de personajes
Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su informaci??n
aparecer?? a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de
enunciado.md8/26/2022
3 / 6
detalle aparecer?? adem??s de la foto, nombre, la casa a la que pertenece , si est?? vivo o muerto, g??nero,
especie y los nombres alternativos en caso de que los tenga
Nota: no recomendamos mostrar el detalle del personaje con una ventana modal por encima del
listado del personaje porque es m??s complejo. Es mejor quitar el componente CharacterList y
mostrar el componente CharacterDetail usando React Router.
6. Detallitos de calidad
Como nos gusta cuidar la sem??ntica, el campo de texto debe estar recubierto por una etiqueta
<form />.
Si estando en el campo de filtrado pulsamos intro deb??is impedir que el navegador navegue o cambie
la ruta sin querer.
Si se busca por un texto por ejemplo "XXX" y no hay ning??n personaje que coincida con dicho texto
se debe mostrar un mensaje del tipo "No hay ning??n personaje que coincida con la palabra XXX".
El filtro debe filtrar independientemente de que la usuaria introduzca el texto en may??suclas o
min??sculas.
Al entrar en el detalle de un personaje y a continuaci??n pulsar atr??s, el campo de texto debe mostrar
el texto que ten??a anteriormente.
7. BONUS: Mejoras visuales
Para terminar, pod??is realizar algunas mejoras visuales del ejercicio. Por ejemplo:
enunciado.md8/26/2022
4 / 6
En el detalle del personaje mostrar la casa con su respectivo emblema y si un personaje est?? vivo o
muerto con su respectivo icono.
Usar alg??n sistema de grid para pintar el listado de personajes.
Que funcione bien el responsive en dispositivos peque??os.
8. BONUS: URL compartible
Como ejercicio extra os proponemos que la URL del detalle de personaje sea compatible, es decir,
que si visitamos esa URL directamente en el navegador se vea el detalle del personaje. Si refescamos
el navegador en el detalle de un personaje debe volver a mostrar el detalle del personaje.
Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo
http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje
del tipo "El personaje que buscas no existe".
9. BONUS: Ordenaci??n
Un extra interesante ser??a que orden??seis el listado de personajes alfab??ticamente por nombre.
10. BONUS: M??s filtros
Un extra interesante ser??a que a??ad??is m??s filtros para filtrar por ejemplo por g??nero.
11. BONUS: Boton Reset
Un extra interesante ser??a a??adir un boton de reset para que la p??gina vuelva a su listado principal
Entrega
Hemos pautado 12 horas de dedicaci??n al ejercicio, el l??mite de entrega es
30/08/2022 a las 1400 horas
Solo deb??is hacer commits y merges en la rama master de vuestro repositorio hasta la fecha l??mite. Si
despu??s del ejercicio quer??is seguir trabajando sobre el ejercicio, lo pod??is hacer en otra rama y no deb??is
mergearla hasta despu??s de la entrevista t??cnica.
La evaluaci??n solo se considerar?? terminada cuando:
Est?? publicada en GitHub Pages y est?? funcionando, para lo cual tendr??is que subir el c??digo,
tambi??n a la carpeta docs/ del repositorio.
El enlace a GitHub Pages est?? en la p??gina p??gina principal del repositorio, en la parte superior, al
lado de la descripci??n.
Normas
Este ejercicio est?? pensado para que lo realices de forma individual en clase, pero podr??s consultar tus
dudas con la profesora y tus compa??eras si lo consideras necesario. Ellas no te dar??n directamente la
soluci??n de tu duda, pero s?? pistas para poder solucionarla. A??n facilitando la comunicaci??n entre
compa??eras, durante la prueba no debes copiar c??digo de otra persona ni acceder a su port??til. Confiamos
en tu responsabilidad.
enunciado.md8/26/2022
5 / 6
La evaluaci??n es una buena oportunidad para conocer c??mo est??s progresando, saber qu?? temas debes
reforzar durante las siguientes semanas y cu??les dominas. Te recomendamos que te sientas c??moda con el
ejercicio que entregues y no env??es cosas copiadas que no entiendas.
Si detectamos que has entregado c??digo que no es tuyo, no entiendes y no lo puedes defender, pasar??s
directamente a la re-evaluaci??n del m??dulo. Tu objetivo no deber??a ser pasar la evaluaci??n sino convertirte
en programadora, y esto debes tenerlo claro en todo momento.
Una vez entregado el ejercicio realizar??s una revisi??n del mismo con la profesora (25 minutos), que se
asemejar?? a una entrevista t??cnica: te pedir?? que expliques las decisiones tomadas para realizarlo y te
propondr?? realizar cambios in situ sobre tu soluci??n.
Es una oportunidad para practicar la din??mica de una entrevista t??cnica donde te van a proponer cambios
sobre tu c??digo que no conoces a priori. Si evitas que otras compa??eras te den pistas sobre la din??mica de
feedback, podr??s aprovecharlo como una pr??ctica y pasar los nervios con la profesora en lugar de en tu
primera entrevista de trabajo.
Al final tendr??s un feedback sobre aspectos a destacar y a mejorar en tu ejercicio, y sabr??s qu?? objetivos
de aprendizaje has superado de los listados a continuaci??n.
Criterios de evaluaci??n
Vamos a listar los criterios de evaluaci??n de este ejercicio. Si no superas al menos el 80% de estos criterios
o no has superado alg??n criterio clave (marcados con *) te pediremos que realices una re-evaluaci??n con el
fin de que termines el curso mejor preparada y enfrentes tu primera experiencia profesional con m??s
seguridad. En caso contrario, est??s aprendiendo al ritmo que hemos pautado para poder afrontar los
conocimientos del siguiente m??dulo.
React b??sico
Crea componentes con sintaxis correcta*.
Crea una estructura adecuada de componentes*.
Usa las props para pasar datos a componentes hijos*.
Sabe pintar listados*.
Sabe usar m??todos funcionales de array (map, filter, etc.)*.
Usa el estado para gestionar informaci??n de la interfaz*.
El componente principal App.js maneja el estado de la aplicaci??n*.
Usa eventos en React para atender a interacciones del usuario*.
Hooks para las peticiones al servidor.
Escribe un c??digo s??lido, sin errores en la consola*.
Usa defaultProps en los componentes.
Usa propTypes para evitar errores de tipado.
Tiene soltura a la hora de realizar cambios en el ejercicio presencial.
React router
Crea rutas navegables dentro de una aplicaci??n.
enunciado.md8/26/2022
6 / 6
Issues
Haber resuelto las issues de la evaluaci??n intermedia*.
Otros criterios a tener en cuenta
Usar ingl??s para nombres de variables, funciones, clases, comentarios, mensajes de commit,
nombres de ficheros.
El repositorio de GitHub debe tener README.md.
>>>>>>> 6d84efb89a236fe4b7a653f6971e31672d35de5b

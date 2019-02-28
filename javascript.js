

// Ejercicio 1 objetos

// Crear un documento con el nombre obj_001.js
// Declarar una variable con el nombre de persona y asignar un objeto vacío
// Mostrar en consola el objeto persona

var persona = {
	nombre: "",
	edad: ""
}

// Ejercicio 2 objetos

// Crear un documento con el nombre obj_002.js
// Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
// El objeto tiene que tener 3 propiedades: nombre, apellido, edad
// Mostrar en consola el objeto sobreMi

var sobreMi = {
	nombre: "maru",
	apellido: "comerci",
	edad: 28
}

console.log(sobreMi);

// Ejercicio 3 objetos

// Crear un documento con el nombre obj_003.js
// Crear una variable llamada user, a la que le vamos a asignar un objeto.
// El objeto tiene que tener 3 propiedades: fullname, email, age
// Mostrar en consola el objeto user
// Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"

var user = {
	fullname: "mariana comerci",
	email: "marucomerci@gmail.com",
	age: 28
}

console.log("hola, mi nombre es " + user.fullname + " y tengo " + user.age + " años");

// Ejercicio 4 objetos

// Crear un documento con el nombre obj_004.js
// Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
// Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song
// El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos)

var song = {
  title: 'Rock and Roll',
  bandName: 'Led Zeppelin',
  duration: 166000,
  album: 'Led Zeppelin IV'
}



var cancion = {
  title: 'Rock and Roll',
  bandName: 'Led Zeppelin',
  duration: 166000,
  album: 'Led Zeppelin IV'
}


console.log(cancion); 

// Ejercicio 5 objetos

// Crear un documento con el nombre obj_005.js
// Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados

// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890


var ada = {

	id: 1,
	nombre: "ada lovelace",
	dni: 12345678,
	mail: "ada@gmail.com"
}

var grace = {
	id: 2,
	nombre: "grace hopper",
	dni: 0987654321, 
	mail: "grace@hotmail.com"
}

var hedy = {
	id: 3,
	nombre: "hedy lamarr",
	dni: 6789054321, 
	mail: "hedy@gmail.com"
}

var radia = {
	id: 4,
	nombre: "radia perlman",
	dni: 1234509876, 
	mail: "radia@yahoo.com"
}

var sherly = {
	id: 5,
	nombre: "sherly sandberg",
	dni: 5432167890, 
	mail: "Sheryl@facebook.com"
}



console.log(ada, grace, hedy, radia, sherly);


// Ejercicio 6 objetos

// Nos pidieron mostrar en la consola los siguientes datos de cada persona del ejercicio anterior:

// 1. El nombre de Ada:
console.log(ada.nombre);

// 2. El ID de Grace
console.log(grace.id);

// 3. El email de Hedy
console.log(hedy.mail);

// 4. El ID y nombre de Radia
console.log(radia.id + radia.nombre);

// 5. El telefono de Sheryl
console.log(sherly.dni);



// Ejercicio 7 objetos

// Crear un documento con el nombre obj_007.js
// Tenemos la variable datos que tiene un objeto con los datos de una persona
// El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es 0192837465
// También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.

var datos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: '29',
  programa: true
}

// codea aca la solucion
datos.telefono = 0192837465;
datos.edad = parseFloat("29");

// finalmente, mostramos los datos
console.log(datos);


// Ejercicio 8 objetos

// Tenemos la variable datos con un objeto que guarda datos de personas
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajeFavorito, y asignale "Javascript"

var datos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: 29,
  programa: true
}

if (datos.programa === true) {
	datos.lenguajeFavorito = "Javascript";
	console.log(datos);
} 

// Ejercicio 9 objetos

// Crear un documento con el nombre obj_009.js
// Tenemos la variable datos con un objeto que guarda datos de una persona
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajesFavoritos, y asignale un array con dos lenguajes de programación
// Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"

var datos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: 29,
  programa: true
};

if (datos.programa === true) {
	datos.lenguajeFavorito = ["Javascript", " y php"]
	console.log(datos);
	console.log("Hola, mi nombre es " + datos['nombre'] + " y programo en " + datos.lenguajeFavorito[0]);


	
} 


// Ejercicio 10

// Tenemos la variable disco con un objeto que guarda datos de un album musical
// Queremos obtener el nombre y año de lanzamiento del disco y nombre de la banda,
// para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]"
// Completá el código para lograr el resultado esperado

var disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};



var nombreDisco = disco['nombre'];
console.log(nombreDisco);

var anioDisco = disco['anioLanzamiento'];
console.log(anioDisco);

var nombreBanda =  disco.banda.nombre; 
console.log(nombreBanda);

// Ejercicio 11 objetos

// Crear un documento con el nombre obj_011.js
// Tenemos la variable user, que es un objeto con datos de una persona en linkedin
// En el objeto hay una propiedad skills, que es un array con las distintas habilidades de la persona
// Necesitamos actualizar el perfil y agregar "Javascript" al array de de skills

var user = {
  id: 123456789,
  name: 'Ada Lovelace',
  url: 'https://www.linkedin.com/in/ada-lovelace',
  skills: ['HTML', 'CSS', 'SASS']
};

// user.skills = ['HTML', 'CSS', 'SASS', 'JAVASCRIPT']

if (skills = ['HTML', 'CSS', 'SASS'] ) {
	user.skills = ['HTML', 'CSS', 'SASS', 'JAVASCRIPT'];
}

// despues de la solucion
console.log(user);

// Ejercicio 12 objetos

// Crear un documento con el nombre obj_012.js
// Tenemos la variable user, que es un objeto con datos de una persona en linkedin
// En el objeto tenemos dos propiedades: firstName y lastName
// Por un cambio en los requerimientos del proyecto, necesitamos que el nombre sea un objeto con el siguiente formato:

var user = {
  id: 123456789,
  firstName: 'Ada',
  lastName: 'Lovelace',
  url: 'https://www.linkedin.com/in/ada-lovelace',
  skills: ['HTML', 'CSS', 'SASS', 'JS']
};

var newUser = { 
	first: 'Grace',
    last: 'Hopper'
  
};

first = user.firstName ;
last = user.lastName ;
// despues de la solucion
console.log(newUser);
console.log(user);


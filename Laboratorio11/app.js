//authors: Olimpia Garcia & Yuna Chung
//Matricula: A01708462 & A01709043

//framework de desarrollo web: incluye librerias y guias de como trabajar
//npm: instala paquetes, permite instalar dependencias cpn un solo comando
//npm init= cuestionario lab11 crear pacckage.json
//nodemon = npm install --save-dev nodemon
//no enviar node con git ignore
//npm install express = instalar framework express

console.log("Hola desde nodemon")
console.log("Hola desde npm")

//--------------------------------------------------------

// Estructura básica de una aplicación con express:

const express = require('express');
const app = express();   //esto crea el servidor

//-----------------------------------------------------------
//geters y setters
//configura ejs

app.set("view engine", "ejs");
app.set("views", "views");

//todo lo que pongammos con % se eecuta en el servidor
//response render compila el archivo ejs

//---------------------------------------------------------
//carpeta estatica

const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));


//----------------------------------------------------------
//body parser

const bodyParser = require('body-parser');
const { request, response } = require('express');

app.use(bodyParser.urlencoded({extended: false}));

/*
app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});
*/

//--------------------------------------------------------


/*middleware paso a paso

app.use((request,response,next) => {})

*/

/*
//Middleware: capas enmedio del software
app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next();  //solo puede haber un next con send
});


app.use((request, response, next) => {
    console.log('Otro middleware!');
    //Manda la respuesta
    response.send('¡Hola mundo!'); 
  
});

//esto escucha al servidor
app.listen(3000);

*/

/*
//------------------------------------------------------------------
//Para agregar rutas: 

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});
///------------------------------------------------------------------

*/

app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next();  //solo puede haber un next con send
});

app.use('/home', (request, response, next) => {
    response.send('bienvenido a casa'); 
});

const hotcakesRutas = require("./routes/hotcakes.routes.js");

app.use("/lab11", hotcakesRutas);


app.use((request, response, next) => {
    console.log('Otro middleware!');

    response.status(404)

    //Manda la respuesta
    response.send('¡404 no existe! :('); 
  
});

//esto escucha al servidor
app.listen(3000);
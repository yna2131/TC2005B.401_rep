// en este archivo esta la logica de la pagina 

const { request, response } = require('express');
const express = require('express');

const router = express.Router();

//app.use("/pedir", (request, response, next) =>  esto funciona para post y get
router.get("/pedir", (request, response, next) => 
{

    console.log (request.body);
    console.log (request.body.cafe);

    let html = `

        <!DOCTYPE html>

            <html>

                <head>

                <meta charset="utf-8">

            </head>

            <body>

                <h1>Hot cakes</h1>

                    <form action="/lab11/pedir" method="POST">

                    <fieldset>

                        <legend>Escoge tu desayuno:</legend>

                            <div>

                                <input type="checkbox" id="malteada" name="malteada">

                                <label for="malteada">Malteada</label>

                            </div>

                            <div>
                                <input type="checkbox" id="cafe" name="cafe">

                                <label for="cafe">Café</label>

                            </div>

                            <div>

                                <input type="number" id="hot_cakes" name="hot_cakes" value="0" min="0">

                                <label for="hot_cakes"> hot cakes</label>

                            </div>

                        </fieldset>

                        <br>

                        <input type="submit" value="pedir">

                    </form>

                </body>

            </html>

        `;
        response.send(html);

});

router.post("/pedir", (request, response, next) => 
{
    console.log(request.body);

    
    const texto = request.body.hot_cakes;

    response.send("Pediste " + texto + "  hot cakes")

    const respuesta = "pediste " + texto +" hot cakes "

    ///aqui debe ir lo del txt
    const filesystem = require("fs");
    filesystem.writeFileSync('pediste.txt',respuesta) 
    const preguntalab = "es un archivo generado automáticamente cuando se instalan paquetes o dependencias en el proyecto. Su finalidad es mantener un historial de los paquetes instalados y optimizar la forma en que se generan las dependencias del proyecto y los contenidos de la carpeta node_modules/.Este archivo debe conservarse e incluso versionarse para añadirlo al repositorio de control de versiones, puesto que es algo favorable para el trabajo con npm. Es por ello que no debe añadirse al fichero .gitignore."  + "El archivo package.json - Javascript en español. (s. f.). Lenguaje JS. https://lenguajejs.com/npm/administracion/package-json/"  
    
    filesystem.writeFileSync('Preguntas.txt', preguntalab)  

})




module.exports = router; //exportar la ruta
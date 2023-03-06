// en este archivo esta la logica de la pagina 

//const { request, response } = require('express');
const express = require('express');
const path = require("path");
const router = express.Router();


// const hot_cakes = [
//     "belgas",
//     "avena",
//     "japoneses",
//     "chocolates",
//     "salados",
//     "americanos",
//     "platanos",
//     "minis"
// ];


const hot_cakes = [
    {
        nombre: "belgas",
        imagen: "https://t1.uc.ltmcdn.com/es/posts/8/9/7/como_hacer_waffles_con_harina_de_hot_cakes_50798_paso_5_600.jpg",
        descripcion: "Hot cakes ricos",
        handle: "@belgas",
        ingredientes: "harina, huevo, mantequilla de normandía",
        precio: "150",
    },
    {
        nombre: "avena",
        imagen: "https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/99c36783d5de1a8cc8ab4a1494bcf111.jpg",
        descripcion: "Hot cakes ricos de avena",
        handle: "@avena",
        ingredientes: "harina de avena, huevo, mantequilla, plátano",
        precio: "150",
    },
    {
        nombre: "japoneses",
        imagen: "https://www.keyingredient.com/media/09/82/b08496cd78ddbd4bdda4f441160ddc6d4b15.jpg/rh/japanese-hot-cake.jpg",
        descripcion: "Hot cakes ricos de japón",
        handle: "@japoneses",
        ingredientes: "harina, claras de huevo, mantequilla, polvo para hornear, azúcar",
        precio: "150",
    },
    {
        nombre: "chocolate",
        imagen: "https://themerrymakersisters.com/wp-content/uploads/2017/01/BREKKY-FUNDAY-HOTCAKES-LANDSCAPE.jpg",
        descripcion: "Hot cakes ricos de chocolate",
        handle: "@chocolate",
        ingredientes: "harina, huevo, mantequilla, cocoa",
        precio: "150",
    },
    {
        nombre: "salados",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos de avena",
        handle: "@salados",
        ingredientes: "harina, huevo, mantequilla con sal",
        precio: "150",
    },
    {
        nombre: "americanos",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos mantequillosos",
        handle: "@avena",
        ingredientes: "harina, huevo, mucha mantequilla, leche",
        precio: "150",
    },
    {
        nombre: "plátano",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos de plátano",
        handle: "@platano",
        ingredientes: "harina, huevo, mantequilla, plátano, canela, nueces",
        precio: "150",
    },
    {
        nombre: "minis",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos de plátano",
        handle: "@minis",
        ingredientes: "harina, huevo, mantequilla, leche, dispensador",
        precio: "80",
    },
];

router.get('/lista', (request, response, next) => {
    response.render('lista', {hot_cakes: hot_cakes});
    console.log("sale") //aqui fala
});

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

                    <form action="/lab12/pedir" method="POST">

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
    
    //aqui debe ir lo del txt
    const filesystem = require("fs");
    filesystem.writeFileSync('pediste.txt',respuesta) 
    
    const preguntalab = "¿Qué otros templating engines existen para node? Pug, Underscore, mustache.js, Jade, Nunjucks , doT , Squirrelly, Handlebars.js" + "Ta, T. (2021, 20 agosto). Node.js templating engine: Top 10 best every developer must know. Blogs | AHT Tech | Digital Commerce Experience Company. https://blog.arrowhitech.com/node-js-templating-engine-top-10-best-every-developer-must-know/"  
    filesystem.writeFileSync('Preguntas.txt', preguntalab)

})

router.get('/pedido', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});


module.exports = router; //exportar la ruta
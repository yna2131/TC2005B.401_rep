console.log("hola desde node");

//el módulo filesystem sirve para acceder al sistema de archivos de la computadora
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');


const arreglo = [5000, 60, 61, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

//Imprimir de manera asíncrona los elementos del arreglo (se imprimen en orden por su valor)
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 

setTimeout(() => console.log("check mate!"), 15000);

// http es un módulo que permite crear servidores web y manejar las peticiones y respuestas
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);

    if(request.url === "/") {

        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Hot cakes</h1>");
        response.write('<a href="/pedir">Pide aquí tu desayuno</a>');
        response.write("</body></html>");
        response.end();

    } else if(request.url === "/pedir" && request.method === "GET") {

        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Hot cakes</h1>");
        response.write('<form action="/pedir" method="POST">');

        let form = `
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
        `;

        response.write(form);
        response.write("</form>");
        response.write("</body></html>");
        response.end();

    } else if(request.url === "/pedir" && request.method === "POST") {

        const datos = [];
        
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);

            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write("<html>");
            response.write('<head><meta charset="utf-8"></head><body>');
            response.write('<h1>Ingredientes</h1>');

            let respuesta = "<ul>";
            
            const malteada = datos_completos.split('=')[0];
            if (malteada === "malteada") {
                respuesta += "<li>helado</li>";
                respuesta += "<li>leche</li>";
            }

            try {
                if (datos_completos.split('&')[0].split('=')[0] === "cafe" || 
                    datos_completos.split('&')[1].split('=')[0] === "cafe") {
                        respuesta += "<li>café</li>";
                }
            } catch (error) {

            }

            const hot_cakes = datos_completos.split('hot_cakes=')[1];
            const numero_hot_cakes = Number(hot_cakes);

            if (numero_hot_cakes > 0) {
                respuesta += "<li>" + 50 * numero_hot_cakes + " gr. harina</li>";
                respuesta += "<li>" + numero_hot_cakes + " huevos</li>";
                respuesta += "<li>" + 100 * numero_hot_cakes + " ml. leche</li>";
                respuesta += "<li>" + 25 * numero_hot_cakes + " gr. mantequilla</li>";
            }
            respuesta += "</ul>";

            response.write(respuesta);

            return response.end();
        });
        
    } else {

        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Le sentimos, el menú que estás buscando no existe</h1>");
        response.write("</body></html>");
        response.end();

    }
    
});

server.listen(3000);















/*
const datos = [];

request.on('data', (dato) => {
    console.log(dato);
    datos.push(dato);
});

return request.on('end', () => {
    const datos_completos = Buffer.concat(datos).toString();
    console.log(datos_completos);
    const nuevo_dato = datos_completos.split('=')[1];
    return response.end();
});

response.statusCode = 404;
*/
const http = require("http");
const fs = require("fs");
const { resolveNaptr } = require("dns");

const server = http.createServer((request, response) => {
    if(request.url === "/"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Laboratorio 10</h1>");
        response.write('<a href="/lab03">Laboratorio 03</a>');
        response.write('</body></html>');
        response.end();
    }
    else if(request.url === "/lab03" && request.method === "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Laboratorio 10</h1>");
        
        response.write('<form action="/lab03" method="POST">');

        let form = `
                <ul>
                <li><a class="active">Inicio</a></li>
                <li><a href="#qa">Q&A</a></li>
                </ul>
            <section>
            <h2>About Me</h2>
            <p>
            Me llamo Yuna Chung, soy estudiante de la uninversidad Tecnológico de Monterrey, Campus Querétaro. <br>
            Voy en el 4to semestre, y este es el primer laboratorio de la unidad de formación TC2005B.401 - Construcción de Software
            y Toma de Decisiones. <br>
            Estoy apenas aprendiendo diferentes lenguajes de programación durante la carrera, entonces espero aprender 
            </p>
            </section>
                <h4>Repositorio Personal del curso: </h4>
                <button onclick="window.location.href='https://github.com/yna2131/TC2005B.401_rep.git';">CLICK ME!</button>

            <section>
            <ul>
                <li><a href="#index">Inicio</a></li>
                <li><a class="active">Q&A</a></li>
            </ul>
            </section>

            <section>

                <h2>Preguntas a Responder</h2>
                <li class="question">Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?</li><br>
                <p class="answer">El uso de !important en un CSS no es recomendable considerando algunos conflictos que puede traer, pero dependiendo de la situación 
                    que el desarrollador enfrente. !important anula todas otras declaraciones y hace que el código CSS sea más difícil de ser mantenido y depurado. 
                    Una vez que se declara !important, no hay manera de ignorar este comando, y la única solución que puede anular esto es utilizar otro !important, 
                    y es un ciclo infinito. </p>

                <li class="question">Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</li><br>
                <p class="answer">Se debe escoger con cuidado porque hay diferentes factores que pueden afectar la página. Puede que la imagen no se vea muy bien por 
                    la calidad o el tamaño o la imagen puede causar la dificultad de leer el contenido de la página.</p>

                <li class="question">Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</li><br>
                <p class="answer">La unidad pixeles (px) es una buena opción para controlar el tamaño de los elementos de manera más precisa dentro de la página, la 
                    unidad porcentaje (%) es una opción para establecer el tamaño de un elemento base a otra cantidad. Y por último, la unidad puntos (pt) es utilizada 
                    en tipografía y cada punto equivale a 1/72 pulgada. </p>

                <li class="question">¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</li><br>
                <p class="answer">Porque la versión minimizada reduce el tamaño del archivo CSS, lo cual también significa que su peso es menor y por ende, mejora el 
                    rendimiento del sitio.</p>
            </section>
            <section>
                <h2>Referencias</h2>
                <li>w3schools. (n.d.). <i>CSS The !important Rule</i>. Recuperado desde https://www.w3schools.com/css/css_important.asp</li>
                <li>mdn. (n.d.). <i>Valores y unidades CSS</i>. moz://a. Recuperado desde https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Values_and_units</li>
            </section>
        `;

        response.write(form);
        response.write("</form>");
        response.write('</body></html>');
        response.end();
    }
    else if(request.url === "/lab03" && request.method === "POST"){
        response.write("Lab03 compleeto");
        response.end();
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>ERROR, No se puede acceder a la página</h1>");
        response.write('</body></html>');
        response.end();
    }
});

server.listen(3000);



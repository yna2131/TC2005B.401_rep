//Authors: Yuna Chung & Olimpia García 
//Matricula: A01709043 & A01708462

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
        response.write('<a href="/lab04">Laboratorio 04</a>');
        response.write('<a href="/lab05">Laboratorio 05</a>');
        response.write('<a href="/text">Ingresar Texto para POST</a>');
        response.write('</body></html>');
        response.end();
    }
    else if(request.url === "/lab03" && request.method === "GET"){
        response.setHeader("Content-Type","text/html");
        response.write(lab03);
    }
    else if(request.url === "/lab04" && request.method === "GET"){
        response.setHeader("Content-Type","text/html");
        response.write(lab04);
    }
    else if(request.url === "/lab05" && request.method === "GET"){
        response.setHeader("Content-Type","text/html");
        response.write(lab05);
    }
    else if(request.url === "/text" && request.method === "GET"){
        response.setHeader("Content-Type","text/html");
        response.write(postmethod);
    }
    else if(request.url === "/text" && request.method != "GET"){
        response.setHeader("Content-Type","text/html");
        response.write(`<h1>Texto Registrado</h1>`);
        response.write('<meta charset="UTF-8" />');

        const fullText = [];

        request.on("data", (ttext) => fullText.push(ttext));

        request.on("end",() => {
            const parsedData = Buffer.concat(fullText).toString();
            const message = parsedData.split("=")[1];
            fs.writeFileSync("Laboratorio10/texto.txt", message);
            return response.end();
        });
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

    response.end();
});

server.listen(3000);


const lab03 = `
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="ministyle.css">
    <title>TC2005B. Lab03</title>
</head>
<body>
    <h1>Laboratorio 3: CSS</h1>
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
</body>
<br>
<br>
<footer>
    <p>Created with: <strong>Visual Studio Code</strong></p>
    <p>Yuna Chung A01709043</p>
</footer>
</html>
`;

const lab04 = `
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <title>TC2005. Lab04</title>
    </head>
    <body>
        <h1>Laboratorio 4: Fundamentos de JavaScript</h1>
        <ul>
            <li><a class="active">Inicio</a></li>
            <li><a>Q&A</a></li>
        </ul>
            <h2>Problemas</h2>
            <table id="incisos">
                <tr>
                    <th>Entrada / Función</th>
                    <th>Parámetros</th>
                    <th>Salida / Regresa</th>
                </tr>
                <tr>
                    <td>Un número pedido con un prompt</td>
                    <td>ND</td>
                    <td>Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza <i>document.write</i> para producir la salida</td>
                </tr>
                <tr>
                    <td>Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria</td>
                    <td>ND</td>
                    <td>La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta</td>
                </tr>
                <tr>
                    <td>Contador</td>
                    <td>Un arreglo de números</td>
                    <td>La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo</td>
                </tr>
                <tr>
                    <td>Promedios</td>
                    <td>Un arreglo de arreglos de números</td>
                    <td>Un arreglo con los promedios de cada uno de los renglones de la matriz</td>
                </tr>
                <tr>
                    <td>Inverso</td>
                    <td>Un número</td>
                    <td>El número con sus dígitos en orden inverso</td>
                </tr>
            </table>
        <section>
        <h2>01</h2>
            <button onclick="inputTable();">Click!</button>
            <div id = "table1"></div>
        <h2>02</h2>
            <button onclick="sumRandNum();">Click!</button>
            <p id = "result"></p>
        <h2>03</h2>
            <button onclick="contador();">Click!</button>
            <p id = "arreglo"></p>
        <h2>04</h2>
            <button onclick="promedios();">Click!</button>
            <p id = "promfinal"></p>
        <h2>05</h2>
            <button onclick="inverso();">Click!</button>
            <p id = "inverted"></p>
        <h2>06</h2>
            <button onclick="myProblem();">Click!</button>
            <p id = "sumsum"></p>
        </section>
        
        <section>
            <h2>Preguntas a Responder</h2>
                <li class="question">¿Qué diferencias y semejanzas hay entre Java y Javascript?</li><br>
                <p class="answer">JavaScript (JS) es un lenguaje de programación (lenguaje de scripting) y se utiliza para crear páginas web interactivas.
                     Puede insertar texto dinámico en el HTML. JavaScript también se conoce como lenguaje del navegador, y JavaScript (JS) no es similar 
                     o relacionado con Java. Ambos lenguajes tienen una sintaxis similar a la C y son ampliamente utilizados en aplicaciones web de lado 
                     del cliente y de lado del servidor. Sin embargo, tienen más diferencias que semejanzas. Java es un lenguaje fuertemente tipado y las 
                     variables deben declararse primero para ser utilizados en el programa. En Java, el tipo de variables es comprobado en el momento de 
                     la compilación. Por otro lado, JavaScript es un lenguaje encriptado y tiene una sintaxis y reglas más relajadas. No solo esto, Java 
                     es un lenguaje de programación orientado a objetos, mientras que JavaScript es un lenguaje de scripting basado en objetos. También 
                     existen muchas más diferencias que estos mencionados.</p>
                <li class="question">¿Qué métodos tiene el objeto Date?</li><br>
                <p class="answer">getFullYear() <br> getMonth() <br> getDate() <br> getDay() <br> getHours() <br> getMinutes() <br> getSeconds() 
                    <br> getMilliseconds() <br> getTime()</p>
                <li class="question">¿Qué métodos tienen los arreglos?</li><br>
                <p class="answer">toString() <br> join() <br> pop() <br> push() <br> shift() <br> unshift()</p>
                <li class="question">¿Cómo se declara una variable con alcance local dentro de una función?</li><br>
                <p class="answer">Se crea al comienzo de la función y se destruye al salir de la función al que pertenece.</p>
                <li class="question">¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</li><br>
                <p class="answer">El acceso se refiere exclusivamente a la variable dentro de la función más interna. Es decir, el nombre de la variable 
                    global es válido a menos que una función interna lo vuela a definir.</p>
        </section>
        <section>
            <h2>Referencias</h2>
            <li>vivekkothari. (n.d.). <i>Difference between Java and JavaScript</i>. GeeksforGeeks. Recuperado de https://www.geeksforgeeks.org/difference-between-java-and-javascript/</li>
            <li>w3schools. (n.d.). <i>JavaScript Get Date Methods</i>. Recuperado de https://www.w3schools.com/js/js_date_methods.asp</li>
            <li>w3schools. (n.d.). <i>JavaScript Array Reference</i>. Recuperado de https://www.w3schools.com/jsref/jsref_obj_array.asp</li>
        </section>        
        <script src="js.js"></script>
    </body>
    <br>
    <footer>
        <p>Created with: <strong>Visual Studio Code</strong> </p>
        <p>Yuna Chung A01709043</p>
    </footer>
</html>
`;

const lab05 = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TC2005B. Lab05</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
    <h1 class="title">Laboratorio 5: Frameworks de estilo</h1>
        <div class="tabs">
            <ul>
                <li class="is-active"><a>Inicio</a></li>
                <li><a>Q&A</a></li>
            </ul>
        </div>    
    <section class="section">
    <h2 class="subtitle">About Me</h2>
    <p>
    Me llamo Yuna Chung, soy estudiante de la uninversidad Tecnológico de Monterrey, Campus Querétaro. <br>
    Voy en el 4to semestre, y este es el primer laboratorio de la unidad de formación TC2005B.401 - Construcción de Software
     y Toma de Decisiones. <br>
    Estoy apenas aprendiendo diferentes lenguajes de programación durante la carrera, entonces espero aprender 
    </p>
    </section>
    <section class="section">   
    <h2 class="subtitle">Repositorio Personal del curso: </h2>
        <button class="button is-danger is-light" onclick="window.location.href='https://github.com/yna2131/TC2005B.401_rep.git';">CLICK ME!</button>
    </section>
    <section class="section">
        <div class="tabs">
            <ul>
                <li><a>Inicio</a></li>
                <li class="is-active"><a>Q&A</a></li>
            </ul>
        </div> 
    </section>
    <section class="section">
        <article class="message is-danger">
            <div class="message-header">
                <p>Describe Material Design</p>
            </div>
            <div class="message-body">
                Material Design es una guía compelta para el diseño visual, interactivo y de movimiento en plataforma y dispositivos. Es un estilo de diseño 
                desarrollado por Google, y actualmente, se está implementando en las aplicaciones propias de Google como Gmail o Drive.
            </div>
        </article>
    </section>
    <section>
        <h2>Referencias</h2>
        <ul>
            <li>Material Design 3. (n.d.). <i>Get Started</i>. Recuperado de https://m3.material.io/get-started</li>
        </ul>
    </section>
</body>
<footer class="footer">
    <p>Created with: <strong>Visual Studio Code</strong></p>
    <p>Yuna Chung A01709043</p>
</footer>
</html>
`

const postmethod = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Input Text</title>
        <link
      rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"/>
    </head>
<body>
<div class='content'>
<form action='/text' method='POST'>
<label>Ingresa un texto</label>
<textarea name='texto'></textarea>
<button>Click!</button>
</form>
</div>
</body>
</html>
`;
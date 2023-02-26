// Una función que reciba un arreglo de números y devuelva su promedio.
const promarrg = () => { 
    let arrg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
/**
    const readline = require("readline");
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });

    let input;
    
    rl.on("line", function(line){
        input = line;
        rl.close();
    }).on("close", function(){
        let filled_Array = new Array(input).fill().map(() => Math.floor(Math.random() * 10));
        const result = filled_Array.reduce(function add(sum, currValue){
            return sum + currValue;
        }, 0);
        console.log(result/filled_Array.length);
        process.exit();
    })
*/
    for (let num of arrg){
        sum += num;
    }
    fresult = Math.floor(sum / arrg.length);
    console.log(fresult);
};

promarrg();

// Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
const recibstring = () => {
    const filesystem = require('fs');
    filesystem.writeFileSync("texto.txt", "Laboratorio 08");
};

recibstring();

// Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node. 
const multable = () => {
    const readline = require("readline");
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });

    let input;

    rl.on("line", function(line){
        input = line;
        rl.close();
    }).on("close", function(){
        for(let i=1; i<10; i++){
            console.log(`${input} * ${i} = ${input*i}`);
        }
        process.exit();
    })
};

multable();


const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log(request.url);
    fs.readFile('./index.html', function(err, data){
        response.setHeader("Content-Type", "text/html");
        response.write(data);
        response.end();
    });
});

server.listen(3000);
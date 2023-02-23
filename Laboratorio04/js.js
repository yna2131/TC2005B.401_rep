//Inciso 01
const inputTable = () => {
    var row = window.prompt("Submit a number: ");
    var column = 1;

    var table1 = document.getElementById("table1");
    
    var count = 1;

    str = "<table>"
    for(var i = 0; i < row; i++){
        str += "<tr>";
        for(var j = 0; j < column; j++){
            str += "<td>" + count + "</td>";
            str += "<td>" + Math.pow(count, 2) + "</td>";
            str += "<td>" + Math.pow(count, 3) + "</td>";
            count++;
        }
        str += "</tr>";
    }
    str += "</table>";
    table1.innerHTML = str;
};

//Inciso 02
const sumRandNum = () => {
    finalresult = document.getElementById("result");

    rand1 = Math.floor(Math.random() * 50);
    rand2 = Math.floor(Math.random() * 50);

    timestart = window.performance.now();
        
    const resres = window.prompt("La suma entre: " + rand1 + " + " + rand2 + " es:");

    tiemends = window.performance.now();

    record = (tiemends - timestart) / 1000;
        
    if(resres == rand1 + rand2){
        finalresult.innerHTML = "Muy bien! Te tardaste " + record + "segundos!";
    }
    else{
        finalresult.innerHTML = "Incorrecto! Intenta de nuevo :("
    }
};

//Inciso 03
const contador = () => {
    resultfinal = document.getElementById("arreglo");

    const tam = window.prompt("Ingresa el tamaño del arreglo: ");

    arreg = [];

    for(i = 0; i < tam; i++){
        contarr = Math.floor(Math.random() * (50 - (-50)) + (-50));
        arreg.push(contarr);
    }

    negnum = 0;
    zeros = 0;
    overzero = 0;

    for(i = 0; i < arreg.length; i++){
        if(arreg[i] < 0){
            negnum++;
        }
        else if(arreg[i] > 0){
            overzero++;
        }
        else{
            zeros++;
        }
    }
    resultfinal.innerHTML = "La cantidad de números negativos en el arreglo es: " + negnum + "<br>" + "La cantidad de 0's en el arreglo es: " + zeros + "<br>" + "La cantidad de valores mayores a 0 en el arreglo es: " + overzero;
};

//Inciso 04
const promedios = () => {
    const promfinal = document.getElementById("promfinal");

    const row2 = window.prompt("Ingresa el núemro de filas que va a tener tu matriz: ")
    const col2 = window.prompt("Ingresa el número de columnas que va a tener tu matriz: ")

    let matrix = [];

    for(i = 0; i < row2; i++){
        matrix[i] = [];
        for(j = 0; j < col2; j++){
            matrix[i][j] = window.prompt("Ingresa el contenido de la fila " + i + " y la columna " + j);
        }
    }

    str2 = "";

    for(i = 0; i < row2; i++){
        sumsum = 0;
        for(j = 0; j < col2; j++){
            sumsum += parseInt(matrix[i][j]);
        }
        avrg = sumsum / col2;
        str2 += `El promedio de la fila ${i} es: ${avrg} <br>`;
    }

    promfinal.innerHTML = str2;
};

//Inciso 05
const inverso = () => {
    const invresult = document.getElementById("inverted");

    const ordernum = window.prompt("Ingrea el número a invertir: ");

    num2str = ordernum.toString();
    strinverted = "";

    for(n in num2str){
        digit = num2str.charAt(n);
        strinverted = digit + strinverted;
    }

    const numinverted = parseInt(strinverted);

    invresult.innerHTML = "El número invertido es: " + numinverted;
};

//Inciso 06
const myProblem = () => {
    sum = prompt("Ingresa un número entero: ");
    counter = 0;

    unevensum = document.getElementById("sumsum");

    for(var i = 0; i <= sum; i++){
        if(i % 2 !== 0){
            unevensum.innerHTML = i + ", ";
            counter += i;
        }
    }
    unevensum.innerHTML = "Suma de los números impares: " + counter;
};

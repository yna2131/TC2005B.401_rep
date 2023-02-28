// npm init --> npm을 시작
// npm install --save-dev nodemon --> nodemon 설치
// npm install --save express --> express 설치
// npm start --> 파일 실행
const express = require('express');
const app = express();

// Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    
    //Le permite a la petición avanzar hacia el siguiente mmiddleware
    next();
});

app.use((request, response, next) => {
    console.log('Otro middleware!');

    //Manda la respuesta
    response.send('¡Hola mundo!');
});

/* 이건 에러. send를 하고 난 후, 또 한번 next를 하기 때문에 오류가 날 수밖에 없다.
app.use((request, response, next) => {
    console.log('Otro middleware!');

    //Manda la respuesta
    response.send('¡Hola mundo!');
    next();
});

app.use((request, response, next) => {
    console.log('Otro middleware!');

    //Manda la respuesta
    response.send('¡Hola de nuevo!');
});
*/

app.listen(3000);
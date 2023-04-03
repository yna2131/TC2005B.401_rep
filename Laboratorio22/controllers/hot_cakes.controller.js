const HotCake = require('../models/hot_cakes.model');

exports.get_buscar = (request, response, next) => {

    HotCake.find(request.params.valor_busqueda).then(([rows, fieldData]) => {
        response.status(200).json({hot_cakes: rows});
    })
    .catch((error) => {
        console.log(error);
        response.status(500).json({message: "Internal Server Error"});
    });
}

exports.get_lista = (request, response, next) => {    

    const cookies = request.get('Cookie') || '';

    let consultas = cookies.split('=')[1] || 0;

    consultas++;

    //Crear una cookie
    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    const id = request.params.id || 0;

    HotCake.fetch(id)
    .then(([rows, fieldData]) => {
        console.log(rows);
        //console.log(fieldData);

        response.render('lista', { 
            hot_cakes: rows,
            ultimo_hot_cake: request.session.ultimo_hot_cake || '',
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });
    })
    .catch(error => {
        console.log(error);
    });

};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
        csrfToken: request.csrfToken(), 
    });
};

exports.post_nuevo = (request, response, next) => {

    console.log(request.file);

    const hot_cake = new HotCake({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
        handle: request.body.handle,
        ingredientes: request.body.ingredientes,
        precio: request.body.precio,
        imagen: request.file.filename,
    });

    hot_cake.save()
    .then(([rows, fieldData]) => {
        request.session.ultimo_hot_cake = hot_cake.nombre;

        response.status(300).redirect('/hot_cakes/lista');
    })
    .catch(error => console.log(error));

};

exports.get_pedir = (request, response, next) => {

    let html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Hot cakes</h1>
                <form action="/hot_cakes/pedir" method="POST">
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
};

exports.post_pedir = (request, response, next) => {
    console.log(request.body);

    response.send("Pediste " + request.body.hot_cakes + " hot cakes");
}

exports.get_pedido = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}
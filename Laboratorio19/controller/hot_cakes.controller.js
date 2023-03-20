const { request } = require("express");
const HotCakes = require("../models/hot_cakes.model");


exports.get_lista = (request, response, next) => 
{
    //anañade coockies
    let cookies= request.get("Cookie") || "" ;
    
    let consultas = cookies.split("=") [1] || [0];

    consultas++;

    //crea una coockie
    response.setHeader('Set-Cookie', 'consultas=' + consultas + "; HttpOnly");

    //
    const id = request.params.id || 0;
        HotCakes.fetch(id)
        .then(([rows, fieldData]) => { //si se cumple la promesa, hace esto
            console.log(rows);
            //console.log(fieldData)

            response.render("lista",
            {
                hot_cakes: rows,
                ultimo_hot_cake: request.session.ultimo_hot_cake || '',
                isLoggedIn: request.session.isLoggedIn || false,
                nombre: request.session.nombre || '',
                privilegios: request.session.privilegios || [],

            });

        })
        .catch(error => {   //si no se cumple la promesa, hace esto
            console.log(error);
        });

    
    
}

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
        csrfToken: request.csrfToken(), 
    });
};

exports.post_nuevo = (request, response, next) => {

    const hot_cake = new HotCakes({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
        handle: request.body.handle,
        ingredientes: request.body.ingredientes,
        precio: request.body.precio,
    });

    hot_cake.save()
    .then(([rows, fieldData]) => {
        request.session.ultimo_hot_cake = hot_cake.nombre;

        response.status(300).redirect('/lab18/lista');
    })
    .catch(error => console.log(error));

};
exports.get_pedir = (request, response, next) => 
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

                    <form action="/lab18/pedir" method="POST">

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

exports.post_pedir = ((request, response, next) => 
{
    console.log(request.body);

    const texto = request.body.hot_cakes;

    response.send("Pediste " + texto + "  hot cakes")

    const respuesta = "pediste " + texto +" hot cakes "

})

exports.get_pedido = ((request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

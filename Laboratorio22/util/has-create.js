module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('crear_hotcakes') >= 0)) {
        return response.redirect('/hot_cakes/lista');
    }
    next();
}
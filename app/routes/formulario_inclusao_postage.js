module.exports = function(app) {
    app.get('/newpostage', function(req, res){
        app.app.controllers.posts.formulario_inclusao_postage(app, req, res);
    });
}
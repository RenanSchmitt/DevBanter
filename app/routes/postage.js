module.exports = function(app) {
    app.get('/postage', function(req, res){    
        var connection = app.config.dbConnection();
        var postsModel = app.app.models.postsModel;

        postsModel.getPostage(connection,function(error, result){
            res.render("posts/postage", {postage: result})
        });
    });
}
module.exports.formulario_inclusao_postage = function (app, req, res){
    res.render("newpostage/form_add_postage");
}

module.exports.savepost =  function (app, req, res){
    var newpost = req.body;
    console.log(newpost.title)
    var connection = app.config.dbConnection();
    var postsModel = new app.app.models.PostsDAO(connection);
    postsModel.savePostage(newpost ,function(error, result){
        res.redirect("/posts")
    });
}

module.exports.posts =  function (app, req, res){
    var connection = app.config.dbConnection();
    var postsModel = new app.app.models.PostsDAO(connection);

    postsModel.getPosts(function(error, result){
        res.render("posts/posts", {posts: result});
    });
}

module.exports.postage =  function (app, req, res){
    var connection = app.config.dbConnection();
    var postsModel = new app.app.models.PostsDAO(connection);
    let idProd = req.url.slice(9, 30);    
    postsModel.getPostage(idProd, function(error, result){
        res.render("posts/postage", {postage: result})
    });
}

module.exports = function(app) {
    app.get('/postage', function(req, res){    
        var connection = app.config.dbConnection();
        var postsModel = new app.app.models.postsModel;

        postsModel.getPostage(connection,function(error, result){
            res.render("posts/postage", {postage: result})
        });
    });

    app.post('/savepost', function(req, res){    
      var newpost = req.body;
      console.log(newpost.title)
      var connection = app.config.dbConnection();
      var postsModel = new app.app.models.postsModel;

      postsModel.savePostage(newpost, connection,function(error, result){
        res.redirect("/posts")
    });

    });
 
}
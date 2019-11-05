module.exports = function(app) {
    app.get('/posts', function(req, res){    
        var connection = app.config.dbConnection();
        var postsModel = app.app.models.postsModel;

        postsModel.getPosts(connection, function(err, result){

            res.render("posts/posts", {posts: result});
        });
  });
}
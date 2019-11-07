module.exports = function(app) {
    app.get('/posts', function(req, res){    
        var connection = app.config.dbConnection();
        var postsModel = new app.app.models.PostsDAO(connection);

        postsModel.getPosts(function(error, result){
            res.render("posts/posts", {posts: result});
        });
  });
};
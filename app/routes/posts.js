module.exports = function(app) {
    app.get('/posts', function(req, res){    
     var connection = app.config.dbConnection();

        connection.query(`SELECT * FROM posts`, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            res.render("posts/posts", {posts: result})
        })
    })
}
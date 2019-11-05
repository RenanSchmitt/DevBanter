module.exports = function(app) {
    app.get('/postage', function(req, res){    
     var connection = app.config.dbConnection();

        connection.query(`SELECT * FROM posts where id = 3`, (err, result) => {
            if (err) {
               console.log(err);
                return;
            }
            res.render("posts/postage", {postage: result})
        })
    })
}
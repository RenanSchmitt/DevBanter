const con = require('../../config/db')

module.exports = function(app) {
    let connection = con();
    app.get('/posts', function(req, res){
        connection.query(`SELECT * FROM posts`, (err, result) => {

            if (err) {
                reject(err);
                return;
            }
            res.render("posts/posts", {posts: result})
        })
    })
}
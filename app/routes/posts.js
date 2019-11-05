module.exports = function(app) {
    
    const con = require('../../config/db')
    
    app.get('/posts', function(req, res){
        con.query(`SELECT * FROM posts`, (err, result) => {

            if (err) {
                reject(err);
                return;
            }
            res.render("posts/posts", {posts: result})
        })
    })
}
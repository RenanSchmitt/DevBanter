module.exports = function(app) {
    
    const con = require('../../config/db')
    
    app.get('/noticias', function(req, res){
        con.query(`SELECT * FROM noticias`, (err, result) => {

            if (err) {
                reject(err);
                return;
            }
            res.render("noticias/noticias", {noticias: result})
        })
    })
}
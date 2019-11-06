module.exports = function(app) {
    app.get('/newpostage', function(req, res){
        res.render("newpostage/form_add_postage");
    })
}
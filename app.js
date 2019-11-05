const app = require('./config/server')

app.get('/formulario', function(req, res){
    res.render("admin/form_add_noticia");
})

const  rotaPosts = require('./app/routes/posts')(app)
require('./app/routes/home')(app)
require('./app/routes/formulario_inclusao_noticias')(app)

app.get('/noticia', function(req, res){
    res.render("noticias/noticia");
})

app.listen(3000, function(){
    console.log("Server is online on port 3000")
})

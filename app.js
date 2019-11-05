const app = require('./config/server')
const con = require('./config/db')
app.get('/formulario', function(req, res){
    res.render("admin/form_add_noticia");
})

const  rotaNoticias = require('./app/routes/noticias')(app)
require('./app/routes/home')(app)
require('./app/routes/formulario_inclusao_noticias')(app)

con.query(`SELECT * FROM noticias`, (err, noticias) => {

    if (err) {
        reject(err);
        return;
    }
    console.log(noticias)
   
})

app.get('/noticia', function(req, res){
    res.render("noticias/noticia");
})

app.listen(3000, function(){
    console.log("Server is online on port 3000")
})

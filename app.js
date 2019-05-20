var express = require('express');
var app = express();

app.set('view engine', 'ejs')

app.get('/pauper', function(req, res){
    res.render("formato/pauper");
})
app.get('/', function(req, res){
    res.send("<html><body> Portal de noticias </body></html>");
})


app.listen(3000, function(){
    console.log("Server is online on port 3000")
})

var express = require('express')
var http = require('http')
var app = express()

var Agencia = require("./ClasesNegocio/Agencia");
var clienteBuilder = require("./Fabrica/ClienteBuilder");


app.get('/', (req, res) => {
    res.send("holi ");

    let a = new Agencia("one-chol","595959595",2020202002);

    

})


http.createServer(app).listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});
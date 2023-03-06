require('dotenv').config({path:'.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const hbs = require("hbs");

const routes = require('./routes')

const port = process.env.PORT || 3000;
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use('/static', express.static(__dirname + '/../views/static'));

server.use('/', routes);
server.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/../views/partials");


server.listen(port, () => {
    console.log('Servidor rodando em http://localhost:3000');
})
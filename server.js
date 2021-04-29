const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);//protocolo http
const io = require('socket.io')(server);//protocolo do websocket

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));//caminho do front
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html')
});


//toda vez que algum cliente conecta ao servidor, exibe um ID do cliente
io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);

    //recebendo o evento "sendPosition" do front
    socket.on('sendPosition', data =>{
        //fazer a tratativa no backend aqui
        console.log(data);
    });
});

server.listen(3000);//ouvir a porta 3000

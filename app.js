require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Ricardo Rincon',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Ricardo Rincon',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Ricardo Rincon',
        titulo: 'Curso de Node'
    });
})
// servir contenido estativo
app.use( express.static('public'));

// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola mundo')
// })

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// })

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// })

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// })

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})
app.listen(port, () => {
    console.log(`Listening at port: ${ port }`);
})


/*
    express
    hbs
    dotenv
*/
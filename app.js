const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 1910;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
 
app.get('/', (request, response) => {
    response.render( 'test.hbs', {
        note: 'Home Page',
        title: 'Home Page',
        year: new Date().getFullYear()
    })
});

app.get('/second', (request, response) => {
    response.render( 'test.hbs', {
        note: 'Second Page',
        title: 'Second Page',
        year: new Date().getFullYear()
    })
});

app.get('/projects', (request, response) =>{
    response.render('test.hbs', {
        note: 'Projects Page',
        title: 'Projects Page',
        year: new Date().getFullYear()
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
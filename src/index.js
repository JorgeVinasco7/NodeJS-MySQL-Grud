const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//inicializacion
const app=express();

//settings aqui colocamos las configuraciones
app.set('port',process.env.PORT||4000);
app.set('views',path.join(__dirname,'views'))
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    patialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs')

//Middleware
app.use(morgan('dev'));

//variables globales

//Routes
app.use(require('./routes'));

//public 

//inicializar el servidor
app.listen(app.get('port'),()=> {
    console.log('Server on port',app.get('port'));
});


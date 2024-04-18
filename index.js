const express = require('express')
const app = express()
const path = require('path');
const mongoose = require("mongoose");
const customerRoute=require('./routes/customer.route')
const hbs = require('express-handlebars');
const Customer = require('./models/customer.models')
const { getCustomer,
    createCustomer,
    findCustomer,
    homeRoute
} = require('./controllers/customer.controller');
const router = require('./routes/customer.route');


//middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.json());

//hbs engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
// app.engine('hbs',({extname:'hbs',defauleLayout:'layout',layoutDir:__dirname+'/views/layout',partialsDir:__dirname+'/views/partials/'}))// Use hbs.engine
app.set('view engine', 'hbs'); //Engine HBS
app.set('views', path.join(__dirname, 'views/layouts/'));
app.engine('hbs', hbs.engine({
  extname: 'hbs',
  defaultLayout: 'index',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));



// ROUTES
app.use('/', homeRoute);

app.use('/customer',customerRoute);

app.post('/customer', createCustomer);

app.get('/customer/:tableNumber', getCustomer);



//db connection
mongoose.connect("mongodb+srv://admin:parayulla@cluster0.ymgspgk.mongodb.net/fooddb?retryWrites=true&w=majority")
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("server started");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });

const express = require('express')
const app = express()
const path = require('path');
const mongoose = require("mongoose");
const customerRoute=require('./routes/customer.route')
const Customer = require('./models/customer.models')
const { getCustomer,
    createCustomer,
    findCustomer
} = require('./controllers/customer.controller')


//middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',extname: 'hbs' }));

// routes
app.get('/',(req,res)=>{
    res.send('The server is up and running');
})

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

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
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Hello World!')
});

<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "../frontend/")));

app.get('/customer',(req, res)=>{
    res.sendFile(path.join(__dirname+'/frontend/customer.html'));
})
=======
app.use('/customer',customerRoute);

app.post('/customer', createCustomer);
>>>>>>> refs/remotes/origin/main

app.get('/customer/:tableNumber', getCustomer)

<<<<<<< HEAD
app.get('/customer/:tableNumber',async (req,res)=>{
    try{
        const {tableNumber} = req.params;
        const customer = await Customer.findOne({ table: tableNumber });
        console.log('kutti mama kitii')
        if(!customer){
            return res.status(404).json({ message: "Customer not found" });
        }
        res.status(200).json(customer);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
})
=======
>>>>>>> refs/remotes/origin/main


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

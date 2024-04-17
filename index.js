const express = require('express')
const app = express()
const path = require('path');
const mongoose = require("mongoose");
const Customer = require('./models/customer.models')

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/customer',(req, res)=>{
    res.sendFile(path.join(__dirname+'/frontend/customer.html'));
<<<<<<< HEAD
});

app.post('/customer/custom',(req,res)=>{
    res.send('ninte achan thane');
    const name = req.body.fname;
    console.log(`Submitted Name: ${name}`);
});
=======
})
>>>>>>> refs/remotes/origin/main

app.post('/customer', async(req,res)=>{
    try {
        const customer = await Customer.create(req.body);
        res.status(200).json(customer);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})

<<<<<<< HEAD
app.listen(3000, () => {
  console.log(`Example app listening`)
});
=======
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
>>>>>>> refs/remotes/origin/main

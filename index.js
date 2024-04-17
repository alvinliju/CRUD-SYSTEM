const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/customer',(req,res)=>{
    res.sendFile(path.join(__dirname+'/frontend/customer.html'));
});

app.post('/customer/custom',(req,res)=>{
    res.send('ninte achan thane');
    const name = req.body.fname;
    console.log(`Submitted Name: ${name}`);
})

app.get('/waiter',(req,res)=>{
    res.send('you are a waiter')
});

app.listen(3000, () => {
  console.log(`Example app listening`)
})
const Customer=require('../models/customer.models')
const path = require('path');

const homeRoute = (req,res)=>{
    let orderss=[
        {
        name:"biriyani",
        quantity:"2",
        price:"199"
        },
        {
        name:"biriyani",
        quantity:"2",
        price:"199"
        },
        {
        name:"biriyani",
        quantity:"2",
        price:"199"
        },
        {
        name:"biriyani",
        quantity:"2",
        price:"199"
        }
    ]
    res.render('index.hbs', { orderss});
}

const getCustomer = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'customer.html'));
};

const createCustomer =  async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const findCustomer = async (req, res) => {
    try {
        const { tableNumber } = req.params;
        const customer = await Customer.findOne({table:tableNumber});
        console.log("customer found");
        if (!customer) {
          return res.status(404).json({ message: "Customer not found" });
        }
        res.status(200).json(customer);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = {
    getCustomer,
    createCustomer,
    findCustomer,
    homeRoute
}
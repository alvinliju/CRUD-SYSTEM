const express = require('express');
const router = express.Router();
const { getCustomer, createCustomer, findCustomer, homeRoute } = require('../controllers/customer.controller');

router.get('/', homeRoute);

router.get('/', getCustomer);
router.post('/', createCustomer);
router.get('/:tableNumber', findCustomer);

module.exports = router;
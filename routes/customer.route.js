const express = require('express');
const router = express.Router();
const { getCustomer, createCustomer, findCustomer } = require('../controllers/customer.controller');

router.get('/', getCustomer);
router.post('/', createCustomer);
router.get('/:tableNumber', findCustomer);

module.exports = router;
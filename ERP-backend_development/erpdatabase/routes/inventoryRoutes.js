const express = require('express')

const router = express.Router()
const inventoryController = require('../controller/inventoryController')


router.get('/', inventoryController.getAllInventory)

router.post('/add', inventoryController.addInventory)

//router.get('/:id', inventoryController.getInventory)

module.exports = router;
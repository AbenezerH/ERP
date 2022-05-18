const express = require('express')

const router = express.Router()
const inventoryController = require('../controller/inventoryController')


router.get('/', inventoryController.dbInventory.getAllInventory)

router.post('/add', inventoryController.dbInventory.addInventory)

router.get('/:id', inventoryController.dbInventory.getInventory)

router.delete('/delete/:id', inventoryController.dbInventory.deleteItem)

module.exports = router;
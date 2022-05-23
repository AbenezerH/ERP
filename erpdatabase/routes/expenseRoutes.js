const express = require('express')
const router = express.Router()

const expenseController = require('../controller/expenseController')

router.get('/', expenseController.dbexpense.getAllExpense)

router.get('/:id', expenseController.dbexpense.getExpense)

router.post('/add', expenseController.dbexpense.addExpense)

router.put('/update/:id', expenseController.dbexpense.updateItem)

router.delete('/delete/:id', expenseController.dbexpense.deleteItem)

module.exports = router;
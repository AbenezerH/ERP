const express = require('express')
const router = express.Router()

const departmentController = require('../controller/departmentController')

router.get('/', departmentController.dbDepartment.getAllDepartment)

router.get('/:dept_id', departmentController.dbDepartment.getDepartment)

router.post('/add', departmentController.dbDepartment.addDepartment)

router.put('/update/:dept_id', departmentController.dbDepartment.updateItem)

router.delete('/delete/:dept_id', departmentController.dbDepartment.deleteItem)

module.exports = router;
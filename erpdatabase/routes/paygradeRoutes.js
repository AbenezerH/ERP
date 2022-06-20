const express = require('express')
const router = express.Router()

const gradeController = require('../controller/gradeController')

router.get('/', gradeController.dbGrade.getAllGrade)

router.get('/:grade_id', gradeController.dbGrade.getGrade)

router.post('/add', gradeController.dbGrade.addGrade)

router.put('/update/:grade_id', gradeController.dbGrade.updateItem)

router.delete('/delete/:grade_id', gradeController.dbGrade.deleteItem)

module.exports = router;
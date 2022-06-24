const express = require('express')
const router = express.Router()

const attendanceController = require('../controller/attendanceController')

router.get('/', attendanceController.dbAttendance.getAllAttendance)

router.get('/right', attendanceController.dbAttendance.getRightAttendance)

router.get('/join/:date', attendanceController.dbAttendance.getJoinAttendance)

router.get('/:date', attendanceController.dbAttendance.getAttendance)

router.post('/add', attendanceController.dbAttendance.addAttendance)

router.put('/update/:date', attendanceController.dbAttendance.updateItem)

router.delete('/delete/:date', attendanceController.dbAttendance.deleteItem)

module.exports = router;
const express = require('express')
const router = express.Router()

const attendanceController = require('../controller/attendanceController')

router.get('/', attendanceController.dbAttendance.getAllAttendance)

router.get('/right/:date', attendanceController.dbAttendance.getRightAttendance)

router.get('/right/:min/:max', attendanceController.dbAttendance.getRangeAttendance)

router.get('/join/:date', attendanceController.dbAttendance.getJoinAttendance)

router.get('/:date', attendanceController.dbAttendance.getAttendance)

router.post('/add', attendanceController.dbAttendance.addAttendance)

router.put('/update/:date', attendanceController.dbAttendance.updateItem)

router.put('/update/:date/:ep_email', attendanceController.dbAttendance.updateUsing)

router.delete('/delete/:date', attendanceController.dbAttendance.deleteItem)

module.exports = router;
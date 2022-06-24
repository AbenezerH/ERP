const User = require("../controller/employeController");
const express = require('express')
const router = express.Router()

router.get("/allEmployee", User.dbHR.getAllEmployees);
router.get("/getDepartments", User.dbHR.getDepartments);
router.get("/getDepartment/:dept_id", User.dbHR.getDepartmentItem);
router.get("/getDepartmentid", User.dbHR.getDepartmentid);
router.get("/getGrades", User.dbHR.getGrades);
router.get("/getGradeid", User.dbHR.getGradeid);
router.get("/getAdmin", User.dbHR.getAdmin);
router.get("/getExtras", User.dbHR.getExtras);
router.get("/getExtras:ep_email", User.dbHR.getExtraForemp);

router.post("/addEmployee", User.dbHR.addEmployee);
router.post("/addDepartment", User.dbHR.addDepartment);
router.post("/addGrade", User.dbHR.addGrade);
router.post("/addAdmin", User.dbHR.addAdmin);
router.post("/addOrganisation", User.dbHR.addOrganisation);
router.post("/addIsgiven", User.dbHR.addIsgiven);
router.post("/addExtras", User.dbHR.addExtras);
router.post("/addIsgiven", User.dbHR.addIsgiven);

router.put("/updateEmployeeData", User.dbHR.updateEmployeedata);

router.delete("/delete/:ep_email", User.dbHR.deleteEmployee);
router.delete("/delete/:dept_id", User.dbHR. deleteDepartment);
router.delete("/delete/:grade_id", User.dbHR.deleteGrade);
router.get("/:ep_email", User.dbHR.getEmployeeProfile);

module.exports = router;
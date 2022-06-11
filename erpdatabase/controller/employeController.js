const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    db.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbHR = {
  sqlConn: sqlConn,
addEmployee: addEmployee =  (req, res) => {
  let sql = `INSERT INTO employe( name,
  dob,
  address,
  city,
  state,
  pincode,
  ep_email,
  password,
  dept_id,
  grade_id,
  doj,
  paid_leave_taken,
  encashed_leave_this_month,
  encashed_leave_till_date)
    VALUES("${req.body.name}",
      "${req.body.dob}",
    "${req.body.address}",
    "${req.body.city}",
   "${req.body.state}",
    "${req.body.pincode}",
    "${req.body.ep_email}",
    "${req.body.password}",
    "${req.body.dept_id}",
    "${req.body.grade_id}",
    "${req.body.doj}",
      "${req.body.paid_leave_taken}",
      "${req.body.encashed_leave_this_month}",
      "${req.body.encashed_leave_till_date}"
  )`;
  db.query(sql, (sqlErr, results) => {
    if(sqlErr) throw sqlErr

    console.log(sql)
    res.send(results)
})
},
deleteEmployee: deleteEmployee =  (req, res) => {
  const sql = `DELETE FROM Employe WHERE ep_email = "${req.params.ep_email_email}"`;
 db.query(sql, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},
getAllEmployees: getAllEmployees = (req, res) => {
  const query = `SELECT * from employe`;
  db.query(query, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},

getEmployeeProfile: getEmployeeProfile = (req, res) => {
  // console.log(req.params);
  const sql = `SELECT * FROM employe where ep_email = "${req.params.ep_email}"`
 db.query(sql, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},

updateEmployeedata: updateEmployeedata = (req, res) => {
  
  const updateQuery = `UPDATE employe set 
  name= "${req.body.name}",
  dob= "${req.body.dob}",
  address= "${req.body.address}",
  city= "${req.body.city}",
  state= "${req.body.state}",
  pincode= "${req.body.pincode}",
  doj= "${req.body.doj}",
  org_name= "${req.body.org_name}",
  dept_id= "${req.body.dept_id}",
  grade_id= "${req.body.grade_id}",
  where ep_email= "${req.body.ep_email}"`;
  //console.log(values);
  db.query(updateQuery, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},

addDepartment: addDepartment = (req, res) => {
  const sql = `INSERT into department(
    dept_id,
    dept_name,
    branch)
    VALUES( "${req.body.dept_name}", "${req.body.org_name}", "${req.body.branch}")`;
    db.query(sql, (sqlErr, results) => {
      if(sqlErr) throw sqlErr

      console.log(sql)
      res.send(results)
  })
},
getDepartments: getDepartments =  (req, res) => {
  const sql = `SELECT * from department`;
  db.query(sql, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},
addGrade: addGrade = (req, res) => {
  const sql = `INSERT into gradepay(
    grade_id,
    grade_name,
    basic_pay,
    grade_pf,
    grade_bonus,
    grade_ta,
    grade_da
    )
    VALUES (
      "${req.body.grade_id}",
      "${req.body.grade_name}",
      "${req.body.basic_pay}",
      "${req.body.grade_pf}",
      "${req.body.grade_bonus}",
      "${req.body.grade_ta}",
      "${req.body.grade_da}")`;
     db.query(sql, (sqlErr, results) => {
      if(sqlErr) throw sqlErr

      console.log(sql)
      res.send(results)
            })
},
addAdmin: addAdmin = (req, res) => {
  const sql = `INSERT into admin(
    companyName,
    TIN_number,
     username, 
     ad_email, 
     password
    )
    VALUES (
      "${req.body.companyName}",
      "${req.body.TIN_number}",
      "${req.body.username}",
      "${req.body.ad_email}",
      "${req.body. password}")`;
     db.query(sql, (sqlErr, results) => {
      if(sqlErr) throw sqlErr

      console.log(sql)
      res.send(results)
            })
},
getGrades: getGrades =  (req, res) => {
  const query = `Select * from gradepay`;
  db.query(query, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},
getAdmin: getAdmin =  (req, res) => {
  const query = `Select * from admin`;
  db.query(query, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},
addOrganisation: addOrganisation =  (req, res) => {
  const sql = `INSERT into organisation(
    org_name,
    ad_email,
    location,
    contact_number,
    paid_leave_limit,
    encashed_leave_limit
    ) values("${req.body.org_name}",
    "${req.body.ad_email}",
    "${req.body.location}",
    "${req.body.contact_number}",
    "${req.body.paid_leave_limit}",
    "${req.body.encashed_leave_limit}")`

    db.query(sql, (sqlErr, results) => {
      if(sqlErr) throw sqlErr

      console.log(sql)
      res.send(results)
  })
},
addExtras: addExtras = (req, res) => {
  const sql = `INSERT into extras(
    ex_type,
    ex_id
    ) values("${req.body.ex_type}",
             "${req.body.ex_id}"
             )`;
    db.query(sql, (sqlErr, results) => {
      if(sqlErr) throw sqlErr

      console.log(sql)
      res.send(results)
  })
  
},
getExtras: getExtras = (req, res) => {
  const sql = `Select * from extras`;

  db.query(sql, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},
addIsgiven: addIsgiven = (req, res) => {
  const sql = `Insert into is_given(
    ex_id,
    amount,
    email)
    values( "${req.body.ex_id}","${req.body.amount}","${req.body.email}")`
    db.query(sql, (sqlErr, results) => {
      if(sqlErr) throw sqlErr

      console.log(sql)
      res.send(results)
  })
},
getExtraForemp: getExtraForemp = (req, res) => {
  const sql = `Select * from is_given where ep_email="${req.params.ep_email}"`;
db.query(sql, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},

}
module.exports = {
 dbHR,
};

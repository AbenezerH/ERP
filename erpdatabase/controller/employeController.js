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
addEmployee: addEmployee =  async (req, res) => {
  try {
    let sql = `INSERT INTO employe( name,
      phonenumber,
      dob,
      address,
      city,
      state,
      pincode,
      ep_email,
    password,
    dept_id,
    grade_id,
    doj)
      VALUES("${req.body.name}",
        "${req.body.phonenumber}",
        "${req.body.dob}",
      "${req.body.address}",
      "${req.body.city}",
      "${req.body.state}",
      "${req.body.pincode}",
      "${req.body.ep_email}",
      "${req.body.password}",
      "${req.body.dept_id}",
      "${req.body.grade_id}",
      "${req.body.doj}"
      )`;
      await db.query(sql, (sqlErr, results) => {
        if(sqlErr) throw sqlErr
        
        console.log(sql)
        res.send(results)
      })
            
  } catch (error) {
      res.send(error)
  }
},
  deleteEmployee: deleteEmployee =  async (req, res) => {
  try {
    const sql = `DELETE FROM Employe WHERE ep_email = "${req.params.ep_email}"`;
    await db.query(sql, (sqlErr, results) => {
      if(sqlErr) console.log(sqlErr.message)
      
      res.send(results)
    })
            
  } catch (error) {
      res.send(error)
  }
},
getAllEmployees: getAllEmployees = async (req, res) => {
  try {
    const query = `SELECT * from employe`;
    await db.query(query, (sqlErr, results) => {
      if(sqlErr) console.log(sqlErr.message)
      
      res.send(results)
    })
            
  } catch (error) {
      res.send(error)
  }
},

getEmployeeProfile: getEmployeeProfile = async (req, res) => {
  try {
    // console.log(req.params);
    const sql = `SELECT * FROM employe where ep_email = "${req.params.ep_email}"`
    await db.query(sql, (sqlErr, results) => {
      if(sqlErr) console.log(sqlErr.message)
      
      res.send(results)
    })
            
  } catch (error) {
      res.send(error)
  }
},

updateEmployeedata: updateEmployeedata = async (req, res) => {
  try {
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
    await db.query(updateQuery, (sqlErr, results) => {
      if(sqlErr) console.log(sqlErr.message)
      
      res.send(results)
    })
            
  } catch (error) {
      res.send(error)
  }
  
},

addDepartment: addDepartment = async (req, res) => {
  try {
    const sql = `INSERT into department(
      dept_id,
      dept_name,
      branch)
      VALUES( "${req.body.dept_name}", "${req.body.org_name}", "${req.body.branch}")`;
      await db.query(sql, (sqlErr, results) => {
        if(sqlErr) throw sqlErr
        
        console.log(sql)
        res.send(results)
      })
            
  } catch (error) {
      res.send(error)
  }
  },
  getDepartments: getDepartments =  async (req, res) => {
    try {
      const sql = `SELECT * from department`;
      await db.query(sql, (sqlErr, results) => {
        if(sqlErr) console.log(sqlErr.message)
        
        res.send(results)
      })
              
    } catch (error) {
        res.send(error)
    }
  },
  getDepartmentid: getDepartmentid = async (req, res) => {
    try {
      const comments = await db.query('Select dept_id from department');
      let arrayOfObjects = [];
      comments.forEach(elem => {
        arrayOfObjects.push({
          id: dept_id,
          
        });
      })
      console.log(arrayOfObjects);
              
    } catch (error) {
        res.send(error)
    }
  },
  addGrade: addGrade = async (req, res) => {
    try {
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
          await db.query(sql, (sqlErr, results) => {
            if(sqlErr) throw sqlErr
            
            console.log(sql)
            res.send(results)
          })
              
    } catch (error) {
        res.send(error)
    }
  },
      
      getGrades: getGrades = async (req, res) => {
        try {
          const sql = `Select * from gradepay`;
          
          await db.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)
            
            res.send(results)
          })
                  
        } catch (error) {
            res.send(error)
        }
      },
      
      getGradeid: getGradeid = async (req, res) => {
        try {
          const sql = `Select grade_id from gradepay`;
          
          await db.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)
            
            res.send(results)
          })
                  
        } catch (error) {
            res.send(error)
        }
      },
      addAdmin: addAdmin = async (req, res) => {
        try {
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
              await db.query(sql, (sqlErr, results) => {
                if(sqlErr) throw sqlErr
                
                console.log(sql)
                res.send(results)
              })
                  
        } catch (error) {
            res.send(error)
        }
          },
          
getAdmin: getAdmin =  async (req, res) => {
  try {
    const query = `Select * from admin`;
    await db.query(query, (sqlErr, results) => {
      if(sqlErr) console.log(sqlErr.message)
      
      res.send(results)
    })
            
  } catch (error) {
      res.send(error)
  }
},
addOrganisation: addOrganisation =  async (req, res) => {
  try {
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
      
      await db.query(sql, (sqlErr, results) => {
        if(sqlErr) throw sqlErr
        
        console.log(sql)
        res.send(results)
      })
            
  } catch (error) {
      res.send(error)
  }
  },
  addExtras: addExtras = async (req, res) => {
  try {
    const sql = `INSERT into extras(
      ex_type,
      ex_id,
      ep_email
      ) values("${req.body.ex_type}",
      "${req.body.ex_id}",
      "${req.body.ep_mail}"
      )`;
      await db.query(sql, (sqlErr, results) => {
        if(sqlErr) throw sqlErr
        
        console.log(sql)
        res.send(results)
      })
            
  } catch (error) {
      res.send(error)
  }
    
  },
  getExtras: getExtras = async (req, res) => {
    try {
      const sql = `Select * from extras`;
      
      await db.query(sql, (sqlErr, results) => {
        if(sqlErr) console.log(sqlErr.message)
        
        res.send(results)
      })
              
    } catch (error) {
        res.send(error)
    }
  },
  addIsgiven: addIsgiven = async (req, res) => {
    try {
      const sql = `Insert into is_given(
        ex_id,
        amount,
        ep_email)
        values( "${req.body.ex_id}","${req.body.amount}","${req.body.email}")`
        await db.query(sql, (sqlErr, results) => {
          if(sqlErr) throw sqlErr
          
          console.log(sql)
          res.send(results)
        })
              
    } catch (error) {
        res.send(error)
    }
    },
    getExtraForemp: getExtraForemp = async (req, res) => {
      try {
        const sql = `Select * from is_given where ep_email="${req.params.ep_email}"`;
        await db.query(sql, (sqlErr, results) => {
          if(sqlErr) console.log(sqlErr.message)
          
          res.send(results)
        })
                
      } catch (error) {
          res.send(error)
      }
    },
    
  }
  module.exports = {
    dbHR,
  };
  
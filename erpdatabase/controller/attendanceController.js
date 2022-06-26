const mysql = require('mysql')

const attendCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "hr"
})

 function sqlConn(){

    try {
        
        attendCon.connect(conErr => {
           if(conErr) console.log(conErr)
       })
    } catch (error) {
        
    }
    
}

const dbAttendance = {

    sqlConn: sqlConn,

    getAllAttendance: getAllAttendance = async (req, res) => {

        try {
            let sql = `SELECT * FROM attendance`
            
            await attendCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
    },
    
    getAttendance: getAttendance = async (req, res) => {
        try {
            let sql = `SELECT * FROM attendance WHERE date = "${req.params.date}"`
            
            await attendCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
    },
    
    addAttendance: addAttendance = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO attendance
            (date,
            emp_id,
            present,
            time_start,
            time_end) VALUES(
            "${req.body.date}",
            "${req.body.emp_id}",
            "${req.body.present}",
            "${req.body.time_start}",
            "${req.body.time_end}")`
                
                await attendCon.query(sql, (sqlErr, results) => {
                    if(sqlErr) console.log(sqlErr.message)
                    
                    res.send(results)
                })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
        },
        
        updateItem: updateItem = async (req, res) => {
            try {
                let sql = 
                `UPDATE attendance SET
                date = "${req.body.date}",
                emp_id = "${req.body.emp_id}",
                present = "${req.body.present}",
                time_start = "${req.body.time_start}",
                time_end = "${req.body.time_end}"
                WHERE date = "${req.params.date}"`
                
                await attendCon.query(sql, (sqlErr, results) => {
                    if(sqlErr) console.log(sqlErr.message)

                    console.log(sql)
                    
                    res.send(results)
                })
                
            } catch (error) {
                console.log(`error`, error);
                res.status(500).json("server error!");
            }
        },

        updateUsing: updateUsing = async (req, res) => {
            try {
                let sql = 
                `UPDATE attendance SET
                date = "${req.body.date}",
                emp_id = "${req.body.emp_id}",
                present = "${req.body.present}",
                time_start = "${req.body.time_start}",
                time_end = "${req.body.time_end}"
                WHERE date = "${req.params.date}" AND emp_id = "${req.params.ep_email}"`
                
                await attendCon.query(sql, (sqlErr, results) => {
                    if(sqlErr) console.log(sqlErr.message)

                    console.log(sql)
                    
                    res.send(results)
                })
                
            } catch (error) {
                console.log(`error`, error);
                res.status(500).json("server error!");
            }
        },
        
        deleteItem: deleteItem = async (req, res) => {
            try {
                let sql = `DELETE FROM attendance WHERE date = "${req.params.date}"`
                
                await attendCon.query(sql, (sqlErr, results) => {
                    if(sqlErr) console.log(sqlErr.message)
        
                    res.send(results)
                })
                
            } catch (error) {
                console.log(`error`, error);
                res.status(500).json("server error!");
            }
    },


    getJoinAttendance: getJoinAttendance = async (req, res) => {
        try {
            let sql = `SELECT attendance.date, 
            attendance.emp_id, 
            attendance.present, 
            attendance.time_start, 
            attendance.time_end, 
            employe.ep_email, 
            employe.name 
            FROM attendance 
            INNER JOIN 
            employe ON 
            attendance.emp_id=employe.ep_email 
            WHERE date="${req.params.date}"`

            await attendCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                console.log(sql)

                res.send(results)
            })
        } catch (error) {
            console.log("error" + error)
            res.status(500).json("server error")
        }
    },
    getRightAttendance: getRightAttendance = async (req, res) => {
        try {
            let sql = `SELECT attendance.date, 
            attendance.emp_id, 
            attendance.present, 
            attendance.time_start, 
            attendance.time_end, 
            employe.ep_email, 
            employe.name 
            FROM attendance 
            RIGHT JOIN 
            employe ON 
            attendance.emp_id=employe.ep_email GROUP BY employe.ep_email
            HAVING COUNT(employe.ep_email) > 0 
            `

            await attendCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                console.log(sql)

                res.send(results)
            })
        } catch (error) {
            console.log("error" + error)
            res.status(500).json("server error")
        }
    },
    
    getRangeAttendance: getRangeAttendance = async (req, res) => {
        try {
            let sql = `SELECT attendance.date, 
            attendance.emp_id, 
            attendance.present, 
            attendance.time_start, 
            attendance.time_end, 
            employe.ep_email, 
            employe.name 
            FROM attendance 
            RIGHT JOIN 
            employe ON 
            attendance.emp_id=employe.ep_email 
            WHERE attendance.date >= "${req.params.min}" AND attendance.date <= "${req.params.max}"
            `

            await attendCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                console.log(sql)

                res.send(results)
            })
        } catch (error) {
            console.log("error" + error)
            res.status(500).json("server error")
        }
    },

}


module.exports = {
    dbAttendance: dbAttendance,
}
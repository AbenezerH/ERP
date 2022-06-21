const mysql = require('mysql')

const departmentCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     departmentCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbDepartment = {

    sqlConn: sqlConn,

    getAllDepartment: getAllDepartment = async (req, res) => {
        try {
            let sql = `SELECT * FROM department`
            
            await departmentCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
    },
    
    getDepartment: getDepartment = async (req, res) => {
        try {
            let sql = `SELECT * FROM department WHERE dept_id = "${req.params.dept_id}"`
            
            await departmentCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
    },
    
    addDepartment: addDepartment = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO department
            (dept_id,
                dept_name,
                branch) VALUES
                ("${req.body.dept_id}",
                "${req.body.dept_name}",
                "${req.body.branch}")`
                
                await departmentCon.query(sql, (sqlErr, results) => {
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
            `UPDATE department SET
            dept_id = "${req.body.dept_id}",
            dept_name = "${req.body.dept_name}",
            branch = "${req.body.branch}"
            WHERE dept_id = "${req.params.dept_id}"`
            
            await departmentCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
    },
        
    deleteItem: deleteItem = async (req, res) => {
        try {
            let sql = `DELETE FROM department WHERE dept_id = "${req.params.dept_id}"`

            await departmentCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
    
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
    },

}


module.exports = {
    dbDepartment,
}
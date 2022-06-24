const mysql = require('mysql')

const gradeCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "hr"
})

 function sqlConn(){
    
     gradeCon.connect(conErr => {
        if(conErr) console.log(conErr)
    })
}

const dbGrade = {

    sqlConn: sqlConn,

    getAllGrade: getAllGrade = async (req, res) => {
        try {
            let sql = `SELECT * FROM gradepay`
            
            await gradeCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
    },
    
    getGrade: getGrade = async (req, res) => {
        try {
            let sql = `SELECT * FROM gradepay WHERE grade_id = "${req.params.grade_id}"`
            
            await gradeCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
    },
    
    addGrade: addGrade = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO gradepay
            (grade_name,
                grade_id,
                basic_pay,
                grade_pf,
                grade_bonus,
                grade_ta,
                grade_da) VALUES
                ("${req.body.grade_name}",
                "${req.body.grade_id}",
                "${req.body.basic_pay}",
                "${req.body.grade_pf}",
                "${req.body.grade_bonus}",
                "${req.body.grade_ta}",
                "${req.body.grade_da}")`
                
                await gradeCon.query(sql, (sqlErr, results) => {
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
            `UPDATE gradepay SET
            grade_name = "${req.body.grade_name}",
            grade_id = "${req.body.grade_id}",
            basic_pay = "${req.body.basic_pay}",
            grade_pf = "${req.body.grade_pf}",
            grade_bonus = "${req.body.grade_bonus}",
            grade_ta = "${req.body.grade_ta}",
            grade_da = "${req.body.grade_da}"
            WHERE grade_id = "${req.params.grade_id}"`
            
            await gradeCon.query(sql, (sqlErr, results) => {
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
            let sql = `DELETE FROM gradepay WHERE grade_id = "${req.params.grade_id}"`

            await gradeCon.query(sql, (sqlErr, results) => {
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
    dbGrade,
}
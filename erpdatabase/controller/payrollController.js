const mysql = require('mysql')

const payrollCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     payrollCon.connect(conErr => {
        if(conErr) console.log(conErr)
    })
}

const dbPayroll = {

    sqlConn: sqlConn,

    getAllPayroll: getAllPayroll = async (req, res) => {
        try {
            let sql = `SELECT * FROM payroll`
            
            await payrollCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    getPayroll: getPayroll = async (req, res) => {
        try {
            let sql = `SELECT * FROM payroll WHERE id = "${req.params.id}"`
            
            await payrollCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    addPayroll: addPayroll = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO payroll
            (month,
                year,
                gross_pay,
                income_tax,
                ep_email,
                ad_email) VALUES
                ("${req.body.month}",
                "${req.body.year}",
                "${req.body.gross_pay}",
                "${req.body.income_tax}",
                "${req.body.ep_email}",
                "${req.body.ad_email}")`
                
                await payrollCon.query(sql, (sqlErr, results) => {
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
                `UPDATE payroll SET
                month = "${req.body.month},
                year = "${req.body.year},
                gross_pay = "${req.body.gross_pay},
                income_tax = "${req.body.income_tax},
                ep_email = "${req.body.ep_email},
                ad_email = "${req.body.ad_email}
                WHERE id = "${req.params.id}"`
                
                await payrollCon.query(sql, (sqlErr, results) => {
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
            let sql = `DELETE FROM payroll WHERE id = "${req.params.id}"`
    
            await payrollCon.query(sql, (sqlErr, results) => {
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
    dbPayroll,
}
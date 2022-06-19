const mysql = require('mysql')

const incomeCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     incomeCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbIncome = {

    sqlConn: sqlConn,

    getAllIncome: getAllIncome = async (req, res) => {
        try {
            let sql = `SELECT * FROM income`
            
            await incomeCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    getIncome: getIncome = async (req, res) => {
        try {
            let sql = `SELECT * FROM income WHERE id = "${req.params.id}"`
            
            await incomeCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    addIncome: addIncome = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO income
            (type,
                quantity,
                created_at,
                registered_by) VALUES
                ("${req.body.type}",
                "${req.body.quantity}",
                "${req.body.created_at}",
                "${req.body.registered_by}")`
                
                await incomeCon.query(sql, (sqlErr, results) => {
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
                `UPDATE income SET 
                type = "${req.body.type}",
                quantity = "${req.body.quantity}",
                created_at = "${req.body.created_at}",
                registered_by = "${req.body.registered_by}"
                WHERE id = "${req.params.id}"`
                
                await incomeCon.query(sql, (sqlErr, results) => {
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
                let sql = `DELETE FROM income WHERE id = "${req.params.id}"`
    
                await incomeCon.query(sql, (sqlErr, results) => {
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
    dbIncome,
}
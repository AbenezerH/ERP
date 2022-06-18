const mysql = require('mysql')

const expenseCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     expenseCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbExpense = {

    sqlConn: sqlConn,

    getAllExpense: getAllExpense = async (req, res) => {
        try {
            let sql = `SELECT * FROM expense`
            
            await expenseCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    
    getExpense: getExpense = async (req, res) => {
        try {
            let sql = `SELECT * FROM expense WHERE id = "${req.params.id}"`
            
            await expenseCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    
    addExpense: addExpense = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO expense
            (name,
                created_at,
                ex_type,
                ex_amount) VALUES
                ("${req.body.name}",
                "${req.body.created_at}",
                "${req.body.ex_type}",
                "${req.body.ex_amount}")`
                
                await expenseCon.query(sql, (sqlErr, results) => {
                    if(sqlErr) console.log(sqlErr.message)
                    
                    res.send(results)
                })
            
        } catch (error) {
            res.send(error)
        }
    },
        
        updateItem: updateItem = async (req, res) => {
            try {
                let sql = 
                `UPDATE expense SET
                name = "${req.body.name}",
                created_at = "${req.body.created_at}",
                ex_type = "${req.body.ex_type}",
                ex_amount = "${req.body.ex_amount}"
                WHERE id = "${req.params.id}"`
                
                await expenseCon.query(sql, (sqlErr, results) => {
                    if(sqlErr) console.log(sqlErr.message)
                    
                    res.send(results)
                })
                
            } catch (error) {
                res.send(error)
            }
        },
        
    deleteItem: deleteItem = async (req, res) => {
        try {
            let sql = `DELETE FROM expense WHERE id = "${req.params.id}"`
    
            await expenseCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
    
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },

}


module.exports = {
    dbExpense,
}
const mysql = require('mysql')

const expenseCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "hr"
})

 function sqlConn(){
    
     expenseCon.connect(conErr => {
        if(conErr) console.log(conErr)
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
            console.log(`error`, error);
    res.status(500).json("server error!");
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
            console.log(`error`, error);
    res.status(500).json("server error!");
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
            console.log(`error`, error);
    res.status(500).json("server error!");
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
                console.log(`error`, error);
    res.status(500).json("server error!");
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
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },

}


module.exports = {
    dbExpense,
}
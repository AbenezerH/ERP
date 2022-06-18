const mysql = require('mysql')

const liabilityCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     liabilityCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbLiability = {

    sqlConn: sqlConn,

    getAllLiability: getAllLiability = async (req, res) => {
        try {
            let sql = `SELECT * FROM liability`
            
            await liabilityCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    
    getLiability: getLiability = async (req, res) => {
        try {
            let sql = `SELECT * FROM liability WHERE id = "${req.params.id}"`
            
            await liabilityCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    
    addLiability: addLiability = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO liability
            (name,
                created_at,
                type,
                amount) VALUES
                ("${req.body.name}",
                "${req.body.created_at}",
                "${req.body.type}",
                "${req.body.amount}")`
                
                await liabilityCon.query(sql, (sqlErr, results) => {
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
            `UPDATE liability SET
            name = "${req.body.name}",
            created_at = "${req.body.created_at}",
            type = "${req.body.type}",
            amount = "${req.body.amount}" 
            WHERE id = "${req.params.id}"`
            
            await liabilityCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    
    deleteItem: deleteItem = async (req, res) => {
        try {
            let sql = `DELETE FROM liability WHERE id = "${req.params.id}"`
    
            await liabilityCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
    
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    
}


module.exports = {
    dbLiability,
}
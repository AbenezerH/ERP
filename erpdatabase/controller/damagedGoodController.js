const mysql = require('mysql')

const damagedGoodCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     damagedGoodCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbDamagedGood = {

    sqlConn: sqlConn,

    getAllDamagedGood: getAllDamagedGood = async (req, res) => {
        try {
            let sql = `SELECT * FROM damaged_good`
            
            await damagedGoodCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    getDamagedGood: getDamagedGood = async (req, res) => {
        try {
            let sql = `SELECT * FROM damaged_good WHERE id = "${req.params.id}"`
            
            await damagedGoodCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    addDamagedGood: addDamagedGood = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO damaged_good
            (product_id,
                quantity) VALUES
                ("${req.body.product_id}",
                "${req.body.quantity}")`
                
                await damagedGoodCon.query(sql, (sqlErr, results) => {
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
                `UPDATE damaged_good SET
                product_id = "${req.body.product_id}",
                quantity = "${req.body.quantity}"
                WHERE id = "${req.params.id}"`
                
                await damagedGoodCon.query(sql, (sqlErr, results) => {
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
            let sql = `DELETE FROM damaged_good WHERE id = "${req.params.id}"`
    
            await damagedGoodCon.query(sql, (sqlErr, results) => {
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
    dbDamagedGood,
}
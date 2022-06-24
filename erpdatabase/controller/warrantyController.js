const mysql = require('mysql')

const warrantyCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "hr"
})

 function sqlConn(){
    
     warrantyCon.connect(conErr => {
        if(conErr) console.log(conErr)
    })
}


const dbWarranty = {
    sqlConn: sqlConn,

    getAllWarranty: getAllWarranty = async (req, res) => {
        try {
            let sql = "SELECT * FROM warranty"
            
            await warrantyCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    getWarranty: getWarranty = async (req, res) => {
        try {
            let sql = `SELECT * FROM warranty WHERE id = "${req.params.id}"`
            
            await warrantyCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    addWarranty: addWarranty = async (req, res) => {
        try {
            let sql =
            `INSERT INTO warranty
            (full_name,
                phone_number,
                serial_number,
                valid_until)
                VALUES
                ("${req.body.full_name}",
                "${req.body.phone_number}",
                "${req.body.serial_number}",
                "${req.body.valid_until}")`
                
                await warrantyCon.query(sql, (sqlErr, results) => {
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
                `UPDATE warranty SET
                full_name = "${req.body.full_name}",
                phone_number = "${req.body.phone_number}",
                serial_number = "${req.body.serial_number}",
                valid_until = "${req.body.valid_until}"
                WHERE id = "${req.params.id}"`
                
                await warrantyCon.query(sql, (sqlErr, results) => {
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
                let sql = `DELETE FROM warranty WHERE id = "${req.params.id}"`
    
                await warrantyCon.query(sql, (sqlErr, results) => {
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
    dbWarranty,
}

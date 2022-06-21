const mysql = require('mysql')

const inventoryCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     inventoryCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbInventory = {

    sqlConn: sqlConn,

    // to get all rows
    getAllInventory: getAllInventory = async (req, res) => {
        try {
            let sql = `SELECT * FROM inventory`
            
            await inventoryCon.query(sql, (sqlErr, results) => {
                if(sqlErr) throw sqlErr
                
                res.send(results)
            })   
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
    },
    
    
    
    // Add new item to inventory
    addInventory: addInventory = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO inventory 
            (product_name, 
                product_description, 
                product_unit, 
                product_quantity, 
                unit_cost, 
                least_critical_amount,
                high_amount,
                created_at,
                updated_at,
                expire_date
                ) VALUES (
                    "${req.body.product_name}",
                    "${req.body.product_description}",
                    "${req.body.product_unit}",
                    "${req.body.product_quantity}",
                    "${req.body.unit_cost}",
                    "${req.body.least_critical_amount}",
                    "${req.body.high_amount}",
                    "${req.body.created_at}",
                    "${req.body.updated_at}",
                    "${req.body.expire_date}"
                    )`
                    
                    await inventoryCon.query(sql, (sqlErr, results) => {
                        if(sqlErr) throw sqlErr
                        
                        console.log(sql)
                        res.send(results)
                    })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
        
    },
            
            
            
    // to get a single row with id
    getInventory: getInventory = async (req, res) => {
        try {
            let sql = `SELECT * FROM inventory WHERE id = ${req.params.id}`
            
            await inventoryCon.query(sql, (sqlErr, results) => {
                if(sqlErr) throw sqlErr
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
    },
            
            
    // delete an inventory item
    deleteItem: deleteItem = async (req, res) => {
        try {
            let sql = `DELETE FROM inventory WHERE id = ${req.params.id}`
            
            await inventoryCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
            res.status(500).json("server error!");
        }
    },
            
            
    // update an inventory item
    updateItem: updateItem = async (req, res) => {
        try {
            let sql = 
            `UPDATE inventory SET 
            product_name = "${req.body.product_name}", 
            product_description = "${req.body.product_description}", 
            product_unit = "${req.body.product_unit}", 
            product_quantity = "${req.body.product_quantity}", 
            unit_cost = "${req.body.unit_cost}", 
            least_critical_amount = "${req.body.least_critical_amount}",
            high_amount = "${req.body.high_amount}",
            created_at = "${req.body.created_at}",
            updated_at = "${req.body.updated_at}",
            expire_date = "${req.body.expire_date}"
            WHERE id = "${req.params.id}"
            `
    
            await inventoryCon.query(sql, (sqlErr, results) => {
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
    dbInventory,
}
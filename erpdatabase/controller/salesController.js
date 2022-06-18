const mysql = require('mysql')

const salesCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     salesCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbSales = {

    sqlConn: sqlConn,

    getAllSales: getAllSales = async (req, res) => {
        try {
            let sql = "SELECT * FROM sales"
            
            await salesCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    
    getSales: getSales = async (req, res) => {
        try {
            let sql = `SELECT * FROM sales WHERE id = "${req.params.id}"`
            
            await salesCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    
    addSales: addSales = async (req, res) => {
        try {
            let sql =
            `INSERT INTO sales
            (product_id,
                number_of_items,
                selling_price,
                warranty,
                vat,
                witholding_tax,
                created_at,
                sold_by) VALUES
                ("${req.body.product_id}",
                "${req.body.number_of_items}",
                "${req.body.selling_price}",
                "${req.body.warranty}",
                "${req.body.vat}",
                "${req.body.witholding_tax}",
                "${req.body.created_at}",
                "${req.body.sold_by}")`
                
                await salesCon.query(sql, (sqlErr, results) => {
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
            `UPDATE sales SET 
            product_id = "${req.body.product_id}",
            number_of_items = "${req.body.number_of_items}",
            selling_price = "${req.body.selling_price}",
            warranty = "${req.body.warranty}",
            vat = "${req.body.vat}",
            witholding_tax = "${req.body.witholding_tax}",
            created_at = "${req.body.created_at}",
            sold_by = "${req.body.sold_by}"
            WHERE id = "${req.params.id}"`
            
            await salesCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    
    deleteItem: deleteItem = async (req, res) => {
        try {
            let sql = `DELETE FROM sales WHERE id = "${req.params.id}"`
    
            await salesCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
    
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },

}

module.exports = {
    dbSales,
}
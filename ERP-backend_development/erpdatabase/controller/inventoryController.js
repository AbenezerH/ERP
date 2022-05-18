const mysql = require('mysql')

const inventoryCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})
console.log("in ")
inventoryCon.connect(conErr => {
    if(conErr) throw conErr
})



// to get all rows
const getAllInventory = (req, res) => {
    let sql = `SELECT * FROM inventory`

    inventoryCon.query(sql, (sqlErr, results) => {
        if(sqlErr) throw sqlErr

        res.send(JSON.stringify(results))
    })   
}



// Add new item to inventory
const addInventory = (req, res) => {
    
    let sql = 
    `INSERT INTO inventory 
    (product_name, 
    product_description, 
    product_unit, 
    product_quantity, 
    unit_cost, 
    price, 
    least_critical_amount,
    high_amount,
    created_at,
    updated_at,
    expire_date,
    ) VALUES (
        ${req.body.product_name},
        ${req.body.product_description},
        ${req.body.product_unit},
        ${req.body.product_quantity},
        ${req.body.unit_cost},
        ${req.body.price},
        ${req.body.least_critical_amount},
        ${req.body.high_amount},
        ${req.body.created_at},
        ${req.body.updated_at},
        ${req.body.expire_date}
    )`

        inventoryCon.query(sql, (sqlErr, results) => {
            if(sqlErr) throw sqlErr

            res.send(JSON.stringify(results))
        })
}



// to get a single row with id
/* const getInventory = (req, res) => {
    let sql = `SELECT * FROM inventory WHERE id = ${req.params.id}`

    inventoryCon.query(sql, (sqlErr, results) => {
        if(sqlErr) throw sqlErr

        res.send(results)
    })
} */



module.exports = {
    getAllInventory,

    addInventory,
}
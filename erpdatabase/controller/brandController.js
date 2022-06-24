const mysql = require('mysql')

const brandCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     brandCon.connect(conErr => {
        if(conErr) console.log(conErr)
    })
}

const dbBrand = {

    sqlConn: sqlConn,

    getAllBrand: getAllBrand = async (req, res) => {
        try {
            let sql = "SELECT * FROM brand"
            
            await brandCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    getBrand: getBrand = async (req, res) => {
        try {
            let sql = `SELECT * FROM brand WHERE id = ${req.params.id}`
            
            await brandCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    addBrand: addBrand = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO brand
            (name) VALUES ("${req.body.name}")`
            
            await brandCon.query(sql, (sqlErr, results) => {
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
            `UPDATE brand SET name = "${req.body.name}" WHERE id = "${req.params.id}"`
            
            await brandCon.query(sql, (sqlErr, results) => {
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
            let sql = `DELETE FROM brand WHERE id = "${req.params.id}"`
    
            await brandCon.query(sql, (sqlErr, results) => {
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
    dbBrand,
}
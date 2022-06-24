const mysql = require('mysql')

const categoryCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     categoryCon.connect(conErr => {
        if(conErr) console.log(conErr)
    })
}

const dbCategory = {

    sqlConn: sqlConn,

    getAllCategory: getAllCategory = async (req, res) => {
        try {
            let sql = "SELECT * FROM category"
            
            await categoryCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    getCategory: getCategory = async (req, res) => {
        try {
            let sql = `SELECT * FROM category WHERE id = "${req.params.id}"`
            
            await categoryCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    
    addCategory: addCategory = async (req, res) => {
        try {
            let sql = `INSERT INTO category (name) VALUES ("${req.body.name}")`
            
            await categoryCon.query(sql, (sqlErr, results) => {
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
            let sql = `UPDATE category SET name = "${req.body.name}" WHERE id = "${req.params.id}"`
            
            await categoryCon.query(sql, (sqlErr, results) => {
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
            let sql = `DELETE FROM category WHERE id = "${req.params.id}"`
    
            await categoryCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
    
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    }
}

module.exports = {
    dbCategory,
}
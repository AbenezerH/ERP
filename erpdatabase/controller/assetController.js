const mysql = require('mysql')

const assetCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     assetCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbAsset = {

    sqlConn: sqlConn,

    getAllAsset: getAllAsset = async (req, res) => {
        try {
            let sql = `SELECT * FROM asset`
            
            await assetCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    
    getAsset: getAsset = async (req, res) => {
        try {
            let sql = `SELECT * FROM asset WHERE id = "${req.params.id}"`
            
            await assetCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    
    addAsset: addAsset = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO asset
            (name,
                value,
                created_at,
                asset_type,
                salvage_value) VALUES
                ("${req.body.name}",
                "${req.body.value}",
                "${req.body.created_at}",
                "${req.body.asset_type}",
                "${req.body.salvage_value}")`
                
                await assetCon.query(sql, (sqlErr, results) => {
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
                `UPDATE asset SET
                name = "${req.body.name}",
                value = "${req.body.value}",
                created_at = "${req.body.created_at}",
                asset_type = "${req.body.asset_type }",
                salvage_value = "${req.body.salvage_value}"
                WHERE id = "${req.params.id}"`
                
                await assetCon.query(sql, (sqlErr, results) => {
                    if(sqlErr) console.log(sqlErr.message)
                    
                    res.send(results)
                })
                
            } catch (error) {
                res.send(error)
            }
        },
        
        deleteItem: deleteItem = async (req, res) => {
            try {
                let sql = `DELETE FROM asset WHERE id = "${req.params.id}"`
    
                await assetCon.query(sql, (sqlErr, results) => {
                    if(sqlErr) console.log(sqlErr.message)
        
                    res.send(results)
                })
                
            } catch (error) {
                res.send(error)
            }
    },
    

}


module.exports = {
    dbAsset,
}
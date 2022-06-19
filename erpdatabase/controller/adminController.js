const mysql = require('mysql')

const adminCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

 function sqlConn(){
    
     adminCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbAdmin = {

    sqlConn: sqlConn,

    getAllAdmin: getAllAdmin = async (req, res) => {

        try {
            let sql = `SELECT * FROM admin`
            
            await adminCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    getAdmin: getAdmin = async (req, res) => {
        try {
            let sql = `SELECT * FROM admin WHERE ad_email = "${req.params.id}"`
            
            await adminCon.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
                
                res.send(results)
            })
            
        } catch (error) {
            console.log(`error`, error);
    res.status(500).json("server error!");
        }
    },
    
    addAdmin: addAdmin = async (req, res) => {
        try {
            let sql = 
            `INSERT INTO admin
            (companyName,
                username,
                TIN_number,
                ad_email,
                password) VALUES
                ("${req.body.companyName}",
                "${req.body.username}",
                "${req.body.TIN_number}",
                "${req.body.ad_email}",
                "${req.body.password}")`
                
                await adminCon.query(sql, (sqlErr, results) => {
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
                `UPDATE admin SET
                companyName = "${req.body.companyName}",
                username = "${req.body.username}",
                TIN_number = "${req.body.TIN_number}",
                ad_email = "${req.body.ad_email}",
                password = "${req.body.password}"
                WHERE ad_email = "${req.params.id}"`
                
                await adminCon.query(sql, (sqlErr, results) => {
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
                let sql = `DELETE FROM admin WHERE ad_email = "${req.params.id}"`
                
                await adminCon.query(sql, (sqlErr, results) => {
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
    dbAdmin,
}
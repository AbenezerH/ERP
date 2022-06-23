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
            (
                ad_email,
                role,
                accepted) VALUES(
                "${req.body.ad_email}",
                0,
                false)`
                
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
                accepted = "${req.body.accepted}",
                role = "${req.body.role}",
                ad_email = "${req.body.ad_email}"
                WHERE ad_email = "${req.params.ad_email}"`
                
                await adminCon.query(sql, (sqlErr, results) => {
                    if(sqlErr) console.log(sqlErr.message)

                    console.log(sql)
                    
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
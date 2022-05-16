const express = require('express')
const mysql=require("mysql")
const app=express()

 const db = mysql.createConnection({

    host: "localhost",
  
    user: "root",
  
    password: "",
  
    database: "ERPdatabase",
  
  });

  db.connect((err) => {

    if (err) {
  
      throw err;
  
    }
  
    console.log("MySql Connected");
  
  });


  app.get("/ERPdatabase", (req, res) => {

    let sql = "CREATE DATABASE ERPdatabase";
  
    db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Database created");
  
    });
  
  });
  
app.get("/table", (req, res) => {

  let sqlBrand = 
  `CREATE TABLE brand
  (id int(11) AUTO_INCREMENT,
  name varchar(50),
  PRIMARY KEY(id))
  `


  let sqlCategory =
  `CREATE TABLE category
  (id int(11) AUTO_INCREMENT,
  name varchar(50),
  PRIMARY KEY(id))
  `


  let sqlWarranty =
  `CREATE TABLE warranty
  (id int(11) AUTO_INCREMENT,
  full_name varchar(50),
  phone_number int(11),
  serial_number varchar(20),
  valid_until datetime,
  PRIMARY KEY(id))
  `


  let sqlInventory =
    `CREATE TABLE inventory
    (id int(11) AUTO_INCREMENT,
    product_name varchar(50), 
    product_description varchar(1024), 
    product_unit varchar(10), 
    product_quantity double, 
    unit_cost double, price double, 
    least_critical_amount double, 
    high_amount double, 
    created_at datetime, 
    updated_at datetime, 
    expire_date datetime, 
    category int(11), 
    brand int(11), 
    added_by int(11), 
    primary key(id), 
    FOREIGN KEY (category) REFERENCES category(id) ON DELETE SET NULL, 
    FOREIGN KEY (brand) REFERENCES brand(id) on DELETE SET NULL)`;
  
  let sqlSales = 
    `CREATE TABLE sales
    (id int(11) AUTO_INCREMENT, 
    product_id int(11), 
    number_of_items double, 
    selling_price double, 
    warranty int(11), 
    vat double, 
    witholding_tax double, 
    created_at datetime,
    sold_by int(11),
    primary key(id),
    FOREIGN KEY (product_id) REFERENCES inventory(id) ON DELETE SET NULL, 
    FOREIGN KEY (warranty) REFERENCES warranty(id) ON DELETE SET NULL);`;


    let sqlDamagedGood =
    `CREATE TABLE damaged_good
    (id int(11) AUTO_INCREMENT,
    product_id int(11),
    quantity double,
    PRIMARY KEY (id),
    FOREIGN KEY(product_id) REFERENCES inventory(id) ON DELETE SET NULL)`
    db.query(sqlBrand, (err) => {
      if (err) {
        throw err;
      }
    });


    db.query(sqlCategory, (err) => {
      if (err) {
        throw err;
      }
    });


    db.query(sqlWarranty, (err) => {
      if (err) {
        throw err;
      }
    });


    db.query(sqlInventory, (err) => {
      if (err) {
        throw err;
      }
    });


    db.query(sqlSales, (err) => {
      if (err) {
        throw err;
      }
    });


    db.query(sqlDamagedGood, (err) => {
      if (err) {
        throw err;
      }
    });
    
});

app.get("/admin", (req, res) => {

  let sql =

    "CREATE TABLE admin(admin_id varchar(255), username varchar(255), ad_email varchar(255), password varchar(255), primary key(ad_email))";

  db.query(sql, (err) => {

    if (err) {

      throw err;

    }

    res.send("admin table created");

  });

});


app.get("/organisation", (req, res) => {

    let sql =
  
      "CREATE TABLE organisation(org_name varchar(255), ad_email varchar(255), location varchar(255), contact_number varchar(255), paid_leave_limit int, encashed_leave_limit int, primary key(org_name), foreign key (ad_email) references admin(ad_email) on delete set null)";
  
    db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("organisation table created");
  
    });
  
  });
  
  app.get("/department", (req, res) => {

    let sql =
  
      "CREATE TABLE department(dept_id varchar(255), dept_name varchar(255), org_name varchar(255), primary key (dept_id), foreign key (org_name) references organisation(org_name) on delete set null)";
  
    db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("department table created");
  
    });
  
  });

  app.get("/gradepay", (req, res) => {

    let sql =
  
      "CREATE TABLE gradepay(grade_id varchar(255), grade_name varchar(255), basic_pay int, grade_pf varchar(255), grade_bonus int, grade_ta varchar(255), grade_da varchar(255), primary key (grade_id))";
  
    db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("gradepay table created");
  
    });
  
  });
  
  app.get("/employe", (req, res) => {

    let sql =
  
      "CREATE TABLE employe(present int, paid_leave_taken int, encashed_leave_this_month int, encashed_leave_till_date int, e_id varchar(255), doj date,  name varchar(255), dob date, address varchar(255), city varchar(255), state varchar(255), pincode numeric(6, 0), ep_email varchar(255) unique, password varchar(255), org_name varchar(255), dept_id varchar(255), grade_id varchar(255), primary key(ep_email), foreign key (org_name) references organisation(org_name) on delete  set null, foreign key (dept_id) references department(dept_id) on delete set null, foreign key (grade_id) references gradepay(grade_id) on delete set null)";
  
    db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("employe table created");
  
    });
  
  });

  app.get("/is_given", (req, res) => {

    let sql =
  
      "CREATE TABLE is_given( ex_id varchar(255), amount int, ep_email varchar(255), primary key (ex_id, ep_email), foreign key(ep_email) references employe(ep_email) on delete cascade, foreign key (ex_id) references extras(ex_id) on delete cascade)";
  
    db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("is_given table created");
  
    });
  
  });

  app.get("/extras", (req, res) => {

    let sql =
  
      "CREATE TABLE extras(ex_type varchar(255), ex_id varchar(255), primary key (ex_id))";
  
    db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("extras table created");
  
    });
  
  });
  
  app.get("/payroll", (req, res) => {

    let sql =
  
      "CREATE TABLE payroll( transaction_id SERIAL, month int, year int, gross_pay int, income_tax int, ep_email varchar(255), ad_email varchar(255), primary key (transaction_id), foreign key(ep_email) references employe(ep_email) on delete set null, foreign key(ad_email) references admin(ad_email) on delete set null)";
  
    db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("admin table created");
  
    });
  
  });
  
  app.listen('3000', () => {
      console.log('server started at 3000')
  })
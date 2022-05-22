const express = require('express')
const app=express()
const dbCreator = require('./model/createDatabase')
<<<<<<< HEAD
const hrRoute=require('./routes/employee')
=======

>>>>>>> 1fe3724820f1ef9957aca0183ccb2b2193a05165
const inventoryRoute = require('./routes/inventoryRoutes')
const brandRoute = require('./routes/brandRoutes')
const warrantyRoute = require('./routes/warrantyRoutes')
const salesRoute = require('./routes/salesRoutes')
const liabilityRoute = require('./routes/liabilityRoutes')
const adminRoute = require('./routes/adminRoutes')
const categoryRoute = require('./routes/categoryRoutes')
const incomeRoute = require('./routes/incomeRoutes')
const expenseRoute = require('./routes/expenseRoutes')

<<<<<<< HEAD

=======
>>>>>>> 1fe3724820f1ef9957aca0183ccb2b2193a05165
dbCreator.createDatabase()

app.use(express.json())

<<<<<<< HEAD
app.use('/erpdatabase/hr', hrRoute)
=======
>>>>>>> 1fe3724820f1ef9957aca0183ccb2b2193a05165
app.use('/erpdatabase/inventory', inventoryRoute)
app.use('/erpdatabase/brand', brandRoute)
app.use('/erpdatabase/warranty', warrantyRoute)

app.use('/erpdatabase/sales', salesRoute)
app.use('/erpdatabase/liability', liabilityRoute)
app.use('/erpdatabase/admin/', adminRoute)

app.use('/erpdatabase/category', categoryRoute)
app.use('/erpdatabase/income', incomeRoute)
app.use('/erpdatabase/expense', expenseRoute)


<<<<<<< HEAD

=======
>>>>>>> 1fe3724820f1ef9957aca0183ccb2b2193a05165
app.listen('3000', () => {
    console.log('server started at 3000')
})
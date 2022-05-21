const express = require('express')
const app=express()
const dbCreator = require('./model/createDatabase')

const inventoryRoute = require('./routes/inventoryRoutes')
const brandRoute = require('./routes/brandRoutes')
const warrantyRoute = require('./routes/warrantyRoutes')
const salesRoute = require('./routes/salesRoutes')
const liabilityRoute = require('./routes/liabilityRoutes')
const adminRoute = require('./routes/adminRoutes')
const categoryRoute = require('./routes/categoryRoutes')
const incomeRoute = require('./routes/incomeRoutes')

dbCreator.createDatabase()

app.use(express.json())

app.use('/erpdatabase/inventory', inventoryRoute)
app.use('/erpdatabase/brand', brandRoute)
app.use('/erpdatabase/warranty', warrantyRoute)

app.use('/erpdatabase/sales', salesRoute)
app.use('/erpdatabase/liability', liabilityRoute)
app.use('/erpdatabase/admin/', adminRoute)

app.use('/erpdatabase/category', categoryRoute)
app.use('/erpdatabase/income', incomeRoute)


app.listen('3000', () => {
    console.log('server started at 3000')
})
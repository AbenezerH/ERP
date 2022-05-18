const express = require('express')
const app=express()
const dbCreator = require('./model/createDatabase')

const inventoryRoute = require('./routes/inventoryRoutes')
const brandRoute = require('./routes/brandRoutes')

dbCreator.createDatabase()

app.use(express.json())
app.use('/inventory', inventoryRoute)
app.use('/brand', brandRoute)

app.listen('3000', () => {
    console.log('server started at 3000')
})
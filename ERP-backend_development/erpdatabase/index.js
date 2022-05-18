const express = require('express')
const app=express()
const dbCreator = require('./model/createDatabase')
const inventoryRoute = require('./routes/inventoryRoutes')

  dbCreator.createDatabase()

  app.use(express.json())
  app.use('/inventory', inventoryRoute)

  app.listen('3000', () => {
      console.log('server started at 3000')
  })
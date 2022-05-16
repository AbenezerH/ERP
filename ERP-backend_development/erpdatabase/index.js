const express = require('express')
const app=express()
const dbCreator = require('./model/createDatabase')

  dbCreator.createDatabase()

  app.listen('3000', () => {
      console.log('server started at 3000')
  })
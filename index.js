const express = require('express')
const server = express()
const mongoose = require('mongoose')

const dbURI = 'mongodb://localhost/financial_stats'
// mongoose.connect( , {})

server.use(express.json())

// const todoRoutes = require('./routes/index')

server.use((error, req, res, next) => {
    res.status(500).json({ message: error.message })
})

module.exports = server
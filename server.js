const express = require("express")
const helmet = require("helmet")
const database = require("./data/router/database")

const server=express()

server.use(express.json())
server.use(helmet())

server.use("/api", database)

server.get("/", (req, res) => {
    res.send('<p>working window</p>')
})

module.exports = server

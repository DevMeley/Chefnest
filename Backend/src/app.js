const express = require("express")
const healthcheckrouter = require("../routes/healthcheckroute")

const app = express()

app.use(express.json())

app.use("/heath", healthcheckrouter)

module.exports = app

const express = require("express")
const heathcheck = require("../controller/healthcheckcontroller")

const router = express.Router()

router.get("/serverhealth", heathcheck)

module.exports = router

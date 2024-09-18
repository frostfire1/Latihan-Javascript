const express = require('express')
const { oddnumber } = require('../../controllers/Soal 1/odd')
const routes1 = express.Router()

routes1.use(express.json())

routes1.get("/odd_even/:n", oddnumber)

module.exports = routes1;
const express = require('express');
const { min_max } = require('../../controllers/Soal 2/soal2');
const routes2 = express.Router()

routes2.use(express.json())

routes2.post("/min_max", min_max)

module.exports = routes2;
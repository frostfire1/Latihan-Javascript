const express = require('express');
const {panjang} = require('../../controllers/Soal 4/soal4');
const routes4 = express.Router()

routes4.use(express.json())

routes4.get("/panjang/:satuan/:value", panjang)

module.exports = routes4;
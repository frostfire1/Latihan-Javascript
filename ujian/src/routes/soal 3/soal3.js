const express = require('express');
const { VowelCount } = require('../../controllers/Soal 3/soal3');
const routes3 = express.Router()

routes3.use(express.json())

routes3.post("/vowel_count", VowelCount)

module.exports = routes3;
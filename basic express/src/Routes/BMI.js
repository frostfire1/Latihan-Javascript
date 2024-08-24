const express = require('express');
const BMI = require('../controllers/BMI/BMI');
const BMIRouter = express.Router();

BMIRouter.get('/:weight/:height', BMI.BMI);

module.exports = BMIRouter
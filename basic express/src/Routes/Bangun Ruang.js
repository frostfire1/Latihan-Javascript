const express = require('express');
const { Kubus } = require('../controllers/Bangun Ruang/kubus');
const RouterBangunRuang = express.Router();

RouterBangunRuang.get('/kubus/:sisi', Kubus);
RouterBangunRuang.get('/kubus/volume/:sisi', Kubus);
RouterBangunRuang.get('/kubus/luas/:sisi', Kubus);
RouterBangunRuang.get('/kubus/keliling/:sisi', Kubus);
RouterBangunRuang.get('/kubus/diagonal/:sisi', Kubus);



module.exports = { RouterBangunRuang };

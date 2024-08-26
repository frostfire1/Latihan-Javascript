const express = require('express');
const RouterJenisBilangan = express.Router();
const Ascii = require('../controllers/Jenis Bilangan/Ascii');
const Binary = require('../controllers/Jenis Bilangan/Biner');
const Decimal = require('../controllers/Jenis Bilangan/Decimal');
const Hexadecimal = require('../controllers/Jenis Bilangan/Hexadecimal');

RouterJenisBilangan.use(express.json());
RouterJenisBilangan.post('/ascii', Ascii.Ascii);
RouterJenisBilangan.post('/ascii/octal', Ascii.Octal);
RouterJenisBilangan.post('/ascii/binary', Ascii.Binary);
RouterJenisBilangan.post('/ascii/decimal', Ascii.Decimal);
RouterJenisBilangan.post('/ascii/hexadecimal', Ascii.Hexadecimal);

RouterJenisBilangan.post('/binary', Binary.Binary);
RouterJenisBilangan.post('/binary/ascii', Binary.Ascii);
RouterJenisBilangan.post('/binary/decimal', Binary.Decimal);
RouterJenisBilangan.post('/binary/hexadecimal', Binary.Hexadecimal);
RouterJenisBilangan.post('/binary/octal', Binary.Octal);

RouterJenisBilangan.post('/decimal', Decimal.Decimal);
RouterJenisBilangan.post('/decimal/ascii', Decimal.Ascii);
RouterJenisBilangan.post('/decimal/binary', Decimal.Binary);
RouterJenisBilangan.post('/decimal/hexadecimal', Decimal.Hexadecimal);
RouterJenisBilangan.post('/decimal/octal', Decimal.Octal);

RouterJenisBilangan.post('/hexadecimal', Hexadecimal.Hexadecimal);
RouterJenisBilangan.post('/hexadecimal/ascii', Hexadecimal.Ascii);
RouterJenisBilangan.post('/hexadecimal/binary', Hexadecimal.Binary);
RouterJenisBilangan.post('/hexadecimal/decimal', Hexadecimal.Decimal);
RouterJenisBilangan.post('/hexadecimal/octal', Hexadecimal.Octal);

module.exports = RouterJenisBilangan;



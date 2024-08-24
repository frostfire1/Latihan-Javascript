const express = require('express');
const app = express();
const port = 3000;
const { RouterBangunRuang } = require('./Routes/Bangun Ruang');
const RouterConver = require('./Routes/convert');
const RouterJenisBilangan = require('./Routes/Jenis Bilangan');
const RouterBMI = require('./Routes/BMI');

app.use('/bangunRuang', RouterBangunRuang);
app.use('/convert', RouterConver);
app.use('/jenisBilangan', RouterJenisBilangan);
app.use('/bmi', RouterBMI);

function startServer() {
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });
}

module.exports = { startServer, app };

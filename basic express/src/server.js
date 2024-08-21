const express = require('express');
const app = express();
const port = 3000;
const { RouterBangunRuang } = require('./Routes/Bangun Ruang');

app.use('/bangunRuang', RouterBangunRuang);

function startServer() {
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });
}

module.exports = { startServer, app };

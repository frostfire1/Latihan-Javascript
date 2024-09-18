const express = require('express');
const routes1 = require('./routes/Soal 1/odd');
const routes2 = require('./routes/Soal 2/soal2');
const routes3 = require('./routes/soal 3/soal3');
const routes4 = require('./routes/soal 4/soal4');
const app = express();
const port = 3001;

app.use("/",routes2)
app.use("/",routes1)
app.use("/",routes3)
app.use("/", routes4)

app.use(express.json());
function startServer() {
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });
}

module.exports = { startServer, app };

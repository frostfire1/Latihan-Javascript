const Binary = require('../../utils/Jenis Bilangan/Binary');

exports.Binary = (req, res, next) => {
    const b = req.body;
    const binary = new Binary(b.value);
    res.json(binary.toAll());
}

exports.Decimal = (req, res, next) => {
    const b = req.body;
    const binary = new Binary(b.value);
    res.json(binary.toDecimal());
}

exports.Hexadecimal = (req, res, next) => {
    const b = req.body;
    const binary = new Binary(b.value);
    res.json(binary.toHexadecimal());
}

exports.Octal = (req, res, next) => {
    const b = req.body;
    const binary = new Binary(b.value);
    res.json(binary.toOctal());
}

exports.Ascii = (req, res, next) => {
    const b = req.body;
    const binary = new Binary(b.value);
    res.json(binary.toAscii());
}

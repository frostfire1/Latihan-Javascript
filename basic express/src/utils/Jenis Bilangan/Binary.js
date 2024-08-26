class Binary {
    constructor(value) {
        this.values = value.split(' ');
        this.base = 2;
    }

    toDecimal() {
        return this.values.map(val => parseInt(val, this.base));
    }

    toAscii() {
        return this.toDecimal().map(dec => String.fromCharCode(dec)).join('');
    }

    toOctal() {
        return this.toDecimal().map(dec => dec.toString(8));
    }

    toHexadecimal() {
        return this.toDecimal().map(dec => dec.toString(16));
    }

    toAll() {
        return {
            Decimal: this.toDecimal(),
            Ascii: this.toAscii(),
            Octal: this.toOctal(),
            Hexadecimal: this.toHexadecimal()
        };
    }
}

module.exports = Binary;

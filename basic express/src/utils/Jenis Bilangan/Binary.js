class Binary {
    constructor(value, base) {
        this.value = value;
        this.base = base;
    }

    toDecimal() {
        return parseInt(this.value, this.base);
    }

    toAscii() {
        return String.fromCharCode(this.toDecimal());
    }

    toOctal() {
        return this.toDecimal().toString(8);
    }

    toHexadecimal() {
        return this.toDecimal().toString(16);
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
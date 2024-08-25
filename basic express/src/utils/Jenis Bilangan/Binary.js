class Binary {
    constructor(value, base) {
        this.value = value;
        this.base = base;
    }

    static toDecimal() {
        return parseInt(this.value, this.base);
    }

    static toAscii() {
        return String.fromCharCode(this.toDecimal());
    }

    static toOctal() {
        return this.toDecimal().toString(8);
    }

    static toHexadecimal() {
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
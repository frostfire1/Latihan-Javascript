class Hexadecimal {
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

    static toBinary() {
        return this.toDecimal().toString(2);
    }

    static toOctal() {
        return this.toDecimal().toString(8);
    }

    toAll() {
        return {
            Decimal: this.toDecimal(),
            Ascii: this.toAscii(),
            Binary: this.toBinary(),
            Octal: this.toOctal()
        };
    }
}

module.exports = Hexadecimal;
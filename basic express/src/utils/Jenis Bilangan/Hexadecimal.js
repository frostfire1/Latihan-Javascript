class Hexadecimal {
    constructor(value) {
        this.value = value;
    }

    toDecimal() {
        return parseInt(this.value, 16);
    }

    toAscii() {
        return String.fromCharCode(this.toDecimal());
    }

    toBinary() {
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
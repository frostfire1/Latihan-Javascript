class Hexadecimal {
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

    toBinary() {
        return this.toDecimal().toString(2);
    }

    toOctal() {
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
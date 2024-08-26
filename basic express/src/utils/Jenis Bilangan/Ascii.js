class Ascii {
    constructor(value, base) {
        this.value = value;
        this.base = base || 10;
    }

    toDecimal() {
        return parseInt(this.value, this.base);
    }

    toBinary() {
        return this.toDecimal().toString(2);
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
            Binary: this.toBinary(),
            Octal: this.toOctal(),
            Hexadecimal: this.toHexadecimal()
        };
    }
}

module.exports = Ascii;

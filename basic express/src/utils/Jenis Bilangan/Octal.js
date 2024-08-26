class Octal {
    constructor(value) {
        this.value = value;
        this.base = 8;
    }

    toDecimal() {
        return parseInt(this.value, this.base);
    }

    toBinary() {
        return this.toDecimal().toString(2);
    }

    toHexadecimal() {
        return this.toDecimal().toString(16);
    }

    toAll() {
        return {
            Decimal: this.toDecimal(),
            Binary: this.toBinary(),
            Hexadecimal: this.toHexadecimal()
        };
    }
}

module.exports = Octal;
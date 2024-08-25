class Octal {
    constructor(value, base) {
        this.value = value;
        this.base = base;
    }

    static toDecimal() {
        return parseInt(this.value, this.base);
    }

    static toBinary() {
        return this.toDecimal().toString(2);
    }

    static toHexadecimal() {
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
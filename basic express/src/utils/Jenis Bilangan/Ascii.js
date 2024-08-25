class Ascii {
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

    static toOctal() {
        return this.toDecimal().toString(8);
    }

    static toHexadecimal() {
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

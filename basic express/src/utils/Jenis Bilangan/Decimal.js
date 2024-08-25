class Decimal {
    constructor(value, base) {
        this.value = value;
        this.base = base;
    }

    static toBinary() {
        return this.value.toString(2);
    }

    static toOctal() {
        return this.value.toString(8);
    }

    static toHexadecimal() {
        return this.value.toString(16);
    }

    toAll() {
        return {
            Binary: this.toBinary(),
            Octal: this.toOctal(),
            Hexadecimal: this.toHexadecimal()
        };
    }
}

module.exports = Decimal;
class Decimal {
    constructor(value) {
        this.value = value;
    }

    toBinary() {
        return this.value.toString(2);
    }

    toOctal() {
        return this.value.toString(8);
    }

    toHexadecimal() {
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

class BMI {
    calculateBMI(weight, height) {
        return weight / (height * height);
    }

    getBMICategory(bmi) {
        if (bmi < 18.5) {
            return "Kekurangan Berat Badan";    
        } else if (bmi < 24.9) {
            return "Normal (Ideal)";
        } else if (bmi < 29.9) {
            return "Kelebihan Berat Badan";
        } else {
            return "Kegemukan (Obesitas)";
        }
    }

    getBMIResult(weight, height) {
        const bmi = this.calculateBMI(weight, height);
        const category = this.getBMICategory(bmi);
        return {
            tinggi: height,
            berat: weight,
            bmi : bmi,
            Kategori : category
        };
    }

    static getBMIResultWithIdealWeight(weight, height) {
        const bmiResult = this.getBMIResult(weight, height);
        const idealWeight = 24.9 * height * height;
        return {
            ...bmiResult,
            idealWeight
        };
    }
}

module.exports = BMI;
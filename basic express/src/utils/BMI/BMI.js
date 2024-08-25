class BMI {
    calculateBMI(weight, height) {
        return (weight / (height * height)).toFixed(2);
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
            bmi: bmi,
            Kategori: category
        };
    }

    getBMIResultWithIdealWeight(weight, height) {
        const bmiCalculator = new BMI();
        const bmiResult = bmiCalculator.getBMIResult(weight, height);
        const idealWeight = (24.9 * height * height).toFixed(2);
        return {
            ...bmiResult,
            idealWeight: idealWeight
        };
    }
}

module.exports = BMI;

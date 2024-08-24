const BMI = require("../../utils/BMI/BMI");

exports.BMI = (req, res) => {
    const weight = parseFloat(req.params.weight);
    const height = parseFloat(req.params.height);
    const bmi = new BMI(weight, height);
    res.json(bmi.getBMIResult());
}

exports.BMIDescription = (req, res) => {
    const weight = parseFloat(req.params.weight);
    const height = parseFloat(req.params.height);
    const bmi = new BMI(weight, height);
    res.json(bmi.getDescription());
}


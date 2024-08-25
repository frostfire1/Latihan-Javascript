const BMI = require("../../utils/BMI/BMI");

exports.BMI = (req, res) => {
    const weight = parseFloat(req.params.weight);
    const height = parseFloat(req.params.height);
    const bmi = new BMI();
    res.json(bmi.getBMIResult(weight, height));
}



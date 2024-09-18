exports.oddnumber = (req,res) => {
    const number = req.params.n;
    let status = "";
    if (number % 2 === 0){
        status = "Bilangan Genap"
    }
    else{
        status = "Bilangan Ganjil"
    }
    res.json({
        number : number,
        result : status
    })
}
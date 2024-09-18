exports.min_max = (req, res)  => {
    const value = req.body.numbers;
    let minimum = 1
    let max = 1
    for(let i = 0; i < value.length; i++){
        if(i == 0){
            minimum = value[i]
            max = value[i]
        }
        if(minimum > value[i]){
            minimum = value[i]
        }
        if(max < value[i]){
            max = value[i]
        }
    }
    res.json({
        numbers : value,
        max : max,
        min : minimum
    })
}
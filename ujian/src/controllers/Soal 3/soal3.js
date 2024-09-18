exports.VowelCount = (req, res) => {
    const value = req.body.sentence.toLowerCase();
    const whitelist = ["a","i","u","e","o"]
    let total = 0;
    for(var i=0; i < value.length; i++){
        for(var j=0; j < whitelist.length; j++){
        if(value.charAt(i) == whitelist[j]){
            total++;
        }
    }
    }
    res.json({
        sentence : req.body.sentence,
        vowelCount : total
    })
}
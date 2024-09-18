exports.panjang = (req, res) => {
    const satuan_list = ["mm","cm","dm","m","dam","hm","km"];
    const satuan = req.params.satuan.toLowerCase();
    const value = parseFloat(req.params.value);

    if(satuan_list.includes(satuan)){
        const index = satuan_list.indexOf(satuan);

    let data = {
        mm : 0.0,
        cm : 0.0,
        dm : 0.0,
        m  : 0.0,
        dam: 0.0,
        hm : 0.0,
        km : 0.0
    };

    const valueInMeters = value * Math.pow(10, index - 3);

    for (let i = 0; i < satuan_list.length; i++) {
        data[satuan_list[i]] = valueInMeters * Math.pow(10, 3 - i);
    }

    res.json(data);
    }
    else{
        res.send("SATUAN TIDAK ADA, ADA NYA. mm,cm,dm,m,dam,hm,km")
    }
};
function razhodi(input){
    let taksa = Number(input[0]);
    let kecove = taksa * 0.60;
    let ekip = kecove * 0.80;
    let topka = ekip / 4;
    let aksesoari = topka /5;
    let total = taksa + kecove + ekip + topka + aksesoari;
    console.log(total);
}
razhodi([365])
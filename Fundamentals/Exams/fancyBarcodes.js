function fancyBarcodes(data){
    let regex = /@#+(?<pass>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let regexNum = /[0-9]+/;
    
    for(let i = 1; i <= data[0]; i++){
        if(regex.test(data[i])){
            let num = '';
            let match = regex.exec(data[i]);
            let pass = match.groups.pass;
            if(regexNum.test(pass)){
                for(let el of pass){
                    if(regexNum.test(el)){
                        let matchNum = el.match(regexNum);
                        num += matchNum;
                    }
                }
                console.log(`Product group: ${num}`)
            }else{
                console.log(`Product group: 00`);
            }

        }else{
            console.log('Invalid barcode');
        }
    }

}
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
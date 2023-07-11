function netherRealms(input) {
    
    let text = input.trim().split(/[, ]+/g)
    let regexNumber = /-?[0-9]+\.?[0-9]*/g;
    let regexName = /[a-zA-Z]+/g
    let regexSymbol = /\/*\**/g

    let sortText = text.sort((a, b) => a.localeCompare(b));

    for (let el of sortText) {
        if(el.includes(",") || el.includes(" ")){
            continue;
        }
        let number = 0;
        let damage = 0;
        let healt = 0;
        let symbol = '';
        let name = '';

        for (let char of el) {
            if (regexName.test(char)) {
                let curentChar = char.match(regexName);
                name = name.concat(curentChar);
            }
        }
        if (regexSymbol.test(el)) {
            symbol = el.match(regexSymbol).join('');
        }
        if (regexNumber.test(el)) {
            number = el.match(regexNumber);
            for(let el of number){
                damage += Number(el);
            }
        }
        for(let el of name){
            healt += Number(el.charCodeAt(0));
        }
        if(symbol.length > 0){
            for(let el of symbol){
                if(el === "*"){
                    damage *= 2;
                }
                if(el === "/"){
                    damage /= 2;
                }
            }
        }

        console.log(`${el.trim()} - ${healt} health, ${damage.toFixed(2)} damage`);
    }
}
netherRealms('   M3ph1st0** , Azazel  ')
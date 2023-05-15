function dostavkaHrama(input){
    let pileshkiMenu  = Number(input[0]);
    let ribniMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    let riba = 12.40;
    let chiken = 10.35;
    let vegan = 8.15;
    let dostavka = 2.50;
    let obshtaCena = ribniMenu * riba + pileshkiMenu * chiken + veganMenu * vegan;
    let desert = obshtaCena * 0.20 ;
    let totalPrice = obshtaCena + desert + dostavka ;
    console.log(totalPrice);    
}
dostavkaHrama([2,4,3])
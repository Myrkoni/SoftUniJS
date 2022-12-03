function ozelenqvane(input){
    let kvadrati = Number(input[0]);
    let cenaKvadrat = 7.61;
    let totalPrice = cenaKvadrat * kvadrati ;
    let otstapka = 0.18 ;
    let discount = otstapka * totalPrice ;
    let cena = totalPrice - discount;
    console.log('The final price is: ' +  cena  + ' lv.');
    console.log('The discount is: ' + discount + ' lv.');
}
ozelenqvane([ 550 ]);
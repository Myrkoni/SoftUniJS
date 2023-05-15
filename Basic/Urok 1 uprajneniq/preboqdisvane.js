function cenaBoqdisvane(input){
    let neobhodimNailon = Number(input[0]);
    let kolichestvoBoq = Number(input[1]);
    let kolichestvorazreditel = Number(input[2]);
    let chasoveRabota = Number(input[3]);
    let nailon = 1.5;
    let boq = 14.5;
    let razreditel = 5.00; 
    let torbichki = 0.40;
    let cenaMateriali = (kolichestvoBoq * 0.10 + kolichestvoBoq) * boq + (neobhodimNailon + 2) * nailon+ kolichestvorazreditel * razreditel + torbichki;
    let sumaZaMaistora = (cenaMateriali * 0.30) * chasoveRabota;
    let totalPrice = sumaZaMaistora + cenaMateriali;
    console.log(totalPrice);
}
cenaBoqdisvane([10, 11 , 4 ,8]);
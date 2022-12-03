function uchebniMateriali(input){
    let broiHimikalki = Number(input[0]);
    let broiMarkeri = Number(input[1]);
    let litraPreparat = Number(input[2]);
    let procentOtstypka = (Number(input[3])/100);
    let paketHimikalki = 5.80 ;
    let paketMarkeri = 7.20 ;
    let preparat = 1.20 ;
    let totalPrace = broiHimikalki * paketHimikalki + broiMarkeri * paketMarkeri + litraPreparat * preparat;
    let cenaSNamalenie = totalPrace - totalPrace * procentOtstypka;
    console.log(cenaSNamalenie);

}
uchebniMateriali([2 ,3 ,4 ,25])
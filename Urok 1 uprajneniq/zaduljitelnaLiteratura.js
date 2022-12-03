function chasaNaDen(input){
    let brojStraniciKniga = Number(input[0]);
    let straniciNaChas = Number(input[1]);
    let dniZaProchit = Number(input[2]);
    let vremeZaChetene = (brojStraniciKniga / straniciNaChas) / dniZaProchit ;
    console.log(vremeZaChetene); 
}
chasaNaDen([212 ,20 ,2 ])
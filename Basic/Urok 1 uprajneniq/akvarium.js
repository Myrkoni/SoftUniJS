function obemVoda(input){
    let daljina = Number(input[0]);
    let shirochina = Number(input[1]);
    let visochina = Number(input[2]);
    let procent = Number(input[3]);
    let obem = (daljina * shirochina * visochina) / 1000;
    let vmestimos = obem - obem * (procent/100);
    console.log(vmestimos); 
}
obemVoda([85,75,47,17])
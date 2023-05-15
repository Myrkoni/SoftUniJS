function procent(input){
    let depozitSuma = Number(input[0]);
    let sroc = Number(input[1]);
    let lihvenprocent = Number(input[2]); 
    let lihva = lihvenprocent / 100;
    let suma = depozitSuma + sroc * ((depozitSuma * lihva)/12);
    console.log(suma);
}
procent([200 , 3 , 5.7 ])
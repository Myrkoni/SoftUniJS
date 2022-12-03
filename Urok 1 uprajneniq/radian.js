function radianToDegres(input){
    let radian = Number(input[0])
    let degres = radian * 180 / Math.PI ;
    console.log(degres);
}
radianToDegres([3.1416])
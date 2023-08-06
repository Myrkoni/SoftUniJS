function softUniReception(arr){
    let first = Number(arr.shift());
    let second = Number(arr.shift());
    let third = Number(arr.shift());
    let students = Number(arr.shift());
    let count = 0;

    while(students !== 0){
        count++;
        if(count % 4 === 0){
            continue;
        }
        students -= (first + second + third);
        if(students <= 0){
            students = 0;
        }
    }
    console.log(`Time needed: ${count}h.`);

}

softUniReception(['1','2','3','45'])
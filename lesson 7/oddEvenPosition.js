function solve(input) {
    let index = 0;
    let n = Number(input[index]);
    index++
    let m = Number(input[index]);
    index++;

    let oddSum = 0;
    let evenSum = 0;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let evenMin = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evenSum += m;
            if (m > evenMax) {
                evenMax = m;
            }
            if (m < evenMin) {
                evenMin = m;
            }
        } else {
            oddSum += m;
            if (m > oddMax) {
                oddMax = m;
            }
            if (m < oddMin) {
                oddMin = m;
            }

        }
        m = Number(input[index]);
        index++
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (oddMin === Number.MAX_SAFE_INTEGER) {
        console.log("OddMin=No,");
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }
    if (oddMax === Number.MIN_SAFE_INTEGER) {
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (evenMin === Number.MAX_SAFE_INTEGER) {
        console.log("EvenMin=No,");
    }else{
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }    
    if (evenMax === Number.MIN_SAFE_INTEGER) {
        console.log(`EvenMax=No`);
    }else{
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
    
}
solve([6,
    2,
    3,
    5,
    4,
    2,
    1])
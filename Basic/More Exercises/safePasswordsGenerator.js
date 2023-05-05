function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxPass = Number(input[2]);
    let countPass = 0;
    let c = 35;
    let d = 64;

    let result = "";
    let full = false;

    for (let o = 1; o <= a; o++) {
        for (let u = 1; u <= b; u++) {
            countPass++;
            if (countPass <= maxPass) {
                result += `${String.fromCharCode(c,d)}${o}${u}${String.fromCharCode(d,c)}|`;
            } else {
                full = true;
                break;
            }
            c++;
            d++;
            if (c > 55) {
                c = 35;
            }
            if (d > 96) {
                d = 64;
            }
        }
        if(full){
            break;
        }
    }
    console.log(result);
}
solve([20, 50, 10])
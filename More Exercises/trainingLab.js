function solve(input){
    let w = Number(input[0]);
    let h = Number(input[1]);

    let deskCount = Math.floor(((h * 100) - 100)/70);
    let lineCount = Math.floor((w * 100)/120);

    console.log(deskCount * lineCount- 3)

}
solve([8.4,
    5.2])
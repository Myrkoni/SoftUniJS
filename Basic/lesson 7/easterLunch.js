function solve(input){
    let breadCount = Number(input[0]);
    let eggCount = Number(input[1]);
    let cookiesKilogram = Number(input[2]);

    let expense = breadCount * 3.20 + eggCount * 4.35 + cookiesKilogram * 5.40 + (eggCount * 12) * 0.15;

    console.log(`${expense.toFixed(2)}`);

}
solve(["3",
"2",
"3"])
function solve(input) {
    let index = 0;
    let Num = input[index];
    index++;
    let prime = 0;
    let nonprime = 0;

    while (Num !== "stop") {
        Num = Number(Num);
        let isPrime = true;
        if (Num < 0) {
            console.log(`Number is negative.`);
            Num = input[index];
            index++
            continue;
        }
        for (let i = 2; i < Num; i++) {
            if (Num % i === 0) {
                isPrime = false;
                break;
            }
        }
            if (isPrime) {
                prime += Num;
            } else {
                nonprime += Num;
            }
            Num = input[index];
            index++;
        
    }
    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${nonprime}`);

}
solve(["30",

"83",

"33",

"-1",

"20",

"stop"])
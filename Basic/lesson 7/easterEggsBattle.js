function solve(input) {
    let eggFirstPlaeyr = Number(input[0]);
    let eggSecondPlayer = Number(input[1]);

    let index = 2;
    let action = input[index];
    index++;

    while (action != "End") {
        if (action === "one") {
            eggSecondPlayer--;
        } else if (action === "two") {
            eggFirstPlaeyr--;
        }

        if (eggFirstPlaeyr <= 0 || eggSecondPlayer <= 0) {
            break;
        }

        action = input[index];
        index++
    }

    if(eggFirstPlaeyr <= 0){
        console.log(`Player one is out of eggs. Player two has ${eggSecondPlayer} eggs left.`);
    }else if(eggSecondPlayer <= 0){
        console.log(`Player two is out of eggs. Player one has ${eggFirstPlaeyr} eggs left.`);
    }else{
        console.log(`Player one has ${eggFirstPlaeyr} eggs left.`);
        console.log(`Player two has ${eggSecondPlayer} eggs left.`);
    }
}
solve([5,
    4,
    "one",
    "two",
    "one",
    "two",
    "two",
    "End"])
function puppyCare(input){
    let countFood = Number(input[0]);
    let index = 1;
    let gramEats = input[index];
    index++;
    let needFood = 0;

    while( gramEats !== "Adopted"){
        gramEats = Number(gramEats);
        needFood += gramEats;

        gramEats = input[index];
        index++;
    }

    if((countFood * 1000) >= needFood){
        console.log(`Food is enough! Leftovers: ${(countFood * 1000) - needFood} grams.`);
    }else {
        console.log(`Food is not enough. You need ${needFood - (countFood * 1000)} grams more.`);
    }
}
puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
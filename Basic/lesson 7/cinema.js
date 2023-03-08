function solve(input){
    let capacity = Number(input[0]);
    let index = 1;
    let people = input[index];
    index++;
    let price = 0;
    let totalMoney = 0;

    while (people != "Movie time!" ){
        people = Number(people);
        capacity -= people;
        if(capacity < 0 ){
            break;
        }
        if ( people % 3 === 0){
            price = people * 5 - 5; 
        }else{
            price = people * 5;
        }
        
        totalMoney+= price;
        price = 0;
        people = input[index];
        index++;
    }
    if(capacity < 0 ){
        console.log("The cinema is full.");
    }else{
        console.log(`There are ${capacity} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${totalMoney} lv.`)
}
solve(["50",
"15",
"10",
"10",
"15",
"5"])
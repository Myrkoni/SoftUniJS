function partyTime(input){
    let guests = {};
    let name = input.shift();
    let count = 0;

    while(name !== "PARTY"){
        count++
        guests[count] = name;
        name = input.shift();
    }
    let arrGuests = Object.entries(guests);
    
    for(let el of input){
        for(let [num, name] of arrGuests){
            if(el === name){
                delete guests[num];
                break;
            }
        }
    }
    
    let arr = Object.entries(guests);
    console.log(arr.length);

    for(let el of arr){
        console.log(el[1]);
    }
}

partyTime([
'7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'9NoBUajQ',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])
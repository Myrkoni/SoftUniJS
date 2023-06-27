function piccolo(input){

    let parking = new Set();

    for(let el of input){
        let [direction, carNumber] = el.split(", ");
        if(direction === "IN"){
            parking.add(carNumber);
        }else{
            parking.delete(carNumber);
        }
    }

    let sort = Array.from(parking).sort((a, b) => a.localeCompare(b))

    for(let el of sort){
        console.log(el)
    }
    if(sort.length === 0){
        console.log("Parking Lot is Empty")
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)
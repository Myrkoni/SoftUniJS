function convertToObject(jsonStr){
    let person = JSON.parse(jsonStr);
    person = Object.entries(person);

    for(let [key, value] of person){
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
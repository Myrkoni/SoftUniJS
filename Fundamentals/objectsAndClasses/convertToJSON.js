function converToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }
    let objJson = JSON.stringify(person)
    console.log(objJson);
}
converToJSON('George', 'Jones', 'Brown')
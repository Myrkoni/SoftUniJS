function addressBook(input){
    let book = {};
    for(let el of input){
        let [name, address] = el.split(":");
        book[name] = address;
    }

    let sortName = Object.keys(book).sort((a, b) => a.localeCompare(b));

    for(let name of sortName){
        console.log(`${name} -> ${book[name]}`)
    }
}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])
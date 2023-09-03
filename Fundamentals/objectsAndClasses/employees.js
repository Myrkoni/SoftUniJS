function employees(data){
    let obj = {};

    for(let name of data){
        obj[name] = name.length;
    }

    for(let el of Object.keys(obj)){
        console.log(`Name: ${el} -- Personal Number: ${obj[el]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
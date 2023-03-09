function solve(input){
    let serchBook = input[0];
    let book = input[1];
    let numBook = 0;
    let index = 2;
    while(book !== "No More Books"){
        numBook++;
        if(book === serchBook ){
            console.log(`You checked ${numBook - 1} books and found it.`);
            break;
        }
        book = input[index];
        index++
    }
    if(book === "No More Books"){
        console.log("The book you search is not here!");
        console.log(`You checked ${numBook} books.`)
    }
}
solve(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])
function solve(string){
    let result = "";

    for(let i = string.length - 1; i >=0; i--){
        let char = string.charAt(i);
        result += `${char}`;
    }
    console.log(result);
}
solve("Hello");

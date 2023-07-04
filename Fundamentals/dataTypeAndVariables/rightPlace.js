function solve(string, char, secondString){
    let result = string.replace("_", char);
    console.log(result === secondString ? "Matched": "Not Matched");
}
solve('Str_ng', 'i', 'String')
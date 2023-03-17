function solve(input) {
    let text = input[0];
    let index = 0;
    index++
    while (text !== "Stop") {
        console.log(text);
        text = input[index];
        index++
    }
}
solve(["Nakov",

    "SoftUni",

    "Sofia",

    "Bulgaria",

    "SomeText",

    "Stop",

    "AfterStop",

    "Europe",

    "HelloWorld"])
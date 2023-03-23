function solve(number) {
    let size = (number.toString()).length;
    let char = (number.toString()).charAt(size - 1);

    switch (char) {
        case "0": console.log("zero"); break;
        case "1": console.log("one"); break;
        case "2": console.log("two"); break;
        case "3": console.log("three"); break;
        case "4": console.log("four"); break;
        case "5": console.log("five"); break;
        case "6": console.log("six"); break;
        case "7": console.log("seve"); break;
        case "8": console.log("eigth"); break;
        case "9": console.log("nine"); break;
    }

}
solve(512)
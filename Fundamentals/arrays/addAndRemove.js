function solve(arr) {
    let result = [];
    let char = 0;

    for (let i = 0; i < arr.length; i++) {
        char++;
        switch (arr[i]) {
            case "add": result.push(char); break;
            case "remove": result.pop();
        }
    }
    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(String(result.join(" ")));
    }
}
solve(['remove', 'remove', 'remove'])
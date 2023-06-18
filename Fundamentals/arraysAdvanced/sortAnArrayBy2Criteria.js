function sortTwoCriteria(arr){
    arr.sort().sort((a, b) => a.length - b.length);
    console.log(arr.join("\n"))
}

sortTwoCriteria(["test",
    "Deny",
    "omen",
    "Default"]
)
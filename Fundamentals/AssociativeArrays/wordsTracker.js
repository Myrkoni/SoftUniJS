function wordsTracker(input){
    let result = new Map();

    let firstEl = input.shift().split(" ");

    for(let el of firstEl){
        result.set(el, 0);
    }

    for(let el of input){
        if(result.has(el)){
            let currentCount = result.get(el);
            result.set(el, currentCount + 1);
        }
    }

    let sorted = Array.from(result).sort((a, b) => b[1] - a[1])

    for(let [el, count] of sorted){
        console.log(`${el} - ${count}`);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])
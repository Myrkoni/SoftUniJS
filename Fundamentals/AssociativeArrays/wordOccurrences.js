function wordOccurrences(input){
    let items = new Map();

    for(let el of input){
        if(items.has(el)){
            let currentCount = items.get(el);
            items.set(el, currentCount + 1);
        }else{
            items.set(el, 1)
        }
    }
    
    let sorted = Array.from(items).sort((a, b) => b[1] - a[1]);

    for(let [el, count] of sorted){
        console.log(`${el} -> ${count} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])
function matchDates(input){
    let regex = /(?<day>\d{2})([.\/-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g
    let result = [];

    for(let el of input){
        let match = [...el.matchAll(regex)];
        result = result.concat(match);
    }
    for(let el of result){
        console.log(`Day: ${el.groups.day}, Month: ${el.groups.month}, Year: ${el.groups.year}`);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])
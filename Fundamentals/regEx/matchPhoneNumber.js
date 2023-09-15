function matchPhoneNumber(input){
    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let result = [];
    for(let el of input){
        let match = el.match(regex);
        result = result.concat(match);
    }
    console.log(result.join(", "))

}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
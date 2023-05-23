function solve(first, second, third){
    let firstMax = Number.MIN_SAFE_INTEGER;
    let secondMax = Number.MIN_SAFE_INTEGER;
    let thirdMax = Number.MIN_SAFE_INTEGER;

    if(first > second && first > third){
        firstMax = first;
        if(second >= third){
            secondMax = second;
            thirdMax = third;
        }else{
            secondMax = third;
            thirdMax = second;
        }
    }else if(second > first && second > third){
        firstMax = second;
        if(first >= third){
            secondMax = first;
            thirdMax = third;
        }else{
            secondMax = third;
            thirdMax = first;
        }
    }else{
        firstMax = third;
        if(first >= second){
            secondMax = first;
            thirdMax = second;
        }else{
            secondMax = second;
            thirdMax = first;
        }
    }
    console.log(`${firstMax}`);
    console.log(`${secondMax}`);
    console.log(`${thirdMax}`);
}
solve(-2,1,3)
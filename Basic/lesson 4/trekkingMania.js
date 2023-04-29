function solve(input){
    let countGroup = Number(input[0]);
    let countGroupMusala = 0;
    let countGroupMonblan = 0;
    let countGroupKilimandjaro = 0;
    let coutGroupK2 = 0;
    let countGroupEverest = 0;
    let people = 0;
    
    for(let i = 1; i <= countGroup; i ++){
        let countPeopleGroup = Number(input[i]);
        people = people + countPeopleGroup;
        if(countPeopleGroup <= 5){
            countGroupMusala = countGroupMusala + countPeopleGroup;
        }else if(countPeopleGroup >=6 && countPeopleGroup <= 12){
            countGroupMonblan = countGroupMonblan + countPeopleGroup;
        }else if(countPeopleGroup >= 13 && countPeopleGroup <=25){
            countGroupKilimandjaro = countGroupKilimandjaro + countPeopleGroup;
        }else if(countPeopleGroup >=26 && countPeopleGroup <= 40){
            coutGroupK2 = coutGroupK2 + countPeopleGroup;
        }else{
            countGroupEverest = countGroupEverest + countPeopleGroup
        }
    }
    console.log(`${((countGroupMusala/people)* 100).toFixed(2)}%`)
    console.log(`${((countGroupMonblan/people)* 100).toFixed(2)}%`)
    console.log(`${((countGroupKilimandjaro/people)* 100).toFixed(2)}%`)
    console.log(`${((coutGroupK2/people)* 100).toFixed(2)}%`)
    console.log(`${((countGroupEverest/people)* 100).toFixed(2)}%`)
}
solve(["10","10","5","1","100","12","26", "17", "37", "40", "78"])
function solve(input){
    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);
    let nameTabs = "";
    
    for(i=2; i<=tabsCount+1; i++){
        nameTabs = input[i];
        switch(nameTabs){
            case "Facebook":
                salary = salary - 150;
                break;
                case "Instagram":
                    salary = salary - 100;
                    break;
                    case "Reddit":
                        salary = salary - 50;
                        break;
        }
    }
    if(salary <= 0){
        console.log("You have lost your salary.");
    }else{
        console.log(salary);
    }
}
    
solve(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])
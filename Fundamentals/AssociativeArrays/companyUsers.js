function companyUsers(input){
    let companyCatalog = new Map();

    for(let el of input){
        let [company, users] = el.split(" -> ");
        if(!companyCatalog.has(company)){
            companyCatalog.set(company, new Set());
        }
        companyCatalog.get(company).add(users);
    }

    let sort = Array.from(companyCatalog).sort((a, b) => a[0].localeCompare(b[0]));
    
    for(let el of sort){
        console.log(el[0]);
        for(let id of el[1]){
            console.log(`-- ${id}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])
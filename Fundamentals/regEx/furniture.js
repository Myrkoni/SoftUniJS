function furniture(data){
    let regex = />>(?<name>[A-Z]\w+)<<(?<price>\d+|\d+.\d+)!(?<quantity>\d+)/g
    let result = [];
    let totalSum = 0;
    for(let el of data){
        let match = [...el.matchAll(regex)];
        result = result.concat(match);
    }
    console.log('Bought furniture:');
    for(let el of result){
        console.log(`${el.groups.name}`);
        totalSum += Number(el.groups.price) * Number(el.groups.quantity );
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
    )

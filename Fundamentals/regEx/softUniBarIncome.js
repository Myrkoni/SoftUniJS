function softUniBarIncome(data) {

    let regex = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+.?\d*)\$/
    let totalPrice = 0;

    for (let el of data) {
        if (el === "end of shift") {
            break;
        }

        if (regex.test(el)) {
            let match = el.match(regex);
            console.log(`${match.groups.name}: ${match.groups.product} - ${(match.groups.count * match.groups.price).toFixed(2)}`);
            totalPrice += match.groups.count * match.groups.price;
        }

    }

    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    '%InvalidName%<Croissant>|2|10.3$',

    'end of shift'])
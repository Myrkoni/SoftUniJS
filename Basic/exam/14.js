function catFood(input) {
    let countCat = Number(input[0]);
    let groun1 = 0;
    let group2 = 0;
    let group3 = 0;
    let totalFood = 0;

    for (let i = 1; i <= countCat; i++) {
        let catFoot = Number(input[i]);

        if (catFoot >= 100 && catFoot < 200) {
            groun1++;
            totalFood += catFoot;
        } else if (catFoot >= 200 && catFoot < 300) {
            group2++;
            totalFood += catFoot;
        } else if (catFoot >= 300 && catFoot < 400) {
            group3++;
            totalFood += catFoot;
        }
    }

    console.log(`Group 1: ${groun1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${((totalFood / 1000) * 12.45).toFixed(2)} lv.`);
}
catFood(["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"])
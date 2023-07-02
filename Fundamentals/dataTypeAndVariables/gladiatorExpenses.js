function solve(lostFights, helmetPrice, swordPrice, shielPrice, armorPrice) {
    let countHelmet = 0;
    let countSword = 0;
    let countShiel = 0;
    let countArmor = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            countHelmet++;
        }
        if (i % 3 === 0) {
            countSword++;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            countShiel++;
            if (countShiel % 2 === 0 ) {
                countArmor++;
            }
        }

    }
    let totalPrice = countHelmet * helmetPrice + countSword * swordPrice + countShiel * shielPrice + countArmor * armorPrice;
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
solve(23,
    12.50,
    21.50,
    40,
    200)
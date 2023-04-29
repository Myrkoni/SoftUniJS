function catLife(input) {
    let breed = input[0];
    let sex = input[1];
    let isValid = true;
    let countMonth = 0;

    if (breed === "British Shorthair") {
        if (sex === "m") {
            countMonth = (13 * 12) / 6;
        } else if (sex === "f") {
            countMonth = (14 * 12) / 6;
        }
    } else if (breed === "Siamese") {
        if (sex === "m") {
            countMonth = (15 * 12) / 6;
        } else if (sex === "f") {
            countMonth = ( 16 * 12) / 6;
        }
    } else if (breed === "Persian") {
        if (sex === "m") {
            countMonth = (14 * 12 ) / 6;
        } else if (sex === "f") {
            countMonth = (15 * 12 ) / 6;
        }
    } else if (breed === "Ragdoll") {
        if (sex === "m") {
            countMonth = (16 * 12) / 6;
        } else if (sex === "f") {
            countMonth = ( 17 * 12) / 6;
        }
    } else if (breed === "American Shorthair") {
        if (sex === "m") {
            countMonth = (12 * 12) / 6;
        } else if (sex === "f") {
            countMonth = ( 13 * 12 ) / 6 ;
        }
    } else if (breed === "Siberian") {
        if (sex === "m") {
            countMonth = (11 * 12 ) / 6;
        } else if (sex === "f") {
            countMonth = (12 * 12 ) / 6;  
        }
    } else {
        isValid = false;
        console.log(`${breed} is invalid cat!`);
    }
    if (isValid) {
        console.log(`${Math.floor(countMonth)} cat months`);
    }
}
catLife(["Persian",
"m"])
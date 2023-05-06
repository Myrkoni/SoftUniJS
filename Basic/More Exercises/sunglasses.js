function solve(input) {
    let number = Number(input[0]);

    let result = "";

    for (let i = 1; i <= number; i++) {
        if (i === 1) {
            for (let j = 1; j <= number * 2; j++) {
                result += "*";
            }
            for (let k = 1; k <= number; k++) {
                result += " ";
            }
            for (let l = 1; l <= number * 2; l++) {
                result += "*";
            }
            console.log(result);
            result = "";
        } else if (i === number) {
            for (let j = 1; j <= number * 2; j++) {
                result += "*";
            }
            for (let k = 1; k <= number; k++) {
                result += " ";
            }
            for (let l = 1; l <= number * 2; l++) {
                result += "*";
            }
            console.log(result);
            result = "";
        } else if ((number % 2 === 0 || (number - 1) % 2 === 0) && ((number / 2) === i || ((number + 1) / 2) === i)) {
            for (let i = 1; i <= number * 2; i++) {
                if (i === 1 || i === (number * 2)) {
                    result += "*";
                } else {
                    result += "/";
                }
            }
            for (let j = 1; j <= number; j++) {
                result += "|";
            }
            for (let i = 1; i <= number * 2; i++) {
                if (i === 1 || i === (number * 2)) {
                    result += "*";
                } else {
                    result += "/";
                }
            }
            console.log(result);
            result = "";
        } else {
            for (let i = 1; i <= number * 2; i++) {
                if (i === 1 || i === (number * 2)) {
                    result += "*";
                } else {
                    result += "/";
                }
            }
            for (let j = 1; j <= number; j++) {
                result += " ";
            }
            for (let i = 1; i <= number * 2; i++) {
                if (i === 1 || i === (number * 2)) {
                    result += "*";
                } else {
                    result += "/";
                }
            }
            console.log(result);
            result = "";
        }
    }
}
solve([7]);
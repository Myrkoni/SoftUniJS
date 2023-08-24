function passwordValidator(data) {
    let password = data.shift().split('');

    let command = data.shift();
    let regex = /[a-zA-Z0-9\_]/

    while (command !== 'Complete') {
        let action = command.split(' ');
        if (action[0] === 'Make') {
            let char = password[action[2]];
            if (action[1] === 'Upper') {
                password.splice(action[2], 1, char.toUpperCase());
            }
            if (action[1] === 'Lower') {
                password.splice(action[2], 1, char.toLowerCase());
            }
            console.log(password.join(''));
        }
        if (action[0] === 'Insert') {
            if (action[1] >= 0 && action[1] < password.length) {
                password.splice(action[1], 0, action[2]);
                console.log(password.join(''))
            }
        }

        if (action[0] === 'Replace') {
            if (password.includes(action[1])) {
                let charVale = action[1].charCodeAt(0) + Number(action[2]);
                let newChar = String.fromCharCode(charVale);
                for (let i = 0; i < password.length; i++) {
                    if (password[i] === action[1]) {
                        password.splice(i, 1, newChar);
                    }
                }
                console.log(password.join(''));
            }
        }
        if (action[0] === 'Validation') {
            let countUppper = 0;
            let countLower = 0;
            let countDigit = 0;
            if (password.length < 8) {
                console.log('Password must be at least 8 characters long!')
            }
            for (let el of password) {
                if(!regex.test(el)){
                    console.log("Password must consist only of letters, digits and _!");
                    break;
                }
            }
            for (let el of password) {
                if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
                    countUppper++;
                    break;
                }
            }
            if (countUppper === 0) {
                console.log("Password must consist at least one uppercase letter!");
            }
            for (let el of password) {
                if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
                    countLower++;
                    break;
                }
            }
            if (countLower === 0) {
                console.log("Password must consist at least one lowercase letter!");
            }
            for (let el of password) {
                if (el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) {
                    countDigit++;
                    break;
                }       
            }
            if (countDigit === 0) {
                console.log("Password must consist at least one digit!");
            }
        }

        command = data.shift()
    }

}
passwordValidator(['invalidp^assword*',

    'Add 2 p',

    'Replace i -50',

    'Replace * 10',

    'Make Upper 2',

    'Validation',

    'Complete'])

console.log('--------')

passwordValidator(['123456789',

    'Insert 3 R',

    'Replace 5 15',

    'Validation',

    'Make Lower 3',

    'Complete'])
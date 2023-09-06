function extractEmails(input) {
    let regex = /(^| )[A-Za-z0-9]+[A-Za-z.\-_0-9]*@{1}[A-Za-z._-]+(\.[a-z]+)+/g;
    let result = '';

    for (let el of input.split(' ')) {

        if (regex.test(el)) {
            let valid = el.match(regex);
            console.log(valid.join(''));
        }
    }
}
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
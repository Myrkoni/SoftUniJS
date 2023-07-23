function softUniStudents(data) {
    let courseCapacity = {};
    let courses = {};
    let courseNameUsers = {};
    let users = {};

    for (let el of data) {
        if (el.includes(':')) {
            let [course, capacity] = el.split(': ');
            if (capacity < 0) {
                continue;
            }
            if (!courseCapacity.hasOwnProperty(course)) {
                courseCapacity[course] = Number(capacity);
                courses[course] = {};
                courseNameUsers[course] = [];
            } else {
                courseCapacity[course] += Number(capacity);
            }
        } else {
            let command = el.split('] with email ');
            let [user, credits] = command[0].split('[')
            let [email, course] = command[1].split(' joins ');

            if (!users.hasOwnProperty(user)) {
                users[user] = email;
            }

            if (courses.hasOwnProperty(course) && courseNameUsers[course].length < courseCapacity[course]) {
                if (!courses[course].hasOwnProperty(user)) {
                    courses[course][user] = credits;
                    courseNameUsers[course].push(user);
                }
            }
        }
    }

    let sortCourses = Object.entries(courseNameUsers).sort((a, b) => b[1].length - a[1].length);

    for (let el of sortCourses) {
        console.log(`${el[0]}: ${courseCapacity[el[0]] - Number(el[1].length)} places left`);
        let sortUsers = '';
        sortUsers = Object.entries(courses[el[0]]).sort((a, b) => b[1] - a[1])
        for (let key of sortUsers) {
            console.log(`--- ${key[1]}: ${key[0]}, ${users[key[0]]}`);
        }
    }
}
softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore',
    'user49[106] with email user49@user.com joins JSCore'])
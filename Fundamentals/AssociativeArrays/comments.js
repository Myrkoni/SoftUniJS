function comments(data) {
    let user = {};
    let article = {};

    for (let el of data) {
        if (el.includes(':')) {
            let command = el.split(': ');
            let [userName, articleName] = command[0].split(' posts on ');
            let [title, content] = command[1].split(', ');
            if (user.hasOwnProperty(userName) && article.hasOwnProperty(articleName)) {
                article[articleName] += 1;
                if (!user[userName].hasOwnProperty(articleName)) {
                    user[userName][articleName] = {};
                }
                if (user[userName].hasOwnProperty(articleName)) {
                    user[userName][articleName]['title'] = title;
                    user[userName][articleName]['content'] = content;
                }
            }
        } else {
            let command = el.split(' ');
            let action = command[0];
            let name = command[1];
            if (action === 'user') {
                if (!user.hasOwnProperty(name)) {
                    user[name] = {};
                }
            }
            if (action === 'article') {
                if (!article.hasOwnProperty(name)) {
                    article[name] = 0;
                }
            }
        }
    }

    let sortArticle = Object.entries(article).sort((a, b) => b[1] - a[1]);
    let sortUser = Object.keys(user).sort((a, b) => a.localeCompare(b));

    for (let el of sortArticle) {
        console.log(`Comments on ${el[0]}`);
        if (el[1] > 0) {
            for (let key of sortUser) {
                if (user[key].hasOwnProperty(el[0]))
                    console.log(`--- From user ${key}: ${user[key][el[0]]['title']} - ${user[key][el[0]]['content']}`);
            }
        }
    }
}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books',
    'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']
)
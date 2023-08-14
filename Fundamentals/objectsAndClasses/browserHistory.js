function browserHistory(brows, data) {
    for (let el of data) {
        if (el === "Clear History and Cache") {
            brows['Open Tabs'] = [];
            brows['Recently Closed'] = [];
            brows['Browser Logs'] = [];

        } else {
            let command = el.split(' ').slice(0, 1).join('');
            let page = el.split(' ').slice(1).join(' ');
            if (command === "Open") {
                brows['Open Tabs'].push(page);
                brows['Browser Logs'].push(el);
            }
            if (command === "Close") {
                if (brows['Open Tabs'].includes(page)) {
                    while (brows['Open Tabs'].includes(page)) {
                        let closeTab = brows['Open Tabs'].splice(brows['Open Tabs'].indexOf(page), 1);
                        brows['Recently Closed'].push(closeTab);
                        brows['Browser Logs'].push(el);
                    }
                }
            }
        }
    }
console.log(`${brows['Browser Name']}`);
console.log(`Open Tabs: ${brows['Open Tabs'].join(', ')}`);
console.log(`Recently Closed: ${brows['Recently Closed'].join(', ')}`);
console.log(`Browser Logs: ${brows['Browser Logs'].join(', ')}`)

}

browserHistory({"Browser Name":"Google Chrome","Open Tabs":
["Facebook","YouTube","Google Translate"],
 "Recently Closed":["Yahoo","Gmail"],
 "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail",
 "Close Gmail","Open Facebook"]},
 ["Close Facebook", "Open StackOverFlow", "Open Google"]

)
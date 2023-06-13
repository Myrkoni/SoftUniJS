function ladybugs(input) {
    let map = []
    for (let i = 0; i < input[0]; i++) {
        map.push(0);
    }
    let ladybugs = input[1].split(" ");
    for (let el of ladybugs) {
        el = Number(el)
        if (el >= 0 && el <= map.length - 1) {
            map[el] = 1;
        }
    }
    for (let i = 2; i < input.length; i++) {
        let [start, direction, end] = input[i].split(" ");
        start = Number(start);
        end = Number(end)

        if (start < 0 || start > map.length - 1 || map[start] === 0) {
            continue;
        }
        map[start] = 0;
        let isFly = true;
        if (direction === "right") {
            while (isFly) {
                if (map[start + end] === 0) {
                    map[start + end] = 1;
                    isFly = false;
                } else if (map[start + end] === 1) {
                    end += end;
                } else {
                    isFly = false;
                }
            }

        }
        if (direction === "left") {
            while (isFly) {
                if (map[start - end] === 0) {
                    map[start - end] = 1;
                    isFly = false;
                } else if (map[start - end] === 1) {
                    end += end;
                } else {
                    isFly = false;
                }
            }
        }
    }

    console.log(map.join(" "))
}
ladybugs([5, '3',
    '3 left 2',
    '1 left -2'])
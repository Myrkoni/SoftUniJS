function solve(input) {
    let useGames = String(input[0]).split(" ");

    for (let i = 1; i < input.length; i++) {
        let comands = input[i].split(" ");
        let comand = comands[0];
        let game = comands[1];

        let isUse = useGames.includes(game);
        let index = useGames.indexOf(game);

        if (comand === "Play!") {
            break;
        } else if (comand === "Install") {
            if (!isUse) {
                useGames.push(game);
            }
        } else if (comand === "Uninstall") {
            if (isUse) {
                useGames.splice(index, 1);
            }
        } else if (comand === "Update") {
            if (isUse) {
                useGames.push(game);
                useGames.splice(index, 1);
            }
        } else if (comand === "Expansion") {
            let expan = game.split("-");
            let expanGame = expan[0];
            let isExpan = useGames.includes(expanGame);
            let indexExpan = useGames.indexOf(expanGame);
            if (isExpan) {
                useGames.splice(indexExpan + 1, 0, `${expan[0]}:${expan[1]}`);
            }
        }

    }
    console.log(useGames.join(" "));
}
solve(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])
function solve(input) {
    let moevi = input[0];
    let typeHall = input[1];
    let countTickets = Number(input[2]);

    let income = 0;

    if (moevi === "A Star Is Born") {
        if (typeHall === "normal") {
            income = countTickets * 7.50;
        } else if (typeHall === "luxury") {
            income = countTickets * 10.50;
        } else if (typeHall === "ultra luxury") {
            income = countTickets * 13.50;
        }
    } else if (moevi === "Bohemian Rhapsody") {
        if (typeHall === "normal") {
            income = countTickets * 7.35;
        } else if (typeHall === "luxury") {
            income = countTickets * 9.45;
        } else if (typeHall === "ultra luxury") {
            income = countTickets * 12.75;
        }
    } else if (moevi === "Green Book") {
        if (typeHall === "normal") {
            income = countTickets * 8.15;
        } else if (typeHall === "luxury") {
            income = countTickets * 10.25;
        } else if (typeHall === "ultra luxury") {
            income = countTickets * 13.25;
        }
    } else if (moevi === "The Favourite") {
        if (typeHall === "normal") {
            income = countTickets * 8.75;
        } else if (typeHall === "luxury") {
            income = countTickets * 11.55;
        } else if (typeHall === "ultra luxury") {
            income = countTickets * 13.95;
        }
    }
    console.log(`${moevi} -> ${income.toFixed(2)} lv.`);
}
solve(["Green Book",
"normal",
"63"])
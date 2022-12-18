function solve(input){
    let index = 0 ;

    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let boxCount = input[index];
    index++
    let volume = width * length * height;

    while(boxCount !== "Done"){
        boxCount = Number(boxCount);
        volume -= boxCount;
        if(volume < 0){
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            return;
        }
        boxCount = input[index];
        index++;
    }
    console.log(`${volume} Cubic meters left.`);
}
solve(["10",

"10",

"2","20", "20", "20", "20", "122"])
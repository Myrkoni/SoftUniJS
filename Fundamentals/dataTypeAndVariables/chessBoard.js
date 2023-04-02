function solve(n){
    console.log(`<div class="chessboard">`);
    for(let i = 1; i <= n; i++){
        console.log(`\t<div>`);
        for(let j = 1; j <= n; j++){
            if(j % 2 === 0){
                if(i % 2 !== 0){
                console.log(`\t\t<span class="white"></span>`);
                }else{
                    console.log(`\t\t<span class="black"></span>`);
                }
            }else{
                if(i % 2 === 0){
                    console.log(`\t\t<span class="white"></span>`);
                }else {
                    console.log(`\t\t<span class="black"></span>`);
                }
            }
        }
        console.log(`\t</div>`);
    }
    console.log(`\t</div>`)
}
solve(3)
function solve(input){
    let heightHouse = Number(input[0]);
    let lengthHouse = Number(input[1]);
    let heightRoof = Number(input[2]);

    let wallPaint = ((heightHouse * heightHouse)* 2 + (lengthHouse * heightHouse)* 2) - (((1.5*1.5)*2) + (1.2 * 2));
    let roofPaint = ((heightHouse / 2 ) * heightRoof) * 2 + ((heightHouse * lengthHouse)* 2);
    
    totalGreenPaint = wallPaint / 3.4;
    totalRedPaint = roofPaint / 4.3;
    
    console.log(totalGreenPaint.toFixed(2));
    console.log(totalRedPaint.toFixed(2));
  }
  solve([10.25,
    15.45,
    8.88
    ])
function radioCrystals(arr) {

    for (let i = 1; i < arr.length; i++) {
        let desiredThickness = arr[0];
        let currentThickness = arr[i];        
        let counter = 0;
        let isCut = true
        let isLap = true;
        let isGrind = true;
        let isEtch = true;
        let isComplete = false;
        let print = false;
        if (desiredThickness === currentThickness) {
            print = true;
            isComplete = true;
        }
        if((desiredThickness - 2) > currentThickness ){
            continue;
        }
        console.log(`Processing chunk ${currentThickness} microns`);

        while (!isComplete) {
            if (desiredThickness === currentThickness && print) {
                isComplete = true;
                continue;
            }
            if(isCut){
                if (cut(currentThickness) >= desiredThickness) {
                    currentThickness = cut(currentThickness);
                    counter++;
                    print = false;
                    continue;
                } else if(counter > 0 ){
                    console.log(`Cut x${counter}`);
                    counter = 0;
                    currentThickness = roundDown(currentThickness);
                    console.log(`Transporting and washing`);
                    print = true;
                    isCut = false;
                    continue;
                }else{
                    isCut = false;
                }
            }
            if(isLap){
                if (lap(currentThickness) >= desiredThickness) {
                    currentThickness = lap(currentThickness);
                    counter++;
                    print = false;
                    continue;
                } else if(counter > 0 ){
                    console.log(`Lap x${counter}`);
                    counter = 0;
                    currentThickness = roundDown(currentThickness);
                    console.log(`Transporting and washing`);
                    isLap = false;
                    print = true;
                    continue;
                }else{
                    isLap = false;
                }
            }
            if(isGrind){
                if (grind(currentThickness) >= desiredThickness) {
                    currentThickness = grind(currentThickness);
                    counter++;
                    print = false;
                    continue;
                } else if(counter > 0){
                    console.log(`Grind x${counter}`);
                    counter = 0;
                    currentThickness = roundDown(currentThickness);
                    console.log(`Transporting and washing`);
                    print = true;
                    isGrind = false;
                    continue;
                }else{
                    isGrind = false;
                }
            }
            if(isEtch){
                if (etch(currentThickness) >= (desiredThickness - 1)) {
                    currentThickness = etch(currentThickness);
                    counter++;
                    print = false;
                    continue;
                } else if(counter > 0 ){
                    console.log(`Etch x${counter}`)
                    console.log("Transporting and washing");
                    counter = 0;
                    currentThickness = roundDown(currentThickness);
                    print = true;
                    isEtch = false;
                    continue;
                }else{
                    isEtch = false;
                }
            }
                if (currentThickness < desiredThickness && counter < 2) {
                    currentThickness = XRay(currentThickness);
                    counter++;
                    console.log(`X-ray x${counter}`);
                    isComplete = true;
                    continue;
                }
            
        }

        console.log(`Finished crystal ${currentThickness} microns`);

        function cut(number) {
            return (number /= 4);
        }

        function lap(number) {
            return number *= 0.80;
        }

        function grind(number) {
            return number -= 20;
        }

        function etch(number) {
            return number -= 2;
        }

        function XRay(number) {
            return number += 1;
        }

        function roundDown(number) {
            return Math.floor(number);
        }
    }
}

radioCrystals([2000, 1999])
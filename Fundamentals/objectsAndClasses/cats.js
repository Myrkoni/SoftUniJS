function cats(arr){
    class cat {
        constructor(name, age){
            this.name = name;
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for(let el of arr){
        let [name, age]= el.split(" ");
        let myCat = new cat(name, age);
        myCat.meow()
    }
}

cats(['Mellow 2', 'Tom 5']);
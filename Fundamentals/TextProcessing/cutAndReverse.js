function cutAndReverse(string){
    let first = string.slice(0, string.length / 2);
    let second = string.slice(string.length / 2)
    console.log(first.split("").reverse().join(""));
    console.log(second.split("").reverse().join(""))

}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
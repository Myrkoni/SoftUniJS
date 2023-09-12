function hardWords(arr) {
    let text = arr[0];
    let words = arr[1];
    let arrText = text.split(" ");
    for (let word of words) {
        for (let i = 0; i < arrText.length; i++) {
            if (arrText[i].includes("_")) {
                if (arrText[i].includes(".") && arrText[i].length === word.length + 1) {
                    arrText[i] = `${word}.`;
                } else if (arrText[i].includes(",") && arrText[i].length === word.length + 1) {
                    arrText[i] = `${word},`;
                } else if (arrText[i].length === word.length) {
                    arrText[i] = word
                }
            }
        }
    }

    console.log(arrText.join(" "))
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);

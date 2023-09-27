function extractFile(text){
    let arrText = text.split("\\");
    let fileName = arrText.pop();
    let arrFileName = fileName.split(".");
    let extension = arrFileName.pop();
    let file = arrFileName.join(".");
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`)

}
extractFile('C:\\Internal\\training-internal\\template.bak.pptx');
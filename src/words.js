const WORDS = ["guard", "lifeform", "steel"];
let gottenWords = [false, false, false];

function checkTextInput(input){
    // lowercase the word
    let lowerCase = input.toLowerCase();
    let finalWord = lowerCase.replace(/-|\s/g,"");
    // loop through each word, checking each
    // for(const word of WORDS){
    //     if(word == lowerCase){
    //         return true;
    //     }
    // }
    for(let i = 0; i < WORDS.length; i++){
        if(finalWord == WORDS[i]){
            if(!gottenWords[i]){
                gottenWords[i] = true;
                return true;
            }
        }
    }
    return false;
}

export {checkTextInput};

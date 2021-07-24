import * as wordsjs from './words.js';

let wordInput;
let cast;
let hp;
let status;
let castNumber = 0;

window.onload = ()=>{
    init();
}

function init(){
    wordInput = document.querySelector("#wordinput");
    cast = document.querySelector("#cast");
    hp = document.querySelector("#hp");
    status = document.querySelector("#statusmessage");

    cast.onclick = function(e){
        spellCast();
    }
    cast.focus();
}

function spellCast(){
    if(hp.innerHTML != 0){
        let inputValue = wordsjs.checkTextInput(wordInput.value);
        wordInput.value = "";
        // if the word was a castable spell
        if(inputValue){
            castNumber++;
            hp.innerHTML = parseInt(hp.innerHTML) - 33;
            switch(castNumber) {
                case 1:
                    status.innerHTML = "The monster has been weakened! Hit it again!";
                    break;
                case 2:
                    status.innerHTML = "You've hit again! Keep going!";
                    break;
                case 3:
                    hp.innerHTML = 0;
                    status.innerHTML = "The monster has been defeated! You've saved the village!";
                    cast.disabled = true;
                    break;
                default:
                    status.innerHTML = "The monster has been weakened somehow! Hit it again I guess!";
            }
        }
        // if the word was not a castable spell
        else{
            status.innerHTML = "Ooooo, swing and a miss. Try again!";
        }
    }
}

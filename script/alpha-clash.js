// function play(){
//    const homeSection= document.getElementById('home')
// //    console.log(homeScreen.classList);
// homeSection.classList.add(
//     'hidden'
// )
// const playGround=document.getElementById('play-ground');
// // console.log(playGround.classList);
// playGround.classList.remove('hidden')
// }

function play(){
    hideElement('home')
    hideElement("final-score")
    showElement('play-ground')
    setTextElementValue("life",2)
    setTextElementValue("score",0)
continueGame();
}
function handleKeyboard(event){
    const playerPressed= event.key.toLowerCase();
    // console.log(playerPressed);
    // expected to press
    const currentAlphabet=document.getElementById('current-alphabet').innerText.toLowerCase()
    // const expectedAlphabet= currentAlphabet.toLowerCase();
    console.log(playerPressed,currentAlphabet);
    //check
    if(playerPressed=== "Escape")
    {
        gameOver();
    }
    if(playerPressed===currentAlphabet)
    {
        // console.log("Your score increased");
        // const score=document.getElementById('score');
        // const tempScore=score.innerText;
        // const currentScore=parseInt(tempScore);
        // const newscore=currentScore+1;
        // score.innerText=newscore;
        const currentScore=getelementvalue('score');
        const newscore=currentScore+ 1;
        setTextElementValue("score",newscore)

        removeBackground(currentAlphabet);
       continueGame();
    }else{
        // console.log("You lost a lif 
        // const life=document.getElementById('life');
        // const tempLife=life.innerText;
        // const currentLife=parseInt(tempLife);
        // const newlife=currentLife-1;
        // life.innerText=newlife;

        const life=getelementvalue('life');
        const newlife=life-1;
        setTextElementValue('life',newlife)
        if(newlife===0){
            // hideElement("play-ground");
            // showElement("final-score");
            // setTextElementValue('show-score',newscore)
           gameOver();
        }
    }
}
function gameOver(){
    hideElement("play-ground")
    showElement('final-score')
    // update final score
    const lastScore=getelementvalue("score");
    console.log("here i am",lastScore);
    setTextElementValue("show-score",lastScore)
    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackground(currentAlphabet);
}

function setTextElementValue(elementId,value){
    const  element=document.getElementById(elementId);
    element.innerText=value; 
}

function getelementvalue(elementId){
    const element=document.getElementById(elementId)
    const elementValueText=element.innerText;
    const elementValue=parseInt(elementValueText);
    return elementValue;
}

document.addEventListener('keyup',handleKeyboard)

function continueGame(){
const alphabet=getAlphabet();
console.log("Your random alphabet",alphabet);
const currentAlphabet=document.getElementById("current-alphabet");
currentAlphabet.innerText=alphabet;
addBackgroundColor(alphabet);
}
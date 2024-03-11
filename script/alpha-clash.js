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
    showElement('play-ground')
continueGame();
}

function continueGame(){
const alphabet=getAlphabet();
// console.log("Your random alphabet",alphabet);
const currentAlphabet=document.getElementById("current-alphabet");
currentAlphabet.innerText=alphabet;
addBackgroundColor(alphabet);
}
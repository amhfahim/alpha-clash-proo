function hideElement(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden')
} 
function showElement(elementId){
 const element=document.getElementById(elementId);
 element.classList.remove('hidden');
}

function addBackgroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400')
   
}

function getAlphabet(){
    const alphabetStr="abcdefghijklmnopqrstuvwxyz";
    const alphabets= alphabetStr.split('');
    // console.log(alpha);
    const randomNumber= Math.random()*25;
    const index=Math.round(randomNumber);
    // console.log(index);
const alphabet=alphabets[index]
    // console.log(alphabets);
    return alphabet;
} 
function playAgain(){
    
    const playCard=document.getElementById('play');
    playCard.classList.remove('hidden');

    const scoreCard=document.getElementById('scoreCard');
    scoreCard.classList.add('hidden');
    
    addElementValueById('score',0);
    addElementValueById('life',5);


}

function play(){
    const home = document.getElementById('home');
    home.classList.add('hidden');
    const play =document.getElementById('play');
    play.classList.remove('hidden');
    randomKey();
    addRandomText();
}

function removeBg(ElementId){
    const element =document.getElementById(ElementId);
    element.classList.remove('bg-orange-400');

}
function addElementValueById(ElementId,value){
    const id=document.getElementById(ElementId);
    id.innerText=value;
}


document.addEventListener('keyup',keyPressHandle )
function keyPressHandle(event){
const keyPressed = event.key ;
console.log(keyPressed);
const keyShowed =document.getElementById('textArea');
const keyshowed =keyShowed.innerText.toLowerCase();

if(keyPressed===keyshowed){
    console.log('You got point');
    randomKey();
   removeBg(keyshowed);
   const currentScore =document.getElementById('score');
    const currentScoreText=currentScore.innerText;
    const currentScoreNum=parseInt(currentScoreText);

const newScore =currentScoreNum + 1;
currentScore.innerText =newScore;


}
else{
    console.log('you lost a point');
const currentLife=document.getElementById('life');
const currentLifeText =currentLife.innerText;
const currentLifeNum =parseInt(currentLifeText);


const newLife=currentLifeNum - 1;
currentLife.innerText = newLife ;

if(currentLifeNum <= 0){
console.log(
    'gameover'
)
    const playCard=document.getElementById('play');
    playCard.classList.add('hidden');

    const scoreCard=document.getElementById('scoreCard');
    scoreCard.classList.remove('hidden');


    const scoreNum=document.getElementById('score');
    const text =scoreNum.innerText
    addElementValueById('scoreNum',text);

}


}


}
function randomKey(){
    const randomNum=Math.random() * 25 ;
    const index = Math.round(randomNum);
    console.log(index);

    const alphabatestring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabates =alphabatestring.split('') ;
    
    const alphabt =alphabates[index];
    console.log(alphabt);
    

    const textArea = document.getElementById('textArea');
    textArea.innerText = alphabt ;

   const btn = document.getElementById(alphabt);
   btn.classList.add('bg-orange-400');
}

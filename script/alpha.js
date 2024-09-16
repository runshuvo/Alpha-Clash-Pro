function play(){
    const home = document.getElementById('home');
    home.classList.add('hidden');
    const play =document.getElementById('play');
    play.classList.remove('hidden');
    randomKey();
    addRandomText();
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
function highlightingText(){

   
}
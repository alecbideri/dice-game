
// deciding the winner 

document.querySelector('#rollButton').addEventListener('click' , ()=>{

  // Selecting and assigning the images 

  document.querySelectorAll('img').forEach(img=>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
   
    // checking and removing existing image classes 

    img.classList.forEach(cls=>{
     if(cls.startsWith('img')){
       img.classList.remove(cls);
     }
    });

    // assigning a new class with a random incremented number 
   
    img.classList.add(`img${randomNumber}`);
    
   });

   // added this to delay the script execution 

  setTimeout(() => {
    let images = document.querySelectorAll('img');

    if (images.length < 2) {
      console.error('Not enough images detected');
      return;
    }

  let class1 = images[0].classList[0] ;
  let class2 = images[1].classList[0] ;

  let num1 = class1.match(/\d+/)[0] ? class1.match(/\d+/)[0] : null;
  let num2 = class2.match(/\d+/)[0] ? class2.match(/\d+/)[0] : null;

  if(num1===null || num2===null){
    console.error('Invalid image classes detected');
    return;
  }

  if(num1 > num2){
    document.querySelector('.win').textContent = '🚩 Player 1 Wins';
  }else if(num1 < num2){
    document.querySelector('.win').textContent = 'Player 2 Wins 🚩';
  }else{
    document.querySelector('.win').textContent = 'Draw';
  }},100);

});
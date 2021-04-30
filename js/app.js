// Saving elements to variables
const nameInput = document.querySelector('#char-name');
const heading = document.querySelector('#main-heading')
const classInput = document.querySelector('#char-class')
const subheading = document.querySelector('#class-h2');
const diceRollButton = document.querySelector('#rollAll');
const diceDisplays = document.querySelector('#diceDisplayH2')
// Update H1 with character name in real time
nameInput.addEventListener('input', function (e) {
  if(nameInput.value == ''){
    heading.innerText = "RPG Character Generator";
  }else{
    heading.innerText = `Character Sheet for ${nameInput.value}`
  }
  console.log(nameInput.value)
})
// Update H2 with character class in real time
classInput.addEventListener('input', function (e) {
  if(classInput.value == ''){
    subheading.innerText = "";
  }else{
    subheading.innerText = `the ${classInput.value}`
  }
  console.log(nameInput.value)
});

// Get random number from 1-6
let getRandNumber = () =>{
  return Math.floor(Math.random() * 6 + 1);
}

// Roll dice
diceRollButton.addEventListener('click', function(){
  for(let i = 0; i <4; i++){
    let roll = getRandNumber();
    console.log(roll);
  }
});

// Display dice rolls
diceDisplays.addEventListener('')
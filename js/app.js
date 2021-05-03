// Saving elements to variables
const nameInput = document.querySelector('#char-name');
const heading = document.querySelector('#main-heading')
const classInput = document.querySelector('#char-class')
const subheading = document.querySelector('#class-h2');
const randomizeAllButton = document.querySelector('#randomizeAll');
const biography = document.querySelector('#backgroundInfo');

// Update H1 with character name in real time
nameInput.addEventListener('input', function (e) {
  if(nameInput.value == ''){
    heading.innerText = "RPG Character Generator";
  }else{
    heading.innerText = `Character Sheet for ${nameInput.value}`;
  }
  console.log(nameInput.value);
});

// Update H2 with character race in real time
// classInput.addEventListener('input', function (e) {
//   if(classInput.value == ''){
//     subheading.innerText = "";
//   }else{
//     subheading.innerText = `the ${getRace.value}`;
//   }
//   console.log(nameInput.value);
// });

// Get random number from 0-n
let getRandNumber = (n) =>{
  return Math.floor(Math.random() * n);
}

//Declare variables to randomize:
const npcRace = ["Human", "Halfling", "Dwarf", "Elf", "Orc", "Gnome"];
const npcPowerLevel = ["Weak", "Average", "Strong", "Extreme", "Demigod"];
const npcGender = ["Male", "Female"];
const npcTrait = ["Selfish", "Altruistic", "Confident", "Overconfident", "Naive", "Wise", "Friendly", "Quiet", "Shy", "Flirty"];
const npcBackground = ["Raised in a village", "Found a magic sword", "Grew rich from an inheritance", "Has many lovers", "Wants revenge against his enemies", "Raised in an orphange", "Has a curse", "Sired by a great hero", "Sired by a great villain", "Works in a shop"];

//Get the race and gender of the character to determine which name lists to pull from
const getRace = npcRace[getRandNumber(npcRace.length)];
const getGender = npcGender[getRandNumber(npcGender.length)];
//Random name function
const getName = () => {
  let charName;
  if (getRace === "Human" && getGender === "Male") {
    charName = humanMaleNameGen();
  } else if (getRace === "Halfling" && getGender === "Male"){
    charName = halfingMaleNameGen();
  } else if (getRace === "Dwarf" && getGender === "Male"){
    charName = dwarfMaleNameGen();
  } else if (getRace === "Elf" && getGender === "Male"){
    charName = elfMaleNameGen();
  } else if (getRace === "Orc" && getGender === "Male"){
    charName = orcMaleNameGen();
  } else if (getRace === "Gnome" && getGender === "Male"){
    charName = gnomeMaleNameGen();
  } else if (getRace === "Human" && getGender === "Female") {
    charName = humanFemaleNameGen();
  } else if (getRace === "Halfling" && getGender === "Female"){
    charName = halfingFemaleNameGen();
  } else if (getRace === "Dwarf" && getGender === "Female"){
    charName = dwarfFemaleNameGen();
  } else if (getRace === "Elf" && getGender === "Female"){
    charName = elfFemaleNameGen();
  } else if (getRace === "Orc" && getGender === "Female"){
    charName = orcFemaleNameGen();
  } else if (getRace === "Gnome" && getGender === "Female"){
    charName = gnomeFemaleNameGen();
  }
  return charName;
};

//Declare lists of random male names
const humanMaleNameGen = () =>{
  const humanMaleNames = ["Frank", "Ryan", "Robert", "Christopher", "Harold", "Arthur", "Gilbert"];
  heading.innerText = `NPC Character Sheet for ${humanMaleNames[getRandNumber(humanMaleNames.length)]}`;
}
const halfingMaleNameGen = () =>{
  const halflingMaleNames = ["John", "Paul", "George", "Ringo", "Frodo", "Samwise", "Peregrin", "Meriadoc", "Bilbo"];
  heading.innerText = `NPC Character Sheet for ${halflingMaleNames[getRandNumber(halflingMaleNames.length)]}`;
}
const dwarfMaleNameGen = () =>{
  const dwarfMaleNames = ["Gimli", "Gloin", "Thorin", "Dwalin"];
  heading.innerText = `NPC Character Sheet for ${dwarfMaleNames[getRandNumber(dwarfMaleNames.length)]}`;
}
const elfMaleNameGen = () =>{
  const elfMaleNames = ["Legolas", "Galadriel", "Elrond", "Glorfindel"];
  heading.innerText = `NPC Character Sheet for ${elfMaleNames[getRandNumber(elfMaleNames.length)]}`;
}
const orcMaleNameGen = () =>{
  const orcMaleNames = ["Garrosh", "Grom", "Orgrim", "Durotan"];
  heading.innerText = `NPC Character Sheet for ${orcMaleNames[getRandNumber(orcMaleNames.length)]}`;
}
const gnomeMaleNameGen = () =>{
  const gnomeMaleNames = ["Simon", "Alvin", "Theodore", "Garfield"];
  heading.innerText = `NPC Character Sheet for ${gnomeMaleNames[getRandNumber(gnomeMaleNames.length)]}`;
}

//Declare lists of random female names
const humanFemaleNameGen = () =>{
  const humanFemaleNames = ["Frank", "Ryan", "Robert", "Christopher", "Harold", "Arthur", "Gilbert"];
  heading.innerText = `NPC Character Sheet for ${humanFemaleNames[getRandNumber(humanFemaleNames.length)]}`;
}
const halfingFemaleNameGen = () =>{
  const halflingFemaleNames = ["John", "Paul", "George", "Ringo", "Frodo", "Samwise", "Peregrin", "Meriadoc", "Bilbo"];
  heading.innerText = `NPC Character Sheet for ${halflingFemaleNames[getRandNumber(halflingFemaleNames.length)]}`;
}
const dwarfFemaleNameGen = () =>{
  const dwarfFemaleNames = ["Gimli", "Gloin", "Thorin", "Dwalin"];
  heading.innerText = `NPC Character Sheet for ${dwarfFemaleNames[getRandNumber(dwarfFemaleNames.length)]}`;
}
const elfFemaleNameGen = () =>{
  const elfFemaleNames = ["Legolas", "Galadriel", "Elrond", "Glorfindel"];
  heading.innerText = `NPC Character Sheet for ${elfFemaleNames[getRandNumber(elfFemaleNames.length)]}`;
}
const orcFemaleNameGen = () =>{
  const orcFemaleNames = ["Garrosh", "Grom", "Orgrim", "Durotan"];
  heading.innerText = `NPC Character Sheet for ${orcFemaleNames[getRandNumber(orcFemaleNames.length)]}`;
}
const gnomeFemaleNameGen = () =>{
  const gnomeFemaleNames = ["Simon", "Alvin", "Theodore", "Garfield"];
  heading.innerText = `NPC Character Sheet for ${gnomeFemaleNames[getRandNumber(gnomeFemaleNames.length)]}`;
};

// Randomize race/name
randomizeAllButton.addEventListener('click', function(){
  getName();
  subheading.innerText = `the ${getGender} ${getRace}`;
  biography.innerText = `${charName} is stupid.`
});
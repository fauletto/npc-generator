// Saving elements to variables
const nameInput = document.querySelector('#char-name');
const heading = document.querySelector('#main-heading')
const classInput = document.querySelector('#char-class')
const subheading = document.querySelector('#class-h2');
const randomizeAllButton = document.querySelector('#randomizeAll');
const biography = document.querySelector('#backgroundInfo');

// Get random number from 0-n
let getRandNumber = (n) =>{
  return Math.floor(Math.random() * n);
}

//Declare variables to randomize:
const npcRace = ["Human", "Halfling", "Dwarf", "Elf", "Orc", "Gnome"];
const npcPowerLevel = ["Weak", "Average", "Strong", "Extreme", "Demigod"];
const npcGender = ["Male", "Female"];
const npcTrait = ["Selfish", "Altruistic", "Confident", "Overconfident", "Naive", "Wise", "Friendly", "Quiet", "Shy", "Flirty"];
const npcBackground = ["was raised in a small village.", "found a magic sword and was granted immense power.", "grew rich from an inheritance.", "has many lovers.", "wants revenge against any and all enemies.", "was raised in an orphange.", "has a curse.", "was sired by a great hero.", "was sired by a great villain", "works in a shop in a small village."];
//Declare lists of random male names
const humanMaleNames = ["Frank", "Ryan", "Robert", "Christopher", "Harold", "Arthur", "Gilbert"];
const halflingMaleNames = ["John", "Paul", "George", "Ringo", "Frodo", "Samwise", "Peregrin", "Meriadoc", "Bilbo"];
const dwarfMaleNames = ["Gimli", "Gloin", "Thorin", "Dwalin"];
const elfMaleNames = ["Legolas", "Galadriel", "Elrond", "Glorfindel"];
const orcMaleNames = ["Garrosh", "Grom", "Orgrim", "Durotan"];
const gnomeMaleNames = ["Simon", "Alvin", "Theodore", "Garfield"];
//Declare lists of random female names
const humanFemaleNames = ["Frank", "Ryan", "Robert", "Christopher", "Harold", "Arthur", "Gilbert"];
const halflingFemaleNames = ["John", "Paul", "George", "Ringo", "Frodo", "Samwise", "Peregrin", "Meriadoc", "Bilbo"];
const dwarfFemaleNames = ["Gimli", "Gloin", "Thorin", "Dwalin"];
const elfFemaleNames = ["Legolas", "Galadriel", "Elrond", "Glorfindel"];
const orcFemaleNames = ["Garrosh", "Grom", "Orgrim", "Durotan"];
const gnomeFemaleNames = ["Simon", "Alvin", "Theodore", "Garfield"];
let charName;

//Get the race and gender of the character to determine which name lists to pull from
const getRace = npcRace[getRandNumber(npcRace.length)];
const getGender = npcGender[getRandNumber(npcGender.length)];
const getBiography = npcBackground[getRandNumber(npcBackground.length)];

//Generate a random name from a list of names
const getName = () => {
  if (getRace === "Human" && getGender === "Male") {
    charName = humanMaleNames[getRandNumber(humanMaleNames.length)];
  } else if (getRace === "Halfling" && getGender === "Male"){
    charName = halflingMaleNames[getRandNumber(halflingMaleNames.length)];
  } else if (getRace === "Dwarf" && getGender === "Male"){
    charName = dwarfMaleNames[getRandNumber(dwarfMaleNames.length)];
  } else if (getRace === "Elf" && getGender === "Male"){
    charName = elfMaleNames[getRandNumber(elfMaleNames.length)];
  } else if (getRace === "Orc" && getGender === "Male"){
    charName = orcMaleNames[getRandNumber(orcMaleNames.length)];
  } else if (getRace === "Gnome" && getGender === "Male"){
    charName = gnomeMaleNames[getRandNumber(gnomeMaleNames.length)];
  } else if (getRace === "Human" && getGender === "Female") {
    charName = humanFemaleNames[getRandNumber(humanFemaleNames.length)];
  } else if (getRace === "Halfling" && getGender === "Female"){
    charName = halflingFemaleNames[getRandNumber(halflingFemaleNames.length)];
  } else if (getRace === "Dwarf" && getGender === "Female"){
    charName = halflingFemaleNames[getRandNumber(halflingFemaleNames.length)];
  } else if (getRace === "Elf" && getGender === "Female"){
    charName = elfFemaleNames[getRandNumber(elfFemaleNames.length)];
  } else if (getRace === "Orc" && getGender === "Female"){
    charName = orcFemaleNames[getRandNumber(orcFemaleNames.length)];
  } else if (getRace === "Gnome" && getGender === "Female"){
    charName = gnomeFemaleNames[getRandNumber(gnomeFemaleNames.length)];
  }
  return charName;
};

// Randomize race/gender/name
randomizeAllButton.addEventListener('click', function(){
  getName();
  heading.innerText = `Character sheet for ${charName}`
  subheading.innerText = `the ${getGender} ${getRace}`;
  biography.innerText = `${charName} ${getBiography}`
});
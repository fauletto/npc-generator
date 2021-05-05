// Saving elements to variables
const nameInput = document.querySelector('#char-name');
const heading = document.querySelector('#main-heading')
const classInput = document.querySelector('#char-class')
const subheading = document.querySelector('#class-h2');
const randomizeAllButton = document.querySelector('#randomize-all');
const biography = document.querySelector('#background-info');
const nameText = document.querySelector('#name-text');
const genderText = document.querySelector('#gender-text');
const raceText = document.querySelector('#race-text');
const powerText = document.querySelector('#power-text');
const traitsText = document.querySelector('#traits-text');
const backgroundText = document.querySelector('#background-text');

// Get random number from 0-n
let getRandNumber = (n) =>{
  return Math.floor(Math.random() * n);
}

//Declare variables to randomize:
const npcRace = ["Human", "Halfling", "Dwarf", "Elf", "Orc", "Gnome"];
const npcPowerLevel = ["Weak (-2 to all stats)", "Average (+0 to all stats)", "Strong (+2 to all stats)", "Extreme (+4 to all stats)", "Demigod (+6 to all stats)"];
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
const humanFemaleNames = ["Camille", "Armine", "Joselyn", "Moira", "Regina", "Sibylle", "Emerald"];
const halflingFemaleNames = ["Jessica", "Engelberga", "Theoderada", "Rachel", "Leesha", "Jenna", "Marigold", "Kayla", "Destiny"];
const dwarfFemaleNames = ["Brangilda", "Hatahilda", "Lorseabela", "Broumelda"];
const elfFemaleNames = ["Elanalue", "Renestrae", "Selussa", "Geminara"];
const orcFemaleNames = ["Mogak", "Shagar", "Glasha", "Nargol"];
const gnomeFemaleNames = ["Smyddna", "Lommut", "Sninbem", "Ibladus"];
let charName;
let charGender;
let charRace;
let charBio;
let charPower;
let charTrait;

//Funtions that use RNG to determine and print biographyy
const getRace = () => {
  charRace = npcRace[getRandNumber(npcRace.length)];
  raceText.innerText = `${charRace}`;
};
const getGender = () => {
  charGender = npcGender[getRandNumber(npcGender.length)];
  genderText.innerText = `${charGender}`;
};
const getBiography = () => {
  charBio = npcBackground[getRandNumber(npcBackground.length)];
  backgroundText.innerText = `${charName} ${charBio}`;
};
const getPower = () => {
  charPower = npcPowerLevel[getRandNumber(npcPowerLevel.length)];
  powerText.innerText = `${charPower}`;
};
const getTrait = () => {
  charTrait = npcTrait[getRandNumber(npcTrait.length)];
  traitsText.innerText = `${charTrait}`;
};

// Generate a random name from a list of names and print the name
const getName = () => {
  if (charRace === "Human" && charGender === "Male") {
    charName = humanMaleNames[getRandNumber(humanMaleNames.length)];
  } else if (charRace === "Halfling" && charGender === "Male"){
    charName = halflingMaleNames[getRandNumber(halflingMaleNames.length)];
  } else if (charRace === "Dwarf" && charGender === "Male"){
    charName = dwarfMaleNames[getRandNumber(dwarfMaleNames.length)];
  } else if (charRace === "Elf" && charGender === "Male"){
    charName = elfMaleNames[getRandNumber(elfMaleNames.length)];
  } else if (charRace === "Orc" && charGender === "Male"){
    charName = orcMaleNames[getRandNumber(orcMaleNames.length)];
  } else if (charRace === "Gnome" && charGender === "Male"){
    charName = gnomeMaleNames[getRandNumber(gnomeMaleNames.length)];
  } else if (charRace === "Human" && charGender === "Female") {
    charName = humanFemaleNames[getRandNumber(humanFemaleNames.length)];
  } else if (charRace === "Halfling" && charGender === "Female"){
    charName = halflingFemaleNames[getRandNumber(halflingFemaleNames.length)];
  } else if (charRace === "Dwarf" && charGender === "Female"){
    charName = halflingFemaleNames[getRandNumber(halflingFemaleNames.length)];
  } else if (charRace === "Elf" && charGender === "Female"){
    charName = elfFemaleNames[getRandNumber(elfFemaleNames.length)];
  } else if (charRace === "Orc" && charGender === "Female"){
    charName = orcFemaleNames[getRandNumber(orcFemaleNames.length)];
  } else if (charRace === "Gnome" && charGender === "Female"){
    charName = gnomeFemaleNames[getRandNumber(gnomeFemaleNames.length)];
  }
  heading.innerText = `Character sheet for ${charName}`;
  subheading.innerText = `the ${charGender} ${charRace}`;
  nameText.innerText = `${charName}`;
  return charName;
};

// Randomize race/gender/name
randomizeAllButton.addEventListener('click', function(){
  getRace();
  getGender();
  getName();
  getBiography();
  getTrait();
  getPower();
});


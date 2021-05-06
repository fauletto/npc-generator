// Saving elements to variables
const nameInput = document.querySelector('#char-name-input');
const raceInput = document.querySelector('#race-input');
const genderInput = document.querySelector('#gender-input');
const powerInput = document.querySelector('#power-input');
const traitInput = document.querySelector('#trait-input');
const backgroundInput = document.querySelector('#background-input');
const heading = document.querySelector('#main-heading');
const classInput = document.querySelector('#char-class');
const subheading = document.querySelector('#class-h2');
const randomizeAllButton = document.querySelector('#randomize-all');
const biography = document.querySelector('#background-info');
const nameText = document.querySelector('#name-text');
const genderText = document.querySelector('#gender-text');
const raceText = document.querySelector('#race-text');
const powerText = document.querySelector('#power-text');
const traitsText = document.querySelector('#traits-text');
const backgroundText = document.querySelector('#background-text');
const charStats = document.querySelector('#char-stats');
const charStrength = document.querySelector('#char-strength');
const charDexterity = document.querySelector('#char-dexterity');
const charConstitution = document.querySelector('#char-constitution');
const charIntellect = document.querySelector('#char-intellect');
const charWisdom = document.querySelector('#char-wisdom');
const charCharisma = document.querySelector('#char-charisma');
const statsList = document.querySelector('#char-stats');
const statsHeading = document.querySelector('#stats-heading');
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
//Declare lists of random names
const names = {
  Male: {
    Human: ["Frank", "Ryan", "Robert", "Christopher", "Harold", "Arthur", "Gilbert"],
    Halfling: ["John", "Paul", "George", "Ringo", "Frodo", "Samwise", "Peregrin", "Meriadoc", "Bilbo"],
    Dwarf: ["Gimli", "Gloin", "Thorin", "Dwalin"],
    Elf: ["Legolas", "Galadriel", "Elrond", "Glorfindel"],
    Orc: ["Garrosh", "Grom", "Orgrim", "Durotan"],
    Gnome: ["Simon", "Alvin", "Theodore", "Garfield"]
  },
  Female: {
    Human: ["Camille", "Armine", "Joselyn", "Moira", "Regina", "Sibylle", "Emerald"],
    Halfling: ["Jessica", "Engelberga", "Theoderada", "Rachel", "Leesha", "Jenna", "Marigold", "Kayla", "Destiny"],
    Dwarf: ["Brangilda", "Hatahilda", "Lorseabela", "Broumelda"],
    Elf: ["Elanalue", "Renestrae", "Selussa", "Geminara"],
    Orc: ["Mogak", "Shagar", "Glasha", "Nargol"],
    Gnome:["Smyddna", "Lommut", "Sninbem", "Ibladus"]
  }
}

const stats ={
  Human: {
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intellect: 10,
    Wisdom: 10,
    Charisma: 10
  },
  Halfling: {
    Strength: 8,
    Dexterity: 12,
    Constitution: 8,
    Intellect: 10,
    Wisdom: 12,
    Charisma: 10
  },
  Dwarf: {
    Strength: 10,
    Dexterity: 8,
    Constitution: 12,
    Intellect: 10,
    Wisdom: 10,
    Charisma: 10
  },
  Elf: {
    Strength: 8,
    Dexterity: 12,
    Constitution: 10,
    Intellect: 10,
    Wisdom: 10,
    Charisma: 10
  },
  Orc: {
    Strength: 12,
    Dexterity: 10,
    Constitution: 12,
    Intellect: 8,
    Wisdom: 10,
    Charisma: 8
  },
  Gnome: {
    Strength: 8,
    Dexterity: 8,
    Constitution: 8,
    Intellect: 12,
    Wisdom: 12,
    Charisma: 12
  }


}
let charName;
let charGender;
let charRace;
let charBio;
let charPower;
let charTrait;

//Funtions that use RNG to determine and print biographyy
const getRace = () => {
  if(raceInput.value === "Random"){
    charRace = npcRace[getRandNumber(npcRace.length)];
  }else{
    charRace = raceInput.value;
  }
  raceText.innerText = `${charRace}`;
};
const getGender = () => {
  if(genderInput.value === "Random"){
    charGender = npcGender[getRandNumber(npcGender.length)];
  }else{
    charGender = genderInput.value;
  }
  genderText.innerText = `${charGender}`;
};
const getBiography = () => {
  if(backgroundInput.value === "Random"){
    charBio = npcBackground[getRandNumber(npcBackground.length)];
  }else{
    charBio = backgroundInput.value;
  }
  backgroundText.innerText = `${charName} ${charBio}`;
};
const getPower = () => {
  if(powerInput.value === "Random"){
    charPower = npcPowerLevel[getRandNumber(npcPowerLevel.length)];
  }else{
    charPower = powerInput.value;
  }
  powerText.innerText = `${charPower}`;
};
const getTrait = () => {
  if(traitInput.value === "Random"){
    charTrait = npcTrait[getRandNumber(npcTrait.length)];
  }else{
    charTrait = traitInput.value;
  }
  traitsText.innerText = `${charTrait}`;
};

// Generate a random name from a list of names and print the name
const getName = () => {
  let availableNames = names[charGender][charRace];
  if(nameInput.value === ""){
    charName = availableNames[getRandNumber(availableNames.length)];
  }else{
    charName = nameInput.value;
  }
  heading.innerText = `Character sheet for ${charName}`;
  subheading.innerText = `the ${charGender} ${charRace}`;
  nameText.innerText = `${charName}`;
  return charName;
};

const getStats = () =>{
  charStats.classList.add('border');
  statsHeading.classList.remove('hidden');
  let strengthResult = stats[charRace].Strength;
  let dexterityResult = stats[charRace].Dexterity;
  let constitutionResult = stats[charRace].Constitution;
  let intellectResult = stats[charRace].Intellect;
  let wisdomResult = stats[charRace].Wisdom;
  let charismaResult = stats[charRace].Charisma;
  charStrength.innerText = `Strength: ${strengthResult}`;
  charDexterity.innerText = `Dexterity: ${dexterityResult}`;
  charConstitution.innerText = `Constitution: ${constitutionResult}`;
  charIntellect.innerText = `Intellect: ${intellectResult}`;
  charWisdom.innerText = `Wisdom: ${wisdomResult}`;
  charCharisma.innerText = `Charisma: ${charismaResult}`;
}

// Randomize race/gender/name
randomizeAllButton.addEventListener('click', function(){
  getRace();
  getGender();
  getName();
  getTrait();
  getPower();
  getBiography();
  getStats();
});


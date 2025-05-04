const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let currentName = "Bob";

const insertx = ["Willy the Goblin",
                 "Big Daddy",
                 "Father Christmas"];

const inserty = ["the soup kitchen",
                 "Disneyland",
                 "the White House"];

const insertz = ["spontaneously combusted",
                 "melted into a puddle on the sidewalk",
                 "turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(currentName, name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  let xItem = randomValueFromArray(insertx);

  let yItem = randomValueFromArray(inserty);

  let zItem = randomValueFromArray(insertz);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
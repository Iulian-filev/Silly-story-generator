const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let itemX = randomValueFromArray(insertX);
    let itemY = randomValueFromArray(insertY);
    let itemZ = randomValueFromArray(insertZ);
    newStory = newStory.replace(":insertx:", itemX);
    newStory = newStory.replace(":inserty:", itemY);
    newStory = newStory.replace(":insertz:", itemZ);
    if (customName.value !== 'Bob') {
        let name = customName.value;

    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300) / 14;
        let temperature = Math.round(94) / 2;
        newStory = newStory.replace("fahrenheit", "celsius");
        newStory = newStory.replace("pounds", "kilograms");

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}


// Changing the Text Content

const appearanceHeading = document.getElementById('facts__heading');

appearanceHeading.textContent = 'Qualities and Traits of a Crab';

////////////////////////
// Changing Appearance//
////////////////////////

const importantFact = document.getElementById('facts__fact--important');

importantFact.className = `${importantFact.className} highlight`;

///////////////////////////
// Creating a New Element//
///////////////////////////
const state = {
    crabCount : 0 ,
}

const newAppearanceFact = document.createElement('li');

newAppearanceFact.textContent = 'covered in sand (when on a sandy beach)';

const appearanceList = document.getElementById('facts__list');

appearanceList.appendChild(newAppearanceFact);


const newSection = document.createElement('section');
newSection.id = 'crab-section';
const appearanceLocation = document.querySelector('main');

appearanceLocation.appendChild(newSection);


const addcrabHeading = document.createElement('h2');
addcrabHeading.textContent = `Crab Count: ${state.crabCount}`;
addcrabHeading.id = 'crab-count';
const addCrabButton = document.createElement('button');
addCrabButton.textContent = 'Add a Crab';
addCrabButton.id = 'add-crab-button';

newSection.appendChild(addcrabHeading);
newSection.appendChild(addCrabButton);

const addCrab = () => {
    const newCrab = document.createElement('span');
    newCrab.textContent = '🦀';
    newSection.appendChild(newCrab);
    state.crabCount += 1;
    const crabCounter = document.getElementById('crab-count')
    crabCounter.textContent= `Crab Count: ${state.crabCount}`;


};

const registerEventHandler = () => {
    const crabButton = document.getElementById('add-crab-button');
    crabButton.addEventListener('click', addCrab)
};
document.addEventListener('DOMContentLoaded', registerEventHandler);
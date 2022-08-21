let characters = [];

const tableBody = document.getElementById('table');

// function renderTableData() {

//   characters.map((character) => {
//     const rowElement = document.createElement("tr");

//     const keys = Object.keys(character);

//     for (let key of keys) {
//       const dataCell = document.createElement("td");
//       dataCell.textContent = character[key];
//       rowElement.appendChild(dataCell);
//     }
//     tableBody.appendChild(rowElement);
//   });
// }
const keys = ['name', 'height', 'mass', 'eye_color', 'gender', 'homeworld'];

function renderTableData(array, wasNextClicked) {
  if (!wasNextClicked) {
    tableBody.innerHTML = '';
  }

  array.map((character) => {
    const rowElement = document.createElement('tr');

    for (let key of keys) {
      const columnElement = document.createElement('td');

      if (key === 'homeworld') {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Homeworld';
        buttonElement.onclick = () => getHomeWorld(character[key]);
        buttonElement.classList.add('btn', 'btn-primary');
        columnElement.appendChild(buttonElement);
      } else {
        columnElement.textContent = character[key];
      }
      rowElement.appendChild(columnElement);
    }
    tableBody.appendChild(rowElement);
  });
  buildTotalRow();
}

function buildTotalRow() {
  const rowElement = document.createElement('tr');

  for (let key of keys) {
    const columnElement = document.createElement('td');
    if (key == 'height' || key == 'mass' || key == 'name') {
      columnElement.textContent = getAllCharacterHeight();
      columnElement.classList.add('fw-bold');
    }
    if (key == 'mass') {
      columnElement.textContent = getAllCharacterMass();
      columnElement.classList.add('fw-bold');
    }

    if (key == 'name') {
      columnElement.textContent = getAllNamesSum();
      columnElement.classList.add('fw-bold');
    }
    rowElement.appendChild(columnElement);
  }
  tableBody.appendChild(rowElement);
}

function getAllCharacterHeight() {
  return characters
    .map((character) => Number(character.height))
    .reduce((sum, current) => sum + current);
}

function getAllCharacterMass() {
  return characters
    .map((character) => Number(character.mass))
    .reduce((sum, current) => sum + current);
}

function getAllFirstNames() {
  const names = characters.map((character) => {
    return character.name.split(' ')[0];
  });
  return names;
}

function getAllNamesSum() {
  return characters
    .map((character) => character.name.length)
    .reduce((sum, current) => sum + current);
}
// Kitas metodas masei
// function getNew() {
//   const newMass = characters.reduce(
//     (sum, current) => Number(sum) + Number(current.mass),
//     0
//   );
//   console.log(newMass);
// }
// console.log(getNew())

function massSide() {
  return characters
    .map((character) => character.mass)
    .filter((number) => number > 80);
}

const getAllCharacterWithGreaterMassThan80 = characters.filter(
  (character) => character.mass > 80
);

const getAllCharacterLessHeightThan180 = characters.filter(
  (character) => character.height < 180
);

const getAllCharacterMale = characters.filter(
  (character) => character.gender == 'male'
);

const getAllCharacterWithBlueEyes = characters.filter(
  (character) => character.eye_color == 'blue'
);

const sortByNumber = (property) =>
  renderTableData(characters.sort((a, b) => a[property] - b[property]));

// const sortByHeight = () =>
//   renderTableData(characters.sort((a, b) => a.height - b.height));

const sortByAlphabet = (property) =>
  renderTableData(
    characters.sort((a, b) => a[property].localeCompare(b[property]))
  );

function addCharacters() {
  const nameInput = document.getElementById('name').value;
  const heightInput = document.getElementById('height').value;
  const massInput = document.getElementById('mass').value;
  const eyeColorInput = document.getElementById('eye_color').value;
  const genderInput = document.getElementById('gender').value;

  const newCharacter = {
    name: nameInput,
    height: heightInput,
    mass: massInput,
    eye_color: eyeColorInput,
    gender: genderInput,
  };
  characters.push(newCharacter);
  renderTableData(characters);
}

let fetchUrl = 'https://swapi.dev/api/people/';
let previousPage;
let nextPage;

function getCharacters(url, wasNextClicked) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      nextPage = data.next;
      previousPage = data.previous;

      if (wasNextClicked) {
        characters = characters.concat(data.results);
      } else {
        characters = data.results;
      }
      renderTableData(characters);
    });
  });
}

getCharacters(fetchUrl);

let fetch2 = 'https://swapi.dev/api/planets/1/';

function getHomeWorld(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      renderHomeworld(data);
    });
  });
}
const planetList = document.getElementById('planetList');

function renderHomeworld(data) {
  planetList.innerHTML = '';
  const keys = ['name', 'population', 'terrain', 'climate', 'gravity'];

  for (let key of keys) {
    const listItem = document.createElement('li');
    listItem.textContent = `${key}: ${data[key]}`;
    planetList.appendChild(listItem);
  }
}

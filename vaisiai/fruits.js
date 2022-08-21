const firstLink = 'https://www.fruityvice.com/api/fruit/all';
const fruitsElement = document.getElementById('fruitsElement');
const people100 = '?results=30';
let people;

function getFruits() {
  fetch(firstLink).then((response) => {
    response.json().then((data) => {
      people = data.results;
     
    });
  });
}

function createFruits(people) {
  fruitsElement.innerHTML = `
    <div class="card d-flex text-center" style="width: 18rem;">
    <ul class="list-group list-group-flush">
        <li class= "list-group-item">name: ${people.nutritions}}</li>
        <li class= "list-group-item">family: ${people.family}</li>
        <li class= "list-group-item">calories: ${people.calories}</li>
     <li class= "list-group-item">nutritions: ${people.nutritions}</li>    
    </ul>
    </div>
    `;
}


const baseUrl = 'https://randomuser.me/api/';
const people100 = '?results=100';
const secondUrl = 'http://www.boredapi.com/api/activity/';
const thirdUrl = '';
const image = '&incl=img';
const profileInfo = document.getElementById('profileInfo');

let people;
let postPeople;
function getPeople() {
  fetch(baseUrl + people100).then((response) =>
    response.json().then((data) => {
      people = data.results;
      me = people[9];
      setupPage();
    })
  );
}
getPeople();

function getProfile(people) {
  profileInfo.innerHTML += `
  <div class="card d-flex text-center" style="width: 18rem;">
    <img src="${people.picture.medium}" class="card-img-top" alt="...">
    <div class= card-body>
      <h5 class="card-title">${people.name.first} ${people.name.last}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class= "list-group-item">${people.dob.age}</li>
      <li class= "list-group-item">${people.location.country}</li>
      <li class= "list-group-item">${people.location.city}</li>
      ;
    </ul>
  </div>
      `;
}

const feedElement = document.getElementById('feed');

function populateFeed() {
  people.map((people, i) => {
    if (i <= 5) {
      fetch(secondUrl).then((response) =>
        response.json().then((data) => {
          feedElement.innerHTML += `
          <div class="card m-3 text-center" style="width: 200px;">
            <img src="${people.picture.large}" class="card-img-top" alt="...">
           
            <ul class="list-group list-group-flush">
             
              <li  class= "list-group-item overflow-auto ">Activity: ${data.activity}</li>
              <li  class= "list-group-item">type: ${data.type}</li>
              <li  class= "list-group-item">participants: ${data.participants}</li>;
            </ul>
          </div>
              `;
        })
      );
    } else return;
  });
}

const createActivityButton = document.getElementById('creat');
const roomElement = document.getElementById('activityRoom');
createActivityButton.onclick = () => createActivity();

let participantElement;
let activeRoom = false;

function createActivity() {
  if (!activeRoom) {
    activeRoom = true;
    fetch(secondUrl).then((response) =>
      response.json().then((activityData) => {
        roomElement.innerHTML = `
        <ul class="list-group list-group-flush">
            <h5 class="card-title">
                ACTIVITY ROOM!
            </h5>
            <li class="list-group-item"><b>Activity:</b>
                ${activityData.activity}
                </li>
            <li class="list-group-item"><b>Type:</b>
                ${activityData.type}
                </li>
            <li class="list-group-item"><b>Participants needed:</b> 
            ${activityData.participants}
            </li>
            <li class="list-group-item" id="participantsJoined"><b>Participants joined:</b> 
            </li>
        </ul>
        `;

        addParticipantsFromPeople();
      })
    );
  }
}

function addParticipantsFromPeople() {
  participantElement = document.getElementById('participantsJoined');
  // Add me first
  participantElement.innerHTML += `
  <div>
      <img src="${me.picture.thumbnail}">
      ${me.name.first}${me.name.last}
  </div>
  `;

  // Add the rest
  let i = 0;

  let interval = setInterval(() => {
    const person = people[Math.floor(Math.random() * 100 + 1)];
    participantElement.innerHTML += `
      <div>
          <img src="${person.picture.thumbnail}">
          ${person.name.first} ${person.name.last}
          </div>
      `;
    i++;
    if (i == 5) clearInterval(interval);
  }, 1000);
}

function setProfile(profile) {
  profileInfo.innerHTML = `
  <div class="card">
      <img src="${profile.picture.large}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${profile.name.first} ${profile.name.last}</h5>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">${profile.dob.age}</li>
          <li class="list-group-item">${profile.location.country}</li>
          <li class="list-group-item">${profile.location.city}</li>
      </ul>
  </div>
  `;
}

function setupPage() {
  setProfile(me);

  populateFeed(people);
}

const SearchInput = document.getElementById('search');

const suggestionsList = document.getElementById('suggestionsList');

SearchInput.addEventListener('keyup', (e) => {
  if (e.target.value) {
    const value = e.target.value.toLowerCase();
    const suggestions = people.filter((person) => {
      const { first, last } = person.name;
      if (
        first.toLowerCase().includes(value) ||
        last.toLowerCase().includes(value)
      )
        return person;
    });
    if (suggestions.length) {
      suggestionsList.innerHTML = suggestions.map((suggestion) => {
        return `
        <li class="list-group-item">
            <img src="${suggestion.picture.thumbnail}">
            ${suggestion.name.first.replace(
              value,
              `<b>${value}</b>`
            )} ${suggestion.name.last.replace(value, `<b>${value}</b>`)}
        </li>`;
      });
    } else {
      suggestionsList.innerHTML = `
      <li class="list-group-item">
          No results
      </li>
      `;
    }
  } else {
    suggestionsList.innerHTML= ''
  }
});

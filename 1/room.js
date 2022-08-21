import { activityUrl } from "./fakebook.js";
import { lineClampStyle } from "./feed.js";
import { people, me } from "./fakebook.js";

const createActivityButton = document.querySelector('#createActivity');
const roomElement = document.querySelector('#activityRoom');
let participantElement;
createActivityButton.onclick = () => createActivity();
let activeRoom = false;

function createActivity() {
    if (!activeRoom) {
        activeRoom = true;
        fetch(activityUrl)
            .then((response) => response.json()
                .then((activityData) => {
                    roomElement.innerHTML = `
                <ul class="list-group list-group-flush">
                    <h5 class="card-title">
                        ACTIVITY ROOM!
                    </h5>
                    <li class="list-group-item" style="${lineClampStyle}"><b>Activity:</b>
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
                `

                    addParticipantsFromPeople();
                }))
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
    `

    // Add the rest
    let i = 0;

    let interval = setInterval(() => {
        const person = people[Math.floor(Math.random() * 100 + 1)];
        participantElement.innerHTML += `
        <div>
            <img src="${person.picture.thumbnail}">
            ${person.name.first} ${person.name.last}
            </div>
        `
        i++
        if (i == 5) clearInterval(interval);
    }, 1000)
}
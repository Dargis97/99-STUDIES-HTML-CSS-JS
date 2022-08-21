import { setProfile } from "./profile.js";
import { populateFeed } from './feed.js'
import './room.js';
import './search.js';
import './chat.js'
// Elements

// urls
const baseUrl = 'https://randomuser.me/api/';
const resultsUrl = '?results=100';
export const activityUrl = 'http://www.boredapi.com/api/activity';


// Data
export let people;
export let me;

function getPeople() {
    fetch(baseUrl + resultsUrl)
        .then((response) => response.json()
            .then((data) => {
                people = data.results;
                me = people[9];
                setupPage();
            }))
}

getPeople();

function setupPage() {
    // Sukuria profilio kortele
    setProfile(me);

    // Sukuria feeda
    populateFeed(people)
}
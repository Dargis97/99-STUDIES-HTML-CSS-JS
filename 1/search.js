import { people } from './fakebook.js';

const searchInput = document.getElementById('search');
const suggestionsList = document.getElementById('suggestionsList');

searchInput.addEventListener('keyup', (e) => {
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
    suggestionsList.innerHTML = '';
  }
});

// LocalStorage
const array = ['1', 2, '4'];

function add() {
    localStorage.setItem('Array', JSON.stringify(array));
}

function get() {
    const item = localStorage.getItem('Array');
    const parsedItem = JSON.parse(item);
    console.log(item);
    console.log(parsedItem);
}

function del() {
    localStorage.removeItem('Array');
}

// Date
const date = new Date();

const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear()

console.log(year, month, day);
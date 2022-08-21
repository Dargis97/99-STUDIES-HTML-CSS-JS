// const element = document.getElementById('EventTrigger');
// const inputElement = document.getElementById('input');
const infoArray = [
  {
    text: 'Kazkas1',
    tooltip: 'informacija apie kazka',
  },
  {
    text: 'Kazkas2',
    tooltip: 'informacija apie kazka',
  },
  {
    text: 'Kazkas3',
    tooltip: 'informacija apie kazka',
  },
  {
    text: 'Kazkas4',
    tooltip: 'informacija apie kazka',
  },
  {
    text: 'Kazkas5',
    tooltip: 'informacija apie kazka',
  },
  {
    text: 'Kazkas6',
    tooltip: 'informacija apie kazka',
  },
];

// element.addEventListener('mouseleave', () => {
//   console.log('mouseleave');
// });

// inputElement.addEventListener('focus', () => {
//   console.log('focus');
// });
// inputElement.addEventListener('blur', () => {
//   console.log('blur');
// });

// _element.addEventListener('click', () => {
//   console.log('click');
// });
// element.addEventListener('mouseenter', () => {
//   console.log('hover');
// });

const listElement = document.getElementById('list');

function renderList() {
  infoArray.map((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item.text;

    const tooltip = document.createElement('div');
    tooltip.textContent = item.tooltip;
    tooltip.style.display = 'none';

    listItem.appendChild(tooltip);

    listItem.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
    });
    listItem.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });

    listElement.appendChild(listItem);
  });
}

renderList();

// ________________________________________

const buttonElement = document.getElementById('button');

buttonElement.addEventListener('mouseenter', () => {
  buttonElement.textContent = "You're hovering me";
});
buttonElement.addEventListener('mouseleave', () => {
  buttonElement.textContent = "You're leaving me";
});
buttonElement.addEventListener('click', () => {
  buttonElement.textContent = "You're clicking me";
});

// __________________________________________________________

const inputElement = document.getElementById('input');
const validationElement = document.getElementById('validation');

inputElement.addEventListener('keyup', (event) => {
  if (event.target.value !== 'Labas') {
    validationElement.textContent = "text should be 'Labas'";
  } else {
    validationElement.textContent = 'Done';
  }
});

// ________________________________________________________________


const loginElement = document.getElementById('login');

function login() {
  document.cookie = `isLoggedIN=true`;  
}

if (document.cookie){
    loginElement.style.display ='none'
}
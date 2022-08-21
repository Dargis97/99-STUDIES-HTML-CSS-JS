const nameInput = document.getElementById('nameInput');
const valueInput = document.getElementById('valueInput');
const tableBody = document.getElementById('table');
const submitButton = document.getElementById('submit');

const editRow = document.getElementById('editRow');

submitButton.onclick = () => getInfo();

let date = new Date();
let fullDate =
  date.getFullYear() +
  '-' +
  (date.getMonth() + 1).toString().padStart(2, '0') +
  '-' +
  date.getDate().toString().padStart(2, '0') +
  ', ' +
  date.getHours().toString().padStart(2, '0') +
  ':' +
  date.getMinutes().toString().padStart(2, '0');

let data = JSON.parse(localStorage.getItem('Array')) || [];
const setStorage = localStorage.setItem('Array', JSON.stringify(data));

const keys = ['id', 'name', 'amount', 'date', ''];

function mapCharacters(array,) {
  tableBody.innerHTML = '';

  const contentMap = array.map((entry) => {
    const rowElement = document.createElement('tr');

    for (let key of keys) {
      const columnElement = document.createElement('td');

      
        if (key) {
        columnElement.textContent = entry[key];
      }
      

      
      if (!key) {
        const editButton = document.createElement('button');

        editButton.onclick = () => rowChange(entry.id);
        editButton.appendChild
        editButton.textContent = 'Edit';
        columnElement.classList.add('text-center');
        editButton.classList.add('btn', 'edit', 'btn-primary', 'me-5');
        
        columnElement.appendChild(editButton);

        columnElement.classList.add('text-center');
        const deleteButton = document.createElement('button');

        deleteButton.onclick = () => deleteRow(entry.id);

        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'ms-5');

        columnElement.appendChild(deleteButton);
      }

      rowElement.appendChild(columnElement);
    }
    tableBody.appendChild(rowElement);
  });

  editRow.innerHTML = contentMap;
}

function getInfo() {
  const newPerson = {
    id: data.length + 1,
    name: nameInput.value,
    amount: valueInput.value,
    date: fullDate.toString(),

  
  };
  
  data.push(newPerson);

  localStorage.setItem('Array', JSON.stringify(data));
  mapCharacters(data);
}

function deleteRow(id) {

  data = data.filter((item) => item.id !== id);
  
  localStorage.setItem('Array', JSON.stringify(data));
  getInfo.id = data.length + 1 
  mapCharacters(data);
}

function rowChange(id) {
  let item = data.filter((item) => item.id === id)[0];
  const popup = document.createElement('dialog');
  popup.open = true;

  const firstInput = document.createElement('input');
  firstInput.value = item.name;
  const secondInput = document.createElement('input');
  secondInput.value = item.amount;

  const confirm = document.createElement('button');
  confirm.textContent = 'Save';
  confirm.classList.add('btn', 'btn-outline-warning', 'mx-2')
  confirm.onclick = () => {
    item.name = firstInput.value;
    item.amount = secondInput.value;
    mapCharacters(data);
    editRow.removeChild(popup);    
  };
  
  const cancel = document.createElement('button')
  cancel.textContent = 'Cancel'
  cancel.classList.add('btn', 'btn-outline-danger', 'mx-2')
  cancel.onclick = () => {
    editRow.removeChild(popup);
  }


  popup.appendChild(firstInput);
  popup.appendChild(secondInput);
  popup.appendChild(confirm);
  popup.appendChild(cancel);
  editRow.appendChild(popup);
}

function get() {
  const item = localStorage.getItem('Array');
  const parsedItem = JSON.parse(item);
  console.log(parsedItem);
  console.log(item);
}

mapCharacters(data)
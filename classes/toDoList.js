class toDoList {
  constructor() {
    this.list = document.getElementById('list');
    this.toDo = [];
  }

  add(text) {
    this.toDo.push(text);
    this.update();
  }

  update() {
    this.list.innerHTML = '';

    for (let text of this.toDo) {
      const listItem = document.createElement('li');

      listItem.textContent = text;

      this.list.appendChild(listItem);
    }
  }
  delete(index) {
    this.toDo.splice(index, 1);
    this.update();
  }
}

const input = document.getElementById('input');
const addButton = document.getElementById('add');
const deleteButton = document.getElementById('delete');

const newList = new toDoList();

addButton.onclick = () => newList.add(input.value);
deleteButton.onclick = () => newList.delete(input.value);

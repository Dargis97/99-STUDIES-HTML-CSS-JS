class Animal {
  constructor({ _age, _name }) {
    this.name = _name;
    this.age = _age;
  }
  speak() {
    console.log('Generic animal sound');
  }
}
class Dog extends Animal {
  constructor({ _age, _name, _sound }) {
    super({ _age, _name });
    this.type = 'Dog';
    this.sound = _sound;
  }
  speak() {
    console.log(this.sound);
  }
}

class Terrier extends Dog {
  constructor({ _age, _name, _sound }) {
    super({ _age, _name, _sound });
    this.breed = 'Terrier';
  }
}

const animal1 = new Animal({ _age: 2, _name: 'Keri' });
const dog1 = new Dog({ _age: 2, _name: 'Keri', _sound: 'Woof Woof' });
const breed1 = new Terrier({ _age: 2, _name: 'Keri', _sound: 'Woof Woof' });

console.log(animal1);
console.log(dog1);
console.log(breed1);

animal1.speak();
dog1.speak();

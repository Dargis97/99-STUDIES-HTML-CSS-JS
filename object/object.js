const me = {
  firstName: 'Mantas',
  lastName: 'Dargis',
  age: '24',
};

const backEndData = me;

backEndData.gender = 'male';

// console.log(backEndData);

const target = { a: 1, b: 2 };
const source = { c: 4, d: 5 };

const objectAssignedWithMethods = Object.assign(target, source);

// console.log(objectAssignedWithMethods);

const object1 = {
  firstName: 'Mantas',
  lastName: 'Dargis',
  age: '24',
  greetMe: () => console.log('Mantas Dargis')
};
const object2 = {
  gender: 'Male',
  hobby: 'eating',
  height: '187',
};

const allME = Object.assign(object1, object2)
console.log(object1);

const a =() =>{
    console.log('bla')
}


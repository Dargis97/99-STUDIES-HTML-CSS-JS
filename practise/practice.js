// 1 Zinom 3 data types, sukurti kintamuosius su tu data type reiksmem (string, number, boolean);
let a = 100;
let b = 'labas';
let c = false;
// 2 Veliau ismokome dar du (array ir object), susikurti kintamuosius siu tipu,
// abu tipai viduj turetu tureti bent 3 kazkokius duomenis
let object1 = {
  firstName: 'Mantas',
  lastName: 'Dargis',
  age: '24',
};
let array1 = [
  'hello',
  'labas',
  'salut',
  'asgfagas',
  'ashgashashas',
  'ahashashash',
];
// 3 Atsidarius practice.html narsykleje, consoleje parasyti "Hello world"
console.log('Hello world');

// 4 Atsidarius practice.html narsykleje, consoleje parasyti savo nurodyto string kintamojo reiksme
console.log(b);

// 5 Susikurti funkcija kuri consoleje parasys jusu number tipo kintamaji puslapiui besikraunant
function uzduotis5() {
  console.log(a);
}
uzduotis5();

// 6 funkcijoje prideti salyga su jusu boolean kintamuoju jei true, paliekam number kintamojo console.log,
// else printinam string tipo kintamaji
function uzduotis6() {
  if (c === true) {
    console.log(a);
  } else {
    console.log(b);
  }
}

// 7 Sukurti nauja funkcija, kuri grazins 3cia reiksme is jusu array tipo kintamojo
function uzduotis7() {
  return array1[2];
}

// 8 consoleje atvaizduoti naujos funkcijos grazinta rezultata
console.log(uzduotis7());
// 9 ideti nauja reiksme (nesvarbu kokia) i array tipo kintamaji naudodami array pridejimo metoda
array1.push('ipushintas');
console.log(array1);
// 10 Iskirpti pirma reiksme is array tipo kintamojo naudojant array isiemimo metoda
array1.splice(0, 1);
console.log(array1);
// 11 Parasyti cikla kuris consoleje parasys nuo skaicius nuo 1 iki 10
for (let i = 1; i < 11; i++) {
  console.log(i);
}
// 12 Naudojant map metoda pakeisti visas array tipo kintamojo reiksmes nuo 0, iki array.length
array = array1.map((item, index) => (item = index)); // situ pvz turi grizti naujas array su reiksmem nuo 0 iki 4

// 13 Naudojant filter metoda grazinti tik skaicius kurie yra nelyginiai (tiksliai neziurejom, klauskit arba dar geriau google)
  let filterOdd = array.filter((number)=> number % 2 !== 0)
  console.log('ODD', filterOdd)
// 14 Pasirasyti nauja funkcija, kuri consoleje parasys jusu paduota parametra
function Pararam(param){
    console.log(param)
}
Pararam('Kazkas')
// 15 Suskurti nauja array su nersvarbu kokiais 5 skaiciais
const array2 = [5, 4, 18, 7, 10];
// 16 Pasirasyti nauja funkcija kuri naudojant viena is array metodu consoleje parasys naujai sukurto array suma
function suma() {
  console.log(array2.reduce((prev, cur) => prev + cur));
}

// 17 Praplesti funkcija kad ji priimtu parametra ir iskviesta consoleje rasytu musu pirmojo array skaiciu suma,
// kita kart iskvisti ir consoleje rasytu naujojo array skaiciu suma
function whichArray(character) {
    console.log(character.reduce((prev, cur) => prev + cur)
    );  
}
whichArray(array2);
// 18 Consoleje parasyti objekto kintamojo savybiu (property/keys) reiksmes (values) atsikruose eilutese,
// (kiekvina savybe vis naujam console log)
Object.keys(object1).map((key) => console.log(object1[key]));


// 19 Naudojant object metoda (Keleta kartu naudojom star wars table) grazinti nauja array su visom objekto savybem (keys/properties) ir atvaizduoti
// consoleje
console.log(Object.keys(object1))

// 20 Prie pradzioje nurodyto object tipo kintamojo prideti dvi naujas savybes viena is ju bus lygi jusu number tipo kintamajam,
// o kita boolean tipo kintamajam
Object.assign(object1, {a: a, c: c,})
console.log(object1)
// 21 Suskurti nauja array ir i ji, naudojant for cikla, ideti 5 jusu objekto tipo kintamuosius (turetu tureti is 20 uzduoties savybes ir reiksmes)

// 22 I html isideti mygtuka ant kurio paspaudus vykdytu nauja funkcija ir consoleje atvaizduotu 21 uzduoties rezultata

// 23 I html isideti input ir mygtuka ant kurio paspaudus consoleje parasys jusu ivesta input reiksme

// 24 I html prisideti papildoma elementa, kuriame paspaudus 23 uzduoties mygtuka dabar atvaizduos input reiskmes teksta (vietoj console.log)

// 25 Praplesti mygtuko papsaudimo funkcija ir kiekviena ne vienoda reiskme prideti i nauja visu input reiksmiu array

// 26 Atvaizduoti visas naujai pridetas input reiksmes vis naujam elemente viduj 24 uzduoties elemento

// 27 Prideti prie salygos kad reiksme butu nauja, kad reiksme nebutu ir tuscias

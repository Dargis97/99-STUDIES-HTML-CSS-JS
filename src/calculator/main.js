const numberZone = document.getElementById("numberZone")
const resultZone = document.getElementById('resultZone')
let symbol
let prevNumber
let isEqualsClicked = false



function addNumber(number) {

    if (Number(numberZone.textContent) == 0 && numberZone.textContent != '0.1') {
        numberZone.textContent = number;
    }

    else {
        numberZone.textContent += number;
    }
}

function clr() {
   numberZone.textContent= 0;

    resultZone.textContent= 0
}


function deleteNumber() {
    numberZone.textContent = numberZone.textContent.slice(0, -1);

    if (numberZone.textContent.length == 0) {
        numberZone.textContent = 0
    }
}


function mathActions(symbolParam) {
    if (prevNumber && !isEqualsClicked) {
        equals()
    }
    else{
        resultZone.textContent = Number(numberZone.textContent)
    }

    prevNumber = Number(numberZone.textContent)
    symbol = symbolParam
    numberZone.textContent = 0;
}



function equals(clicked) {
    isEqualsClicked = clicked

    if (symbol == '+') {
        numberZone.textContent = prevNumber + Number(numberZone.textContent)
        
    }

    else if (symbol == '-') {
        numberZone.textContent = prevNumber - Number(numberZone.textContent)
        
    }
    else if (symbol == '/') {
        numberZone.textContent = prevNumber / Number(numberZone.textContent)
        
    }
    else if (symbol == '*') {
        numberZone.textContent = prevNumber * Number(numberZone.textContent)
       
    }

    numberZone.textContent = sum;
   resultZone.textContent = sum;
   
}

function getSquareRoot() {
    numberZone.textContent =Math.sqrt(Number(numberZone.textContent))
    
}

function round() {
    numberZone.textContent=Math.round(Number(numberZone.textContent))
}



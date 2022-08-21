const inputElement = document.getElementById("kazkas")

const a = 10;

const b = 15;

function count() {
    const inputValue = Number(inputElement.value)

    if (a < inputValue) {
        console.log("Pasirinktas skaicius didesnis uz 10")
    }

    else if (a == inputValue){
        console.log("Pasirinktas skaicius lygus 10")
    }

    else {
        console.log ("pasirinktas skaicius mazesnis uz 10")
    }

    // console.log(a + b / inputValue)
}
const firstinputhere = document.getElementById("firstinput")
const secondinputhere = document.getElementById("secondinput")



function funkcija() {
    const secondinputValue = Number(secondinputhere.value)
    const inputValue = Number(firstinputhere.value)
    if (secondinputValue > inputValue) {
        console.log("Antro laukelio reiksme didesne")
    }
    else if (secondinputValue < inputValue) {
        console.log("Pirmo laukelio reiksme didesne")
    }

    else {
        console.log("lygu")
    }

}
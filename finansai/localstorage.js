function add() {
    localStorage.setItem('financeData')
    JSON.stringify('data')
}

function get() {
    const  item = localStorage.getItem('financeData')
    const parsedItem = JSON.parse(item)
    console.log(parsedItem)
    console.log(item)
}

function del(){
    localStorage.removeItem('data');
}
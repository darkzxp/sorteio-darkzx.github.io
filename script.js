values = []

function add() {
    let id = Date.now()
    let inputValue = document.getElementById("input").value
    let list = document.getElementById("list")

    if (inputValue) {
        values.push(inputValue)
        list.innerHTML += `<li id="${id}">${inputValue}<button class="x" onclick="del('${id}','${inputValue}')">X</button></li>`
        document.getElementById("input").value = ""
    }
}

function del(id, inputValue) {
    let element = document.getElementById(id)
    element.remove()
    values = values.filter(value => value != inputValue)
}

function raffle() {
    result = Math.floor(Math.random() * (values.length))

    if (values[result] == undefined) {
        document.getElementById("result").innerHTML = '(Please, enter a value)'
    } else {
        document.getElementById("result").innerHTML = values[result]
    }
}
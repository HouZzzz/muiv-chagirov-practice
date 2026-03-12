// 1
var tagToAdd = document.createElement('h1')
tagToAdd.textContent = "добро пожаловать"
document.body.appendChild(tagToAdd);

// 2
for (let i = 0; i < 3; i++) {    
    var tagToAdd = document.createElement('p')
    tagToAdd.textContent = "тег p номер " + i
    document.body.appendChild(tagToAdd);
}

// закомментил чтоб каждый раз не высвечивалось
// alert(`на странице ${document.querySelectorAll('p').length} p тэгов`)
console.log(`на странице ${document.querySelectorAll('p').length} p тэгов`)

// 3
var redirectElement = document.querySelector("#redirect-google")
redirectElement.href = 'https://google.com'
redirectElement.target = '_blank'

// 4
var pElement = document.querySelectorAll("p")[0]
pElement.style.color = 'red'
pElement.style.fontSize = '20px'

// 5
var catImageElement = document.querySelector("#cat-img")
catImageElement.src = "https://30.img.avito.st/image/1/1.s3KqRra1H5uw4bGdwAyTGuXnHZsU7bGdsOEdmQ.0svnAYJmiEiNxrdh-UdBXQiT5_De9i7OoBmJNXRP7ss?cqp=2.HvCFS2_KF3dImFHcLRrBLX1aNHtU_r_CR2pTThTfYowI-OfZOqPKILVTUWTPyhZuUZsbnB-YXEKt4Idi-EqD0z3t"

// 6
var listElement = document.querySelector("#list")
for (let i = 0; i < 5; i++) {
    var liElement = document.createElement("li")
    liElement.textContent = String(i + 1)
    listElement.appendChild(liElement)
    
}

// 7
document.querySelector("#delete-last").addEventListener('click', () => {
    var listElement = document.querySelector("#list")
    listElement.lastElementChild.remove()
})

// 8
document.querySelector("#change-bg").addEventListener('click', () => {
    const generateColorNumber = () => Math.floor(Math.random() * 255) // рандомное число от 0 до 255 для ргб формата
    document.body.style.backgroundColor = `rgb(${generateColorNumber()},${generateColorNumber()},${generateColorNumber()})`
})

// 9
document.querySelector("#process-value-display").addEventListener('click', () => {
    var inputFieldValue = document.querySelector("#input-to-show").value

    document.querySelector('#value-display')
        .textContent = "Значение поля: " + inputFieldValue
})

// 10
document.querySelector("#toggle-text").addEventListener('click', () => {
    var textBlock = document.querySelector("#text-block")
    textBlock.classList.toggle('hide')
})

// 11
// чтобы не было дубликатов кода кнопки вызывают эту функцию и прибавляют либо 1 либо -1
function updateCounter(delta) {
    var counter = document.querySelector('#count')
    counter.textContent = String(Number(counter.textContent) + delta)
}
document.querySelector("#increase").addEventListener('click', () => {
    updateCounter(1)
})
document.querySelector("#decrease").addEventListener('click', () => {
    updateCounter(-1)
})

// 12
document.querySelector("#add-task").addEventListener('click', () => {
    var todoList = document.querySelector("#todo-list")

    var taskContent = document.querySelector("#todo-task").value
    var taskElement = document.createElement("li")
    taskElement.textContent = taskContent
    todoList.appendChild(taskElement)
    
    document.querySelector("#todo-task").value = ""
})


// 13
document.querySelector("#toggle-theme").addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

// 14
function updateClock() {
    document.querySelector("#time").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// 15
const quotes = [
    "«Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по‑своему» (Лев Толстой, «Анна Каренина»).",
    "«Ум заключается не только в знании, но и в умении прилагать знание на деле» (Аристотель).",
    "«Человек создан для счастья, как птица для полёта» (Владимир Короленко).",
    "«Жизнь дана на то, чтобы делать добрые дела» (народная мудрость)."
]
document.querySelector("#show-quote").addEventListener('click', () => {
    document.querySelector('#quote').textContent = quotes[Math.floor(Math.random() * quotes.length)]
})

// 16
var randomNumber = Math.ceil(Math.random() * 10) 
var attempt = 0;
console.log(randomNumber)
document.querySelector("#check").addEventListener('click', () => {
    if (attempt >= 3) {
        document.querySelector("#guess-result").textContent = "Лимит попыток исчерпан"
        document.querySelector("#check").remove()
        return;
    }
    var guess = document.querySelector("#guess").value
    
    if (Number(guess) === randomNumber) {
        document.querySelector("#guess-result").textContent = "Угадал!"
    } else {
        document.querySelector("#guess-result").textContent = "Попробуй еще"
    }

    attempt += 1;
    console.log(attempt)
})

// 1
let x;
console.log(typeof x) // undefined, потому что значение не присвоено

// 2
user = {
    'middleName': null
}

// тип null - object из за того, что во время разработки языка перепутали значения
// проверяем, что поле является object, а далее используя приведение объекта в boolean проверяем значение
if (typeof user.middleName == 'object' && !user.middleName) {
    console.log('Нет отчества')
}

// 3
String(42)
+" 13 "

// 4
const isArray = (arr) => {
    Array.isArray(arr)
}
console.log(isArray([1,23])) 
console.log(isArray('')) 

// 5
const exactType = (v) => {
    const type = typeof v

    if (type === 'undefined') { // is undefined
        return type
    } else if (type === 'object' && !v) { // is null
        return "null"
    } else if (Array.isArray(v)) { // is array
        return "array"
    } else {
        return type
    }
}

console.log(exactType(null)) // null
console.log(exactType(undefined)) // undefined
console.log(exactType([1,2,3])) // array
console.log(exactType(() => {})) // function
console.log(exactType(123)) // number
console.log(exactType("abc")) // string

// 6
const a = [1,2]
const b = [
    ...a,
    3
]


// 7
const state = { user: {name:"Anna"}, ok: true }
const assigned = Object.assign(state, {ok: false})
console.log(stage == assigned) // true, одинаковый адрес в памяти

// 8
const normalizeLogin = (login) => {
    if (typeof login === 'number') {
        return String(login)
    }
    return login.trim()
}

console.log(normalizeLogin(123)) // "123"
console.log(normalizeLogin("  ab  c     ")) // "ab  c"


// 9
const xs = [10,20,30,40]
const changed = xs.slice(0,1).concat([300], xs.slice(2,5))
console.log(xs == changed) // false, разные ссылки

// 10
// Number() возвращает NaN, если объект не может быть конвертирован
// поэтому к аккумулятору добавляем 0, если Number() вернул NaN
const elements = ["10", 5, "abc", null, "7"]
const sum = elements.reduce((acc, curr) => acc + (Number(curr) || 0), 0);
console.log(sum) // 22
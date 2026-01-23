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


// 11
let isEmptyValue = (v) => {
    const type = typeof v
    if (type === 'undefined') { // is undefined
        return true
    } else if (type === 'object' && !v) { // is null
        return true
    } else if (type === 'string' && v === '') { // is empty string
        return true
    } else if (Array.isArray(v) && v.length === 0) { // is empty array
        return true
    } else if (type === 'object' && Object.keys(v).length === 0) { // is empty object (проверяем колво ключей в объекте. если 0, то он пустой)
        return true
    } else {
        return false
    }
}
// тесты душно писать, но я проверил, оно работает как надо

// 12
const keepOnlyPrimitives = (arr) => {
    const primitiveTypes = ['number', 'string', 'boolean', 'undefined', 'bigint', 'symbol']
    return arr.filter(e => primitiveTypes.includes(typeof e))
}
const differentTypesList = [1,"abc",true,undefined,1n, {}, [], null]
consolelog(keepOnlyPrimitives(differentTypesList)) // [1,"abc",true,undefined,1n]

// 13
const obj1 = {x:1}
const obj2 = {x:1}
const obj3 = obj1

console.log(obj1===obj2) // false тк разные объекты (не проверяется содержание объектов)
console.log(obj1===obj3) //  true тк присвоена ссылка от obj1

// 14
const keysOf = (obj) => {
    return Object.keys(obj)
}

// 15
let summaryTypes = (arr) => {
    const count = {
        'number': 0,
        'string': 0,
        'boolean': 0,
        'null': 0,
        'undefined': 0,
        'array': 0,
        'object': 0,
        'function': 0,
        'symbol': 0,
        'bigint': 0,
    }

    // exactType делал в пятом задании
    arr.forEach(e => count[exactType(e)]+=1)
    return count
}


// 16
let updateAt = (arr, idx, value) => {
    const copy = [...arr]
    copy[idx] = value
    return copy
}

let originalArr = [1,2,3,4,5]
let updated = updateAt(arr, 0, 100) // [100,2,3,4,5]
console.log(originalArr == updated) // false, разные ссылки

// 17
const removeAt = (arr, idx) => {
    const firstHalf = arr.slice(0, idx)
    const secondHalf = arr.slice(idx + 1, arr.length)
    return firstHalf.concat(secondHalf)
}

originalArr = [1,2,3,4,5]
updated = removeAt(originalArr, 0) // [2,3,4,5]

// 18
const omit = (obj, key) => {
    const copy = {...obj}
    delete copy[key]
    return copy
}

const editedState = omit(state, 'ok') // объект без ключа ok

console.log(state == editedState) // false, ссылки разные


// 19
// дубликат задания 11

// 20
let isEqualArrays = (a,b) => {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false
        }
    }

    return true
}

let equalsShallow = (a,b) => {
    // проверка по ключам
    const aKeys = Object.keys(a).sort()
    const bKeys = Object.keys(b).sort()
    console.log(aKeys, bKeys)
    if (!isEqualArrays(aKeys, bKeys)) {
        console.log('массивы ключей не одинаковы')
        return false
    }

    const primitiveTypes = ['number', 'string', 'boolean', 'undefined', 'bigint', 'symbol']
    aKeys.forEach(key => {
        if (primitiveTypes.includes(typeof key)) {
            // если примитивный, то сравниваем значение
            if (a[key] !== b[key]) {
                console.log(`${a[key]} и ${b[key]} не одинаковы`)
                return false;
            }
        } else {
            // если не примитивный, то сравниваем по ссылкам
            if (a[key] != b[key]) {
                console.log(`${a[key]} и ${b[key]} не одинаковы`)
                return false;
            }
        }
    })
    
    return true;
}
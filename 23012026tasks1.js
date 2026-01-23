// 1
let x = 123
console.log(typeof x) // number


// 2
console.log(typeof 10) // number
console.log(typeof "10") // string


// 3
console.log(typeof false) // boolean
console.log(typeof true) // boolean


// 4
console.log(typeof null) // object


// 5
console.log("15" + 1) // "151", потому что + воспринимается в первую очередь для конкатенации, а не для операции с числами


// 6
console.log("12" - 1) // 11, потому что минус кастит 12 в числовой тип


// 7
console.log(Boolean("")) // false, потому что пустая строка считается false


// 8
console.log(Boolean(" ")) // true, потому что строка с более чем 0 символами не считается false


// 9
const numberToCast = "13"
console.log(typeof +numberToCast) // number
console.log(typeof parseInt(numberToCast)) // number
console.log(typeof Number(numberToCast)) // number



// 10
const isNumber = (obj) => {
    return typeof obj === "number"
}
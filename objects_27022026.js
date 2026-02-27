// 1
const book = {
    title: "Название",
    author: "Автор",
    year: 2026
}
console.log(book.title)
console.log(book.author)
console.log(book.year)

// 2
book.pages = 200
console.log(book.pages) // 200

// 3
delete book.year

// 4
const student = {
    "full name": "Нуисков Илья"
}

console.log(student['full name']) // Нуисков Илья

// 5
let person = {name: "Ivan", age: 30};
person.age = person.age + 1 // 31

// 6
let car = {
    engine: { power: 150, type: "diesel" }
}

console.log(car.engine.type) // diesel

// 7
if (!car?.owner?.name) {
    console.log('Поле не существует')
} else {
    console.log("Поле существует")
}

// 8
user = {id: 1, login: "root", isAdmin: true} 
for (let key in user) {
    console.log(key, user[key])
}

// 9 
let orders = {
  id1: { product: "Phone", price: 500 },
  id2: { product: "Laptop", price: 1500 }
};
console.log(orders.id2.price)

// 10
const getValue = (user, key) => {
    return user[key]
}
getValue(user, 'login') // root

// 11
const hasAge = (user) => {
    return Object.keys(user).includes('age')
}
hasAge(user) // false

// 12
const countProps = (object) => {
    return Object.keys(object).length
}

countProps({a:1, b:2, c:3}) // 3

// 13
const user2 = { 
    ...user,
    name:"Ann", 
};

// 14
const a = { x:1, y:2 };
const b = { y:5, z:3 };
console.log({...a, ...b}) // { x: 1, y: 5, z: 3 }

// 15
const arr = ["a","b","c"]
const object = {}
for (const e of arr) {
    object[e] = 0
}

console.log(object) // { a: 0, b: 0, c: 0 }

// 16
const str = "name=Ann&age=20"
const pairs = str.split("&")
const object2 = {}
for (const pair of pairs) {
    const split = pair.split("=")
    const key = split[0]
    const value = split[1]
    object2[key] = value
}

console.log(object2) // { name: 'Ann', age: '20' }

// 17
const user3 = { id:1, name:"Ann", city:"Moscow" };
Object.values(user3).includes("Moscow") // true

// 18
const object4 = { a:1, b:2 }
for (const key in object4) {
    object4[key] = null
}
console.log(object4) // { a: null, b: null }

// 19
const object5 = { a:1, b:2 }
console.log(Object.keys(object5)) // [ 'a', 'b' ]

// 20
console.log(Object.values(object5))

// 1
let array1 = [1,2]
array1.push(3)
console.log(array1) // [1,2,3]

// 2
let array2 = ["a", "b", "c"]
console.log(array2.pop()) // c

// 3
let array3 = [10, 20, 30, 40]
console.log(array3.includes(100)) // false

// 4
let array4 = [5, 10, 15, 20, 25]
console.log(array4.slice(1,4)) // [ 10, 15, 20 ]

// 5
let array5 = [1, 2, 3, 4]
let sub5 = ["X", "Y"]
array5 = [].concat(array5.slice(0,1))
            .concat(sub5)
            .concat(array5.slice(3,4))
console.log(array5) // [ 1, 'X', 'Y', 4 ]

// 6
let array6 = [2,4,6]
array6 = array6.map(n => n * 10) // [ 20, 40, 60 ]

// 7
let array7 = [1, 2, 3, 4, 5, 6] 
array7 = array7.filter(n => n % 2 == 0)
console.log(array7) // [ 2, 4, 6 ]

// 8
let array8 = [10, 20, 30, 40]
const sum = array8.reduce((acc, n) => n + acc)
console.log(sum) // 100

// 9
let users = [
  {id: 1, name: "Anna"},
  {id: 2, name: "Ivan"},
  {id: 3, name: "Olga"}
];

console.log(users.find(u => u.name === "Ivan")) // { id: 2, name: 'Ivan' }

// 10
let array10 = [100, 5, 20, 15]
array10 = array10.sort((a,b) => a - b)
console.log(array10) // [ 5, 15, 20, 100 ]

// 11
let users1 = [  
  {id: 1, name: "Anna", age: 25, city: "Moscow", salary: 80000},
  {id: 2, name: "Ivan", age: 30, city: "SPb", salary: 120000},
  {id: 3, name: "Olga", age: 22, city: "Moscow", salary: 60000},
  {id: 4, name: "Alex", age: 35, city: "SPb", salary: 150000}
];

users1 = users1.filter(u => u.city === "Moscow" && u.age > 23)
        .sort((u1,u2) => u2.salary - u1.salary)

console.log(users1) // [ { id: 1, name: 'Anna', age: 25, city: 'Moscow', salary: 80000 } ]

// 12
let matrix = [  
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

matrix = matrix.flat()
    .filter(n => n % 2 == 0)
    .map(n => n * 2)
    .sort()
console.log(matrix) // [ 12, 16, 4, 8 ]

// 13
let products = [  
  {id: 1, name: "Ноутбук", price: 25000},
  {id: 2, name: "Мышь", price: 800},
  {id: 3, name: "Клавиатура", price: 1200},
  {id: 4, name: "Наушники", price: 1500}
];

products = products
    .filter(p => p.price < 1000)
    .sort((p1,p2) => p1.price - p2.price)
console.log(products) // [ { id: 2, name: 'Мышь', price: 800 } ]


// 14
let users2 = [  
  {id: 1, name: "Иван", email: "ivan@mail.com"},
  {id: 2, name: "Мария", email: "maria@mail.com"},
  {id: 3, name: "Алексей", email: "alex@mail.com"}
];

const searchEmail = "maria@mail.com";

console.log(users2.find(u => u.email === searchEmail)) // { id: 2, name: 'Мария', email: 'maria@mail.com' }

// 15
const cartItems = [  
  {id: 1, name: "Футболка", price: 500, quantity: 2},
  {id: 2, name: "Джинсы", price: 2000, quantity: 1},
  {id: 3, name: "Кроссовки", price: 3000, quantity: 1}
];

const cartSum = cartItems.reduce((acc, i) => (i.price * i.quantity) + acc, 0)
console.log(cartSum)  // 6000

// 16
let users3 = [  
  {id: 1, name: "Иван", age: 25},
  {id: 2, name: "Мария", age: 30},
  {id: 3, name: "Алексей", age: 28}
];
console.log(users3.map(u => u.name)) // [ 'Иван', 'Мария', 'Алексей' ]


// 17
const products1 = [  
  {id: 1, name: "Телефон", price: 15000},
  {id: 2, name: "Планшет", price: 25000},
  {id: 3, name: "Ноутбук", price: 45000}
];

const mostExpensive = products1.reduce((prev, current) => prev.price > current.price ? prev : current)
console.log(mostExpensive) // { id: 3, name: 'Ноутбук', price: 45000 }

// 18
const cart = [  
  {id: 1, name: "Книга", price: 500},
  {id: 2, name: "Ручка", price: 50},
  {id: 3, name: "Блокнот", price: 200}
];
const productIdToCheck = 2;
const productIndex = cart.findIndex(p => p.id === productIdToCheck)

if (productIndex >= 0) {
    console.log("Продукт существует")
} else {
    console.log("Продукт не существует")
}

// 19
let cart2 = [  {id: 1, name: "Книга", price: 500},
  {id: 2, name: "Ручка", price: 50},
  {id: 3, name: "Блокнот", price: 200}
];

const productIdToRemove = 2;

cart2 = cart2.filter(p => p.id !== productIdToRemove)
console.log(cart2) // [ { id: 1, name: 'Книга', price: 500 }, { id: 3, name: 'Блокнот', price: 200 } ]

// 20
let cart3 = [  
  {id: 1, name: "Книга", price: 500},
  {id: 2, name: "Ручка", price: 50}
];

const newProduct = {id: 3, name: "Карандаш", price: 30};
const productIndex2 = cart3.findIndex(p => p.id === newProduct.id)
if (productIndex2 === -1) { // -1 значит не существует
    cart3.push(newProduct)
}

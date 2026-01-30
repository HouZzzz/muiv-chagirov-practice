// 1
let checkNumber = (n) => {
	if (n > 0) {
		console.log('positive')
	} else if (n < 0) {
		console.log('negative')
	} else {
		console.log('zero')
	}
}

checkNumber(1) // positive
checkNumber(0) // zero
checkNumber(-5) // negative

// 2
let minNumber = (a,b) => Math.min(a,b)

console.log(minNumber(12,7)) // 7
console.log(minNumber(12,70)) // 12

// 3
let divisible = (n) => n % 3 == 0 ? "yes" : "no"

console.log(divisible(15)) // yes
console.log(divisible(45)) // yes
console.log(divisible(1)) // no
console.log(divisible(13)) // no

// 4
let sumFromOneToN = (n) => {
	let sum = 0;
	for (i = 1;i <= n;i++) {
		sum += i
	}
	return sum
}

console.log(sumFromOneToN(5)) // 15
console.log(sumFromOneToN(3)) // 6
console.log(sumFromOneToN(10)) // 55

// 5
for (i = 1;i <= 15;i++) {
	if (i % 2 != 0) {
		console.log(i)
	}
}

// 6
let counter = 0
for (i = 1;i <= 20;i++) {
	if (i % 2 == 0) {
		counter++
	}
}
console.log(coutner)

// 7
let str = 'banana'
let counter = 0
for (ch of str) {
	if (ch === 'a') {
		counter++
	}
}

console.log(counter) // 3

// 8
let str = 'hello'
let reversed = ''
for (i = str.length - 1; i >= 0; i--) {
	reversed += str[i]
}

console.log(reversed)

// 9
let num = 4
for (i = 1; i <= 10; i++) {
	console.log(`${num} x ${i} = ${num * i}`)
}

// 10
for (i = 1; i <= 4; i++) {
	console.log("*".repeat(i))
}

// 11
let sum = 0
for (i = 1; i <= 30; i++) {
	if (i % 5 == 0 || i % 3 == 0) {
		sum += i
	}
}
console.log(sum)

// 12 
let a = 9
let b = 12
let c = 17

let second

if (a >= b && a <= c || a <= b && a >= c) {
  second = a
} else if (b >= a && b <= c || b <= a && b >= c) {
  second = b
} else {
  second = c
}

console.log(second)

// 13
let vowels = ['a', 'e', 'i', 'o', 'u']
let str = 'education'

let counter = 0
for (ch of str) {
	if (vowels.includes(ch)) {
		counter++
	}
} 

console.log(counter) // 5


// 14

// реверс слова из восьмого задания
let str = 'level'
let reversed = ''
for (i = str.length - 1; i >= 0; i--) {
	reversed += str[i]
}

console.log(str === reversed ? "yes" : "no") // yes

// 15

for (i = 2; i <= 30; i++) {
	let prime = true
	for (j = 1; j <= i; j++) {
		if (j === 1 || j === i) continue;

		if (i % j === 0) {
			prime = false
			break
		}
	}

	if (prime) {
		console.log(i)
	}
}

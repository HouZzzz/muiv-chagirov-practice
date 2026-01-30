// 11
let power = (base, exp = 2) => {
	return base * exp
}

console.log(power(4)) // 8
console.log(power(4, 10)) // 40

// 12
let isEven = (n) => {
	return n % 2 == 0;
}

console.log(isEven(10)) // true
console.log(isEven(9)) // false

// 13
let floorNumber = (n) => Math.floor(n);

console.log(floorNumber(5.1)) // 5
console.log(floorNumber(-4.3)) // -5

// 14
let inRange = (x, a ,b) => {
	return x >= a && x <= b;
}

console.log(inRange(5,1,10)) // true
console.log(inRange(10,1,10)) // true
console.log(inRange(0,1,10)) // false

// 15
let repeatText = (text, times) => {
	return text.repeat(times)
}

console.log(repeatText("ha", 3)); // "hahaha"
console.log(repeatText("JS", 1)); // "JS"

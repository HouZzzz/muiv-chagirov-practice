// 1
const str = "JavaScript"
const startIndex = str.indexOf("Script")
const substring = str.substring(startIndex, str.length);

console.log(substring)


// 2
const filename = 'report.pdf'
console.log(filename.startsWith("rep") && filename.endsWith(".pdf"))


// 3
let sentence = "i like cats"
sentence = sentence.replace("cats", "dogs")
console.log(sentence) // i like dogs


// 4
const fruitsStr = 'apple,banana,orange,apple'
const fruitsArr = fruitsStr.split(",")

let counter = 0
const target = "apple"
for (fruit of fruitsArr) {
    if (fruit === target) {
        counter++
    }
}
console.log(counter) // 2


// 5
const data = "My phone number is 12345 and my code is 67890"
const numbers = "1234567890"
const onlyNumbers = data.split("")
                            .filter(c => numbers.includes(c))
                            .join('')
console.log(onlyNumbers) // 1234567890


// 6
let sentence2 = "Hello World From JS"
const firstWordBorder = sentence2.indexOf(" ")
const firstWord = sentence2.substring(0, firstWordBorder)
sentence2 = sentence2.replace(firstWord, firstWord.toLowerCase())


// 7
let sentence3 = "JavaScript is a cool language"
sentence3 = sentence3.replaceAll("cool", "****")
console.log(sentence3)


// 8
// const email = "user@example.com" // valid
const email = "usergmail.com" // invalid
if (email.includes('@') && email.includes(".")) {
    console.log('email valid')
} else {
    console.log("email invalid")
}


// 9
const sentence4 = "Java Script Object Nation"
const abbreviation = sentence4.split(" ")
                                .map(word => word.substring(0,1))
                                .join('')
                                .toUpperCase()
console.log(abbreviation) // JSON


// 10
const sentence5 = "I love learning JavaScript programming"
let maxLength = 0
let longestWord = ''
for (word of sentence5.split(" ")) {
    if (word.length > maxLength) {
        maxLength = word.length
        longestWord = word
    }
}

console.log(longestWord) // programming


// 11
const email2 = "user@example.com"
const atIndex = email2.indexOf("@") //
const domain = email2.substring(atIndex + 1, email2.length)
console.log(domain) // example@com


// 12
const filename2 = "archive.backup.zip"
let filenameArr = filename2.split(".")
filenameArr = filenameArr.slice(filenameArr.length - 2, filenameArr.length - 1)
const filenameWithoutFormat = filenameArr.join(".")
console.log(filenameWithoutFormat) // archive.backup


// 13
const sentence6 = 'make this a slug line'
console.log(sentence6.replaceAll(" ", "_")) // make_this_a_slug_line


// 14
// номер должен быть строго такого формата
const formattedNumber = "+7(999) 123-45-67"
const slices = [
  formattedNumber.substring(0,3),
  "***",
  formattedNumber.substring(6, 8),
  "***",
  formattedNumber.substring(12,18)
]

console.log(slices.join('')) // '+7(***) ***45-67'


// 15
const filename3 = "main.test.js"
console.log(filename3.endsWith(".js")) // true


// 16
const sentence7 = " i   love   JS"
const withoutWhitespace = sentence7.split(" ")
                                    .filter(word => word.length > 0)
                                    .join(" ")
console.log(withoutWhitespace)


// 17
let date = '2026-02-06'
date = date.split("-")
            .reverse()
            .join(".")

// 18
const capitalizeWord = (word) => {
    return word.substring(0,1).toUpperCase()
             + 
            word.substring(1, word.length).toLowerCase()
}

const sentence8 = "hELLo woRLD From fRoM js"
const capitalizedSentence = sentence8
                                .split(" ")
                                .map(w => capitalizeWord(w))
                                .join(" ")
console.log(capitalizedSentence)


// 19
const sentence9 = "Read more #JavaScript today"
for (word of sentence9.split(" ")) {
    if (word.startsWith("#")) {
        console.log(word.substring(1,word.length))
    }
}


// 20
const sentence10 = "cat scatter catapult cat"
const fixedSentence = sentence10.split(" ")
                            .map(word => word === "cat" ? 'dog' : word)
                            .join(" ")
console.log(fixedSentence)


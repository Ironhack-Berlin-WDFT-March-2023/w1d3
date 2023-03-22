// this is a comment

/* this is a 
multiline comment */

console.log("hello world")

// -------------------------------------------------------------

// Variables - named storage

// We need variables to store information
// We can use let or const to declare a variable

// let variables can be declared as undefined and overwritten later
// When you log variables, it is a good idea to add a description
let username
console.log("This is the username: ", username)

username = "matias"
console.log("This is the username: ", username)

username = "antonio"
console.log("This is the username: ", username)

// JavaScript is dynamically typed
username = 23
console.log(username)

// We use camelCase for variables
let favoriteFood = "Pizza"

// const variables cannot be overwritten
// We should use const whenever possible, let should be the exception
const favoriteDrink = "Coffee"
// favoriteDrink = "Tea"
console.log(favoriteDrink)

// -------------------------------------------------------------

// Data types

// Primitives and objects
// Primitives: number, string, boolean, null, undefined, symbol

// We can check the type by using "typeof"
// JavaScript is dynamically typed, type can change
let num = "42"
console.log(typeof num)
num = 23
console.log(typeof num)

// -------------------------------------------------------------

// Number

// Integers
const distance = 7000

// Floating point numbers
const price = 19.99

// Mathematical operators:
// **, *, /, +, -
console.log((10 + 20) + 50 * 30 - 10) // evaluates to 1520

// -------------------------------------------------------------

// Advanced operators

// Modulo (%): Returns the remainder
console.log(5%2) // evaluates to 1

// Assignment operators

// myAge += 1 is the equivalent to myAge = myAge + 1
// You can also use -=, *=, /=
let myAge = 25
myAge += 5
console.log(myAge)

// myAge++ is the equivalent to myAge = myAge + 1
myAge++
console.log(myAge)

// myAge-- is the equivalent to myAge = myAge - 1
myAge--
console.log(myAge)

// NaN represents a computational error
console.log("hello" * 3)

// Rounding

console.log(price)

// Math.floor rounds down
console.log(Math.floor(price))

// Math.ceil rounds up
console.log(Math.ceil(price))

// Math.round rounds to the nearest integer
console.log(Math.round(price))

// toFixed() cuts the decimals
// But be careful: It returns a string
const priceWithManyDecimals = 19.3333
const priceWithTwoDecimals = Number(priceWithManyDecimals.toFixed(2))
console.log(priceWithTwoDecimals)

console.clear()

// -------------------------------------------------------------

// Strings
// You can use "" (double quotes), '' (single quotes) or `` (backticks) to create a string
username = "matias"
username = 'matias'
username = `matias`

// Concatenate strings

// The oldschool way of concatenating strings: +
username = "matias"
const greeting = "hello"

console.log(greeting + " " + username)

// With backticks, we can use interpolation to embed variables inside a string
console.log(`${greeting} ${username}`)

// With backticks you can also create a multiline string
console.log(`fruits:
banana
apple
orange`)

// Special characters

// You can use single quotes in a string:
console.log("My favourite book is 'Clean Code' from Robert C. Martin")

// If you want to use double quotes, you have to escape them:
console.log("My favourite book is \"Clean Code\" from Robert C. Martin")

// You can also add a line break this way:
console.log("My favourite book is: \n \"Clean Code\" from Robert C. Martin")

// -------------------------------------------------------------

// String properties and methods

// Return the length of a string
console.log(username.length)

// Accessing characters in a string
console.log("First character: ", username[0]); // Square brackets
console.log("Last character: ", username[username.length - 1])
console.log(username.charAt(0)) // Another method: indexOf()

// Find a character in a string
// indexOf() returns the first occurence of a character
console.log(username.indexOf("a"))

// lastIndexOf() returns the last occurence of a character
console.log(username.lastIndexOf("a"))

// You can also search for multiple characters
console.log(username.indexOf("at"))

// If you want to check if a char is included in a string: includes() returns a boolean
console.log(username.includes("e"))

// slice() returns a substring within a given range
let message = "Trust the process"
console.log(message.slice(0,5))

// toUpperCase() changes a word to upper case
// But: Strings (and all other primitive values) are immutable
// The values itself cannot be changed, but the variables can be reassigned
// Therefore toUpperCase() returns a new string
console.log(message.toUpperCase())

// But: Strings (and all other primitive values) are immutable
// The values itself cannot be changed, but the variables can be reassigned
console.log(message)
message = message.toUpperCase()
console.log(message)

// Challenge: How can we transform our username ("matias") to "Matias"???
// Solution:
username = username[0].toUpperCase() + username.slice(1)
console.log(username)

console.clear()

// -------------------------------------------------------------

// Booleans, undefined and null

// Booleans
// A boolean expression can result in the value of true or false

// Boolean operators:
// > larger
// < less 
// >= larger or equal
// <= less or equal
console.log("4 > 5: ", 4 > 5) // false

// Equality
console.log("4 == '4': ", 4 == "4") // true
console.log("4 === '4': ", 4 === "4") // checks type -> false

// Logical operators

// && logical and
// If both expressions are true, the result will be true
console.log("true && true: ", true && true) // true
console.log("true && false: ", true && false) // false

// || logical or
// If one of the expressions is true, the result is true
console.log("true || false: ", true || false) // true
console.log("false || false", false || false) // false

// ! not
// not-operator negates the value of an expression
console.log("!true: ", !true) // false

// Challenge: What is the result of this expression: 5 > 3 || false
console.log("5 > 3 || false: ", 5 > 3 || false)

"b" + "a" + +"a" + "a" // baNaNa

"foo" + +"bar" // fooNaN

NaN === NaN // false

// undefined
// undefined is automatically assigned to a variable when it is declared
// The unintentional absence of a value
let number
console.log(number)

// null is often used to represent unknown values
// null is the intentional absence of a value
number = null
console.log(number)

// Truthy and falsy values: Evaluate to true or false
// Truthy: true, "string", "0", "false", 35
// Falsy: false, 0, "", null, undefined, NaN
if (true) { 
    console.log("true") 
} else {
    console.log("false")
}

// -------------------------------------------------------------

// Conditionals

// If else statements
const age = Number(prompt("Welcome to Ironhack cinema. How old are you?"))
console.log(age)

// Check if value is a number
if (isNaN(age)) {
    console.log("this is not a number, sorry!")
    return
}

if (age <= 16) {
    console.log("You have a teenager discount.")
} else if (age >= 65) {
    console.log("You have a senior citizen discount 😊")
} else {
    console.log("Sorry, you don't have any discount 😐")
}

// Switch case
// If we have too many if else statements, then it's better to use a switch statement
const language = "english"

switch (language) {
    case "french":
        console.log("bonjour")
        break
    case "english":
        console.log("hello")
        break
    case "italian":
        console.log("ciao")
        break
    default:
        console.log("non recognized language")
}

// Loops + iterations

// Loop the numbers from 1 to 10

// for loop
for (let i = 1; i < 11; i++) {
    console.log(i)
}

// We can exit the loop with a break statement
// We can continue with the next iteration with "continue"
for (let i = 1; i < 11; i++) {
    if (i === 3) continue;
    if (i === 6) break;
    console.log(i)
}

// while loop
let i = 1
while (i < 11) {
    console.log(i)
    i++
}

// Challenge: Write a while-loop that counts from 1 to 20 and instead of 10 prints "ten" and instead of 20 prints "twenty"
while (i < 21) {
    if (i === 10) {
        console.log("ten")
    } else if (i === 20) {
        console.log("twenty")
    } else {
        console.log(i)
    }
    i++
  }

// More common use for a while loop
// Google: most common passwords
const correctPassword = "123456789"
let password = prompt("Enter your password")
while (password !== correctPassword) {
    password = prompt("Enter your password")
}

// This line is reached if the password is correct
alert("Access granted! 👍")

// Challenge: Write a loop that iterates from 0 to 20. 
// For each iteration, it will check if the current number is even or odd and print that on the screen.
// Expected output: 1 is odd 2 is even ... 19 is odd 20 is even

for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) console.log(i + " is even")
    else console.log(i + " is odd")
}

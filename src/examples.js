const myName = "Gabriel"
let age = 18;
const obj = {}

const multiply = (x, y) => { 
    return x * y
}

age = age + 1;
obj.value = "a"

console.log(obj)
console.log(multiply(2, 4))
if (age > 21) {
    console.log("Você pode beber")
} else if (age >= 18) {
    console.log("Aguarde mais uns anos!")
} else {
    console.log("Você não pode beber")
}

const beatles = ["paul", "john", "ringo", "george"];

beatles.forEach((artist) => {
    console.log(artist.toUpperCase())
})




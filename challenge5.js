const prompt= require("prompt-sync")()
const tempcelcius= Number(prompt("Enter the temperature in Celcius: "))
const Faren= (tempcelcius * 9/5)+ 32
console.log(`Temperature in Farenheit: ${Faren}`)
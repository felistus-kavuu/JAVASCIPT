const prompt= require("prompt-sync")()
const rawprice= Number(prompt("Enter the raw price of the item: "))
let tax= 1.206*rawprice
console.log(`Final price: ${tax}`)
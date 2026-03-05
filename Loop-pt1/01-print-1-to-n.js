// Problem: Print numbers from 1 to N
// Input: N
// Output: 1 2 3 ... N
// Time Complexity: O(n)

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number"))

for(let i=1; i<=n; i++){
    console.log(i)
}
// Problem: Print numbers from  N to 1cd 
// Input: N
// Output: n to 1
// Time Complexity: O(n)
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number"));

for (let i = n; i >= 1; i--) {
    console.log(i);

}
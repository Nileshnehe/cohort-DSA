const employees = [
  { name: "Rahul", salary: 45000 },
  { name: "Neel", salary: 120000 },
  { name: "Anjali", salary: 95000 },
  { name: "Dnyanu", salary: 60000 }
];


const highestSalary = employees.reduce((accumulator, currentemp) => {
    return Math.max(accumulator, currentemp.salary)
}, 0)

console.log(highestSalary)

// Step-by-Step Execution Trace (ये बैकग्राउंड में कैसे चला
//)Loop 1: accumulator is 0. currentemp.salary is 45000. Math.max(0, 45000) returns 45000.
// Loop 2: accumulator is 45000. currentemp.salary is 120000. Math.max(45000, 120000) returns 120000.
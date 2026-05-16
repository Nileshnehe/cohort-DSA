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
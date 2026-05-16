const updatedEmployees = [
  { name: "neel", salary: 120000 },
  { name: "dnyanu", salary: 60000 }
];


// We reduce the array of objects down to a single total budget number
const totalbudget = updatedEmployees.reduce((accumulator, currentEmp) => {


    // Add the current employee's salary to our running total
    return accumulator + currentEmp.salary;

}, 0)// <-- 0 is the initialValue (starting point)


console.log(totalbudget)
// Output: 180000
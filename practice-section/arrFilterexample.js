const employees = [
    { name: "Rahul", salary: 45000 },
    { name: "Neel", salary: 120000 },
    { name: "Anjali", salary: 95000 },
    { name: "Dnyanu", salary: 60000 }
];


// const highEarn = employees.filter((emp) =>  {

//     return emp.salary > 70000;
// })

// console.log(highEarn)


const seniorDev = employees
    .filter((emp => emp.salary > 70000))
    .map(emp => ({...emp, role: "Senior Developer"}))

    console.log(seniorDev)
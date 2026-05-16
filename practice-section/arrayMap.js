const emp = [
    { name: "neel", salary: 60000 },
    { name: "dnyanu", salary: 30000 }
];

const updateEmp = emp.map((emp) => {

    return {
        name: emp.name,
        salary: emp.salary * 2,
        role: "Developer"
    }
});

console.log("update details are here" ,updateEmp)
console.log("old emp details", emp)

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

// Hindi Explanation of the Code Loop:Step 1: लूप शुरू होने पर accumulator की वैल्यू 0 होगी (क्योंकि हमने आख़िर में , 0 पास किया है)। currentEmp हमारा पहला ऑब्जेक्ट { name: "neel", salary: 120000 } होगा। दोनों जुड़कर 120000 बनेंगे और अगली बार के लिए सेव हो जाएंगे।Step 2: अब accumulator की वैल्यू 120000 है। currentEmp हमारा दूसरा ऑब्जेक्ट { name: "dnyanu", salary: 60000 } है। दोनों जुड़कर 180000 बन जाएंगे।Result: एरे खत्म हो गया, इसलिए फाइनल आंसर 180000 स्क्रीन पर आ जाएगा।
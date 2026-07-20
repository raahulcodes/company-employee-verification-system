
// creating an array list of employees
let employees = [{name:"Rahul Sharma", dept: "IT", salary: 120000, yrsExp: 3, empStatus: "active"},
                 {name:"Priyanka Sharma", dept: "HR", salary: 220000, yrsExp: 8, empStatus: "active"},
                 {name:"Gunishka Varshney", dept: "IT", salary: 55000, yrsExp: 1, empStatus: "inactive"},
                 {name:"Rajeev Sharma", dept: "Finance", salary: 235000, yrsExp: 40, empStatus: "active"}
                ];

// function display to display all the employee details
function display()
{
    employees.forEach(e=>
    {
        console.log("Employee Name: " + e.name + "\nDepartment: " + e.dept + "\nSalary: " + e.salary + "\nYears of Experience: " + e.yrsExp + "\nEmployee Status: " + e.empStatus);
    }
    )
}

display();

// displaying the employees with salary more than 50000
console.log("Employees with salary 50000 and more:")
let salaryFifty = employees.filter(e=>e.salary>50000);
salaryFifty.forEach(e=>
{
    console.log("----- " + e.name + " ------");
}
)

// displaying only employees that belong to IT Company
console.log("Employees that belong to IT Department: ")
let itEmp = employees.filter(e=>e.dept==="IT");
itEmp.forEach(employee=>
{
    console.log("------" + employee.name + "-------");
}
)

// checking the active employees
console.log("------ Active Employees -------");
let activeEmp = employees.every(e=>e.empStatus==="active");

if(activeEmp)
{
    console.log("All Employees are Active");
}

else 
{
    console.log("All Employees are not Active");
}

// checking if all employees have experience of 2 years or not
let expEmps = employees.every(e=>e.yrsExp>=2);
if(expEmps)
{
    console.log("All Employees have experience of Minimum 2 Years");
}

else 
{
    console.log("Certain Employees dont have 2 Years of Experience");
}

// displaying all employees with experience greater than 5
console.log("------All Employees with Experience more than 5 years-----");
let expFive = employees.filter(e=>e.yrsExp>5);
expFive.forEach(employee=>
    {
    console.log(employee.name);
});

// displaying all employees with salaries between 40,000 and 70,000
console.log("------All Employees with Salaries Between 40,000 and 70,000-----");
let salaryFourtySeventy = employees.filter(e=>e.salary>40000&&e.salary<70000);
salaryFourtySeventy.forEach(employee=>
{
    console.log(employee.name);
}
)

// displaying ebery employee from "HR" Department
console.log("------- Employees of HR Department ------")
let hrEmp = employees.filter(e=>e.dept==="HR");
hrEmp.forEach(employee=>
{
    console.log(employee.name);
}
)

// checking whether every employee belongs to "HR" or "IT"
let checkDept = employees.every(employee=>employee.dept==="HR" || employee.dept==="IT");
if(checkDept)
{
    console.log("Every Employee belongs to HR or IT");
}
else 
{
    console.log("Not Every Employee belongs to IT or HR");
}


// displaying each employee name in uppercase
console.log("---- All Employees ----");
employees.forEach(employee=>
{
    console.log(employee.name.toUpperCase());
}
)

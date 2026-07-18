
// creating an array list of employees
let employees = [{name:"Rahul Sharma", dept: "IT", salary: 120000, yrsExp: 3, empStatus: "active"},
                 {name:"Priyanka Sharma", dept: "HR", salary: 220000, yrsExp: 8, empStatus: "active"}
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
let itEmp = employees.filter(e=>e.dept=="IT");
itEmp.forEach(employee=>
{
    console.log("------" + employee.name + "-------");
}
)

// displaying the active employees
console.log("------ Active Employees -------");
let activeEmp = employees.filter(e=>e.empStatus=="active");
activeEmp.forEach(employee=>
{
    console.log(employee.name);
}
)

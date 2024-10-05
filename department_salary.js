// Task 1: Create a Department Structure

const company = {
    departments: [
        {
            departmentName: 'Marketing',
            employees: [
                {
                    name: 'Alvin',
                    salary: 25000,
                    subordinates: [
                        {
                            name: 'Simon',
                            salary: 25000,
                            subordinates: [
                                {
                                    name: 'Theodore',
                                    salary: 25000,
                                    subordinates: []
                                }
                            ]
                        }
    
                    ]
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Brittany',
                    salary: 50000,
                    subordinates: [
                        {
                            name: 'Jeanette',
                            salary: 30000,
                            subordinates: []
                        }
                    ] 
                },
                {
                    name: 'Eleanor',
                    salary: 20000,
                    subordinates: []
                }
            ]
        }
    ]
}; 

console.log(company); // Displays the company object structure in the console

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) {
    let totalSalary = 0; // Initialize total salary for the department

    for (let employee of department.employees) { // Iterate over each employee in the department

        totalSalary += employee.salary; // Add employee's salary to total

        if (employee.subordinates.length > 0) { // If employee has subordinates
            totalSalary += calculateDepartmentSalary({employees: employee.subordinates}); // Recursively add subordinates' salaries
        }
    }

    return totalSalary; // Return total salary for the department

}

// Using the function
console.log(calculateDepartmentSalary(company.departments[0])); // Marketing Department
console.log(calculateDepartmentSalary(company.departments[1])); // Sales Department

// Task 3: Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company) {
    let totalCompanySalary = 0; // Initialize total salary for the company

    for(let department of company.departments) { // Iterate over each department in the company

        totalCompanySalary += calculateDepartmentSalary(department); // Add the department's total salary
    }
    
    return totalCompanySalary; // Return total salary for the entire company

}

console.log(calculateCompanySalary(company)); // Calculate and log total salary for the entire company
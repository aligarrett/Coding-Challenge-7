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

console.log(company); // Shows company object

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) {
    let totalSalary = 0;

    for (let employee of department.employees) {

        totalSalary += employee.salary;

        if (employee.subordinates.length > 0) {
            totalSalary += calculateDepartmentSalary({employees: employee.subordinates});
        }
    }

    return totalSalary;

}

// Using the function
console.log(calculateDepartmentSalary(company.departments[0])); // Marketing Department
console.log(calculateDepartmentSalary(company.departments[1])); // Sales Department
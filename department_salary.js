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
            name: 'Dave',
            salary: 25000,
            subordinates: []
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
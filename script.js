"use strict";

const company = {
  sales: [{ name: "John", salary: 1000 }, { name: "Alice", salary: 600 }],
  development: {
    web: [{ name: "Peter", salary: 2000 }, { name: "Alex", salary: 1800 }],
    internals: [{ name: "Jack", salary: 1300 }]
  }
};

function getTotalSalary(department) {
  if (Array.isArray(department)) {
    return department.reduce((total, employee) => total + employee.salary, 0);
  } else {
    return Object.values(department).reduce((total, subDept) => total + getTotalSalary(subDept), 0);
  }
}

const totalSalary = getTotalSalary(company);
console.log("Total Salary:", totalSalary);






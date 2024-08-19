export const initialUsers = [];
export const getUserById = (users, id) => users.find(user => user.id === id);

export const initialMeetings = [];
export const getMeetingById = (meetings, id) => meetings.find(meeting => meeting.id === id);


// utils.js or similar file
export const generateFakeVacations = () => {
    const types = ['Annual Leave', 'Sick Leave', 'Maternity Leave'];
    return Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      name: `Employee ${index + 1}`,
      type: types[Math.floor(Math.random() * types.length)],
      fromDate: `2024-08-${String(index + 1).padStart(2, '0')}`,
      toDate: `2024-08-${String(index + 3).padStart(2, '0')}`,
      status: 'Pending',  // Set default status as Pending
    }));
  };



//   // utils.js or similar file
// export const generateFakeSalaries = () => {
//   const statuses = ['Paid', 'Unpaid', 'Pending'];
//   return Array.from({ length: 20 }, (_, index) => ({
//       id: index + 1,
//       name: `Employee ${index + 1}`,
//       month: `Month ${Math.ceil(Math.random() * 12)}`, // Generates a random month
//       year: 2024, // Set default year
//       basicSalary: (Math.random() * 5000 + 2000).toFixed(2), // Random salary between 2000 and 7000
//       bonus: (Math.random() * 500 + 100).toFixed(2), // Random bonus between 100 and 600
//       increase: (Math.random() * 300 + 50).toFixed(2), // Random increase between 50 and 350
//       discounts: (Math.random() * 200 + 0).toFixed(2), // Random discounts between 0 and 200
//       netSalary: function() {
//           return (parseFloat(this.basicSalary) + parseFloat(this.bonus) + parseFloat(this.increase) - parseFloat(this.discounts)).toFixed(2);
//       }(),
//       status: statuses[Math.floor(Math.random() * statuses.length)],
//   }));
// };


export const generateFakeSalaries = (numEmployees = 5, numMonths = 3) => {
  const statuses = ['Paid', 'Unpaid', 'Pending'];
  const months = ['January', 'February', 'March']; // Example months
  const year = 2024; // Default year

  const salaries = [];

  for (let employeeIndex = 1; employeeIndex <= numEmployees; employeeIndex++) {
    const employeeId = employeeIndex;
    const employeeName = `Employee ${employeeIndex}`;

    for (let monthIndex = 0; monthIndex < numMonths; monthIndex++) {
      const month = months[monthIndex];

      const basicSalary = (Math.random() * 5000 + 2000).toFixed(2); // Random salary between 2000 and 7000
      const bonus = (Math.random() * 500 + 100).toFixed(2); // Random bonus between 100 and 600
      const increase = (Math.random() * 300 + 50).toFixed(2); // Random increase between 50 and 350
      const discounts = (Math.random() * 200 + 0).toFixed(2); // Random discounts between 0 and 200

      const netSalary = (
        parseFloat(basicSalary) +
        parseFloat(bonus) +
        parseFloat(increase) -
        parseFloat(discounts)
      ).toFixed(2);

      salaries.push({
        id: salaries.length + 1,
        employeeId,
        name: employeeName,
        month,
        year,
        basicSalary,
        bonus,
        increase,
        discounts,
        netSalary,
        status: statuses[Math.floor(Math.random() * statuses.length)],
      });
    }
  }

  return salaries;
};


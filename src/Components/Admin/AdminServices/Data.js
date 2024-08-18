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


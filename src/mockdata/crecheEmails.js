export const mockCrecheEmails = [
  {
    id: 1,
    date: '2026-01-28T10:30:00Z',
    parentName: 'Sarah Johnson',
    parentEmail: 'sarah.johnson@email.com',
    childName: 'Emma Johnson',
    status: 'new',
    waitingListNumber: '',
    lastFollowup: null,
  },
  {
    id: 2,
    date: '2026-01-29T14:15:00Z',
    parentName: 'Michael Brown',
    parentEmail: 'michael.brown@gmail.com',
    childName: 'Liam Brown',
    status: 'waiting',
    waitingListNumber: 'WL-045',
    lastFollowup: '2026-01-30T09:00:00Z',
  },
  {
    id: 3,
    date: '2026-01-30T08:45:00Z',
    parentName: 'Emma Wilson',
    parentEmail: 'emma.wilson@outlook.com',
    childName: null, // No child name provided
    status: 'new',
    waitingListNumber: '',
    lastFollowup: null,
  },
  {
    id: 4,
    date: '2026-01-27T16:20:00Z',
    parentName: 'David Patel',
    parentEmail: 'david.patel@yahoo.com',
    childName: 'Ava Patel',
    status: 'accepted',
    waitingListNumber: '',
    lastFollowup: '2026-01-28T11:30:00Z',
  },
];

// Mock user profile with creche name
export const mockUserProfile = {
  crecheName: 'Sunny Days Creche',
  staffName: 'Jane Doe',
};

// const fetchAllUsers = () => {
//   console.log('fetchAllUsers');
// };

// const fetchUserById = id => {
//   console.log('fetchUserById');
// };

// const updateUserById = id => {
//   console.log('updateUserById');
// };

// // export default { fetchAllUsers, fetchUserById, updateUserById };

// якщо імeнний експорт

import shortid from 'shortid';

export const fetchAllUsers = () => {
  console.log('fetchAllUsers');
};

export const fetchUserById = id => {
  console.log('fetchUserById');
};

export const updateUserById = id => {
  console.log('updateUserById');
};

export const x = 5;

export const y = 'mango';

export const addUser = name => {
  const user = {
    id: shortid.generate(),
    name,
  };

  console.log(user);
};

import validatePassword from './js/validate-password';

console.log(validatePassword('reredre'));
// import apiService from './js/api-service';

// import {
//   fetchAllUsers,
//   fetchUserById,
//   updateUserById,
//   x,
//   y as value,
// } from './js/api-service';
// аналогічно

import * as apiService from './js/api-service';

console.log(validatePassword);
// console.log(apiService);
// console.log(fetchAllUsers);
// console.log(fetchUserById);
// console.log(updateUserById);
// console.log(x);
// console.log(value);
console.log(apiService);

import { addUser } from './js/api-service';
addUser('mango');

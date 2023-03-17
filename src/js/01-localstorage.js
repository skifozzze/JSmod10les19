JSON;
// const user = {
//   name: 'mango',
//   age: 10,
// };
// console.log(JSON.stringify(user));

// const savedUserData = '{"name":"mango","age":10}';
// console.log(JSON.parse(savedUserData));

console.log(localStorage);

localStorage.setItem('my-data', JSON.stringify({ name: 'mango', age: 10 }));

const savedData = localStorage.getItem('my-data');
console.log(savedData);
const parcedData = JSON.parse(savedData);
console.log(parcedData);

console.log(sessionStorage);

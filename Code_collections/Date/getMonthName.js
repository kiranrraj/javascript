let today = new Date();

const monthName__long = today.toLocaleString('default', { month: 'long' });
const monthName__short = today.toLocaleString('default', { month: 'short' });

const monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = monthsName[today.getMonth()];

console.log(monthName__short);
console.log(monthName__long);
console.log(monthName);

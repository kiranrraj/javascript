
const today = new Date().toISOString().split('T')[0];
console.log(today);

const nextDay = new Date(new Date().setDate(now.getDate() + 1)).toISOString().split('T')[0];
console.log(nextDay);

const previousDay = new Date(new Date().setDate(now.getDate() - 1)).toISOString().split('T')[0];
console.log(previousDay);
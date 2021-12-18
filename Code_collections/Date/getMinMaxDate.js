const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const dateArray = [
    new Date(2018, 05, 19),
    new Date(2021, 12, 13),
    new Date(2021, 12, 01),
    new Date(2020, 10, 10),
    new Date(2019, 0, 9)
  ];

console.log(minDate(dateArray).toISOString().split('T')[0]);
console.log(maxDate(dateArray).toISOString().split('T')[0]);
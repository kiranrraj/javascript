let getDaysBetween = (startDate, finalDate) => {

    function format(x) {
        return x.toISOString().split('T')[0];
    }

    if (startDate.toString() === finalDate.toString()) {
        return `No days between ${format(startDate)} and ${format(finalDate)}`;
    }

    let days = (finalDate - startDate) / (1000 * 3600 * 24);
    return `Number of days between ${format(startDate)} and ${format(finalDate)} is ${days}`;
}

console.log(getDaysBetween(new Date('2019-01-13'), new Date('2019-01-15')));
console.log(getDaysBetween(new Date('2019-01-13'), new Date('2019-01-13')));
console.log(getDaysBetween(new Date('2019-01-01'), new Date('2019-01-13')));
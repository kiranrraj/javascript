function dateComparison(date1, date2){
    function format(x){
        return x.toISOString().split('T')[0];
    }
    if (date1.toISOString() === date2.toISOString()) {
        return `${format(date1)} is equal to ${format(date2)}`
    }else if (date1 < date2) {
        return `${format(date1)} is less than ${format(date2)}`
    }else if(date1 > date2){
        return `${format(date1)} is greater than ${format(date2)}`
    }
}

console.log(dateComparison(new Date(2010, 10, 21), new Date(2010, 10, 20)));
console.log(dateComparison(new Date(2010, 10, 21), new Date(2010, 10, 21)));
console.log(dateComparison(new Date(2010, 10, 21), new Date(2010, 10, 22)));
var myArray =[
    false, true, {'key1' : 'value1'},
    ['a','c','d'],
    "string1",
    "string2"
];
console.log(myArray.length)

var weeks  = ['monday'];
console.log(weeks);
weeks.push('tuesday');
console.log(weeks);
let calender = [
    {
        month: 'january',
        days: 31
    },
    {
        month: 'february',
        days: 28
    },
    {
        month: 'March',
        days: 31
    }
];
console.log(calender);
calender.push({
    month: 'April',
        days: 30
})
console.log(calender.length); 

let states = ["Maharashtra", "gujarat", "Uttar Pradesh", "karnataka", "Bihar", "Andra Pradesh", "Odisa", "Punjab", "Goa", "Kerala", "Tamil Nadu"];
console.log(states[9]);
states[states.length] = "Ladkah";
console.log(states);
states.push("West Bengal");
console.log(states);
states.pop();
delete states[5];
console.log(states);
states.splice(5,3);
console.log(states);

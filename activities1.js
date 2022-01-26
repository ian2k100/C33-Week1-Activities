let name = 'Ian';
let age = 24;
let favDrink = 'Coffee'
let breakfast = 'Beans on toast'
let lunch = 'salad'
let dinner = 'sunday roast'
let birthday = new Date("06, 07,2022");
let todayDate = new Date();

// activity 1 

console.log(`Hi my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

name = 'Iain';
age = 25;
favDrink = 'vodka';

console.log(`Hi my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

// activity 2 

console.log(`Today i had ${breakfast} for breakfast, a ${lunch} for lunch and ${dinner} for dinner.`)

breakfast = 'cornflakes';
lunch = 'tuna & pasta';
dinner = 'spaghetti bolognese';

console.log(`Tomorrow i'm going to have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`)

// activity 3 

bday = new Date(todayDate.getFullYear(),birthday[1]-1,birthday[0]);
if( todayDate.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear()+1);
}

let diff = birthday.getTime()-todayDate.getTime();
let days = Math.ceil(diff/(1000*60*60*24));
console.log(days, " days until Ian birthday!");

// activity 4 

// need to figure out a way to have the X and O on the middle row instead of being in all spaces 

space1 = 'X';
space2 = 'O';
space3 = ' ';

for (let i = 0; i < 3; i++){
    console.log(`  ${space1} |  ${space2} |  ${space3} `)
}
for (let i = 0; i < 1; i++){
    console.log("---------------")
}
for (let i = 0; i < 3; i++){
    console.log(`  ${space1} |  ${space1} |  ${space3} `)
}
for (let i = 0; i < 1; i++){
    console.log("---------------")
}
for (let i = 0; i < 3; i++){
    console.log(`  ${space2} |  ${space3} |  ${space3} `)
}


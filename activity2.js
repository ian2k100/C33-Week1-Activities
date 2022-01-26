// activity 1 

let age = 24;
let country = "UK";

if (age >= 18 && country == "UK"){
    console.log("Yes I can serve you");
}
else {
    console.log("I can't serve you");
}

// activity 2 

let pizzaToppings = "pepperoni";

switch(pizzaToppings){
    case "pepperoni":
    case "extra cheese":
    case "sausage":
    case "fresh basil":
        console.log("This is a must for any pizza!");
        break;
    case "onion":
    case "fresh garlic":
    case "green pepper":
        console.log("Not the best but not the worst!");
        break;
    case "mushroom":
    case "pineapple":
        console.log("It's clear you lack knowledge of true italian culture!");
        break;
    default:
        console.log("I don't think that's a pizza topping?");
}

// activity 3

let password = "password123";
let plength = password.length; 

if (plength >= 8){
    console.log(`You're password is ${password}. `);
}
else {
    console.log("You're password needs to be 8 characters or more. ");
}

// activity 4 

let number = 15

if (number%3 == 0){
    console.log(`${number} is divisable by 3.`)
}
else {
    console.log(`${number} is not divisible by 3.`)
}

// activity 5 

let num = 15;

if (num%3 == 0 && num%5 == 0){
    console.log("Fizz Buzz");
}
    else if (num%3 == 0){
        console.log("Fizz");
    }
    else if (num%5 == 0){
        console.log("Buzz");
    }
    else{
    console.log(num);
}

// activity 6 


// let palindromenum = "4004";

// function checkpalindrome(palindromenum){
//     const len = palindromenum.length;
//     for (let i = 0; i < len / 2; i++){
//         if (palindromenum[i] !== palindromenum[len - 1 - i]){
//             console.log("Not a palindrome");
//         }
//     }
//     console.log("This is a palindrome");
// }

function palindrome(str) {
    const alphanumericOnly = str
        .toLowerCase()
        .match(/[a-z0-9]/g);
    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
}

console.log(palindrome("4004"));

// activity 7 

let time = "18:30";
let work = "Code Nation";
let home = "Home";
let travel1 = "Commuting";

if (time >= "9:30" || time <= "17:30"){
    console.log(`I'm currently hard at work at ${work}`);
}
else if(time >= "19:00" || time <= "08:00"){
    console.log(`I'm currently relaxing at ${home} in my comfy bed.`);
}
else{
    console.log(`I'm currently ${travel1} for point A to B.`);
}

// activity 8

let word = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowel = word.match(/[aeiou]/ig).join("");
let lastVowel = vowel.charAt(vowel.length-1);

console.log(`The last vowel of the string ${lastVowel}`);

// activity 9 

let word2 = "pop";

if (word2.charAt(0) === word2.charAt(word2.length-1)){
   console.log(`True`);
}
else{
    console.log(`False`);
}

// activity 10

let num1 = 11;
let num2 = 16;
let num3 = (num1+num2);
let num4 = (num1 * num2);

if (num3%2 == 0){
    console.log(`${num3} is an even number`);
} 
else{
    console.log(num4);
}





// Activity 1

let favouriteFilms = [
    "Pulp Fiction",
    "Trainspotting",
    "The Incredibles",
    "Star Wars Episode 4: A New Hope",
    "Avenger Infinity War"
];

console.log(favouriteFilms);

favouriteFilms.push("The Dark Knight", "The Suicide Squad");

for(let i = 0; i < favouriteFilms.length; i++){
    console.log(favouriteFilms[i]);
}

// activity 2 

let randomNumber = []

for(let i = 0; i < 6; i++){
    if (i < 6){
        randomNumber.push(Math.floor(Math.random()*50));
    }
    else{
        break
    }
}
console.log(randomNumber);

// activity 3 

let number = []

for (number = 9; number >= 0; number--){
    console.log(number);
}

// activity 4 

let films = [
    "Spider-man 2",
    "The Amazing Spider-man",
    "Ghostbusters",
    "Spider-man No Way Home"
];

for (let i = 0; i < films.length; i++){
    console.log(films[i]);
}
    if (films[2] == "Ghostbusters"){
        console.log("Yay it's Ghostbusters");
    }
    else{
        console.log("Boo! we want Ghostbusters!")
    }   

// activity 5 

let randomNumber7 = []

for(let i = 0; i < 6; i++){
    if (i < 6){
        randomNumber7.push(Math.floor(Math.random()*30));
    }
        if (randomNumber7 % 7 == 0){
            console.log(`${randomNumber7} is divisible by 7!`);
        }
        else{
            console.log(`${randomNumber7} is not divisible by 7!`);
        }   
    randomNumber7.pop();
}

// activity 6

let bobsFollowers = [
    "Andrew",
    "Ian",
    "Sattar",
    "Simona"
];

let hannahsFollowers = [
    "Alexander",
    "Ian",
    "Iryna",
    "Sattar"
];

for(let i = 0; i < bobsFollowers.length; i++){
    let bobsF = bobsFollowers[i];
    for(let j = 0; j < hannahsFollowers.length; j++){
        let hannahsF = hannahsFollowers[j];
        if(bobsF == hannahsF){
            console.log(`Both accounts follow ${bobsF}`);
        }
    }
}

// activity 7 

// for loop 

let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// expected output: "012345678"

// while loop 

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3

// Do...while loop 

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"

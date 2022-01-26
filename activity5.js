const person = {
    name: "Ian",
    age: 24,
    favouriteSongs:[
        "njafsgnlo - fkhadfbadskh",
        "ndskgbadsk - adskhlgbkasdbg",
        "nddasnsdljlg-  dsndkbsdk"
    ],
    sayHi() {
        return(`Hello my name is ${this.name}`)
    },
}

console.log(person.sayHi())

if(person.name == "Ian"){
    console.log(person.favouriteSongs)
}else{
    console.log(`We don't have that`) 
}

const pet = {
    name: "Bilbo Baggins",
    typeOfPet: "shiba inu",
    ago: 4,
    colour: "Red Sesame",
    eat() {
        return(`${this.name} is eating.`);
    },
    drink(){
        return(`${this,name} is drinking`);
    }
}

console.log(pet.eat())

// const coffeeShop = {
//     branch: "City Centre",
//     drinksWithPrices: [
//         "Cappuccino" = 2,
//         "Latte" = 1.5,
//         "Filter coffee" = 1,
//         "Tea" = 1,
//         "Hot chocolate" = 1.5
//     ],
//     foodWithPrices: [
//         "French Toast" = 2,
//         "Mac & Cheese" = 3,
//         "English Breakfast" = 5,
//         "Cereal" = 2,
//         "Biscuit" = 1
//     ],
//     drinksOrdered() {
//         return(`You order ${this.drinksWithPrices}`);
//     } 
// }

const coffeeShop = {
    branch: 'Manchester',
  
    drinks: {
      americano: 2,
      latte: 2.50,
      espresso: 1.5,
      capuccino: 3,
    },
  
    food: {
      cookie: 1.5,
      muffin: 2,
      sandwich: 3,
    },
  
    drinksOrdered(...drinks) {
      let cost = 0;
      const drinksStr = drinks.join(' & ');
      drinks.forEach(drink => (cost += this.drinks[drink]));
      cost = cost.toString().split('.');
      cost[1] = cost[1].padEnd(2, '0');
      cost = cost.join('.');
  
      return this.displayOrder(drinksStr, cost);
    },
  
    foodOrdered(...food) {
      let cost = 0;
      const foodStr = food.join(' & ');
  
      food.forEach(item => (cost += this.food[item]));
  
      cost = cost.toString().split('.');
      cost[1] = cost[1].padEnd(2, '0');
      cost = cost.join('.');
  
      return this.displayOrder(foodStr, cost);
    },
  
    displayOrder(order, cost) {
      return console.log(
        `Your ${order} will be with you shortly, the total is £${cost}.`
      );
    },
  };
  
  coffeeShop.drinksOrdered('capuccino', 'espresso');
  coffeeShop.foodOrdered('cookie', 'muffin');
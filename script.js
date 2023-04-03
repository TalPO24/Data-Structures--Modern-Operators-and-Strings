'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun']
const hours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    }
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    hours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({
        time = '20:00',
        address,
        mainIndex = 1,
        starterIndex = 0,
    }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
        will be delivered to ${address} at ${time}`)
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
    },

    orderPizza(mainIngridients, ...otherIngridients) {
        console.log(mainIngridients)
        console.log(otherIngridients)
    }
};


//* SETS
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])

console.log(ordersSet) // the console will show the new array without the duplicated elements

console.log(new Set('Jonas')) // the console will show us a NEW set that we defined as JONAS and it will seperate it to 5 STR letters

console.log(ordersSet.size) // the console will show us the size of the array ( again he will ignore the duplcate elements)
console.log(ordersSet.has('Pizza')) // the console will show us if thers a 'PIZZA' in the array and if there is 'PIZZA' then it return a Boolean value of TRUE

console.log(ordersSet.has('Bread')) // the console will show us if thers a 'Bread' in the array and if there is 'Bread' then it return a Boolean value of TRUE and if not it will return a value of FALSE


ordersSet.add('Garlic Bread')
ordersSet.add('Garlic Bread')
console.log(ordersSet) // the console will show us that 'Garlic bread is added to the array and now the array.length = 4 becuase it's ignoring the duplicate elements


ordersSet.delete('Risotto')
console.log(ordersSet) // the console will show us that 'Risotto' is deleted and removed from the original array 

console.log(ordersSet[0]) // the console will show UNDEFINED because in SET's there is no indexes and in fact there is no way of getting values out of a set

// ordersSet.clear() // clear is to basically delete all of the elements
// console.log(ordersSet)

for (const order of ordersSet)
    console.log(order)


//* EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
const orderStaff = [...new Set(staff)]
console.log(orderStaff)
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size)

/*
//* Property NAMES
const properties = Object.keys(hours)
console.log(properties)

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
    openStr += `${day},`
}
console.log(openStr)

//* property VALUES
const values = Object.values(hours)
console.log(values)

//* Entire object
const entries = Object.entries(hours)
console.log(entries)

for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`)
}
*/

/*
const rest1 = {
    name: 'Capri',
    numGuests: 20,
}

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
}

rest1.numGuests = rest1.numGuests || 10
rest2.numGuests = rest2.numGuests || 10


console.log(rest1)
console.log(rest2)
*/

/*
//* Short Circuiting (&& and ||)
console.log('-------OR------')
//* Use ANY  data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas')
console.log('' || 'Jonas')
console.log(true || 0)
console.log(undefined || null)
console.log(undefined || 0 || '' || 'hello' || 23 || null)

restaurant.numGuests = 23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1)

const guests2 = restaurant.numGuests || 10
console.log(guests2)


console.log('-------AND------')
console.log(0 && 'Jonas')
console.log(7 && 'Jonas')
console.log('hello' && 23 && null && 'Jonas')

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')
*/




/*
    //* Rest pattern and operators
    // 1) Destructuring
    // SPREAD, because on RIGHT side of =
    const arr = [1, 2, ...[3, 4]]

    // REST, because on LEFT side of =
    const [a, b, ...others] = [1, 2, 3, 4, 5]
    console.log(a, b, others);

    const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, restaurant.starterMenu]
    console.log(pizza, risotto, otherFood)

    //* Objects
    const { sat, ...weekdays } = restaurant.openingHours;
    console.log(weekdays)


    // 2) Functions
    const add = function(...numbers) {
        let sum = 0
        for (let i = 0; i < numbers.length; i++) sum += numbers[i]
        console.log(sum)
    }
    add(2, 3)
    add(5, 3, 7, 2)
    add(8, 2, 5, 3, 2, 1, 4)


    const x = [23, 5, 7]
    add(...x)


    restaurant.orderPizza('Mushrooms', 'onion', 'olivse', 'spinach')
    restaurant.orderPizza('mushrooms')
    */



/*
//* The Spread Operator
const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

const newArr = [1, 2, ...arr]
console.log(newArr)

console.log(...newArr) // spred operator 

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu)

//* Copy array
const mainMenuCopy = [...restaurant.mainMenu]

//* Join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu)

//* Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas'
const letters = [...str, ' ', 'S.']
console.log(letters)
console.log(...str)

//* Real world exapmle
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')]
// console.log(ingredients)

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients)

//* Objects
const newRestaurant = { founding: 1998, ...restaurant, founder: 'Guiseppe' }
console.log(newRestaurant)

const restaurantCopy = {...restaurant }
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurantCopy.name)
console.log(restaurant.name)

*/


/*
//* Destructuring Objects
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del sol, 21',
    mainIndex: 2,
    starterIndex: 2,
})

restaurant.orderDelivery({
    address: 'Via del sol, 21',
    starterIndex: 1,

})

const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories)

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
console.log(restaurantName, hours, tags)

//* Default values
const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters)

//* Mutating variables
let a = 111
let b = 999
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//* Nested objects
const { fri: { open: o, close: c } } = openingHours
console.log(o, c)
*/



//* TK - 1



/*
// 1)
const [players1, players2] = game.players
console.log(players1, players2)

// 2)
const [gk, ...fieldPlayers] = game.players
console.log(gk, fieldPlayers)

// 3)
const allPlayers = [...players1, ...players2]
console.log(allPlayers)

// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', "Periscic"]
console.log(players1Final)

// 5)
const { odds: { team1, x: draw, team2 } } = game
console.log(draw, team1, team2)

// 6)
const printGoal = function(...players) {
        console.log(`${players.length} goals were scored`)
    }
    // printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich')
    // printGoal('Davies', 'Muller')
printGoal(...game.scored)

// 7)
team1 < team2 && console.log('Team 1 is more likly to win')
team1 > team2 && console.log('Team 2 is more likly to win')

*/

/*
//* The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.starterMenu]

for (const item of menu) console.log(item)

for (const [i, el] of menu.entries()) {
    // console.log(item)
    console.log(`${i + 1} : ${el}`)
}
*/


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

/*
//* TK - 2
// 1)
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i+1}:${player}`)

// 2)
const odds = Object.values(game.odds)
let average = 0
for (const odd of odds)
    average += odd
average /= odds.length
console.log(average)

// 3)
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
    console.log(`Odd of ${teamStr} ${odd}`)
}
*/
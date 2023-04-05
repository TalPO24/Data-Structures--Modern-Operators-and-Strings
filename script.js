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
/*
//* Working With Strings Part-1 
const airLine = `Tap Air Portugal` // NORMAL STRING
const plane = `A320` // NORMAL STRING
console.log(plane[0]) // It will show us the first letter of the string (position 0)
console.log(plane[1]) // It will show us the second letter of the string (position 1)
console.log(plane[2]) // It will show us the third letter of the string (position 2)
console.log(`B737` [0]) // we can do the same thing with just the string 

console.log(airLine.length) // It will show us the amount of letters in the string 
console.log('B737'.length) // we can do the same thing with just the string

// because we have in the string two letters of 'r' and we want to check how they are positioned in the STRING: 
console.log(airLine.indexOf('r')) // It will show us where the FIRST 'r' is positioned in the string. 
console.log(airLine.lastIndexOf('r')) // It will show us where the LAST 'r' is positioned in the string. 

// we can also search for entire words
console.log(airLine.indexOf('Portugal')) // It's case sensitive so we need to check that the spelling is correct.
console.log(airLine.indexOf('portugal')) // The console will show us that portugal is in position -1 because it couldn't find it because the spelling is incorrect, the letter 'p' is in lower case.

console.log(airLine.slice(4)) // the slice method is slicing the first (4) characters of the STRING it is also calld SUBSTRING.

console.log(airLine.slice(4, 7))


console.log(airLine.indexOf('Portugal'))
console.log(airLine.slice(0, airLine.indexOf(' ')))
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1))

console.log(airLine.slice(-2))
console.log(airLine.slice(1, -1))

const checkMiddleSeat = function(seat) {
    const s = seat.slice(-1)
    if (s === 'B' || s === 'E')
        console.log(`You got the middle seat`)
    else {
        console.log(`you got lucky`)
    }
}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

console.log(new String('Jonas'))
console.log(typeof new String('Jonas')) // OBJECT
console.log(typeof new String('Jonas').slice(1)) // STRING

const airline = `Tap Air Portugal`

console.log(airLine.toLowerCase()) // toLowerCase method is converting the STRING to lower case.
console.log(airLine.toUpperCase()) // toUpperCase method is converting the STRING to upper case.
*/
/*
//* Working with Strings Part-2
// Fix capitalization in name
const passenger = 'JonAS'
const passengerLower = passenger.toLowerCase()
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

// Comparing emails
const email = 'hello@jonas.io'
const loginEmail = '     Hello@Jonas.Io \n' // here we have a white space
    // const lowerEmail = loginEmail.toLowerCase()
    // const trimmedEmail = lowerEmail.trim() // The trim method is a method for cutting the white spaces

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)

// replacing
const priceGB = '288,97£'
const priceUS = priceGB.replace('£', '$').replace(',', '.') // The REPLACE method is replacing the argument with another argument.
console.log(priceUS)

const announcment = 'All passengers come to boarding door 23. Boarding door 23!'
    // console.log(announcment.replace('door', 'gate'))
    // console.log(announcment.replace(/door/g, 'gate'))

console.log(announcment.replaceAll('door', 'gate')) // The replaceAll method is replacing all the argumnts in one time.

// Booleans
const planes = 'Airbus A320neo'
    // The method INCLUDES is checking if the string includes what we looking for, and it returns a boolean value of true or false.
console.log(planes.includes('A320'))
console.log(planes.includes('boing'))


// The method 'startsWith' is checking if the string starts with the letters we provided, and it returns a boolean value of true or false.
console.log(planes.startsWith('Air'))

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
    console.log('Part of hte NEW Airbus family')
}

// Practice exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase()
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are not alowed on board')
    } else {
        console.log('Welcome aboard!')
    }
}
checkBaggage('I have a laptop, some food and pocket Knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')
*/

/*
//* Working with Strings Part-3
console.log('a+very+nice+string'.split('+')) // The SPLIT method is allowing us to split the string.
console.log('Tal Poris'.split(' '))

const [firstName, lastName] = 'Tal Poris'.split(' ')
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ') // the JOIN method combining strings.
console.log(newName)

const capitalizeName = function(name) {
    const names = name.split(' ')
    const namesUpper = []

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1))
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '))
}

capitalizeName('jessica and smith davis')
capitalizeName('tal poris')

// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(30, '+'))
console.log('tal'.padStart(20, '+').padEnd(30, '+'))

const maskCreditCard = function(number) {
    const str = number + ''
    const last = str.slice(-4)
    return last.padStart(str.length, '*')
}

console.log(maskCreditCard(43378367))
console.log(maskCreditCard(43378363864647))
console.log(maskCreditCard('8764585648758474875683'))

// Repeat
const message2 = 'Bad wether... All Departures Delayed...'
console.log(message2.repeat(5)) // The REPEATE method is repeating the string

const planesInline = function(n) {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`)
}

planesInline(5)
planesInline(3)
planesInline(12)
*/


/*
        const question = new Map([
            ['question', 'What is the best programming language in the world ?'],
            [1, 'C'],
            [2, 'JAVA'],
            [3, 'JavaScript'],
            ['correct', 3],
            [true, 'Correct', '🎉'],
            [false, 'Try again!'],
        ])
        console.log(question)

        // Convert object to map 
        console.log(Object.entries(hours))
        const hoursMap = new Map(Object.entries(hours))
        console.log(hoursMap)

        // Quiz app
        console.log(question.get('question'))
        for (const [key, value] of question) {
            if (typeof key === 'number')
                console.log(`Answer ${key}:${value}`)
        }

        // const answer = Number(prompt('Your answer'))
        const answer = 3
        console.log(answer)
        console.log(question.get(question.get('correct') === answer))

        // Convert map to array
        console.log(...question)
            // console.log(question.entries())
        console.log([...question.keys()])
        console.log([...question.values()])
        */


/*
//* MAPS : Fundementals
//* MAP is a data structure that we can use to map values to keys. So, just like an object data is stored in key value pairs in maps.

const rest = new Map()
rest.set('name', 'Classico Italiano') // first element in the array 
rest.set(1, 'Firenze, Italy') // second element in the array 
rest.set(2, 'Lisbon, Portugal') // third element in the array 
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']) // fourth element in the array 
    .set('open', 11) // fifth element in the array 
    .set('close', 23) // sixth element in the array 
    .set(true, 'we are open :D') // seventh element in the array 
    .set(false, 'we are closed :(') // highth element in the array 

console.log(rest.get('name')) // to read data from a MAP we use the GET method.
console.log(rest.get(true)) // to read data from a MAP we use the GET method.
console.log(rest.get(1)) // to read data from a MAP we use the GET method.

const time = 21
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))) // we checked if the restaurant is open or closed when the time is 21:00.

console.log(rest.has('categories')) // It's checking if 'categories' is exists in the array and if so it return a boolean value of true, else it returns False.

rest.delete(2) // It's deleting by the key names.
    // rest.clear() // we can overlap with maps and sets.
const arr = [1, 2]
rest.set(arr, 'Test') // add a new key to the original array.
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest)
console.log(rest.size) // the console shows the length of the array

console.log(rest.get(arr)) // the console shows the arr key
*/

/*
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
    */



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


/*
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/


//* TK - 3
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

/*
// 1)
const events = [...new Set(gameEvents.values())]
console.log(events)

// 2)
gameEvents.delete(64)
console.log(gameEvents)

// 3)
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`)

// 4)
for (const [key, value] of gameEvents) {
    (typeof key === 'number' && key <= 45 ? console.log(`[first half] ${key}:${value}`) : console.log(`[second half] ${key}:${value}`))
}
*/


//* TK-4
/*
underscore_case
first_name
Some_Variable
Calculate_AGE
delayed_departure
*/

document.body.append(document.createElement('textarea'))
document.body.append(document.createElement('button'))


document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector("textarea").value
    const rows = text.split('\n')
    console.log(rows)

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_')
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`)
    }
})
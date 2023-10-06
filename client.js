let userInfo = {Name:'Ashkie', Age: 18, School: 'SAIT'}
const typesOfFood = ["Chicken", "BBQ", "Ice Cream", "Yogurt"];
console.log(userInfo)
console.log(typesOfFood)

/* This line of code pushes a new string into the array we have. This mutates the original array as it is adding a new thing into the array.*/
const newFood = typesOfFood.push("Peanuts" , "Strawberry")
console.log(typesOfFood)

/* This line of code removes a specific string from the array. This method does mutate the array as it removes something from it permanently. */
const remFood = typesOfFood.pop("Peanuts")
console.log(typesOfFood)
/* Both pop and push mutate, that is why we return the value of the original variable because it has been permanently changed. */

/* This does not mutate the original array as it simply returns a yes or no and doesn't change the array itself*/
const specFood = typesOfFood.includes("BBQ")
console.log(specFood)

/* Below this line is object code */

let valUser = Object.values(userInfo)
console.log(valUser)

let delKey = delete userInfo['School']
console.log(userInfo)



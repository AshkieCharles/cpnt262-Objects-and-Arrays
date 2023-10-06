let age = 18;
const typesOfFood = ["Chicken", "BBQ", "Ice Cream", "Yogurt"];

console.log(typesOfFood)

/* This line of code pushes a new string into the array we have. This mutates the original array as it is adding a new thing into the array.*/
const newFood = typesOfFood.push("Peanuts" , "Strawberry")
console.log(typesOfFood)

/* This line of code removes a specific string from the array with the syntax of pop. This method does mutate the array as it removes something from it permanently. */
const remFood = typesOfFood.pop("Peanuts")
console.log(typesOfFood)
/* Both pop and push mutate, that is why we return the value of the original variable because it has been permanently changed. */

/* This includes syntax returns a true or false statement if the indicated string is within that array */
const specFood = typesOfFood.includes("BBQ")
console.log(specFood)

/*---------------------> Important <--------------------- */
/*Please restart the page after launching the server for an easier view on what changed. */

let userInfo = { Name:'Ashkie', Age: 18, School: 'SAIT' };
const typesOfFood = ["Chicken", "BBQ", "Ice Cream", "Yogurt"];
console.log(userInfo);
console.log(typesOfFood);

/* This line of code pushes a new string into the array we have. This mutates the original array as it is adding a new thing into the array.*/
const newFood = typesOfFood.push("Peanuts");
/* This shows that the length was 5 */
console.log(newFood);
console.log(typesOfFood);

/* Shift removes a specific string from the array. This method does mutate the array as it removes something from it permanently. */
const remFood = typesOfFood.shift("Chicken");
/*Tells us what was removed, which is chicken */
console.log(remFood);
/* Both shift and push mutate, that is why we return the value of the original variable because it has been permanently changed. */

/* This does not mutate the original array as it simply returns a yes or no and doesn't change the array itself*/
const specFood = typesOfFood.includes("BBQ");
console.log(specFood);
/* Nothing changed to the array */
console.log(typesOfFood);

/* Below this line is object code */
/* -------------------------------- */

/* Create an array of the given keys of that key value pairs */
let valKey = Object.keys(userInfo);
console.log(valKey);

/* This creates an array of the values of the object within the given key-value pair */
let valUser = Object.values(userInfo);
console.log(valUser);

/* Deletes the key alongside its value */
let delKey = delete userInfo['School'];
console.log(userInfo);


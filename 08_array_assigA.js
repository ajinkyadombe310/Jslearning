console.log("***************Question1*******************");
const arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arraySeasonalFruits);
console.log(`first element is "${arraySeasonalFruits[0]}" and last element is "${arraySeasonalFruits[arraySeasonalFruits.length-1]}"`);
console.log("***************Question2*******************");
const arraySeasonalFruits2 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arraySeasonalFruits2.unshift("Papaya");
console.log(arraySeasonalFruits2);
console.log(`Papaya added before banana element`);
console.log("***************Question3*******************");
const arraySeasonalFruits3 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arraySeasonalFruits3.splice(3,1);
console.log(arraySeasonalFruits3);
console.log(`Removed Mango`);
console.log("***************Question4*******************");
const arraySeasonalFruits4 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arraySeasonalFruits4.push("Pineapple");
console.log(arraySeasonalFruits4);
console.log(`Added "Pineapple" at the last position`);
console.log("***************Question5*******************");
const arraySeasonalFruits5 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arraySeasonalFruits5.splice(4,0,"Dragon Fruit");
console.log(arraySeasonalFruits5);
console.log(`Inserted "Dragon Fruit" before "Water Melon"`);
console.log("***************Question6*******************");
const arraySeasonalFruits6 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arraySeasonalFruits6.splice(1, 1,"Kiwi");
console.log(arraySeasonalFruits6);
console.log(`Replaced "Orange" with "Kiwi"`);
console.log("***************Question7*******************");
const arraySeasonalFruits7 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
let res = arraySeasonalFruits7.slice(1, arraySeasonalFruits7.length);
console.log(res);
console.log(`logged elements starting from index 1 to 4`);
console.log("***************Question8*******************");
const arraySeasonalFruits8 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
let res2 = arraySeasonalFruits8.slice((arraySeasonalFruits8.length-3), arraySeasonalFruits8.length);
console.log(res2);
console.log(`logged last 3 elements using lenght property`);















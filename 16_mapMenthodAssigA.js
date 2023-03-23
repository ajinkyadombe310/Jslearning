const array_numbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`****Adding 10 in each element****`);
const newArray = array_numbers.map( Element =>Element+10);
console.log(newArray)
console.log(`****Square of elements****`);

const arraySqure = array_numbers.map(elemnet => elemnet**2);
console.log(arraySqure)
console.log(`****Adding index value in the element****`);

const newArrayAddIndex = array_numbers.map(content => content + array_numbers.indexOf(content));
console.log(newArrayAddIndex);

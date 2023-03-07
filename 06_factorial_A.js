console.log(`****Assignment A****`);
function factorialOfNum(num) {
  let factorial = 1;
  if(num==0){
    return `factorial of number ${num} is : 0`;
  }
  else if (num != null || num != undefined) {
    for (let index = num; index >= 1; index--) {
      factorial = factorial * index;
      
    }
    return `factorial of number ${num} is : ${factorial}`;
  } else {
    return `${num} is not number, please enter valid no`;
  }
}
let finalresult = factorialOfNum(5);
console.log(finalresult);
let finalresult2 = factorialOfNum(3);
console.log(finalresult2);
let finalresult3 = factorialOfNum(null);
console.log(finalresult3);
let finalresult4 = factorialOfNum(8);
console.log(finalresult4);
let finalresult5 = factorialOfNum(undefined);
console.log(finalresult5);
let finalresult6 = factorialOfNum(9);
console.log(finalresult6);
let finalresult7 = factorialOfNum(0);
console.log(finalresult7);

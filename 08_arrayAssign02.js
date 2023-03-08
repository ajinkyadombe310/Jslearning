const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`****Q1:Finding total elements *****`);
console.log(arrayNumbers.length);
console.log(`****Q2:First element and last element *****`);
console.log(`First element is ${arrayNumbers[0]} and last element is ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`****Q3:Third last element*****`);
console.log(`Third last element is ${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`****Q4:All even numbers*****`);

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
    console.log(element);
           
    }
    
 }

 
 console.log(`****Q5:All odd numbers*****`);
 for (let index = 0; index < arrayNumbers.length; index++) {
     const element = arrayNumbers[index];
     if (element%2!=0) {
         console.log(element);    
     }
  }
  console.log(`****Q6:Even positional elements and their addation*****`);
  let sumone = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
      const element = arrayNumbers[index];
      if (arrayNumbers.indexOf(element) %2==0) {
          console.log(element); 
          sumone=sumone+element;   
      }
   }
   console.log(`Sum of these element is ${sumone}`);
   console.log(`****Q7:Odd positional elements and their addation*****`);
   let sum =0;
   for (let index = 0; index < arrayNumbers.length; index++) {
     
       const element = arrayNumbers[index];
       
       if (arrayNumbers.indexOf(element) %2!=0) {
         console.log(element);
        sum= sum+ element;
                    
       }
            
    }
    console.log(`Sum of these element is ${sum}`); 
   console.log(`****Q8:Sum of Elements*****`);
   let sumtwo = 0;
   for (let index = 0; index < arrayNumbers.length; index++) {
      const element = arrayNumbers[index];
      sumtwo = sumtwo+element;
      
   }
   console.log(sumtwo);
   console.log(`****Q9:Elements that are multiple of 5*****`);
   for (let index = 0; index < arrayNumbers.length; index++) {
       const element = arrayNumbers[index];
       if (element%5==0) {
           console.log(element);    
       }
    }
   console.log(`****Q10:is 115 available in array*****`);
   console.log(arrayNumbers.includes(115));
   console.log(`****Q11:is 23 available in array*****`);
   console.log(arrayNumbers.includes(23));
   console.log(`****Q12:Insert numbers 55, 66 before index 3*****`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);
console.log(`****Q13: Delete 3 elements starting from index4*****`);
arrayNumbers.splice(4, 3);
console.log(arrayNumbers);



  
    

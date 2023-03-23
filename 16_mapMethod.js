// const array = [3, 4, 5, 6, 1];
//            // [5, 6, 7, 8, 3];

// const arrayTransformed = [];
// array.forEach( (currentValue) => {
//     arrayTransformed.push(currentValue+2)
// } );
// console.log(arrayTransformed);

// console.log("Using map()");
// const arrayNew = array.map( (element) => {
//    return element + 2;
// } )
// console.log(arrayNew);

const arrayOfNames = ["Rupesh Dhumal", "Rutuja Pawar", "Nayan", "Pralhad"];
const arrayNamesTransformed = arrayOfNames.map((element) =>{
    return element.length**2;
})



console.log(arrayNamesTransformed);


// 1) We can pass function as argument (call back)
// 2) we can return funtion from inside function
//3) we can store functoin as verialbe (function expression)


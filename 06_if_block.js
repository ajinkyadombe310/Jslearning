// // console.log(`start`);
// // var num = 10;
// // if (num > 0){
// // console.log(`inside if`);
// // console.log(`Number ${num} is positive`);

// // // }
// // // console.log(`end`);


// // // var ageForVote = 10;
// // // if (ageForVote >= 18){
// // // console.log(`You are eligible for voting`);
// // // console.log(`Age is: ${ageForVote}`);

// // // }
// // // console.log(`end of next if block`);

// // // function checkEvenOdd(num1){
// // // var num2 = num1%2;
// // // if (num2 == 0){

// // //     return `number is even`;
// // // }
// // // if(num2 != 0){
// // //     console.log(`Number is odd`);
// // //     return "ODD"

// // // }

// // // }
// // // var result = checkEvenOdd(45);
// // // console.log(`Given Number 45 is ${result}`);
// // // var result1 = checkEvenOdd(32);
// // // console.log(`Given Number 45 is ${result1}`);


// // var numb = -1;
// // if (numb>0){

// //     console.log(`number ${numb} is positive`);
// // }
// // else{
// //     console.log(`number ${numb} is negative`);

// // }

// function maleMarriageEligibility(gender, age, boyname){
//     if (gender == "male" && age>=21){

//         console.log("You are eligible");
//     }
//     else{
//         console.log("You are not eligible");

//     }
   
// }
// maleMarriageEligibility("Male", 22, "billgates");


function stringCut() {
    var open = `i_am_talking_about_our_future_idea's.:_5G_Broadbend`;
    var stringLenth = open.length;
    var stringNumber = stringLenth % 2 == 0 ?`we will get EVEN Number`:`we will get ODD Number`;
    var SubString = open.substring(stringNumber);
    return SubString;
  }
  var result = stringCut();
  console.log(result);

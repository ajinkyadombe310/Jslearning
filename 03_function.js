


//function with no argument and no return value
function showFullName(){
    console.log("My full Name is:Ajinkya Dombe");
}
showFullName()

// function with argument and no return value
var myage = 32;
function showAge(age){
    console.log("My Age is:", age);
}
showAge(myage);

//fucntion with no argument and return value
function fullName(){
 var name = "Ajinkya Dombe"
 return name;   
}
var fname = fullName()
console.log(fname);
//function with arguments and return value
function sumOfNumbers(valone, valtwo, valthree){
var tempo = valone + valtwo + valthree;
return tempo;
}
var addation = sumOfNumbers(30, 50, 20);
console.log(addation);




var num1 = 100;
var num2 = 200;
function swapVariable(value1, value2){
console.log("Before Swap:", value1, value2);
var temp = value1;
value1 = value2;
value2 = temp;
console.log("After Swap:", value1, value2);
return "swapping variable successfully completed"
}
var swapresult = swapVariable(num1, num2);
console.log(swapresult);

var name1 = "swetu"
var name2 = "pintu"
swapVariable(name1, name2);


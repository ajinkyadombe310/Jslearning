// Any two functio with no argument and no return
console.log("****function with no argument and no return****");
function myChoice(){
    console.log("My Choice function");
}
myChoice();
function myChoiceSecond(){
    console.log("I Love India");
}
myChoiceSecond();

// functoin with argument with no return
console.log("****fucntion with argument with no return****");

function personalDetails(firstName, lastName, collegeName){
    console.log(firstName, lastName,collegeName);
}
personalDetails("Ajinkya", "Dombe", "AITRC");

// swapping variables

var nameone = "Virat";
var nametwo = "Anushka";

function swapValuesDude(namone, namtwo){
console.log("Before Swaping:", namone, namtwo);
var temp = namone;
namone = namtwo;
namtwo = temp;
console.log("after Swaping:", namone, namtwo);
}
swapValuesDude(nameone, nametwo);

swapValuesDude(1000, 2000);

function addThreeValues(valone, valtwo, valthree){
    var sum = valone + valtwo + valthree;
    return sum;
    }
    var adda = addThreeValues(10.23, 600, 40);
    console.log(adda);
    var addatwo = addThreeValues("hello", "Good", "Morning");
    console.log(addatwo);
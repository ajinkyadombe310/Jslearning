console.log("****Male Marriage Eligibility****");
function maleMarriageEligibility(gender, age, boyname){
var res = gender == "male" && age >= 21 ? `Hey ${boyname} you are eligible for marriage` : `Hey ${boyname} you are not eligible for marriage`;
console.log(res);
}
maleMarriageEligibility("male", 25, "Bill Gates");
maleMarriageEligibility("male", 17, "Steve Jobs");

console.log("****Female Marriage Eligibility****");
function maleMarriageEligibility(gender, age, girlname){
var res = gender == "male" && age >= 18 ? `Hey ${girlname} you are eligible for marriage` : `Hey ${girlname} you are not eligible for marriage`;
console.log(res);
}
maleMarriageEligibility("female", 16, "Geeta");
maleMarriageEligibility("female", 27, "Seeta");
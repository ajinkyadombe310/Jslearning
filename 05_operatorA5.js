console.log("Mohit result: Grad-80, HSC-86, SSC-90");

function funExpress(gradpercentage, hscscore, sscScore, candidateName){
var res = gradpercentage >= 80 || hscscore>= 80 || sscScore > 90? `Congrats ${candidateName} you are eligible for TCS interview.` : `unfortunately You are not eligible for interview`;
console.log(res);


}
funExpress(80, 86, 90, "Mohit");
console.log("Ramesh result: Grad-70, HSC-65, SSC-55");
funExpress(70, 65, 55, "Ramesh");
console.log("Suresh result: Grad-60, HSC-79, SSC-88");
funExpress(60, 79, 88, "Ramesh");




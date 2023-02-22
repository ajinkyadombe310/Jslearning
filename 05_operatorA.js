// var strg = "India";
console.log(`****for word JavaScript****`);
function squareOfWordLength (strg){
var sqrlength = strg.length;
console.log(`length of word is: ${strg.length}`);
var aftersqr = sqrlength ** 2;
return aftersqr;
}
var sgrreturn = squareOfWordLength("JavaScript");
console.log(`word length square is: ${sgrreturn}`);
console.log(`****for word Google Chrome****`);
var sgrreturn = squareOfWordLength("Google Chrome");
console.log(`word length square is: ${sgrreturn}`);
console.log(`****for word Developer Smart****`);
var sgrreturn = squareOfWordLength("Developer Smart");
console.log(`word length square is: ${sgrreturn}`);
console.log(`****Second step****`);

var stringname = "I am Angular Developer";

function basicfun(){
    console.log(`Print string: ${stringname}`);
    var legstrg = stringname.length;
    var splitword = stringname.split(" ");
    var splitwordlength = splitword.length;

    var result = legstrg / splitwordlength;
    console.log(`string length divide by no of words: ${result}`);
    console.log(`string length: ${legstrg}`);
    var result = legstrg * splitwordlength;
    console.log(`string length multply by total no of words: ${result}`);


}
basicfun();
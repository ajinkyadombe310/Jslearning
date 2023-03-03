console.log("***Assignment1.1***");

var vostrg = function(strg){
var count = 0;

    for (let index = 0; index < strg.length; index++) {
        var charg = strg.charAt(index);

        if (charg == "a" || charg == "e" || charg== "i" || charg=="o"|| charg== "u" || charg== "A" || charg== "E"|| charg== "I" || charg== "O" || charg== "U") {
         
            count = count +1;

        }
       
    }
    return (`vowel count is ${count} in the "${strg}"`);
    
}

var result = vostrg("JavaScript is the language Of Internet");
console.log(result);
var result = vostrg("I am Angular Developer");
console.log(result);
var result = vostrg("Hard work and commitment is the key of success");
console.log(result);

console.log("***Assignment1.2***");

function lastWordCharsCount(strgg){
 var caount = 0;
for (let index = strgg.length-1; index >=0 && strgg.charAt(index) !=" "; index--) {
    caount = caount+1;
    
}
return (`The count of char in last word at "${strgg}" is: ${caount}`);

}
    var resultsecond = lastWordCharsCount("JavaScript is the language Of Internet");
    console.log(resultsecond);
    var resultsecond = lastWordCharsCount("I am Angular Developer");
    console.log(resultsecond);
    var resultsecond = lastWordCharsCount("Hard work and commitment is the key of success");
    console.log(resultsecond);
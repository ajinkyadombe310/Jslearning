
console.log(`****Assignment B****`);
function factorialofWordsCount(strg){
    if(strg==NaN || strg == null || strg.charAt(0)=="" || strg.charAt(1)==""|| strg == undefined){
        return `For ${strg} :: This is not text, please enter text.`
    }else {
        let wordCount = (strg.split(" ")).length;
        factorial = 1;
        for (let index = wordCount; index >=1; index--) {
            factorial=factorial*index;
                       
        }
return `For "${strg}":: Wordcount is ${wordCount} and its factorial is ${factorial}`
    }

console.log(wordCount.length);

}
let result = factorialofWordsCount("Revision is the mother of Success")
console.log(result);
let resultOne = factorialofWordsCount("We never fail, we always learn")
console.log(resultOne);
let resultTwo = factorialofWordsCount(null)
console.log(resultTwo);
let resultThree = factorialofWordsCount("")
console.log(resultThree);
let resultFour = factorialofWordsCount("Ajinkya Annasaheb Dombe")
console.log(resultFour);



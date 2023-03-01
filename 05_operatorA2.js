console.log(`****STEP1****`);

function greaterNumber(num1, num2){
var res = num1 > num2 ? num1: num2;
console.log(`Greater Number is: ${res}`);
}
  greaterNumber(10, -10);
  greaterNumber(800, 899);

console.log(`****STEP2****`);
  

function exprees(numb1){
    var math = numb1 % 2;
    // console.log(math);
    console.log(`Checking even or odd for number: ${numb1}`);
    var res =  math == 0 ?  `number ${numb1} is even`: `number ${numb1} is odd`;
    return res;
    }
    var retueven = exprees(19);
    console.log(retueven);
    var retueven = exprees(14);
    console.log(retueven);

    console.log(`****STEP3****`);

    function wordLength(wordstrg){
    var math = wordstrg.length;
    // console.log(math);
        console.log(`Checking wordlength is even or odd for: ${wordstrg}`);
    var res =  math%2==0 ?  `length of word ${wordstrg} is even`: `length of word ${wordstrg} is odd`;
    return res;
    }
    var retueven = wordLength("JavaScript");
    console.log(retueven);
    var retueven = wordLength("developer");
    console.log(retueven);
    
    var retueven = wordLength("Google");
    console.log(retueven);
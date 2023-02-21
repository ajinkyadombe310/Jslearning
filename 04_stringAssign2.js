var strng = "  Hey you are doing good, keep it up  ";
function stringHandsOn(){
    console.log(strng);
    console.log("Total No of char present in string:", strng.length);
    var afterTrim = strng.trim();
    console.log(afterTrim, "(length after trim:", afterTrim.length, ")");
    var countsum = strng.length-afterTrim.length;
    console.log("Total no of extra spaces count removed:", countsum);
    console.log("first and last char:", afterTrim.charAt(0), afterTrim.charAt(33));
    var countsplit = afterTrim.split(" ");
    console.log("count of total words availabel after trim:", countsplit.length);
console.log("index of word good:", afterTrim.indexOf("good"));
var endwith = afterTrim.endsWith("up");
console.log("is string end with word up:", endwith);
var starwith = afterTrim.startsWith("Hey");
console.log("is string start with word Hey:", starwith);
var sliceindex = afterTrim.slice(22);
console.log("substring starting from index22 using slice:",sliceindex);
var srng = afterTrim.substring(22);
console.log("substring starting from index22 using substring:", srng);

}
stringHandsOn();
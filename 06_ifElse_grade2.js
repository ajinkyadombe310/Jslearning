console.log(`****Assignment1.2****`);
function gradeCalculation(marks){
    if (marks<=0 || marks>100 || typeof marks== String || marks == null || isNaN(marks)) {
        console.log(`Entered marks: ${marks} --> The data is not valid`);
    }else
if(marks>=90){
    console.log(`Check grade for marks ${marks}: Fantastic marks, Your grade is A+`);
}else
if(marks>=75 && marks<90){
    console.log(`Check grade for marks ${marks}: Excellent marks, Your grade is A`);
}else
if(marks>=50 && marks<75){
    console.log(`Check grade for marks ${marks}: Good marks, Your grade is B`);
}else
if(marks>=35 && marks<50){
    console.log(`Check grade for marks ${marks}: Your grade is C, Need improvements`);
}else
if(marks<35){
    console.log(`Check grade for marks ${marks}: You are fail`);
}

}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);



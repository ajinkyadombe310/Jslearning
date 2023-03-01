console.log("**Assignment 2**");
function intervieweligibility(gradScore, hscScore, sscScore, candidateName){

    if (sscScore  <=0 || gradScore  <=0 || hscScore  <=0 || sscScore>100 || hscScore>100 || gradScore >100) {
        console.log("Input data is not valid");
        
    }
else
if(gradScore>= 70 || hscScore >=80 || sscScore> 90){

    console.log(`${candidateName}, You are eligible for TCS interview`);
}else{
    console.log(`${candidateName}, Unfortunatly you are not eligible`);
}

}
intervieweligibility(80, 86, 90, "Ajinkya");
intervieweligibility(70, 65, 55, "Ramesh");
intervieweligibility(60, 79, 88, "Mahesh");
intervieweligibility(0, -2, 120, "Mash");


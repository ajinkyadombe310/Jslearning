console.log(`****Assignment1.1****`);
function voteEligibility(age){
    // console.log(`checking for ${age}:-->`);
    if(age>120 || age <= 0 || age ==undefined || age==null){
        console.log(`checking for ${age}:-->input data is not valid`);
} else{
    if(age>=18){
        console.log(`checking for ${age}:-->You are eligible for voting`);
    }else{
   
        console.log(`checking for ${age}:-->You are not eligible for voting`);
        
    }

}
   
      
    }
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);





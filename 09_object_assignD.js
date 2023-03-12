const professor ={
    Name: "Mohit Sharma",
    Age: 40,
    Qualification: "MTech",
    Subject: "Maths",
    Sallery: 100000,
    degrees: {
        engineering: "CSE",
        phd: "Advance Computing"

    },
    certificates: ["Hacker Rank", "IFE Course", "Advance Programming"],
    totalDegrees: function(){
     
return `Teacher degrees are 1) Engineering: ${this.degrees.engineering}, 2) PHD : ${this.degrees.phd}`
         }

}
let result = professor.totalDegrees();
console.log(`****Q1****`);
console.log(professor);
console.log(`****Q2: Nested Object****`);
console.log(professor.degrees);
console.log(`****Q3: Added one array****`);
console.log(professor.certificates);




console.log(`****Q4****`);
console.log(result);
console.log(`****Q5****`);

professor.totalExperience = "14 Years";
console.log(`Professor Total Experience : ${professor.totalExperience}`);
console.log(`****Q6****`);
professor.Sallery = 120000;
console.log(`Professor Sallary Updated : ${professor.Sallery}`);
console.log(`****Q7****`);
professor.certificates.push("Oracle Certified");
console.table(professor.certificates);
console.log(`****Q8****`);
console.log(`Last element of Array : ${professor.certificates[professor.certificates.length-1]}`);
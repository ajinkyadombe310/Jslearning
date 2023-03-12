class Vehicle {    
       constructor( name, typeOfVehicle, model, color, company, engincc){
        this.name=name;
        this.typeOfVehicle= typeOfVehicle;
        this.model=model;
        this.color=color;
        this.company=company;
        this.engincc=engincc;       
       }        

}
const nexon = new Vehicle ("Nexon", "SUV", 2020, "Black", "TATA", "1.4L");
const punto = new Vehicle ("Punto", "Hatchback", 2015, "Gray", "Fiat", "1.2L");
const wegonr= new Vehicle (" WegonR","Hatchback", 2016, "White", "Maruti", "1L");
const slavia= new Vehicle ("Slavia", "Sedan", 2018, "Red", "Volkswagen", "1.3L");
const polo= new Vehicle ("Polot", "hatchback", 2023, "Blue", "Volkswagen", "1.6L");

const arrayOfVehicles = [nexon, punto, wegonr, slavia, polo];
for (const element of arrayOfVehicles) {

    console.log(`Vehicle--> : 1) Vehicle Name : ${element.name}, 2) Type of Vehicle :${element.typeOfVehicle}, 3) Model: ${element.model}, 4) Color: ${element.color}, 5) Company: ${element.company}, 6) Engin Capacity: ${element.engincc} `);
    
}
console.log(`***********************************************`);
class College {
constructor(name, city, university, yearOf, principle){
    this.name=name;
    this.city=city;
    this.university=university;
    this.principle=principle;
}

}

const AITRC = new College ("AITRC", "Sangli", "Shivaji University", "Mr. Patil");
const VJTI = new College ("VJTI", "Mumbai", "Mumbai University", "Mr. P. Sharma");
const COEP = new College ("COEP", "Pune", "Pune University", "Mr. P. Jadhav");
const SYBP = new College ("SYBP", "Sangli", "Shivaji University", "Mr. P. Kohli");

const newArray = [AITRC, VJTI, COEP, SYBP];

for (const iterator of newArray) {
    

    function traverseObject (arrayOfObject){
        for (const key in arrayOfObject) {
            if (Object.hasOwnProperty.call(arrayOfObject, key)) {
                const element = arrayOfObject[key];
                console.log(`${key}: ${element}`);
                
            }
        }
        console.log(`-----------------------------------------------------------`);
        }
        traverseObject(iterator);

    }


console.log(`*****************************************`);
    function isPrimeNo(num){

        if (num===1) {
            console.log(`${num}:Its not prime no`);
                        
        }else if (num === 2){
console.log(`${num}: Its a prime No`);
        }else {

            for (let index = 2; index < num; index++) {
                if (num%index ===0){

                    return `${num}: Its not Prime No`;
                }
                
                            }

                            return `${num}: Its Prime No`;
        }
        
    }
    let restul = isPrimeNo(11);
    console.log(restul);

    




class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

array.filter(element => {
    if (element.emp_company == "TCS") {
        console.log(`Name: ${element.emp_name}, Company: ${element.emp_company}`);        
    }
})

let sallarySum = 0;
const noOfemployee = [];
array.filter(element => {
    if (element.emp_company == "Wipro") {
        noOfemployee.push(element.emp_name);
        sallarySum = element.emp_salary + sallarySum;
         
    }
})
console.log(`Average sallary of Wipro Employee : ${sallarySum/noOfemployee.length}`);

let newsallarySum = 0;
const newnoOfemployee = [];
array.filter(element => {
    if (element.emp_company == "Wipro" || element.emp_company == "Infy") {
        newnoOfemployee.push(element.emp_name);
        newsallarySum = element.emp_salary + newsallarySum;
         
    }
})
console.log(`Average sallary of Wipro and Infy: ${newsallarySum/newnoOfemployee.length}`);

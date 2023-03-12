let sbiBank = {
bankName: "SBI",
location: "Pune",
accountNo: 45126498,
ifsc: 452581,
interestRate: 10,
showDetails: function(){
    console.log(`BankName: ${sbiBank.bankName}, Location:${sbiBank.location}, Account No: ${sbiBank.accountNo}, IFSC:${sbiBank.ifsc}, Interest Rate: ${sbiBank.interestRate}%`);

}

}
sbiBank.showDetails();
let axisBank = {
    bankName: "Axis Bank",
    location: "Mumbai",
    accountNo: 4515426498,
    ifsc: 45262581,
    interestRate: 9,
    showDetails: function(){
        console.log(`BankName: ${axisBank.bankName}, Location:${axisBank.location}, Account No: ${axisBank.accountNo}, IFSC:${axisBank.ifsc}, Interest Rate: ${axisBank.interestRate}%`);
    
    }
    
    }
    axisBank.showDetails();
    let hdfcBank = {
        bankName: "HDFC Bank",
        location: "Sangli",
        accountNo: 95456498,
        ifsc: 7845581,
        interestRate: 9.5,
        showDetails: function(){
            console.log(`BankName: ${hdfcBank.bankName}, Location:${hdfcBank.location}, Account No: ${hdfcBank.accountNo}, IFSC:${hdfcBank.ifsc}, Interest Rate: ${hdfcBank.interestRate}%`);
        
        }
        
        }
        hdfcBank.showDetails();
        
        let yesBank = {
            bankName: "Yes Bank",
            location: "Tasgaon",
            accountNo: 65856498,
            ifsc: 9565581,
            interestRate: 8.9,
            showDetails: function(){
                console.log(`BankName: ${yesBank.bankName}, Location:${yesBank.location}, Account No: ${yesBank.accountNo}, IFSC:${yesBank.ifsc}, Interest Rate: ${yesBank.interestRate}%`);
            
            }
            
            }
            yesBank.showDetails();
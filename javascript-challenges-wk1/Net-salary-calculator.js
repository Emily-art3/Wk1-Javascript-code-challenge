// Function to calculate NHIF deduction based on different salary bands
function nhifDeduction(grosssalary) {
    if (grosssalary <= 5999) return 150;
    if (grosssalary <= 7999) return 300;
    if (grosssalary <= 11999) return 400;
    if (grosssalary <= 14999) return 500;
    if (grosssalary <= 19999) return 600;
    if (grosssalary <= 24999) return 750;
    if (grosssalary <= 29999) return 850;
    if (grosssalary <= 34999) return 900;
    if (grosssalary <= 39999) return 950;
    if (grosssalary <= 44999) return 1000;
    if (grosssalary <= 49999) return 1100;
    if (grosssalary <= 59999) return 1200;
    if (grosssalary <= 69999) return 1300;
    if (grosssalary <= 79999) return 1400;
    if (grosssalary <= 89999) return 1500;
    if (grosssalary <= 99999) return 1600;
    return 1700; // NHIF Maximum deduction for higher amount of salary
}
 //function to calculate NSSF deduction based on salary
    function nssfdeduction(grosssalary) {
        let nssf = 0;
        if (grosssalary <=6000) {
            nssf = grosssalary * 0.06;
        } else if (grosssalary <= 18000) {
            nssf = 360 + (grosssalary - 6000) * 0.06;
        } else {nssf = 360 + 720;
     }
     return nssf;
    }
//function to calculate payee(income tax) based on gross salary

function calculatetax(grosssalary) {
  let tax = 0;
  if (grosssalary <=24000) {
    tax = grosssalary * 0.1;
  } else if (grosssalary <= 32333) {
    tax = 24000*0.1 + (grosssalary -24000) *0.25;
  } else { 
    tax = 24000 *0.1 + (32333 - 24000) * 0.25 + (grosssalary -32333) * 0.3;
  }
  return tax;
}
// main function to calculate net salary
function netsalarycalculator(basicsalary, benefits) {
    const grosssalary = basicsalary + benefits;
    const tax = calculatetax(grosssalary);
    const nssf = nssfdeduction(grosssalary);
    const nhif = nhifDeduction(grosssalary);
   
    const netsalary = grosssalary - (tax + nssf + nhif);

    console.log(`gross salary: Ksh ${grosssalary}`);
    console.log(`payee(tax: Ksh ${tax}`);
    console.log(`nssf deduction: Ksh ${nssf}`);
    console.log(`nhif deduction: Ksh ${nhif};`);
    console.log(`net salary: Ksh ${netsalary}`);
}
//put in the basic salary and benefits
const basicsalary = parseFloat(prompt("enter the basic salary:"));
const benefits = parseFloat(prompt("enter the benefits:"));

//calculate net salary
netsalarycalculator(basicsalary, benefits);
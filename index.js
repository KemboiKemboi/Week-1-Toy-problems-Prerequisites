function netSalaryCalculator(basicSalary, benefits) {
    const payeeRate = 0.3; // Example tax rate for PAYE
    const nhifRate = 1500; // Example NHIF deduction rate
    const nssfRate = 0.06; // Example NSSF rate
  
    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * payeeRate;
    const nhif = nhifRate;
    const nssf = grossSalary * nssfRate;
  
    const netSalary = grossSalary - (payee + nhif + nssf);
  
    console.log("Gross Salary: " + grossSalary);
    console.log("Payee Tax: " + payee);
    console.log("NHIF Deductions: " + nhif);
    console.log("NSSF Deductions: " + nssf);
    console.log("Net Salary: " + netSalary);
  }
  
  netSalaryCalculator(50000, 15000); // Example input
  
  
  
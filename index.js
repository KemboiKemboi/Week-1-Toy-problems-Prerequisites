function gradeGenerator() {
    let marks = parseInt(prompt("Enter student marks between 0 and 100:"));
    
    if (marks > 79 && marks <= 100) {
      console.log("Grade: A");
    } else if (marks >= 60 && marks <= 79) {
      console.log("Grade: B");
    } else if (marks >= 50 && marks <= 59) {
      console.log("Grade: C");
    } else if (marks >= 40 && marks <= 49) {
      console.log("Grade: D");
    } else if (marks < 40) {
      console.log("Grade: E");
    } else {
      console.log("Invalid input. Please enter a number between 0 and 100.");
    }
  }
  gradeGenerator();
  
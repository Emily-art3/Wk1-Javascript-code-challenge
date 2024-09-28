function gradegenerator(marks) { // check the input to determine the grade
    if (marks > 79){
       return 'A'; // marks above 79 get an A
    } else if (marks >= 60 && marks <= 79) {
        return 'B'; // marks between 60 and 79 get a B
    } else if (marks >= 49 && marks <= 59) {
        return 'C'; // marks between 49 and 59 get a C
    } else if (marks >= 40 && marks <= 49) {
        return 'D'; // marks between 40 and 49 get a D
    } else {
        return 'E'; // marks below 40 get an E
    }
}
// prompt user for input
const marks = parseInt(prompt("enter student marks(between 0 and 100):"));
 // display the output grade based on the marks
console.log(`The student's grade is: ${gradegenerator(marks)}`);
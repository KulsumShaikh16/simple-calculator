#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter First Number", type: "number", name: "firstNmmber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    { message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"], },
]);
console.log(answer);
//condition statement//
if (answer.operator === "Addition") {
    console.log(answer.firstNmmber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNmmber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNmmber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNmmber / answer.secondNumber);
}
else {
    console.log("Please enter valid operator");
}

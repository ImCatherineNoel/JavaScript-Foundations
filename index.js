// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively.
Create another value called name and give it the value of your own name.

/*
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🏡 Task 1: Variables: My Solution


            const principal = 200000;
            const interestRate = 0.05;
            const years = 30;
            const name = "Catherine";


            console.log("Task 1 variables are set as follows:");
            console.log("principal: " + principal);
            console.log("interestRate: " + interestRate);
            console.log("years: " + years);
            console.log("name: " + name);

*/

// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate.

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12.

Create another variable called `periods` and give it the value of years*12.
*/

/*
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🏡 Task 1.5: Simple Math : My Solution
            const monthlyInterestRate = interestRate / 12;
            const periods = years * 12;

            console.log("Task 1.5 variables are set as follows:");
            console.log("monthlyInterestRate: " + monthlyInterestRate);
            console.log("periods: " + periods);

*/

// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.
Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator
`P` = Principal amount (the total amount borrowed)
`I` = Interest rate on the mortgage
`N` = Number of periods (monthly mortgage payments)
Hint #2: you'll need to use the `math` object for parts of this calculation!
When your math is correct, monthlyRate will equal 1073.64

    M           = P           [ I                         ( 1 + I )             ^N ]      / [       ( 1 + I )           ^N      – 1 ]

    */

/*
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
            // 🏡 Task 2: Harder Math : My Solution
            const monthlyRate = principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate),periods)) / (Math.pow((1 + monthlyInterestRate),periods) - 1);

            monthlyRate.toFixed(2);

            console.log("Task 2 variables are set as follows:");
            console.log("The monthly rate is: " + monthlyRate.toFixed(2) +" and should be 1073.64");

*/

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/

/*
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🏡 Task 3: Function : My Solution
function mortgageCalculator(){
    const principal = 200000;
    const interestRate = 0.05;
    const years = 30;
    const name = "Catherine";
    const monthlyInterestRate = interestRate / 12;
    const periods = years * 12;
    const monthlyRate = principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate),periods)) / (Math.pow((1 + monthlyInterestRate),periods) - 1);

    return(name + ", your monthly rate is " + monthlyRate.toFixed(2));
}

console.log(mortgageCalculator());

*/

// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/
/*

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🏡 Task 4: Arguments and Parameters : My Solution
function mortgageCalculator(p, iR, n){
    const principal = p;
    const interestRate = iR;
    const years = 30;
    const name = n;
    const monthlyInterestRate = interestRate / 12;
    const periods = years * 12;
    const monthlyRate = principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate),periods)) / (Math.pow((1 + monthlyInterestRate),periods) - 1);

    return(name + ", your monthly rate is " + monthlyRate.toFixed(2));
}

console.log(mortgageCalculator(200000, 0.05, "Catherine"));
*/

// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).
Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/

/*
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🏡 Task 5: Conditionals  : My Solution
function mortgageCalculator(p, iR, n, cS){
    const principal = p;
    const years = 30;
    let interestRate = iR;
    const name = n;
    const creditScore= cS;

    const periods = years * 12;

    if (cS > 740) {
    interestRate = iR - (iR * .005);
    }
    else if (cS < 660) {
    interestRate = iR + (iR * .005);
    }
    const monthlyInterestRate = interestRate / 12;

    const monthlyRate = principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate),periods)) / (Math.pow((1 + monthlyInterestRate),periods) - 1);


    return(name + ", your monthly rate is " + monthlyRate.toFixed(2));
}

console.log(mortgageCalculator(200000, 0.05, "Catherine - No change",700));
console.log(mortgageCalculator(200000, 0.05, "Catherine - Higher Rate",77));
console.log(mortgageCalculator(200000, 0.05, "Catherine - Lower Rate",7777));



*/
// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/

/*
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🏡 Task 6: Loops: My Solution


function variableInterestRate (p, i, y) {

    const principal = p;
        let interest = i;
        const year = y;
        const name = "Catherine";

        for( let x = interest - .02; x < interest + .02; x += .005){
        const monthlyInterestRate = x / 12;
            const periods = y * 12;

            const monthlyRate = principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate),periods)) / (Math.pow((1 + monthlyInterestRate),periods) - 1);

            console.log( name +" with an interest rate of " + x.toFixed(3) + " your monthly rate is $" + Math.round(monthlyRate) );
        }
    }

    return(variableInterestRate(200000, 0.04, 30));


*/

// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */

/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */

/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */

/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */

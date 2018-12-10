// You are building an educational website and want to create a simple calculator for students to use. The calculator will only allow addition and subtraction of positive integers.

// Given an expression string using the "+" and "-" operators like "5+16-2", write a function to find the total.


// Sample input/output:
// "6+9-12" => 3
// "1+2-3+4-5+6-7" => -2

// 1+1 => 2
// [1,1]
// [+]

// We also want to allow parentheses in our input. Given an expression string using the "+", "-", "(", and ")" operators like "5+(16-2)", write a function to parse the string and evaluate the result.

// Sample input:
//     expression1 = "5+16-((9-6)-(4-2))"
//     expression2 = "22+(2-4)"
//     expression3 = "5+16-((9-(6 + 10))-(4-2))"
 
// Sample output:
//     evaluate(expression1) => 20
//     evaluate(expression2) => 20


// find the closing parenthesis
  // recursive call to evaluate inner equation

function findParen(string) {
    // (2-4)
    // use the stack to track length of inner equation
    let stack = [];
    let chars = string.split('');

    if(chars[0] === '(') stack.push(chars[0]);
    // track indices for equation
    let start = 1;
    let end = 1;


    while(stack.length > 0) {
        if(chars[end] === '(') {
            stack.push(chars[end])
            end++;
        } else if(chars[end] === ')') {
            stack.pop();
        } else {
            end++;
        }
    }

    // console.log({start, end});
    // console.log(string.slice(start, end));
    // console.log(calculator(string.slice(start, end)));

    return string.slice(start,end)
}


// declare total variable
// pop num, pop operation, pop next number

function calculator(equation) {
    // grab the numbers
    // grab the operators

    let numbers = [];
    let operators = [];
    let lastChar = '';

    equation.split('').forEach(char => {
        if(char === '+' || char === '-') {
            operators.unshift(char);
            numbers.push(lastChar);
            lastChar = '';
        } else {
            lastChar += char;
        }
    });

    // add the last number
    numbers.push(lastChar);

    let total = parseInt(numbers[0]);

    // loop through numbers, and pop off operators to calculate
    for(let i = 1; i < numbers.length; i++) {
        let operation = operators.pop();
        if(operation === '+') {
            total += parseInt(numbers[i]);
        } else {
            total -= parseInt(numbers[i]);
        }
    }

    return total;
}

var expression1 = "6+9-12"; // = 3
var expression2 = "1+2-3+4-5+6-7"; // = -2

var expression3 = "5+16-((9-6)-(4-(2+4)))+19";
var expression4 = "22+(2-4)";


console.log(calculator("1+2+3+4-5-6-7"))

findParen('((9-6)-(4-2))');
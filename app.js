// Q1

let expression_1 = -9 * 3;
console.log(expression_1); // -27

let expression_2 = "value is" + 50;
console.log(expression_2); // value is50

let expression_3 = 17 % 5;
console.log(expression_3); // 2

let expression_4 = 5 % 17;
console.log(expression_4); // 5

let expression_5 = 5 / 10;
console.log(expression_5); // 0.5

let expression_6 = 4 == 4;
console.log(expression_6); // true

let expression_7 = 4 != 5;
console.log(expression_7); // true

let expression_8 = 7 <= 8;
console.log(expression_8); // true

let x = 100.85555555555;
let expression_9 = Math.ceil(x) - Math.floor(x);
console.log(expression_9); // 1

// Q2

alert("Q2 : Read a number (using prompt) and display it using alert");
let number = prompt("please Enter a number");
alert("Your number is" + " " + number);

// Q3

alert("Q3 : Read in two numbers and display them in ascending order.");
let number_1_Q3 = prompt("please Enter a number_1");
let number_2_Q3 = prompt("please Enter a number_2");
if (number_1_Q3 < number_2_Q3) {
  alert(
    "ascending order" + " " + "=>" + " " + number_1_Q3 + "   " + number_2_Q3
  );
} else {
  alert(
    "ascending order" + " " + "=>" + " " + number_2_Q3 + "   " + number_1_Q3
  );
}

// Q4

alert("Q4: Read in two numbers and display the larger");
let number_1_Q4 = prompt("please Enter a number_1");
let number_2_Q4 = prompt("please Enter a number_2");
if (number_1_Q4 > number_2_Q4) {
  alert("the larger is" + " " + "=>" + " " + number_1_Q4);
} else {
  alert("the larger is" + " " + "=>" + " " + number_2_Q4);
}

// Q5
alert(
  "Q5: Read two numbers and display their sum.  What problem did you encounter?"
);
let number_1_Q5 = prompt("please Enter a number_1");
let number_2_Q5 = prompt("please Enter a number_2");
let sum = number_1_Q5 + number_2_Q5;
alert(sum);
alert("The problem I encountered is that it collects them as string");

// Q6
let num = 1;
switch (num) {
  case 1:
    num = 1;
    alert("ONE");
    break;
  case 2:
    num = 2;
    alert("TWO");
    break;
  case 3:
    num = 3;
    alert("THREE");
    break;
  case 4:
    num = 4;
    alert("FOUR");
    break;
  case 5:
    num = 5;
    alert("FIVE");
    break;
  case 6:
    num = 6;
    alert("SIX");
    break;
  case 7:
    num = 7;
    alert("SEVEN");
    break;
  case 8:
    num = 8;
    alert("EIGHT");
    break;
  case 9:
    num = 9;
    alert("NINE");
    break;
  default:
    alert("PLEASE TRY AGAIN");
}

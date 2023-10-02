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
let number_1_Q5 = +prompt("please Enter a number_1");
let number_2_Q5 = +prompt("please Enter a number_2");
let sum = number_1_Q5 + number_2_Q5;
alert(sum);
alert(
  "The problem I encountered is that it collects them as string use + befor prompt To convert it into a number"
);

// Q6
alert("Q6: If you have a “num” variable,  Your task is to print:");
let num = +prompt("please enter your number");
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

// Q7
alert(
  "Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window."
);
for (let i = 0; i <= 5; i++) {
  alert(i);
}

// Q8
alert(
  "Q8: Use a loop to display the numbers 0 through 5 in a single alert window"
);
let numbers = "";
for (let i = 0; i <= 5; i++) {
  numbers += `${i} `;
}
alert(numbers);

// Q9
alert(
  "Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3."
);
let multiplesOf_3 = "";
for (let i = 3; i >= 0 && i <= 20; ) {
  multiplesOf_3 += `${i}, `;
  i += 3;
}
alert(multiplesOf_3);

// Q10
alert(
  "Q10: Prompt the user for a number in the range 0…100.  If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time"
);
let number_0_100 = +prompt("please Enter a number");
while (!(number_0_100 >= 0 && number_0_100 <= 100)) {
  alert("Error => please Enter a valid number (0-100)");
  number_0_100 = +prompt("please Enter a number");
}
alert(`Your Number Is ${number_0_100}`);

// Q11
alert(
  "Q11: Repeat previous exercise, but this time allow for the possibility that the user enters something that is not a number.  Hint: the built in function isNaN(x) returns true if x is not a number.  It returns false if x is a number.  Sort of backwards, but that's what's available."
);
let number_Q_11;
for (;;) {
  number_Q_11 = +prompt("Please enter a number");
  if (number_Q_11 === null || isNaN(number_Q_11)) {
    alert("Invalid input. Please Enter A Valid Number.");
  } else if (!isNaN(number_Q_11) && number_Q_11 >= 0 && number_Q_11 <= 100) {
    alert(`You Number Is ${number_Q_11}`);
    break;
  } else {
    alert("Number out of range. Please enter a number between (0-100)");
  }
}

// Q12
alert(
  "Q12: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10"
);
let integerNumber = +prompt("Please enter a integer number");
let sum_Q_12 = 0;
for (let i = 0; i <= integerNumber; i++) {
  sum_Q_12 += i;
}
alert(sum_Q_12);

// Q13
alert(
  "Q13: Prompt for an integer, then display the average of the integers from 0 through the number entered.  For example, if you enter 10, then display 5 which is the average of   (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11."
);
let integerNumber_Q_13 = +prompt("Please enter a integer number");
let sum_Q_13 = 0;
for (let i = 0; i <= integerNumber_Q_13; i++) {
  sum_Q_13 += i;
}
alert(sum_Q_13 / (integerNumber_Q_13 + 1));

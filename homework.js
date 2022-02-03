
// 1. write 3 variables (number,string,boolean)
var age = 23;
var myName = "Md jahangir alam";
var  boolen = true;
console.log(age,myName,boolen);

// 2 variables using (let, const) 
let hobbies = "I will be a programmer";
console.log(hobbies);
// or 
 const myHobbies = "In 2023, I will be a programmer";
 console.log(myHobbies);

// 3. simple math operations +,-,*,/,%  
//JavaScript Arithmetic Operators
 var first = 30;
 var last = 20;
 var result1 =(first + last);
 var result2 =(first - last);
 var result3 =(first * last);
 var result4 =(first / last);
 var result5 =(first % last);
 console.log(result1,result2,result3,result4,result5);
 
// 4. comparison (==, <,>, <=, >=, != ).
const taka = 100;
const cost = 90;
if (taka == cost) {
    console.log("Equal to  operator  right");
}
else{
    console.log("Equal to operator not right");
}
if (taka > cost) {
    console.log("greater than right");
}
if (taka < cost) {
    console.log("less than true");
}
else{
    console.log("less than not true");
}
if (taka >= cost) {
    console.log("Greater than or equal to right");
}
if (taka <= cost) {
    console.log("less than or equal to true");
}
else{
    console.log("kess than or equal to false");
}
if (taka != cost) {
    console.log("Not equal right");
}

// 5. two conditions. case-1: fullfill both condition. case-2 fulfill atleast one condition.
const debit = 100;
const credit = 80;
if (debit > credit && debit != credit) {
    console.log("Logical Operator and true");
}
if (debit == credit || debit >= credit) {
    console.log("Logical Operator or true");
}

// 6. if-else 
let num1 = 10;
let num2  = 10;
if (num1 >= num2) {
    console.log("condition fulfill");
}
else{
    console.log("Condition not fulfill");
}

// 7. while loop to display 7 to 19 numbers. only display odd number including 7 to 19 
  let text = 7;
  while ( text <= 19) {
      if (text % 2 != 0) {
        console.log(text);
      }
    text++;
  }
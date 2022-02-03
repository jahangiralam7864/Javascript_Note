
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

  // 8. declare an array . number of elements. update or change 4th position element.add or remove element. check whether a specific value exists in the array.
const array = [10,12,14,16,18,20,22,24,26];
delete array[2];
array [4]= 50;
console.log(array);
let index = array.length;
console.log(index);
  
// 9. use any for loop to display every elements of an array // array sob upadan dekhar jonno j kono akta for loop use korty hobe.
const num = [10,12,14,16,18,20,22,24,26];
for(const jahangir of num){
    console.log(jahangir);
} 
    //or
for (let i = 1; i <= 20; i++){
    console.log(i);   
}

// 10. you have an array of numbers. display only the numbers bigger than 80 // onek gulo number k akta array vitor nity hobe. than 80 thake kono boro sonkha k print korty hobe.
const larNumber = [20,30,40,80,85,83,88,90];
for (let i = 0; i < larNumber.length; i++) {
    const element = larNumber[i];
    if (element >= 80) {
        console.log(element);
    }
    
}



// 11. write a function that takes three numbers and retrans multiplication of the three numbers // function ar vitor 3 ta numbers nite hobe, than 3 number k gun kore print korty hobe.
function multipoly(num1,mum2,num3) {
    const result = num1 * mum2 * num3;
    return result;
}
const multyNum = multipoly(20,30,40);
console.log(multyNum);

// 12. declare an object and change any property of that object. // kono object diclare kore sei value change korty hobe.

let mobile = {
    name: "iphone",
    color: "gray",
    ram: "64GB",
    bettary: "18Ah",
    camera: "120MP"
}
mobile.color = "Gold";
console.log(mobile);
    

function feetToInch(inch) {
    let feet = inch / 12;
    return feet;
}

var inches = feetToInch(277.4400);
console.log(inches);
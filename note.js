// variable diclear (variable)
// (*) any name ba number etc diclear korty (variable) use korbo.

var startLight = 'md jahangir alam';
console.log(startLight);

// Array infomation (array)
// (*) amra jodi onek gulo value k ak sathe rekhe kaj korty cai tar jonno amara array use kore thaki example:

// (**) akhon er modde theke jodi kono datar koto number sirial a ase seta check korty amar indexOf use korbo.

//(***) kono data change korty amar [] er vitor data tar sirial number diye (=) diye new data add korbo.

var names = ['jahangir', 'alam','joy','rafi','hridoy'];

var sirial = names.indexOf('alam');
console.log(sirial); // result = (1)

var nameChange = names[1] = 'wow - change my name';
console.log(nameChange); //result = "wow - change my name"

//break

// (*) array use kore kono datar last er side a kono data delet korty (pop) use krobo. 

// (**) kono data last ar theke add korty amra (push) use korbo.

//(***) array kono value frist theke delet korty (shift) tag use korbo.

//(****) array kono value frist a add korty (unshift) tag use korbo.

var names = ['jahangir', 'alam','joy','rafi','hridoy'];
names.pop()         //example:
console.log(names);  // result = // result = [ 'jahangir', 'alam', 'joy', 'rafi',]

names.push("Bangladesh"); // example :
console.log(names); // result = [ 'jahangir', 'alam', 'joy', 'rafi', 'Bangladesh' ]

names.shift();      //example:
console.log(names); // result = [ 'alam', 'joy', 'rafi','Bangladesh' ]

names.unshift('jahangiralamjoy');
console.log(names);

//brack

//conditionals infomation (condition)

//(*) amar array valu diye conditon korty pare.
var names = ['jahangir', 'alam','joy','rafi','hridoy'];

if (names[0] == 'jahangir') { //example :
    console.log('I am jahangir'); //result = I am jahangir ( condition true jahanir ar sirial 0)
}
else{
    console.log('I am not jahangir'); // jodi ager condition flase hoito taile else print hobe.
}
//example 2
//(*) condition jodi 100 takar theke cash 100 boro- (flase) , tar por dekho (=) diye bola hoise jodi 100 theke 100 soto na hoiye soman taile condition true hobe.
var cash = 100;
if (cash >= 100) {
    console.log('jodi 100 takar soman ba kom hoi taile if print how');
}
else{
    console.log('jodi 100 takar basi hoi taile else print how');
}

// loop (while-loop)
//(*) kono condition diye dile loop use korle bar bar ghure ghure print korbe. example:
// looping korbo 15 bar 1
// looping korbo 15 bar 2
// looping korbo 15 bar 3
// looping korbo 15 bar 4
// looping korbo 15 bar 5
// looping korbo 15 bar 6
// looping korbo 15 bar 7
// looping korbo 15 bar 8
// looping korbo 15 bar 9
// looping korbo 15 bar 10

var i = 1;
while ( i <= 10 ) { // result = 
    console.log('looping korbo 15 bar',i) 
    i++;
}

//loop (for-loop)
//(*) for loop diye same kaj e kore, bolte gele (for loop) holo while er chepta varsion. example: ( 1 to 15)

for (var i = 1; i < 15; i++){
    console.log(i);
}

// function declaration (function)
//(*) jodi amra function declaration korty cai frist a function declaration korty hobe.
//(**) call the switch add korle function er vitor joto value ase sob print korbe.
//(***) jodi amra function er vitor kono man diye dai exp: (500) taka dai, taile upore function a add hobe

function startLight() { 
    // onek gulo bar bar na bolte caile , function diye call korle sob gulo akbare kaj korbe.
    console.log('walk towrds the switch');
    console.log('press the switch');
}     
// call the switch         
startLight(); 

//example 2
function partyCost(taka) {
    console.log(taka,'taka diye aj sultan dine a dinner korbo!');
}
partyCost(500); //result = 500 taka diye aj sultan dine a dinner korbo!

//example 3
// 500 taka diye aj sultan dine a dinner korbo!- value change hoite akhon 1000 taka hobe.
// 1000 taka diye aj sultan dine a dinner korbo!
function partyCost(taka) {
    console.log(taka,'taka diye aj sultan dine a dinner korbo!');
    console.log('mama singara dan');
    var singara = 20;
    var singaraQuantity = taka / singara;
    return singaraQuantity
}
// akhon ami caile variable diye function ar man change kore dity pari examp
var many = 1000;
var cash = partyCost(many); //result = 500 taka diye aj sultan dine a dinner korbo!
console.log(cash);
//       
function jahangir(taka) {
    console.log(taka,'taka de singara khabo');
    console.log('noito kanna korlam');
    var singaraPrice = 10;
    var singQun = taka / singaraPrice;
    return singQun;

}
var many = 100;
var totalcash = jahangir(many);
console.log(totalcash);

//function a gun korty ai proparty use kore.(*)
function nultioplyTwoNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}
var total = nultioplyTwoNumbers(5, 100);
console.log(total);

// function diye minimase(-)
function biygKorbo(jahangir, alam) {
    console.log(jahangir, alam);
    var total = jahangir - alam;
    return total;
}
var fristName = 100;
var lastName = 200;
var result = biygKorbo(fristName, lastName);
console.log(result);

//function diye kono valu k sum kora (+) (sum)
//onek gulo sonkha jog korty sum use korbo
function biygKorbo(jahangir, alam) {
    console.log(jahangir, alam);
    var total = jahangir + alam;
    return total;
}
var fristName = 100;
var lastName = 200;
var result = biygKorbo(fristName, lastName);
console.log(result);
//or
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const firstNum = add(20,30);
const secoundNum = add(30,30);
console.log(firstNum, secoundNum);

//object dicleared infomation (object)
//(*) object 2 vabe diclear korty pari 
//(**)abar amra caile ai vabew korty pari , duitai same kaj kore.
//(**) amra caile object er vitor ki man ase setaw dekhte parbo (exampe 2)
var student1 = {id: 110,name: "md jahangir alam", marks: 88,phone: 4985034034}

// example 2 
var student1 = {
    id: 110,
    name: "md jahangir alam",
    marks: 88,
    phone: 4985034034
}
//frist a console.log er vitor object er name dite hobe, then j id-r value dekhbo (.) diye oi object er name diye hobe.
console.log(student1.name); // result = md jahangir alam

// object er value change korty j poparty use korbo result 
                // id: 110,
                // name: 'md jahangir alam',
                // totalmarks: 100 / 200 / 300 (3 rokom vabe same result pawa jabe )
                // phone: 4985034034
var student1 = {
    id: 110,
    name: "md jahangir alam",
    totalmarks: 88,
    phone: 4985034034
}
student1.totalmarks = 100;
        // or 
        student1['totalmarks'] = 200;
        // or 
        var marks = "totalmarks";
        student1[marks] = 300;
console.log(student1);


//kono array object ar small valo check (Object)
//Object er vitor theke sob theke soto value bar korty use korbo
const phones = [
    {name: "samsung",price: "30000",camera: "10",storage: 32},
    {name: "walton",price: "15000",camera: "12",storage: 42},
    {name: "shaomi",price: "34500",camera: "120",storage: 132},
    {name: "opp",price: "3000",camera: "11",storage: 34},
    {name: "nokia",price: "4000",camera: "18",storage: 52},
    {name: "htc",price: "24232",camera: "120",storage: 32}
];
let cheapest = phones[0];
for (const phone of phones){
    //compare price only..
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest);


//switch infomation (switch)
//switch diye kono kisu mach kore print korbo. potita case check kore jodi condition mach na kore taile print hobe na, onno case check korbe, are jodi kono case e mill pawa na jay, taile default print hobe.
var color = 'green';
switch (color) {
    case 'red':
        console.log("amar color red");
        break;
    case 'blue':
        console.log("amar color blue");
        break
    case 'yellow':
        console.log('amar color yellow');
        break
    case 'green':
        console.log('amar color green');
        break
    default:
        console.log("amar color black");
        break;
}
// var and const er difarent (var/const)
//Amra jani onek gulo variable k ak sathe assign korty pari, but kono const k onek gulo assign korty pari na.example:
//(*) var use kore onek gulo var assign korbo.
//(*) const use kore amra
var myName = "md jahangir alam";
console.log(myName);//result : md jahangir alam
var myName = "Hello bangladesh";
console.log(myName); //result : Hello bangladesh

//example 2 (**)
// Error : Identifier 'myName' has already been declared
const myName = "md jahangir alam";
console.log(myName);
const myName = "Hello bangladesh";
console.log(myName); 

//function diye feet and inches dekha (feet and inches)
//amra jodi cai onek joner moner moto kore tader feet and inche return korty parbo. sobai mone korbe amar dharona right. 
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;   
}
var myInches = 132; //kew bole 11 inche te 1 feet
var feet = inchToFeet(myInches);
console.log('MyInches in feet', feet);

var naniInches = 144; //nani bole 12 inche te 1 feet. right
var feet = inchToFeet(naniInches);
console.log('MyInches in feet', feet); 

var nanaInches = 156; //nana bole 13 inche te 1 feet.
var feet = inchToFeet(nanaInches);
console.log('MyInches in feet', feet);

var khalaInches = 168; // khala bole 14 inche te 1 feet ami sunsilam.
var feet = inchToFeet(khalaInches);
console.log('MyInches in feet', feet);


// mile to kilometer convater(mile to kilometer)    
//amar google kore 1 mile 1.60934 km.jante parlam.
// mile teke km korty gun korbo.
function mileTOKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
var marathon = mileTOKilometer(26.2);
console.log("Marathon in ", marathon, "km");

//function diye vagses return (odd-even)
// (*)jor sonkha check korbo...
//(**) Bijor sonkha check korbo condition diye..
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber = 101;
const myEvent = isEven(myNumber);//flase returen korbe, karon vagses 0 soman hobe na
console.log("my number is ", myEvent);

const trueNumber = 100;// true return korbe , karon vagses 0 soman hoise.
const trueEvent = isEven(trueNumber);
console.log("my number is ", trueEvent);

//example 2
function oddNumber(number) {
    if (number % 2 != 0) { //note equal na diye amara caile j kono bijor sonkha o dite pari.
        return true;
    }
    return false;
}
const oddEven = 101; //ami bijor sonkha na true
const oddPrint = oddNumber(oddEven);
console.log('ami bijor sonkha na', oddPrint);

//only display odd number including (odd)
//amra jodi kono odd sonkha check korty cai tar jonno ai formula use korbo
let text = 7;
while ( text <= 19) {
    if (text % 2 != 0) {
      console.log(text);
    }
  text ++;
}

// kono jor sonkha print korty  caile amra ata use korbo (odd-event)
function print() {
    for (let i = 1; i <= 20; i++){
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  }
  print();
  //or
  function print() {
    for (let i = 1; i <= 20; i++){
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }
  print();
  

//factorial math (factorial)
//factorial kore amra kono sonkhar nise joto sonkha ase sob gulo k gun korbo.
//(*)loop diye korbo.
//(**) function  ar vitor for loop diye factorial korbo..
//(***) function ar vitor while loop diye amra factorial korbo...
//(****)function ar vitor for loop use kore amar upor thek niser dike gun korty parbo....

var factorial = 1;// kono sonkha gun korar jonno 1 diclear korty hobe. 0 diye valu check korle sob kisui 0 hobe.
for (var i = 1; i <= 10; i++){
    console.log(i);
    factorial = factorial * i;
}
console.log(factorial); 

// example 2
function getFactorial(number) {
    let fact = 1;
    for (let i = 1; i <=  number; i++) {
        fact = fact * i;
    }
    return fact;
}
var firstFactorial = getFactorial(7);//Factorial value is =  5040
console.log('Factorial value is = ', firstFactorial);
//Example :
var secendFactorial = getFactorial(10);//secend factorial valu is =  3628800
console.log("secend factorial valu is = ", secendFactorial);

//Example 3
//function er vitor while loop diye amra factorial korbo...
function factName(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var result = factName(7);//while loop use kore factorial print =  5040
console.log('while loop use kore factorial print = ', result);

//function a while loop diye akhon amra boro theke gun kore soto pojonto asbo..
function getFactor(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
var result = getFactor(7);//while loop use kore factorial upor theke niser dike asbo.
console.log('while loop use kore factorial print = ', result);
//example 4
//for loop to factorial infomation
function getFactor(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
        
    }
    return factorial;
}
var result = getFactor(6);//while loop use kore factorial upor theke niser dike asbo.
console.log('while loop use kore factorial print = ', result);

//Result check (result)
//(*) Kono result sheet check korty amra function er vitor if else use kore khub sohoje dekte parbo.
function result(marks) {
    if (marks > 100 || marks < 0 ) {
        console.log("Invalid marks");
    }
   if (marks >= 80 && marks <= 100) {
       console.log("A+");
   }else if (marks >= 70 && marks <= 79 ) {
       console.log("A-");
   }else if (marks >= 60 && marks <= 69 ) {
       console.log("A");
   }else if (marks >= 50 && marks <= 59 ) {
       console.log("B");
   }else if (marks >= 40 && marks <= 49 ) {
       console.log("C");
   }else if (marks >= 33 && marks <= 39 ) {
       console.log("D");
   }else{
       console.log("Fail");
   }
}
var marksPush = 101;
var submit = result(marksPush);
console.log(submit);

//array value jog korte concat uer kore (concat)
//names + numes1 er value aksathe korty uer korbo.
var names = ['jahangir','alam','joy','hridoy',];
var names1 = ['rafi','aunshan','mahbub'];
var diclear = names.concat(names1);
console.log(diclear);


// abs diye kono valu positive diclear (abs)
// kono variable ar valu jodi nagetive thake seta k positive korty abs use korbo
const myNumber = -5;
const output = Math.abs(myNumber);
console.log(output);

//ceil use kore next jante pari (ceil)
//jodi kono sonkhar uporer sonkha jante cai tar jonno amra ceil use korbo.
var myNumber = 21.9999;
var output = Math.ceil(myNumber);
console.log(output);

//floor use kore down jante pari (floor)
//jodi kono sonkhar nicher sonkha jante cai tar jonno amra floor use korbo.
var myNumber = 21.9999;
var output = Math.floor(myNumber);
console.log(output);

//what is (round)
//round use kore amra kono sonkhar nikot tomo kono shonkha hoile seta k ager number e return korbe.are jodi 5 ba tar basi hoi , taile seta upore sonkha print hobe.
var myNumber = 21.3299;
var output = Math.round(myNumber);
console.log(output);

//javascript diye basay manegar nibacon (round)
while (true) {
    var alam = Math.round(Math.random() * 5);
    if (alam == 4) {
        console.log("jahangir alam is a new manager in this month");
        break;
    }else if (alam == 3) {
        console.log("hirdoy is a new manager in this month");
        break;
    }else if (alam == 2) {
        console.log("rafi is a new manager in this month");
        break;
    }else if (alam == 1) {
        console.log("jahidul islam is a new manager in this month");
        break;
    }else if (alam == 5) {
        console.log("abul hasan aunshan is a new manager in this month");
        break;
    }    
}

//kono sonkha k alemelo vabe print korty random use kore (random)
//random diye ludur gutir moto kono number diclear korty pari
//(*)variable diye and for loop diye resutl kore kokhalam
var myNumber = 21.3299;
var output = Math.random() * 6;
var rounded = Math.round(output);
console.log(rounded);
//or
for (let i = 0; i < 20; i++) {
    var myNumber = 21.3299;
    var output = Math.random() * 6;
    var rounded = Math.round(output);
    console.log(rounded);
    
}

//last to first, and first to last (first to last , last to first)
//kono value jodi dan paser ta bam pase jabe.and bam paser value jabe dan pase
var first = 5;
var second = 7;
console.log(first,second);
//first aprose
var temp =  first;
first = second;
second = temp;
console.log(first,second);
//second aprose
[first,second] = [second, first];
console.log(first,second);

// Amra if else deye khub sohojei k boro seta bujte pari
// compare korty parbo khub sohoje. if use kore
const business = 450;
const minister = 750;
const army = 600;
if (business > minister && business > army) {
    console.log("Business is bigger");
}
else if (minister > business && minister > army) {
    console.log("minister is bigger");
}
else{
    console.log("Army is bigger");
}

//or
var max = Math.max(business,minister,army);
console.log("Largest is ",max);
//or
//kono height number dekte caile Math.max use korbo.(max)
var a = 5; 
var b = 8; 
var c = 4; 
var d = 6; 
var highest = Math.max(a, b, c, d);
console.log(highest);
//or
function find(first,second) {
    if (first>second) {
        return first;
    }
    else{
        return second;
    }
}
const largest = find(445, 322);
console.log("largest Number is ",largest);

//or
// function diye 3 ta value maje boro valu print 
function find(first,second,third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else{
        return third;
    }
    
}
const largest = find(445, 322,345);
console.log("wow i am a win",largest);

//largest (Max)
// kono boro sonkha check korty amra ai Max function use korbo
var jahanir = 234;
var raf = 790;
var hrido = 132;
var hami = 453;
var max = Math.max(jahanir,raf,hrido,hami);
console.log("larges is ",max);

//Small (Min)
// kono boro sonkha check korty amra ai Min function use korbo
var jahanir = 234;
var raf = 790;
var hrido = 132;
var hami = 453;
var min = Math.min(jahanir,raf,hrido,hami);
console.log("Small is ",min);


//Sob gulo array  korty for loop use (sum)
// array value print for loop diye.
const numbers = [12,423,54,65,7,6,];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element);    
    sum = sum + element;
    
}
console.log('resulr', sum);

//Sob gulo array sum korty function  use (sum)
// array value print for loop diye.
function log(number1) {
    let sum = 0;
    for (let i = 0; i < number1.length; i++) {
        const element = number1[i];
        sum = sum + element; 
    }
    return sum;
}
const test = log([100,200,300,400,500,600]);
console.log("what a mistek", test);

//largest number check (largest)
// onek gulo array vitor sob theke boro sonkha k print korbo
function largestNumber(number) {
    let largest = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element > largest) {
            largest = element // loop kore last a jeta boro array pabe setai element ar vitor thakbe,then element k largest er vitor niye return korbo.
        }
    }
    return largest;
}

var ages = [80,10,12,13,14,15,16,17];
var oldest = largestNumber(ages);
console.log('return',oldest);


// Amra for use kore 2 vabe Unique number check korty pari.(Unique)
function toUniqueArray(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
  return newArr;
}
var colors = ["red","red","green","green","green"];
var colorsUnique=toUniqueArray(colors); // ["red","green"]
//or
var colors = ["red","red","green","green","green"];
function toUniqueArray(colors){
    var newArr = [];
    for (const jahangir of colors) {
        if (newArr.indexOf(jahangir) == -1) {
            newArr.push(jahangir);
        }
    }
  return newArr;
}

var colorsUnique= toUniqueArray(colors);
console.log(colorsUnique); // ["red","green"]


//revers diye , amara kono stirng k vange dakhi. (revers)
const greetings = "hello, how are You?" ;
function reverseString(text) {
    let lowest = '';
    for (const letters of text) {
        console.log(letters);
        lowest = letters + lowest;
    }
}
const revers = reverseString(greetings);
console.log(revers);


//munltiply kono variable ba array k jodi function diye gun korty cai. (multiply)
function multiple(num1,num2,num3) {
    const result = num1 * num2* num3;
    return result;
}

const firstNum = multiple(20,30,40);
const secoundNum = multiple(30,40,50);
console.log(firstNum, secoundNum);

// amra kono kisur dam jante caile ba tar qundity jante caile ai mathord use korbo. (qundity and cost)
function woodCalculator(chairQuantity,tableQuantity,bedQuantity) {
    const parChairWood = 3;//total cost ba items.
    const parTableWood = 10;//total cost ba items.
    const parbedWood = 50;//total cost ba items.
    //  WoodCalculation
    const chair = chairQuantity * parChairWood;
    const table = tableQuantity * parTableWood;
    const bed = bedQuantity * parbedWood;
    const total = chair + table + bed;
    return total;
}

const quntity = woodCalculator(1,1,1);
console.log(quntity);//result = 63;

//kono number er vagses check (vagses)
//Jodi 1-50 pojonto kono sonkha diclear kori taile, oi sonkhar vitor kisu sonkha diye vag korle vagses jodi 0 hoi, taile oi sonkhar poriborte kisu contant print hobe. 
for (let i = 0; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("alam");
    } 
    else if (i % 3 == 0) {
        console.log("jahangir");
    }
    else if (i % 5 == 0) {
        console.log("Rafi");
    }
    else if (i % 10 == 0) {
        console.log("Hridoy");
    }
    else{
        console.log(i);// jodi uporer kono sonkhar sathe vag kore vagses 0 na hoi taile else ar value print hobe.
    }
    
}

//kono array object ar small value check (Object)
//Object er vitor theke sob theke soto value bar korty use korbo
const phones = [
    {name: "samsung",price: "30000",camera: "10",storage: 32},
    {name: "walton",price: "15000",camera: "12",storage: 42},
    {name: "shaomi",price: "34500",camera: "120",storage: 132},
    {name: "opp",price: "3000",camera: "11",storage: 34},
    {name: "nokia",price: "4000",camera: "18",storage: 52},
    {name: "htc",price: "24232",camera: "120",storage: 32}
];
let cheapest = phones[0];
for (const phone of phones){
    //compare price only..
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest);


//product + quntity check (quntity check)
//kono product er product ba quntity gun kore koto taka paid hobe ,seta ber korbo,
const cart = [
    {name: "laptop",price: "30000",camera: "10",storage: 32, quantity:1},
    {name: "watch",price: "15000",camera: "12",storage: 42, quantity:3},
    {name: "phone",price: "34500",camera: "120",storage: 132, quantity:1},
    {name: "shirt",price: "3000",camera: "11",storage: 34, quantity:2},
];
let cartTotal = 0;
for (const product of cart){
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);

// you have an array of numbers. display only the numbers bigger 
//kono array kono niddisto sonkhar por value print korty use korbo
const larNumber = [20,30,40,80,85,83,88,90];
for (let i = 0; i < larNumber.length; i++) {
    const element = larNumber[i];
    if (element >= 80) {
        console.log(element);
    }
    
}


// string ar value check (vowel check)
// kono akta string ar vitor theke kisu sonkha jodi print korty cai,taile ai vabe use korbo
function countVowel(myName) {
    let count = 0;
    for (let i = 0; i < myName.length; i++) {
        const letter = myName[i].toLowerCase();
        if (letter == "j" || letter == "l" ||letter == "n") {
            count = count + 1;
        }
    }
    return count; 
}
let myName = "Jahangir alam joy";
console.log(countVowel(myName));// result 4

// for loop ar difult way (string traking)
function testing(words) {
    let count = 0;
    let point = ["x"];
    for(const jahangir of words){
        if (point.indexOf(jahangir) > -1) {
            count = count + 1;   
        }
    }
    return count;
}
let words = "xlorem ispump is a good result in a english word";
console.log(testing(words));


// poti kg mular dam dekhbo (par kg)
// jodi poti kg mular dam 30 taka.
// apni jodi 2 kg mula nity can taile poti kg 25 taka
function mula(totalQundity){
    if (typeof totalQundity != 'number') {
        return "Please Inter your valid Number!"
    }else if (totalQundity <= 0) {
        return "Please Inter your valid Number!"
    }else if (totalQundity >= 20) {
        return "please Inter a largest number!"
    }

    let price = 0;
    if(totalQundity <= 2){
        price = totalQundity * 30;
    }else{
        price = totalQundity * 25;
    }
    return price;
}
console.log(mula(100));

//calculation (bill-unites)
//Electricity bill calculation infomation
function electricity(unites) {
    if (unites <= 100) {
        bill = unites * 5;
    }
    else if (unites > 100) {
        let first = 100 * 5;
        let secound = (unites - 100) * 6;
        bill = first + secound;
    }
    else if (unites > 200){
        const first = 100 * 5;
        const secound = 100 * 6;
        const secound = (unites -200) * 7;
        bill = first + secound + remainingBill;
    }
    return bill;
}
console.log(electricity(130));

// Assignment - 4

// //Problem - 1
function anaToVori(ana) {
    //If the number is not correct, it will show error option.
    if (typeof ana != 'number') {
        return "Please Inter your valid Number!"
    }else if (ana <= 0) {
        return "Please add a number..(123)!"
    }
    //anaTOVori Calculation 
    const vori = ana * 0.0625;
    return vori; //value return
}
//Convert from Anna to Bhari 
const vori = anaToVori(16);
console.log(vori);

// Problem - 2
function pandaCost(singara, samosa, jilapi) {
    //pandaCost calculation
    let singaraQuantity = singara * 7;
    let samosaQuantity = samosa * 10;
    let jilapiQuantity = jilapi * 15;
    //The amount of money for all items 
    let total = singaraQuantity + samosaQuantity + jilapiQuantity;
    return total; // value return
}
// Add the  food and quantity
const totalCost = pandaCost(1,2,1);
//Total cost print.
console.log(totalCost);

//Problem - 3
function picnicBudget(parson) {
    //If the number is not correct, it will show error option.
    if (typeof parson != 'number') {
        return "Please add a number..(123)";
    }else if (parson <= 0) {
        return "Your information is incorrect";
    }
    //Less than 100 people
    if ( parson <= 100 ) {
        taka = parson * 5000;
    }
    //More than 200 people
    else if ( parson > 200 ) {
        const firstOffer = 100 * 5000;
        const lastOffer = 100 * 4000;
        const secoundOffer = (parson - 200) * 3000;
        taka = firstOffer + lastOffer + secoundOffer;
    }
    //More than 100 people
    else if ( parson > 100 ) {
        let firstOffer = 100 * 5000;
        let secoundOffer = (parson - 100) * 4000;
        taka = firstOffer + secoundOffer;
    }
    //value return
    return taka;
}
console.log(picnicBudget(201)); //show result

//Problem - 4

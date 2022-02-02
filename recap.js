// function largest(number) {
//     let max = number [0];
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];//element er vitor number er sob value 
//         if (element > max) {//element (=) number er value, max ar value 0;taile conditon diye bola hoise number ki max ar theke boro? true;
//             max = element;
//         }
//     }
// }
// //amara caile akoi niyom flow kore small number o check korty parbo.
// function smaller(number) {
//     let min = number [0];
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];//element er vitor number er sob value 
//         if (element < min) {//element (=) number er value, max ar value 0;taile conditon diye bola hoise number ki max ar theke boro? true;
//             min = element;
//         }
//     }
// }

// var pushNumber = largest(50);
// // var pushNumber = smaller(50,20,40,100,30);
// console.log(pushNumber);

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
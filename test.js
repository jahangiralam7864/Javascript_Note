
//find if anybody got A+ form your friends
//marks = [ 78,82,69];

// function checkGPA(marks) {
//     for (let i = 0; i < marks.length; i++) {
//         const element = marks[i];
//         if (element >= 80) {
//             return true;
//         }
//     }
//     return false; // function ar vitor sob gulo value check kore jodi 80 theke boro thake tiale true print hobe are jodi na thake taile loop ar baire return korbe.
// }
// console.log(checkGPA([78,82,69]));

// find the largest element of an array
// function largest(array) {
//     let largest = array [0];
//     for (const element of array){
//         if (element > largest) {
//             largest = element;
//         }
        
//     }
//     return largest;
// }

// let array = [3,5,6,8,9];
// console.log(largest(array));


// function secendLargest(array) {
//     let largest = array[0];
//     let secoundParsonLargest = array[0];
//     for (let i = 0; i < array.length; i++) {
//         let element = array[i];
//         if (element > largest) {
//             secoundParsonLargest = largest;
//             largest = element;
//         }
//         else if (element > secendLargest) {
//             secendLargest = element;
//         }
        
//     }
//     return secoundParsonLargest;
// }

// let array = [3,5,6,8,9,11,14,17];
// console.log(secendLargest(array));

// const hridoy = (["59, 66,88,75"]); 



//                 Assignment - 4       //



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



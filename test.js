
//find if anybody got A+ form your friends
//marks = [ 78,82,69];

function checkGPA(marks) {
    for (let i = 0; i < marks.length; i++) {
        const element = marks[i];
        if (element >= 80) {
            return true;
        }
    }
    return false; // function ar vitor sob gulo value check kore jodi 80 theke boro thake tiale true print hobe are jodi na thake taile loop ar baire return korbe.
}
console.log(checkGPA([78,82,69]));

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
//     let secoundLargest = array[0];
//     for (let i = 0; i < array.length; i++) {
//         let element = array[i];
//         if (element > largest) {
//             secoundLargest = largest;
//             largest = element;
//         }
//         else if (element > secendLargest) {
//             secendLargest = element;
//         }
        
//     }
//     return secoundLargest;
// }

// let array = [3,5,6,8,9,11,14,17];
// console.log(secendLargest(array));

const hridoy = (["59, 66,88,75"]);



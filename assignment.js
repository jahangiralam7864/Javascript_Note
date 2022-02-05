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

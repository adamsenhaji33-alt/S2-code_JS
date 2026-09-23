
let note = 12;
if (note >= 16) {
    console.log("very good");
} else if (note >= 10 && note < 16) {
    console.log("validate");
} else {
    console.log("not valid");
}

// Classification of a temperature ( else ifwith critical order) 

let temperature = 28;
if (temperature < 10){
    console.log("cold");
} else if (temperature < 25 && temperature >= 25 ) {
    console.log("mild");
} else {
    console.log("hot");
}

// Learner Validation ( &&) ← Deliverable 

let note2 = 14;
let presence = 90;
if (note2 >= 10 && presence >= 80) {
    console.log("validate");
} else {
    console.log("not valid");
}
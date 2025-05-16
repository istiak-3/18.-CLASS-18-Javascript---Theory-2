/*let userFirst = prompt("enter early number");
let userSecond = prompt("enter last number");
let result = document.querySelector(".result span");

userFirst = Number(userFirst);
userSecond = Number(userSecond);

if (userFirst > userSecond){
    result.innerHTML = userFirst + "  is greater than  " + userSecond;
}else if (userFirst < userSecond){
    result.innerHTML = userFirst + "  is less than  " + userSecond;
}else if (userFirst == userSecond){
    result.innerHTML = ` ${userFirst} is equally to  ${userSecond}`;
}else {
    result.innerHTML = " invalid input ";
}*/



/*let dbEmail = "123@gmail.com";
let dbPassword = "123#123";

let userEmail = prompt("Enter your email address");
let userPassword = prompt("Please enter password");



if (dbEmail == userEmail){
    if (dbPassword == userPassword){
        document.write("<h2>You've successfully logged in</h2>");
    }else{
        document.write("Wrong Password");
    }
}else {
    document.write("You'r Email is not valid");
}*/



let sltUsd = "USD";

let sltBdt = "BDT";

let sltCurrency = prompt("Please type USD or, BDT below To convert -");


if (sltCurrency.toUpperCase() == sltUsd) {
    let inputUsd = prompt("Enter Your amount (U.S.D)");
    let countBdt = (121 * inputUsd);

    inputUsd = Number(inputUsd);

    if (inputUsd > 0) {
        document.write(`<h2> ${inputUsd}$ = ${countBdt}৳ </h2>`);
    } else if (inputUsd == 0) {
        document.write(`<h2> ${inputUsd}$ = 0৳ </h2>`);
    }
    else {
        document.write("<h2> invalid input </h2>");
    }
}else if (sltCurrency.toUpperCase() == sltBdt) {

    let inputBdt = prompt("Enter Your amount (B.D.T)");
    let countUsd = (0.0082 * inputBdt).toFixed(2);

        inputBdt = Number(inputBdt);

    if (inputBdt > 0) {
        document.write(`<h2> ${inputBdt}৳ = ${countUsd}$ </h2>`);
    } else if (inputBdt == 0) {
        document.write(`<h2> ${inputBdt}৳ = 0$ </h2>`);
    }
    else {
        document.write("<h2> invalid input </h2>");
    }
}else {
    document.write("<h3>Invalid input! Please enter USD or, BDT</h3>");
}

let num = `ApnaCollege` //using str is just a nomenclature
//so dont worry mein toh num use kar raha huu
console.log(num.length) //object.key
console.log(num.charCodeAt)
console.log(num[0]);
console.log(typeof num); // gives position of the string

//Template literals
//it is used to console.log anything in a string with a variables
//using $ sign
//example:   `String text ${expression}string text`

let obj = {
    item: "pen",
    price: 10,
    inkcolor: "blue",
};
console.log(`This ${obj.item} costs $${obj.price}`);

let ball = "Ball\tpen"; //tab space
console.log(ball)       //length of \t is counted 1
console.log(ball.length);
let bll = "Ball\npen";  //next line
console.log(bll)


  


    //Strings Methods in JS
    //this are build for manipulation of a String

let jel = '   sEtnWetGeL  ';
console.log(jel.toUpperCase());
console.log(jel.toLowerCase());
console.log(jel.trim()); //removes the white spaces from start and End, it leave the space in between
//string is immutable in JS(Not change)





let username = prompt('Enter Your Full Name Without Spaces');
//alert(`@${username.toLowerCase()}${username.length}`);
console.log(`@${username.toLowerCase()}${username.length+3}`);
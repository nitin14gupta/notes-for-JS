// operators in JS
//Used to perform some arithmetic operation on data


//Artimetic Operator
1 + 2; //3 (Addition operators)
5 - 3; //2 (Subtraction operator)
8 * 4; //32 (Multiplication operator)
9 / 3; //3.33333333333 (Division Operator)

let a = 4;
let b = 2;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b); //Modulus when 2 things are divided then the remainder is the modulus value
console.log("a ** b =", a ** b); //Exponentional Operators
//It is used for raising one number to the power of another


//    Unary Operator
//They are used with only single operand and they either increase or decrease the value of
//single operand or return new values based on that
++a; //Prefix increment operator
console.log('a',++a);//5
--a; //Postfix Increment operator
console.log(--a);//4
console.log(--b);//1








//Assignment Operators

let c = 6;
let d = 10;
//c = c + 10; This will give an error because JavaScript does
//not support this type of assignment directly, we have to use compound assignment operators
c += 10; //c = c + 10;
console.log(c); //16
d **= 4 //d = d * 10*10*10*10
console.log(d);






//   comparision Operators
let e = 4;
let f = "4";
let g = 6;
//if the number is in string then it use strings as no
//use can use === co that string should be counted as string not number
//comparison between different data types can be done so JS converts all into string
console.log("a == b", e == f); //false
console.log("a != b", e != f); //true
console.log("a === b", e == f); //false
console.log("a !== b", e !== f); //true
console.log("g>=e", g >= e) //true
console.log("g<=e", g <= e) //false










//Logical Operators

let m = 10;
let n = 12;
let cond1 = m<n; //true
let cond2 = m===n; //true
console.log("cond1 && cond2 = ", cond1 && cond2);
// both condition should be coorect then it will be apply True
console.log("cond1 && cond2 = ", cond1 || cond2);
// both condition should be false then it will be apply False





  //Ternary Operators

  let ages = 30;
  ages>18 ? "adult" : "Not Adult"; //it is a simple form or compact form of If-Else Statement
console.log(ages);

































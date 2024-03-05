//Function is a code that performs a specific task,can be invoked whenever needed
//function save us from Redundancy(repeat)
function name(msg) { //the input is the "parameter"

    console.log(msg);
}
name('I love JS'); //in the function invoke section we call it "argument"

function sum(x,y,z){ //giving the operation in the function and then avoking it after giving some values
    console.log(x+y+z)
}
sum(123, 10,23);


// using the return function
//in the function after you use return no code is working
function items(x,y){
    i = x/y;
    return i;
}
let val = items(6,3);
console.log(val);


                        //Arrows Function is a Part of Modern JS

const arrowmul = (a,b) => { //we can call it has Function Variables also
    console.log(a*b);
}

arrowmul(2,2); //we can do for other mathematic operation also











































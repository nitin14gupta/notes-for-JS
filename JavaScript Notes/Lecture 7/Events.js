//Events in JAVASCRIPT

//Event: An event is a trigger for some action to occur.

//let btn1 = document.querySelector('#btn1')
// if we are handling event in both js and html
//js will be getting the preference the most
// btn1.onclick = (even) => {
// console.log(even);
// console.log(even.type);
// console.log(even.target);
// }



//Event Listeners

// btn1.addEventListener("click", () =>{
//     console.log('Button Clicked 1');
// })

// btn1.addEventListener("click", () =>{
//     console.log('Button Clicked 2');
// })

// let handler = () => {
//     console.log("Button was 324");
// }

// btn1.addEventListener("click", handler)
// btn1.addEventListener("click", () =>{
//     console.log('Button Clicked 3');
// })

// btn1.addEventListener("click", () =>{
//     console.log('Button Clicked 4');
// })

// btn1.removeEventListener("click", handler)







// Question No.
//make a toggle button which give dark and light when switch


let mode = document.querySelector("#btn1");
let currMode = "Light";

mode.addEventListener("dblclick", () => {
    if (currMode == "Light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black"

    }else{
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "#fff"

    }
    console.log(currMode);
})








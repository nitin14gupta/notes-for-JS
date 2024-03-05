//The three Musketeers of Web Dev. is 
//HTML CSS JS

//window Object
// The window object represents an open window in a browser.
//It is browser’s object (not JavaScript’s)& is automatically
//created by browser.The window object represents an open window in a browser. 
//It is browser’s object (not JavaScript’s)& is automatically created by browser.
//console.log('hello');
//window.console.log('hello2'); //both are equal
//we do not write window because javascript already knows window
//and it will be use if we write only "console.log"











// Document Object Model (DOM): html ko JS mein access karne ki madat karta hai DOM
// window is the parent of the doucument, document is the parent of of html
//html is the parent of head and body
//head and body are siblings with each other
//head is the parent of meta, title and link and all that are siblings with each other
//body is the parent of div and script, and they are siblings of each other
// div is the parent of img,h1 and other basic tag, and siblings of eac other




// Note : Html tags are converted into object in JS as name "Document"

//console.log() => it prints the object
//console.dir() => it print the document properties,method, "OBJECT"

// let h2 = document.querySelector('h2');
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from Apna College Students"



// DOM Manipulation

// 1. Selecting with ID
//let p1 = document.getElementById("para1");

// 2. Selecting by Class
//let p2 = document.getElementsByClassName("para2"); // returns a collection of elements

// 3. Selecting by TagName
//let divs = document.getElementsByTagName("div"); //returns a collection of elements

// Query Selector
// It's like CSS selector but instead of using class or id we use elementname directly

// let firstDiv = document.querySelector("div"); (it will print the first div of the document)





// let allDiv = document.querySelectorAll("div"); (it will make all div output on the console)
// returns a node list
// can pass anything "class, id, tagname"


// let div = document.querySelectorAll('.box');
// div[0].innerText = "new 0"
// div[1].innerText = "new 1"
// div[2].innerText = "new 2"

// let div = document.querySelector('p')
// console.dir(div);




//Properties in DOM MAnipulation
// 1. tagName = returns tag for element nodes
// 2. innerText = return the text content of the element and all its children
// 3. innerHTML =  returns the plain text or HTML contents in the elements (including tags)
// 4. textContent = returns textual content even for hidden elements
//  we can change the html tags using the above properties dynamically very easily
// div.textContent = 'Hello World';




//  question no.2



// let heading = document.querySelector("H2");
// console.dir(heading);
// heading.innerText = heading.innerText + `  from Nitin Gupta`

// let box = document.querySelectorAll("div")
// let index = 1;
// for (const boxs of box) {
//     boxs.innerText = `this is DIV no ${index}`
//     index++;
// }
// console.dir(box)




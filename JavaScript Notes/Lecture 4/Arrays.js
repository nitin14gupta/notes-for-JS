let hereos = ['Hanuman','Ram', 'Mahadev']
console.log(hereos)
console.log(hereos.length)
console.log(typeof hereos); //arrays is a object itself
console.log(hereos[2]);//2 is Hanuman
let marks = [99,95,90,85,80]
console.log(marks); //arrays is mutable


let grades = [99,95,90,85,80]
// for (let index = 0; index < grades.length; index++) {
//     console.log(grades[index]);
    
// }

for (let grade of grades) {
    console.log(grade);
}





let makeup = ['foundation', 'suncream', 'SPF3', 'Moisturizer' ]
console.log(makeup); 
// using a variable will be great
// but i have not used variable
makeup.push('Rosemary Oil');  //add to end
console.log(makeup);

makeup.pop();  // delete from end & return
console.log(makeup);  

makeup.toString()   //Convert arrays to String
console.log(makeup);
console.log(makeup.join());   // join all elements with no space in between

makeup.unshift('Hair Spray');   //add at start and return
console.log(makeup);

makeup.shift();   //Delete from start and Return
console.log(makeup);
console.log(makeup.slice(1)); // return a peice of array, does not change Original Array

let concatcheck = makeup.concat(grades); //add multiple Arrays
console.log(concatcheck);
console.log(concatcheck.splice(2,2,'gel', 'setwet'));



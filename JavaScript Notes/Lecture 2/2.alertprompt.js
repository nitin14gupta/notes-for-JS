 let num = prompt('Write a Number');
 
 if (num%3 ===0) {
    console.log(num, "is a multiple of 3");
 } else {
    console.log(num, "is  not a multiple of 3");
 }


 let marks = prompt('Write your Marks');
 if (marks>=90 && marks<=100) {
   console.log('Grade A with', marks, 'marks');
 } else  if(marks>=70 && marks<=89){
   console.log('Grade B with', marks, 'marks');
 } else  if(marks>=60 && marks<=69){
   console.log('Grade C with', marks, 'marks');
 } else  if(marks>=50 && marks<=59){
   console.log('Grade D with', marks, 'marks');
 } else{
   console.log('Grade F with', marks, 'marks, You are Fail')
 }
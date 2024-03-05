//if we want to print full Name 10 times we have to 
//console log it 10 times

//so to avoid it use use loops which can do same
//thing in come lines of codes

    
               //Loops in Js
               //Loops are used to execute a piece of code again and again

            //for loop
            
            for(let a = 1; a<1000; a++){
                console.log("Hello World"); //executed 4 times
            }

            let sum = 0;
            for (let i=1; i<=400; i++){
                sum = sum + i;  //0+1=1+2=3+3=6+4=10+5=15 .......
                console.log(`i =  ${i}`);
            }
            console.log(`the sum is ${sum}`); //infinite loop toh hamne dekh hii liya

             
             //While Loops
             //here we have to initialize before while loop is started
             let b = 1;
             while (b<=20) {
                console.log("Hello");
                b++; //b++ at the last
             }




            //  Do while Loops
            // same as while loop, initialize first
            let c = 20;
            do {
                console.log("Nitin Gupta")
                c++;
            } while (c<=10); //it will run for at least one time
            //while loop will not print even one time if the condition is not true or bear





            //for-of loop
            let str = "Nitin Gupta"
            let size = 0;
            for (const val of str) {
                console.log("val = ", val);
                size++; //the no of alphabet used it will count that
            }

            console.log("string Size = ", size);


            //for-in loop

            let student ={
                name : "Nitin Gupta",
                age: 17,
                CGPA: 8.3,
                Ispass: true,
            }
            for (const key in student) {
                console.log(`${key} = ${student[key]}`);
            }  //used for key value pair










            // Print all even no. from 0 to 100.
            
            for (let m=0; m<=100; m++){
            if(m % 2 === 0){
                console.log(m, " is a even Number" )
            }
            };


            //Create a game where you start with a random game 
            //no, Ask the user to keep guessing the no. until
            //the user enters correct value.

            let gamenum = 18;
            let usernum = prompt("Guess the Game Number : ");
            console.log(usernum);
            while (usernum != gamenum) {
                usernum = prompt("You entered the wrong no. try Again")
            }
            console.log("Congratulation you entered the Correct No");
        
                
      
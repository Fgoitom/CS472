/**
 * app.js
 * @author Feven Kiflai
 * @since 2022-6-01
 */
"Use Strict";

//console.log('Hellow Homework5');
//Q1 Define a function max() that takes two numbers as arguments and returns the largest of them. 
//Use the if-then-else construct available in Javascript.

function max (num1, num2){
    let max;
    if (num1 > num2){
        max= num1;
     } else {
            max= num2;
        }
       return max;
    }
    const num1 =10;
    const num2 =20;
    const maxNum = max(num1,num2)
    console.log(" The max of " + num1 + " , " + num2 + " is " + maxNum );
    //console.log ('The Max of ${num1}, $(num2) is $(maxNum)') ;

    // Q2	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

    function maxOfThree (numb1, numb2, numb3) {
    let max;
    if (numb1 > numb2 && numb1 > numb3){
        return max = numb1;
    } else if (numb2 > numb1 && numb2 > numb3){
       return  max = numb2;
    } else {
        return max = numb3;
    }
  
    }
    const numb1 =13
    const numb2 = 12
    const numb3 =14
    const maxNumb = maxOfThree(numb1,numb2,numb3)
   console.log(" The max of Three " + numb1 + " , " + numb2 + " , " + numb3 + " is " + maxNumb );
    
   
    // Q3	Write a function isVowel() that takes a character (i.e. a string of length 1) 
    //and returns true if it is a vowel, false otherwise.

    function isVowel(f) {
       
        if (f== 'a' || f== 'e' || f== 'o' || f== 'i' || f=='u' )
            return true;
         else 
            return false;
    }
       const v= 'a'
       const findVowel = isVowel(v);
       console.log ("Is Vowel"  + ", " + findVowel)

       //Q4 Define a function sum() and a function multiply() that sums and multiplies 
       //(respectively) all the numbers in an input array of numbers. For example, sum([1,2,3,4]) 
       //should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: 
       //Do these using Imperative programming approach (i.e. for…loop or while…loop)

       function sum(numbers){
      sum = 0;

      for (let i = 0; i< numbers.length; i++) {
          sum+= numbers[i];  
      }
       return sum;
       }
       function multiply(numbers ){
           multiply = 1;
           for (let i = 0; i< numbers.length ; i++){
           multiply *= numbers[i];
           }
           return multiply;
       }
       const  arr = [1,2,3,4];
       const fsum = sum( arr);
       const fmult = multiply(arr);
       console.log ("The functional sum = " + fsum + " and the functional multiply = " + fmult);

       // Q5 Define a function reverse() that computes the reversal of a string. For example, 
       //reverse("jag testar") should return the string "ratset gaj".

       function reverse(a){
        finalRevrs = "";
        for (let i = a.length-1; i >=0; i--){
            finalRevrs += a.charAt(i);
        }
        return finalRevrs;
       }

       const word = "jag testar";
       const revword = reverse(word);
       console.log ("The reverse word of jag testar is ;" + revword);

       //Q6 Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
       function findLongestWord(word){
           maxWord = '';
           for (let i= 0; i < word.length; i++){
            if (word[i].length > maxWord)
                maxWord = word[i].length;
           }
           return maxWord;
       }
       const  arry = ["Fev", "Heaven", "Terry"];
           const longword = findLongestWord( arry);
           console.log ("The longest word is " + longword );

           //Q7	Write a function filterLongWords() that takes an array of words and an integer i 
          // and returns a new array containing only those words that were longer than i characters.

         function filterLongWords(arr,num){
            let filter=[]
            for (let i = 0; i <arr.length; i++) {
            if(arr[i].length>num)
            filter.push(arr[i]);
            }
            return filter;
            }
            console.log(filterLongWords(["milkaaa","Heaven","Salem"],6)); 

            //Q8 Write a function named, computeSumOfSquares, that takes as input, an array 
            //of numbers and calculates and returns the sum of the squares of each number in the input array. 
            //E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. Note: Write your 
            //Javascript code without using Imperative programming. i.e. 
            //Do NOT use any explicit looping construct; instead use functional programming style/approach.

            function computeSumOfSquares(x) {
                return x.reduce((a,b)=>a+b*b,0);
                }
                console.log(computeSumOfSquares( [1,2,3]));

                //Q9 Write a function named, printOddNumbersOnly, that takes as input, 
                //an array of integral numbers and it finds and prints only the numbers which are odd.

                function printOddNumbersOnly(x) {
                    for (let index = 0; index < x.length; index++) {
                    if(x[index]%2!=0)
                    console.log((x[index]));
                    }
                    }
                    console.log(printOddNumbersOnly([1,2,3,4,5]));

                //Q10 Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, 
                //an array of integral numbers and calculates and returns the sum of the squares of only the even 
                //numbers in the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.

               function computeSumOfEvenSquares(x) {
               return x.filter(a=>a%2==0).map(a=>a*a).reduce((a,b)=>a+b,0);
               }
               console.log(computeSumOfEvenSquares([1,2,3,4]));

               //Q11 Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) 
               //(defined in Problem 4 above) without using Imperative programming. i.e. 
               //Do NOT use any explicit looping construct; instead use functional programming style/approach. 
               function sum2(x) {
                return x.reduce((x,y)=>x+y,0);
                }
                console.log(sum2([1,2,3,4]));
                // multiply
                function mulitiply2(x) {
                return x.reduce((x,y)=>x*y,1);
                }
                console.log(mulitiply2([1,2,3,4]));
                
                // Q12 Implement Javascript code for a function named, findSecondBiggest, which takes as input, 
                //an array of numbers and finds and returns the second biggest of the numbers. For example, 
                //findSecondBiggest([1,2,3,4,5]) should return 4. 
                //And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)

                function findSecondBiggest(a){
                    let maxindex=0;
                    let max=0;
                    for(let i=0; i<a.length;i++){
                    if(a[i]>max){
                    max=a[i];
                    maxindex=i;
                    }
                    }
                    let secmax=0;
                    for(let j=0;j<a.length;j++){
                    if(a[j]>secmax && j!=maxindex)
                    secmax=a[j];
                   }
                    return secmax;
                   }
                   console.log(findSecondBiggest([1,2,3,4]));

              // Q13  Write a function named printFibo, that takes as input, a given length, n, 
               //and any two starting numbers a and b, and it prints-out the Fibonacci sequence, e.g.
                //(0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. 
               // (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), 
              //  prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
               // printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", 
             // as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

             function printfibo(x,y,z){
                for(let i =1;i<=x;i++){
                console.log(y + " ");
                let sumOfPrevTwo = y+ z;
                y= z;
                z = sumOfPrevTwo;
                }
                }
                console.log(printfibo(1,2,3,4));
        


     
    
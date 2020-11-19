

// write a function that takes the input string and reverses it




const strReverse ='reverseThisString';
function reverseThisString(string){

const newString = strReverse.split('');

console.log(newString.reverse().join(''));

}
reverseThisString();




//write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase

const str1 = 'hello, world!';
function swapCase1(string) {

  console.log(str1.toUpperCase());
  }
  swapCase1();

//=============================================


const str2 = 'HELLO, WORLD!';
function swapCase2(string) {

  console.log(str2.toLowerCase());
  }
  swapCase2();



//convert array of numbers from farenheit to celcius


const fahrenheit = [95, 68, 32, 68];

function toCelsius(array){

	
	const toCelsius = fahrenheit.map(celsius =>(celsius - 32)*5/9);
  console.log(toCelsius);
}
toCelsius();




//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)


const arr = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
  
  function passOrFail(array) {
  
  for (i = 0; i < arr.length; i++) {
  
  if (arr[i] >= 75){
  arr[i] = true;
  }
  else { 
  arr[i] = false;
  }
  }
  console.log(arr)
  }
   passOrFail();


//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']



function germanNumbers(){

const cardinalNumbers =[2,3,4,5,6];
 const germanNumbers =['zwei', 'drei', 'vier', 'f=C3=BCnf', 'sechs'];
let combo = [];
 
for(let i = 0; i < cardinalNumbers.length; i++) {
 
combo.push(`${cardinalNumbers[i]} is ${germanNumbers[i]}`);
 
 };

console.log(combo)

}
germanNumbers();



// write code that returns an array of ONLY prime numbers that are in the array numbers


const prime = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function returnPrimeNumbers(){

const isPrime = (num) => {
  if (num <= 1) {
      return false;
  } else if (num === 2) {
      return true;
  } else {
      for (let i = 2; i < num; i++)
          if (num % i === 0)
              return false;
      return true;
     }
   }
   console.log(prime.filter(isPrime));
}
returnPrimeNumbers();




// Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" 


function csc225Rules(){ 
for ( let i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log('CSC225 RULES I LOVE JAVASCRIPT');
  }
  else if (  i%5 === 0 ) 
  {
    console.log('I LOVE JAVASCRIPT');
  }
  else if ( i%3 === 0 ) 
  {
    console.log('CSC225 RULES'  )
  }
  else{
    console.log(i);
  }
}

}
csc225Rules();



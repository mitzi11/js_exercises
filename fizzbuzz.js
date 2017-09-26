// print the numbers from 1 to 100

function fizzBuzz(){
  for(i=1; i<=100; i++){
    if(i%3==0){console.log("Fizz " +i)}
    else if(i%5==0 && !i%3==0){console.log("Buzz " +i)}
    else if(i%5==0 && i%3==0){console.log("FizzBuzz " +i)}
    else console.log(i)
    }
    i++;
}

fizzBuzz();

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let guessNumber;

rl.question('Please guess number: ', (guessNumber)=> {
    if (guessNumber<10){
        console.log("Congrats!!!")
    }
    else{
        console.log("Try again!")
    }
    rl.close();
});

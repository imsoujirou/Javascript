//Array Name is numbers and add all values and display it via console.log
let numbers = [100,200,300,400,500]
let total = numbers.reduce( function (total, grades){
    return total + grades
}, 0);
console.log(total)

//Another way to code this

let numbers1 = [100,200,300,400,500]
let total1 =numbers1.reduce((total1, grades1)=>total1+grades1,0)
console.log(total1)
//The task is to create new array with even numbers of score 
var scores = [12,13,14,16]
var evenNumbers = []
for(let i=0;i<scores.length;i++){
    if(scores[i]%2 == 0){
        evenNumbers.push(scores[i])
    }
}
console.log(evenNumbers)
console.log(scores)

var marks = [1,2,3,4,5,6]

//For this one,  when you put [2] on the array, it will count as 0,1,2
//The output will be 3
console.log(marks[2])

console.log("*********************")

//For the arrays, index starts with 0 and the size of an array or length starts with 1
var marks = [20,40,35,12,37,100]
console.log(marks[2]) //This output will be 35
console.log("*********************")

marks[3] = 14 //This syntax is like assigning an array into array of 3 (4th element) [20,40,35,14,37,100]
console.log(marks[3]) //Output will be 14 instead of 12

console.log(marks.length + " is the length of an array") //It will display the length on an array which is 6 it starts with 1,2,3,4,5,6
console.log("*********************")

marks.push(65) //Push will insert a new array into the last part [20,40,35,14,37,100,65]
console.log(marks, marks.length + " is the length of an array")
console.log("*********************")
marks.pop() //Pop will remove the last array so if the last array is 65 it will become like this [20,40,35,14,37,100]
console.log(marks)

console.log("*********************")
marks.unshift(12) //This will insert the array value into the first element [12,20,40,35,14,37,100]
console.log(marks)

console.log("*********************") // [12,20,40,35,14,37,100]
console.log(marks.indexOf(14)) //indexof will search the array value and display the index of it if you try to index the array of 14, it will display the 4 because it is 0,1,2,3,4
//if indexof an array value is non-existing it will throw -1


console.log("*********************") // [12,20,40,35,14,37,100]
console.log(marks.includes(120)) //If searching of an array is non-existing, it will return false otherwise true
console.log(marks.includes(100))

console.log("*********************") // [12,20,40,35,14,37,100]
for(let i=0;i<marks.length;i++){
    console.log(marks[i]) //for this one, you will display all the array based on the length of an array.
}

console.log("*********************") // [12,20,40,35,14,37,100]
let sum = 0;
for(let i=0;i<marks.length;i++){
    sum = sum + marks[i]
}
console.log(sum) //This is to display all the added value on arrays



console.log("******")
const numbers = [1,2,3,4]
const sum1 = numbers.reduce(function (result, item){
    return result + item;
}, 0);
console.log(sum1)


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

//The task is to create a new array with odd numbers of score
let scores1 = [12,13,14,15,16]
var oddNumbers = []
// for(let i=0;i<scores1.length;i++){
//     if(scores1[i]%2 == 1){
//         oddNumbers.push(scores1[i])
//     }
// }
// console.log(oddNumbers)


scores1.filter(score=>score%2==1)
console.log(scores1)

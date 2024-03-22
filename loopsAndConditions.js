const flag = true

//For this if NOT flag, this will be convert into false because it is NOT true (False) and that else statement will become true 
if(!flag){
    console.log("Condition satisfied")
}
else{
    console.log(flag)
    console.log("Condition not satisfied")

}


//While lets you execute the code while the statement is true otherwise stops
let i = 0;
while(i>10){
    i++
    console.log(i)
}


//Do while lets you execute the code first before the condition
do{
    i++
}while(i>10)
    console.log(i);

//For lets you execute how many times based on the condition you give on the middle part.
//You can use modulo (%) for division and (&&) for AND condition, (||) is for OR condition
for(let k=0;k<=10;k++){

    if(k%2 == 0 && k%5 == 0){
        console.log(k)
    }
}

for(let k=0;k<=10;k++){

    if(k%2 == 0 || k%5 == 0){
        console.log(k)
    }
}
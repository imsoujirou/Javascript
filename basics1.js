console.log('test');

//To display the type of variable a which is a NUMBER
let a=1
console.log(typeof(a))

//To display the type of variable b which stills a NUMBER even if the value is float/double
let b=3.45
console.log(typeof(b))

//To display the type of variable c which are string
let c="Dingdong Pogi"
console.log(typeof(c))

//To display  the type of variable required which are boolean
let required=true
console.log(typeof(required))


// Reusing variable is not allowed
// let d=a+b
// console.log(d)


//This scenario can be used in re-assigning but if you use let, there will be an error on the terminal
//Sample issue error: SyntaxError: Identifier 'c' has already been declared
c=a+b
console.log(c)

//boolean symbol for "!" is not
console.log(!required)
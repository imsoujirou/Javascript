var fruitCategory = [{fruitName: 'banana', isFruit: true},
{fruitName: 'apple', isFruit: true},
{fruitName: 'shoes', isFruit: false}
];
console.log(fruitCategory)

const isItFruit = fruitCategory.map(item => (isfruit=true));
console.log(isItFruit);


const notFruit = fruitCategory.map(item => (isfruit=false));
console.log(notFruit);

const notFruitDisplay = fruitCategory.map(item => item.fruitName);
console.log(notFruitDisplay)



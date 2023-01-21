let myFunction = (name, ...args) => {   // ...agrs is rest operator
    let sum = 0;
    for(let i in args) {
        sum += args[i];
    }
    console.log(`Your name is: ${name} and marks is: ${sum}`);
}
let marks = [10, 20, 30, 20, 05]
myFunction('Hadi', ...marks);  // ...marks is spread operator~
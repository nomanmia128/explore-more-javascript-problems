function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add(12, 45);
// const result = add(true, 45);
// const result = add(12, '23');
// console.log(result);

function multiply(num1, num2){
    console.log(num1, num2);
    return num1 * num2;
}

const output = multiply(12, 45);
console.log('multiply output', output);
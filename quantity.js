const shoppingCart = [
    {name: 'shop', price: 1200, quantity: 3},
    {name: 'shirt', price: 2200, quantity: 5},
    {name: 'pant', price: 2300, quantity: 4},
    {name: 'balt', price: 600, quantity: 6},
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense);
const phones = [
    {name: 'vivo', camera: 10, Storage: '32gb', price: 43000, color: 'blue' },
    {name: 'vivo', camera: 10, Storage: '32gb', price: 22000, color: 'blue' },
    {name: 'vivo', camera: 10, Storage: '32gb', price: 26000, color: 'blue' },
    {name: 'vivo', camera: 10, Storage: '32gb', price: 20000, color: 'blue' },
    {name: 'vivo', camera: 10, Storage: '32gb', price: 52000, color: 'blue' },
    {name: 'vivo', camera: 10, Storage: '32gb', price: 62000, color: 'blue' },
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // if(phone.price < cheapest.price){
            if(phone.price > cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
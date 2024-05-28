/*
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but than 200, First 100 tickets will be 100/ticket
rest ticket will be 90 taka per price
   first 100 -----> 100tk
   rest ---- 90tk
3. if you purchase more than per 200 tickets
   first 100 ---> 100tk
   101-200 ---> 90tk
   200+ ---> 70tk
*/
function ticketPrice(ticketQuantity){
    const first100Raet = 100;
    const second100Rate =  90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Raet;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100price = 100 * first100Raet;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketprice = restTicketQuantity * second100Rate;
        const totalPrice = first100price + restTicketprice;
        return totalPrice;
    }
    else{
        const first100price = 100 * first100Raet;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketprice = restTicketQuantity * restTicketRate;
        const totalCost = first100price + second100Price + restTicketprice;
        return totalCost;
    }
}

const price = ticketPrice(120);
console.log('price:', price);
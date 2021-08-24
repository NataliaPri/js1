const stocks = [
    { name: "milk", price: 120, amount: 10 },
    { name: "bread", price: 50, amount: 15 },
    { name: "cheese", price: 100, amount: 5 }
];

console.log(stocks[0].name, (": price:"), stocks[0].price, ("amount:"), stocks[0].amount);
console.log(stocks[1].name, (": price:"), stocks[1].price, ("amount:"), stocks[1].amount);
console.log(stocks[2].name, (": price:"), stocks[2].price, ("amount:"), stocks[2].amount);



function countBasketPrice(stocks) {
    var price = 0;
    for (var i = 0; i < stocks.length; i++) {
        price += (stocks[i].price * stocks[i].amount)
    }
    return price
};

console.log("Price: ", countBasketPrice(stocks));

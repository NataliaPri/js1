function countBasketPrice(stocks) {
    var price = 0;
    for (var i = 0; i < stocks.length; i++) {
        price += (stocks[i].price * stocks[i].amount)
    }
    return price
};

console.log("Price: ", countBasketPrice(stocks));

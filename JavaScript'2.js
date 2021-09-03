// задание 2: Доработка корзины

const stocks = [
    { name: "milk", price: 120, amount: 10 },
    { name: "bread", price: 50, amount: 15 },
    { name: "cheese", price: 100, amount: 5 }
];

console.log(stocks[0].name, (": price:"), stocks[0].price, ("amount:"), stocks[0].amount);
console.log(stocks[1].name, (": price:"), stocks[1].price, ("amount:"), stocks[1].amount);
console.log(stocks[2].name, (": price:"), stocks[2].price, ("amount:"), stocks[2].amount);



function countBasketPrice(stocks) {
    let price = 0;
    for (var i = 0; i < stocks.length; i++) {
        price += (stocks[i].price * stocks[i].amount)
    }
    return price
};

// создаем отображение корзины
function drowTotal(stocks) {
    const $basket = document.querySelector('basket');
    $basket.textContent = " ";

    if (stocks == 0) {
        $basket.insertAdjacentHTML('beforeend', `<div class="total">${emptyBasket}</div>`);
    } else {
        $basket.insertAdjacentHTML('beforeend',
            `<div class="total">
            <p>В корзине: ${shoppingCart.length} 
            товар${correctEnding()} на сумму ${totalSumm(shoppingCart)} рублей.</p>
            <a class="buy" href="#">Купить</a>
        </div>`);
    }
}
drowTotal(stocks);

// событие - добавление объекта в корзину
$catalog.addEventListener('click', function (e) {
    if (e.target.className === 'button') {
        const id = Number(e.target.getAttribute('data-id'));
        const choice = catalodList[id];
        shoppingCart.push(new basketItem(choice.product, choice.price, choice.discount));

        drowTotal(shoppingCart);
    }
});

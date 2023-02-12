
console.log("Have a lovely day")

const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const resultElement = document.querySelector(".js-result");
const currencyRateElement = document.querySelector(".js-currency");


const currencyEUR = 0.2123;
const currencyUSD = 0.2290;
const currencyGBP = 0.1886;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyRateElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = amount * currencyEUR;
            break;
        case "USD":
            result = amount * currencyUSD;
            break;
        case "GBP":
            result = amount * currencyGBP;
            break;
    }

    resultElement.value = result.toFixed(2);

});
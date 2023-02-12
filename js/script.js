{
    const calculateResult = (amount, currency) => {
        const currencyEUR = 0.2123;
        const currencyUSD = 0.2290;
        const currencyGBP = 0.1886;

        switch (currency) {
            case "EUR":
                return amount * currencyEUR;

            case "USD":
                return amount * currencyUSD;

            case "GBP":
                return amount * currencyGBP;

        }
    };

    const updateResultText = (amound, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.value = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyRateElement = document.querySelector(".js-currency");

        const amount = amountElement.value;
        const currency = currencyRateElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
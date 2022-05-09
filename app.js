const form = document.getElementById("formCrypto");

const selectCurrency = document.querySelector("#crypto");
const cryptoCurrencies = selectCurrency.childNodes;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let crypto = e.target.crypto.value;
  let currency = e.target.currency.value;
  let numberInput = e.target.cryptoNum.value;
  let resultInput = document.getElementById("currency-num");
  fetch(
    `https://api.coinconvert.net/convert/${crypto}/${currency}?amount=${numberInput}`
  )
    .then((resource) => resource.json())
    .then((data) => {
      resultInput.value = data[currency.toUpperCase()];
    })

    .catch((error) => console.log(error));
});

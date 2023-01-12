import React, {useState, useEffect} from "react";
import getExchangeRates from "../api/getExchangeRates";
import { toHundredths } from "../utils/moneyFormatter";
import "./ExchangeContainer.css"
import CurrencyInput from "../components/currencyInput/CurrencyInput";

function ExchangeContainer() {

  const [money1, setMoney1] = useState(1);
  const [money2, setMoney2] = useState(1);
  const [currency1, setCurrency1] = useState('UAH');
  const [currency2, setCurrency2] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    async function fetchData () {
      const rates = await getExchangeRates();
      setExchangeRates(rates);
    }
    fetchData();
}, [])

  useEffect(() => {
    if (!!exchangeRates) {
      function noExchangeRates() {
        changeFirstValue(1);
      }
      noExchangeRates();
    }
  }, [exchangeRates]);

  function changeFirstValue(money1) {
    setMoney2(toHundredths(money1 * exchangeRates[currency2] / exchangeRates[currency1]));
    setMoney1(money1);
  }

  function changeFirstCurrency(currency1) {
    setMoney2(toHundredths(money1 * exchangeRates[currency2] / exchangeRates[currency1]));
    setCurrency1(currency1);
  }

  function changeSecondValue(money2) {
    setMoney1(toHundredths(money2 * exchangeRates[currency1] / exchangeRates[currency2]));
    setMoney2(money2);
  }

  function changeSecondCurrency(currency2) {
    setMoney1(toHundredths(money2 * exchangeRates[currency1] / exchangeRates[currency2]));
    setCurrency2(currency2);
  }


  return (
    <div>
      <h1 className="title">Currency Converter</h1>
      <CurrencyInput
        onMoneyChange={changeFirstValue}
        onCurrencyChange={changeFirstCurrency}
        exchangeRates={Object.keys(exchangeRates)}
        money={money1}
        currency={currency1} />
      <CurrencyInput
        onMoneyChange={changeSecondValue}
        onCurrencyChange={changeSecondCurrency}
        exchangeRates={Object.keys(exchangeRates)}
        money={money2}
        currency={currency2} />
    </div>
  );
}

export default ExchangeContainer;

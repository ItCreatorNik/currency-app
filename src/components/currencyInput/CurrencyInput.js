import "./CurrencyInput.css"
import React from "react"

function CurrencyInput({onMoneyChange, onCurrencyChange, exchangeRates, money, currency}) {

    const handleMoneyChange = event => {
        onMoneyChange(event.target.value)
    }

    const handleCurrencyChange = event => {
        onCurrencyChange(event.target.value)
    }

    const exchangeComponents = exchangeRates.map((currency, index) =>
        <option value={currency} key={index}>{currency}</option>
        )

    return (
        <div className="CurrencyInput">
            <input className="input" type="text" value={money} onChange={handleMoneyChange} />
            <select className="select" value={currency} onChange={handleCurrencyChange}>
                {exchangeComponents}
            </select>
        </div>
    );
}


export default CurrencyInput;

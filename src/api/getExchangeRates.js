export default async function getExchangeRates() {
    const url = 'https://open.er-api.com/v6/latest/uah';
    const response = await fetch(url);
    const data = await response.json();
    return data.rates;
}

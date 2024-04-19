import { CurrencyValue } from '../types';

const rates: Record<CurrencyValue, number> = {
    usd: 0.0106,
    eur: 0.0099,
    rub: 1,
};

const symbols = ['$', '€', '₽'];

const currencyConverter = {
    availableCurrencies: Object.keys(rates).map((label, i) => ({
        label,
        symbol: symbols[i],
    })),

    getCurrencySymbol(targetCurrency: CurrencyValue) {
        return symbols[this.availableCurrencies.findIndex((currency) => currency.label === targetCurrency)];
    },

    convertFromRUB(amount: number, targetCurrency: CurrencyValue) {
        return (rates[targetCurrency] * amount).toFixed(2);
    },
};

export default currencyConverter;

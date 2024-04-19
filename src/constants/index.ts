import { Currency, Transfer } from '../types';

export const currencies: Currency[] = [
    {
        name: 'rub',
        label: 'RUB',
    },
    {
        name: 'usd',
        label: 'USD',
    },
    {
        name: 'eur',
        label: 'EUR',
    },
];

export const transfers: Transfer[] = [
    {
        count: -1,
        label: 'Все',
    },
    {
        count: 0,
        label: 'Без пересадок',
    },
    {
        count: 1,
        label: '1 пересадка',
    },
    {
        count: 2,
        label: '2 пересадка',
    },
    {
        count: 3,
        label: '3 пересадка',
    },
];

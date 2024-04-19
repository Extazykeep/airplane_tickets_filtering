import { CurrencyValue } from '../types';
import React, { createContext, useContext, useState } from 'react';

type Filters = {
    selectedCurrency: CurrencyValue;
    selectedTransfers: number[];
};

interface FiltersContext {
    filters: Filters;
    updateCurrency: (selectedCurrency: CurrencyValue) => void;
    updateTransfers: (selectedTransfer: number) => void;
    updateSinlgeTransfer: (selectedTransfer: number) => void;
}

const FiltersActionContext = createContext<FiltersContext | null>(null);

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
    const [filters, setState] = useState<Filters>({ selectedCurrency: 'rub', selectedTransfers: [-1] });

    const updateCurrency = (selectedCurrency: CurrencyValue) => {
        setState({ ...filters, selectedCurrency });
    };

    const updateTransfers = (selectedTransfer: number) => {
        let newTransfers = [...filters.selectedTransfers];
        const prevTransfers = filters.selectedTransfers;

        if (prevTransfers.includes(selectedTransfer)) {
            newTransfers = prevTransfers.filter((transfer) => transfer !== selectedTransfer);
        } else {
            newTransfers.push(selectedTransfer);
        }

        setState({ ...filters, selectedTransfers: newTransfers });
    };

    const updateSinlgeTransfer = (selectedTransfer: number) => {
        setState({ ...filters, selectedTransfers: [selectedTransfer] });
    };

    return (
        <FiltersActionContext.Provider
            value={{
                filters,
                updateCurrency,
                updateTransfers,
                updateSinlgeTransfer,
            }}
        >
            {children}
        </FiltersActionContext.Provider>
    );
};

export const useFiltersActions = () => {
    const context = useContext(FiltersActionContext);
    if (context === null) {
        throw new Error('useFiltersActionContext must be used within a FiltersActionProvider');
    }
    return context;
};

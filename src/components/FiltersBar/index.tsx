import { currencies, transfers } from '../../constants';
import { useFiltersActions } from '../../contexts/filterContext';
import CurrencyFilter from './CurrencyFilter';
import TransfersFilter from './TransfersFilter';

const FiltersBar = () => {
    const { filters, updateCurrency, updateTransfers, updateSinlgeTransfer } = useFiltersActions();
    return (
        <div className="bg-white rounded-md shadow-md">
            <CurrencyFilter
                currencies={currencies}
                selectedCurrency={filters.selectedCurrency}
                onCurrencyChange={updateCurrency}
            />
            <TransfersFilter
                transfers={transfers}
                selectedTransfers={filters.selectedTransfers}
                onTransferChange={updateTransfers}
                updateSinlgeTransfer={updateSinlgeTransfer}
            />
        </div>
    );
};
export default FiltersBar;

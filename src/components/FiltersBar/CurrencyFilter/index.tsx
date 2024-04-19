import FilterLayout from '../../FilterLayout';
import { CurrencyValue } from '../../../types';

type CurrencyFilterProps = {
    selectedCurrency: string;
    currencies: { label: string; name: CurrencyValue }[];
    onCurrencyChange: (currency: CurrencyValue) => void;
};

const CurrencyFilter = ({ currencies, selectedCurrency = 'rub', onCurrencyChange = () => {} }: CurrencyFilterProps) => {
    return (
        <FilterLayout title="Валюта" classes="p-4 max-w-[450px]">
            <div className="border rounded-md flex flex-row overflow-hidden">
                {currencies.map(({ name, label }) => (
                    <label
                        key={name}
                        className={`cursor-pointer text-center border-solid border-r border-grey-400 last:border-r-0 basis-1/3`}
                    >
                        <input
                            hidden
                            type="radio"
                            name="currency"
                            value={name}
                            className="peer"
                            onChange={(e) => {
                                onCurrencyChange(e.target.value as CurrencyValue);
                            }}
                            checked={selectedCurrency === name}
                        />
                        <span className="py-2 block text-blue-500 peer-checked:bg-blue-500 peer-checked:text-white hover:bg-sky-100">
                            {label}
                        </span>
                    </label>
                ))}
            </div>
        </FilterLayout>
    );
};

export default CurrencyFilter;

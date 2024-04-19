import './transfersfilter.css';
import FilterLayout from '../../FilterLayout';
import { Transfer } from '../../../types';
import TransferCheckbox from './TransferCheckbox';

type TransfersFilterProps = {
    transfers: Transfer[];
    selectedTransfers: number[];
    onTransferChange: (count: number) => void;
    updateSinlgeTransfer: (count: number) => void;
};

const TransfersFilter = ({
    transfers,
    selectedTransfers,
    onTransferChange,
    updateSinlgeTransfer,
}: TransfersFilterProps) => {
    return (
        <FilterLayout title="Количество пересадок" classes="lg:mt-10 p-4">
            {transfers.map(({ count, label }) => (
                <TransferCheckbox
                    key={label}
                    count={count}
                    label={label}
                    onTransferChange={onTransferChange}
                    selectedTransfers={selectedTransfers}
                    updateSinlgeTransfer={updateSinlgeTransfer}
                />
            ))}
        </FilterLayout>
    );
};

export default TransfersFilter;

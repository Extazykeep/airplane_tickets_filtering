type TransferCheckboxProps = {
    count: number;
    label: string;
    selectedTransfers: number[];
    onTransferChange: (count: number) => void;
    updateSinlgeTransfer: (count: number) => void;
};

const TransferCheckbox = ({
    count,
    label,
    selectedTransfers,
    onTransferChange,
    updateSinlgeTransfer,
}: TransferCheckboxProps) => {
    return (
        <div
            className="flex justify-between item-custom-width px-4 hover:bg-sky-100 cursor-pointer group"
            key={count + label}
        >
            <label className="flex items-center me-4 cursor-pointer">
                <input
                    type="checkbox"
                    name="transfer"
                    value={count}
                    onChange={(e) => {
                        onTransferChange(Number(e.target.value));
                    }}
                    className="w-4 h-4 "
                    checked={selectedTransfers?.includes(count)}
                />
                <span className="px-3 py-2 text-sm font-medium text-gray-500">{label}</span>
            </label>
            <button
                onClick={() => updateSinlgeTransfer(count)}
                type="button"
                className="text-blue-500 hidden ml-auto uppercase text-sm font-medium group-hover:block"
            >
                Только
            </button>
        </div>
    );
};

export default TransferCheckbox;

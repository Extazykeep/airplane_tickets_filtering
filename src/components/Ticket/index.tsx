import airlanesicon from '/turkish-airlines-logo.png';
import airplaneicon from '/airplane-icon.png';
import currencyConverter from '../../utils/currencyConverter';
import TicketTime from './TicketTime';
import { CurrencyValue, Ticket } from '../../types';

type TicketProps = {
    ticket: Ticket;
    selectedCurrency: CurrencyValue;
};

const TicketCard = ({ selectedCurrency, ticket }: TicketProps) => {
    const {
        price,
        stops,
        departure_time,
        departure_date,
        origin,
        origin_name,
        arrival_time,
        arrival_date,
        destination,
        destination_name,
    } = ticket;
    const format = currencyConverter.convertFromRUB;
    const symbol = currencyConverter.getCurrencySymbol(selectedCurrency);
    const formatedPrice = `${format(price, selectedCurrency)} ${symbol}`;

    return (
        <div className="border rounded-md bg-white shadow-sm mb-4 flex flex-row space-x-4 border-gray-200">
            <div className="basis-1/4 border-r-2 border-gray-200 p-2 md:p-6">
                <img src={airlanesicon} className="w-full h-auto" alt="" />
                <div className="text-center mt-3">
                    <button
                        type="button"
                        className="bg-orange-500 p-4 text-white rounded-md border-b-2 border-orange-700"
                    >
                        Купить за {formatedPrice}
                    </button>
                </div>
            </div>
            <div className="basis-3/4 p-2 md:p-6 md:flex space-x-4">
                <TicketTime time={departure_time} date={departure_date} destination={`${origin}, ${origin_name}`} />
                <div className="p-2 md:p-4 grow text-center">
                    <span className="pb-3 text-gray-300 text-xl uppercase">
                        {stops} пересадк{stops > 1 ? 'и' : 'а'}{' '}
                    </span>
                    <div className="flex items-center">
                        <hr className="grow border-2" />
                        <img width="50" src={airplaneicon} className="h-auto opacity-50" alt="" />
                    </div>
                </div>
                <TicketTime
                    time={arrival_time}
                    date={arrival_date}
                    destination={`${destination}, ${destination_name}`}
                />
            </div>
        </div>
    );
};

export default TicketCard;

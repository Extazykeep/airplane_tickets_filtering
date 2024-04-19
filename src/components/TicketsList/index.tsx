import { useFiltersActions } from '../../contexts/filterContext';
import { tickets } from '../../data/tickets.json';

import Ticket from '../Ticket';

tickets.sort((a, b) => a.price - b.price);

const TicketsList = () => {
    const { filters } = useFiltersActions();
    const transfers = filters.selectedTransfers;

    const filteredTickets = tickets.filter((ticket) => {
        if (transfers.includes(-1)) {
            return [...tickets];
        }
        return transfers.includes(ticket.stops);
    });

    if (!filteredTickets.length) {
        return <div className="p-4 text-2xl text-center">No tickets found</div>;
    }

    return (
        <div>
            {filteredTickets.map((ticket) => (
                <Ticket
                    ticket={ticket}
                    selectedCurrency={filters.selectedCurrency}
                    key={new Date().getTime.toString() + ticket.arrival_time}
                />
            ))}
        </div>
    );
};
export default TicketsList;

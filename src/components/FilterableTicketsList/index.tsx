import FiltersBar from '../FiltersBar';
import TicketsList from '../TicketsList';

const FilterableTicketsList = () => {
    return (
        <div className="container mx-auto pt-10">
            <div className="grid-container grid grid-cols-4 gap-4 ">
                <div className="col-span-4 lg:col-span-1">
                    <FiltersBar />
                </div>
                <div className="col-span-4 lg:col-span-3  rounded-md">
                    <TicketsList />
                </div>
            </div>
        </div>
    );
};
export default FilterableTicketsList;

type TicketTimeProps = {
    time: string;
    date: string;
    destination: string;
};

const TicketTime = ({ time = '', date = '', destination = '' }: TicketTimeProps) => {
    const formatedDate = new Date(date).toLocaleString('ru-EU', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
    return (
        <div>
            <div className="text-5xl mb-2 text-gray-500">{time}</div>
            <div className="font-medium text-gray-600">{destination}</div>
            <span className="text-gray-400">{formatedDate}</span>
        </div>
    );
};

export default TicketTime;

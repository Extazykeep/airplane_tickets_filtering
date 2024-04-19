import Logo from './components/Logo';
import airplaneicon from '/airplane-icon.webp';
import FilterableTicketsList from './components/FilterableTicketsList';
import { FiltersProvider } from './contexts/filterContext';

function App() {
    return (
        <main className="bg-slate-200 py-10 min-h-screen">
            <Logo source={airplaneicon} classes="drop-shadow-lg" />
            <FiltersProvider>
                <FilterableTicketsList />
            </FiltersProvider>
        </main>
    );
}

export default App;

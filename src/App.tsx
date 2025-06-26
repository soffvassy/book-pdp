import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import PDP from './components/PDP';
import useBookData from './hooks/useBookData';

function App() {
    const {
        book,
        loading,
        error,
        selectedCurrency,
        setSelectedCurrency,
        getCurrentPrice,
        getAvailableCurrencies
    } = useBookData();

    return (
        <>
            <Header
                book={book}
                loading={loading}
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
                currentPrice={getCurrentPrice()}
                availableCurrencies={getAvailableCurrencies()}
            />
            <PDP
                book={book}
                loading={loading}
                error={error}
                currentPrice={getCurrentPrice()}
            />
            <Footer />
        </>
    );
}

export default App;
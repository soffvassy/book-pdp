import { useEffect} from "react";

interface HeaderProps {
    book: any;
    loading: boolean;
    selectedCurrency: string;
    setSelectedCurrency: (value: string) => void;
    currentPrice: string | null;
    availableCurrencies: string[];
}

const Header = ({
                    book,
                    loading,
                    selectedCurrency,
                    setSelectedCurrency,
                    availableCurrencies
                }: HeaderProps) => {
    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
    };

    useEffect(() => {
        const header = document.querySelector('.header') as HTMLElement | null;
        const footer = document.querySelector('.footer') as HTMLElement | null;

        if (header && book?.image) {
            header.style.backgroundImage = `url(${book.image})`;
            if (footer) footer.style.backgroundImage = `url(${book.image})`;
        }

        return () => {
            if (header) {
                header.style.backgroundImage = '';
            }
        };
    }, [book?.image]);

    return (
        <header className="header" role="banner">
            <div className="overlay" aria-hidden="true"></div>
            <div className="header-content">
                <h1>Book Store</h1>

                {book && !loading && (
                    <div className="book-header-info">
                        <div className="price-currency-container">
                            <label htmlFor="currency-select" className="sr-only">Select currency</label>
                            <span className="current-price">Currency:</span>
                            <select
                                id="currency-select"
                                value={selectedCurrency}
                                onChange={handleCurrencyChange}
                                className="currency-dropdown"
                            >
                                {availableCurrencies.map(currency => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
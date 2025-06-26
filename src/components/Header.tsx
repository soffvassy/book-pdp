import { useEffect } from "react";
import type { HeaderProps } from "../types";

const Header: React.FC<HeaderProps> = ({
                                           book,
                                           loading,
                                           selectedCurrency,
                                           setSelectedCurrency,
                                           availableCurrencies,
                                       }) => {
    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCurrency(e.target.value);
    };
    {/*some extra design background addition to header and footer*/}
    useEffect(() => {
        const header = document.querySelector('.header') as HTMLElement;
        const footer = document.querySelector('.footer') as HTMLElement;

        if (header && book?.image) {
            header.style.backgroundImage = `url(${book.image})`;
            if (footer) footer.style.backgroundImage = `url(${book.image})`;
        }

        return () => {
            if (header) header.style.backgroundImage = '';
            if (footer) footer.style.backgroundImage = '';
        };
    }, [book?.image]);

    return (
        <header className="header" role="banner">
            <div className="overlay" aria-hidden="true" />
            <div className="header-content">
                <h1>Book Store</h1>

                {book && !loading && (
                    <div className="book-header-info">
                        <div className="price-currency-container">
                            {/*accessibility feature*/}
                            <label htmlFor="currency-select" className="sr-only">Select currency</label>
                            <span className="current-price">Currency:</span>

                            {/*currency select*/}
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
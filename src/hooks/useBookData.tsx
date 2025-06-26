import { useState, useEffect } from 'react';

type Price = {
    locale: string;
    amount: number;
};

type Book = {
    prices?: Price[];
    [key: string]: any; // for other unknown properties (or define them explicitly if desired)
};
const useBookData = () => {
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedCurrency, setSelectedCurrency] = useState<string>('GBP');

    useEffect(() => {
        fetch('https://v3-static.supadu.io/radley-books-us/products/9732397900366.json')
            .then(response => response.json())
            .then(data => {
                setBook(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
                console.error('Error fetching book data:', error);
            });
    }, []);

    const getCurrentPrice = (): string | null => {
        if (!book?.prices) return null;
        const priceObj = book.prices.find((price) => price.locale === selectedCurrency);
        return priceObj ? `${getCurrencySymbol(selectedCurrency)}${priceObj.amount}` : null;
    };

    const getCurrencySymbol = (currency:string) => {
        const symbols: Record<string, string> = {
            USD: '$',
            GBP: '£',
            AUD: 'A$'
        };
        return symbols[currency] || currency;
    };

    const getAvailableCurrencies = (): string[] => {
        if (!book?.prices) return [];
        return book.prices.map((price) => price.locale);
    };

    return {
        book,
        loading,
        error,
        selectedCurrency,
        setSelectedCurrency,
        getCurrentPrice,
        getAvailableCurrencies
    };
};

export default useBookData;
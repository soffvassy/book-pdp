import { useState, useEffect } from 'react';
import type { Book, UseBookDataReturn } from '../types';

//custom hook to do some data fetching and processing
const useBookData = (): UseBookDataReturn => {
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedCurrency, setSelectedCurrency] = useState<string>('GBP'); //initial price in gbp

    //fetching the book data
    useEffect(() => {
        fetch('https://v3-static.supadu.io/radley-books-us/products/9732397900366.json')
            .then(response => response.json())
            .then((data: Book) => {
                setBook(data);
                setLoading(false);
            })
            .catch((error: Error) => {
                setError(error);
                setLoading(false);
                console.error('Error fetching book data:', error);
            });
    }, []);

    //current price get
    const getCurrentPrice = (): string | null => {
        if (!book?.prices) return null;
        const priceObj = book.prices.find((price) => price.locale === selectedCurrency);
        return priceObj ? `${getCurrencySymbol(selectedCurrency)}${priceObj.amount}` : null;
    };

    //adding the symbols of currencies
    const getCurrencySymbol = (currency: string): string => {
        const symbols: { [key: string]: string } = {
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

    //return data
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
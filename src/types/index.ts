export interface Price {
    locale: string;
    amount: string;
}

export interface Contributor {
    contributor: {
        name: string;
        bio?: string | null;
    };
}

export interface Publisher {
    name: string;
}

export interface Format {
    format: {
        name: string;
    };
}

export interface Retailer {
    label: string;
    seo: string;
    path: string;
}

export interface SaleDate {
    date: string;
}

export interface Book {
    title: string;
    image: string;
    description: string;
    pages: number;
    isbn13: string;
    prices: Price[];
    contributors: Contributor[];
    publisher: Publisher;
    formats: Format[];
    retailers: Retailer[];
    sale_date?: SaleDate;
    reviews?: any;
}

export interface Review {
    text: string;
    rating: number;
}

export interface HeaderProps {
    book: Book | null;
    loading: boolean;
    selectedCurrency: string;
    setSelectedCurrency: (currency: string) => void;
    availableCurrencies: string[];
}

export interface PDPProps {
    book: Book | null;
    loading: boolean;
    error: Error | null;
    currentPrice: string | null;
}

export interface ReviewProps {
    reviews: Review[];
    onAddReview: (review: Review) => void;
}

export interface UseBookDataReturn {
    book: Book | null;
    loading: boolean;
    error: Error | null;
    selectedCurrency: string;
    setSelectedCurrency: (currency: string) => void;
    getCurrentPrice: () => string | null;
    getAvailableCurrencies: () => string[];
}
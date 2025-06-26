export interface Price {
    locale: string;
    amount: string;
    discount: null | string;
    promo_start: null | string;
    promo_stop: null | string;
    saving: null | string;
}

export interface Contributor {
    order: number;
    note: string;
    contributor_id: number;
    role_id: string;
    contributor: {
        contributor_id: string;
        name: string;
        first: string;
        last: string;
        seo: string;
        role: string;
        hide: boolean;
        reference_id: null | string;
        bio: null | string;
        bio_short: null | string;
        image: null | string;
        on_tour: string;
        featured: string;
        deceased: string;
        sensitivity: string;
        locale: string;
        custom: string;
    };
    role: {
        code: string;
        name: string;
    };
}

export interface Publisher {
    name: string;
    seo_name: string;
}

export interface Format {
    id: string;
    format_id: string;
    seo_link: string;
    detail: string;
    title_id: string;
    isbn: string;
    edition: string;
    product_id: string;
    primary_format: boolean;
    date: string;
    format: {
        code: string;
        name: string;
    };
    prices: Price[];
}

export interface Retailer {
    label: string;
    seo: string;
    format: string;
    path: string;
}

export interface SaleDate {
    __className: string;
    date: string;
    timezone_type: number;
    timezone: string;
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
    sale_date: SaleDate;
    reviews: null | any;
}

export interface Review {
    text: string;
    rating: number;
}

// Props interfaces
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
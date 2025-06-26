import { useState} from "react";
import Review from "./Review";


interface Retailer {
    path: string;
    seo: string;
}

interface Contributor {
    contributor: {
        name: string;
        bio?: string;
    };
}

interface Format {
    format: {
        name: string;
    };
}

interface Publisher {
    name: string;
}

interface Book {
    title: string;
    image: string;
    contributors: Contributor[];
    description: string;
    pages: number;
    publisher: Publisher;
    isbn13: string;
    formats: Format[];
    sale_date?: {
        date: string;
        timezone: string;
        timezone_type: number;
    };
    retailers: Retailer[];
    reviews?: unknown; // placeholder if needed
}

interface PDPProps {
    book: Book | null;
    loading: boolean;
    error: boolean;
    currentPrice: string | null;
}

interface ReviewItem {
    text: string;
    rating: number;
}

const PDP: React.FC<PDPProps> = ({ book, loading, error, currentPrice }) => {
    const [reviews, setReviews] = useState<ReviewItem[]>([]);

    if (loading) return <div>Loading book details...</div>;
    if (error) return <div>Error loading book</div>;
    if (!book) return <div>No book data available</div>;

    const saleDateString = book.sale_date?.date;

    const formattedSaleDate = saleDateString
        ? new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'America/New_York',
        }).format(new Date(saleDateString.replace(' ', 'T')))
        : null;

    return (
        <div className='pdp-wrapper'>
            <div className='book-wrapper'>
                <div className='cover-container'>
                    <div className='cover'>
                        <img
                            alt={book.title}
                            src={book.image}
                        />
                    </div>
                </div>
                <div className='info-container'>
                    <h1>{book.title}</h1>
                    <h2>by {book.contributors[0]?.contributor.name}</h2>
                    {book.contributors[0]?.contributor.bio ? (
                        <p>{book.contributors[0].contributor.bio}</p>
                    ) : ''}
                    <p>{book.description}</p>
                    <p><strong>Price:</strong> {currentPrice}</p>

                    <div className='book-details'>
                        <p><strong>Pages:</strong> {book.pages}</p>
                        <p><strong>Publisher:</strong> {book.publisher.name}</p>
                        <p><strong>ISBN:</strong> {book.isbn13}</p>
                        <p><strong>Format:</strong> {book.formats[0]?.format.name}</p>
                        {formattedSaleDate &&
                        <p><strong>Sale date:</strong> {formattedSaleDate}</p>}
                    </div>

                    <div className='retailers'>
                        <p>Buy on:</p>
                        {book.retailers.map(retailer=> (
                            <a href={retailer.path}
                               target='_blank'
                               className={`icon ${retailer.seo}`}
                               rel="noopener noreferrer"></a>
                        ))}
                    </div>
                </div>
            </div>
            {!book.reviews && <Review reviews={reviews} onAddReview={(reviewText) => setReviews((prev) => [...prev, reviewText])} />}
        </div>
    );
};

export default PDP;
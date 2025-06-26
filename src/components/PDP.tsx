import { useState } from "react";
import type { PDPProps, Review as ReviewType } from "../types";
import Review from "./Review";

const PDP: React.FC<PDPProps> = ({ book, loading, error, currentPrice }) => {
    const [reviews, setReviews] = useState<ReviewType[]>([]);

    if (loading) return <div>Loading book details...</div>;
    if (error) return <div>Error loading book</div>;
    if (!book) return <div>No book data available</div>;

    const saleDateString = book.sale_date?.date;
    {/*date formatting*/}
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
                    {/*check for contributor*/}
                    <h2>by {book.contributors[0]?.contributor.name}</h2>
                    {book.contributors[0]?.contributor.bio && (
                        <p>{book.contributors[0].contributor.bio}</p>
                    )}
                    <p>{book.description}</p>
                    <p><strong>Price:</strong> {currentPrice}</p>
                    {/*some additional info*/}
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
                        {/*retailers with some logos and links to the respective paths*/}
                        {book.retailers.map(retailer => (
                            <a href={retailer.path}
                               key={retailer.path}
                               target='_blank'
                               className={`icon ${retailer.seo}`}
                               rel="noopener noreferrer"></a>
                        ))}
                    </div>
                </div>
            </div>

            {/*adding the review section*/}
            {!book.reviews && <Review
                reviews={reviews}
                onAddReview={(review: ReviewType) => setReviews((prev) => [...prev, review])}
            />}
        </div>
    );
};

export default PDP;
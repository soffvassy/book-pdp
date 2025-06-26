import { useState } from 'react';
import type { ReviewProps } from '../types';

const Review: React.FC<ReviewProps> = ({ reviews, onAddReview }) => {
    const [input, setInput] = useState<string>('');

    const handleSubmit = () => {
        if (input.trim()) {
            //generate random stars with emoji
            const randomRating = Math.floor(Math.random() * 5) + 1;
            //adding the random stars to the text as an obj
            onAddReview({ text: input.trim(), rating: randomRating });
            setInput('');
        }
    };

    //when input has changed
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div className="review-section">
            <h3>Reviews</h3>

            //if there are no reviews - show message
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                <ul>
                    {reviews.map((review, i) => (
                        <li key={i}>
                            <span className="emoji-stars">{'⭐'.repeat(review.rating)}</span>
                            <span>{review.text}</span>
                        </li>
                    ))}
                </ul>
            )}

            //input for reviews
            <div className="review-form">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Write a review..."
                />
                <button onClick={handleSubmit}>Add Review</button>
            </div>
        </div>
    );
};

export default Review;
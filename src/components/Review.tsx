// src/components/Review.tsx
import { useState } from 'react';

interface ReviewItem {
    text: string;
    rating: number;
}

interface ReviewProps {
    reviews: ReviewItem[];
    onAddReview: (review: ReviewItem) => void;
}

const Review = ({ reviews, onAddReview }: ReviewProps) => {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        if (input.trim()) {
            const randomRating = Math.floor(Math.random() * 5) + 1;
            onAddReview({ text: input.trim(), rating: randomRating });
            setInput('');
        }
    };

    return (
        <div className="review-section">
            <h3>Reviews</h3>

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

            <div className="review-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Write a review..."
                />
                <button onClick={handleSubmit}>Add Review</button>
            </div>
        </div>
    );
};

export default Review;

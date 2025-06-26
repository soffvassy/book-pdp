import { useState, useEffect } from 'react';

const PDP = () => {
    const [book, setBook] = useState<any>(null);

    useEffect(() => {
        fetch('https://v3-static.supadu.io/radley-books-us/products/9732397900366.json')
            .then(response => response.json())
            .then(data => setBook(data))
            .catch(error => console.error('Error fetching book data:', error));
    }, []);

    if (!book) return <div>Loading book details...</div>;

    return (
        <div className='pdp-wrapper'>
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
                <p>{book.description}</p>
                <p><strong>Price:</strong> {book.price}</p>
            </div>
        </div>
    );
};


export default PDP;
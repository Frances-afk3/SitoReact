import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrendingCards = () => {
  const [cards, setCards] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Directly set the cards (no delay)
  useEffect(() => {
    const fetchedCards = [
      { id: 1, title: 'Card 1', imageUrl: 'https://m.media-amazon.com/images/I/81vE6rdfNEL._AC_SL1500_.jpg' },
      { id: 2, title: 'Card 2', imageUrl: 'https://m.media-amazon.com/images/I/81vE6rdfNEL._AC_SL1500_.jpg' },
      { id: 3, title: 'Card 3', imageUrl: 'https://m.media-amazon.com/images/I/81vE6rdfNEL._AC_SL1500_.jpg' },
      { id: 4, title: 'Card 4', imageUrl: 'https://m.media-amazon.com/images/I/81vE6rdfNEL._AC_SL1500_.jpg' },
      { id: 5, title: 'Card 5', imageUrl: 'https://m.media-amazon.com/images/I/81vE6rdfNEL._AC_SL1500_.jpg' },
      { id: 6, title: 'Card 6', imageUrl: 'https://m.media-amazon.com/images/I/81vE6rdfNEL._AC_SL1500_.jpg' },
      { id: 7, title: 'Card 7', imageUrl: 'https://m.media-amazon.com/images/I/81vE6rdfNEL._AC_SL1500_.jpg' },
      { id: 8, title: 'Card 8', imageUrl: 'https://m.media-amazon.com/images/I/81vE6rdfNEL._AC_SL1500_.jpg' },
      { id: 9, title: 'Card 9', imageUrl: 'https://m.media-amazon.com/images/I/81vE6rdfNEL._AC_SL1500_.jpg' },
      { id: 10, title: 'Card 10', imageUrl: 'https://m.media-amazon.com/images/I/81vE6rdfNEL._AC_SL1500_.jpg' },
    ];
    setCards(fetchedCards);
  }, []); // Runs once when the component mounts

  // Function to scroll the container left or right with circular navigation
  const handleScroll = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex === 0 ? cards.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === cards.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Trending Cards</h2>

      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-outline-primary mx-2"
          onClick={() => handleScroll('left')}
        >
          &#9664;
        </button>

        <div className="d-flex overflow-hidden" style={{ width: '750px' }}>
          <div
            className="d-flex"
            style={{
              transform: `translateX(-${activeIndex * 255}px)`, // Move the card container
              transition: 'transform 0.3s ease',
            }}
          >
            {cards.map((card, index) => {
              const isBefore = index === (activeIndex - 1 + cards.length) % cards.length;
              const isActive = index === activeIndex;
              const isAfter = index === (activeIndex + 1) % cards.length;

              const scale = isActive ? 1 : 0.7; // Center card is normal size, others are smaller
              const opacity = isActive ? 1 : 0.5; // Center card is fully visible, others are faded

              // Only render the current, previous, and next card
              if (!isBefore && !isActive && !isAfter) return null;

              return (
                <div
                  key={card.id}
                  className="card mx-2"
                  style={{
                    minWidth: '240px',
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    transition: 'transform 0.3s ease',
                    zIndex: isActive ? 1 : 0, // Make sure active card stays on top
                  }}
                >
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          className="btn btn-outline-primary mx-2"
          onClick={() => handleScroll('right')}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default function Pacchetti() {
  return (
    <main className="container">
      <div className="bg-body-tertiary p-5 rounded">
        <h2 className="text-center">Benvenuto nella sezione Pacchetti</h2>
        <TrendingCards />
      </div>
    </main>
  );
}

import React from 'react';
import  '../ComponentsCss/start.css';
const StarRating = ({ rating }) => {
  const maxStars = 5;
  const roundedRating = Math.round(rating * 2) / 2; // Round to the nearest half-star

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      if (i < roundedRating) {
        stars.push(<span key={i} className="star filled">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>);
      }
    }
    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars()}
      <span className="rating">{roundedRating}</span>
    </div>
  );
};

export default StarRating;

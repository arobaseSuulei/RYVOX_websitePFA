import React from 'react';

function ReviewList({ reviews }) {
  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <p>{review}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;

import React from 'react';
import FeedbackElement from './FeedbackElement';

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map((element) => (
        <FeedbackElement key={element.id} element={element} />
      ))}
    </div>
  );
}

export default FeedbackList;

import React from 'react';
import { useContext } from 'react';

import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((total, num) => {
      return total + num.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1);

  return (
    <div className='feedback-stats'>
      <h3>{feedback.length} Reviews </h3>
      <h3>Average Rating: {isNaN(average) ? 0 : average}</h3>
    </div>
  );
}

export default FeedbackStats;

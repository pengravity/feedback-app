import React from 'react';

import FeedbackElement from './FeedbackElement';
import PropTypes from 'prop-types';

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map((element) => (
        <FeedbackElement
          key={element.id}
          element={element}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;

import Card from './shared/Card';
import { useContext } from 'react';

import FeedbackContext from '../context/FeedbackContext';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';

function FeedbackElement({ element }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className='num-display'>{element.rating}</div>
      <button onClick={() => editFeedback(element)} className='edit'>
        <FaEdit color='white' />
      </button>
      <button onClick={() => deleteFeedback(element.id)} className='close'>
        <FaTimes color='white' />
      </button>
      <div className='text-display'>{element.text}</div>
    </Card>
  );
}

FeedbackElement.propTypes = {
  element: PropTypes.object.isRequired,
};

export default FeedbackElement;

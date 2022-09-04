import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

function FeedbackElement({ element, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className='num-display'>{element.rating}</div>
      <button onClick={() => handleDelete(element.id)} className='close'>
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

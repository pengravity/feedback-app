import React from 'react';
import Card from './shared/Card';

import { useState } from 'react';

function FeedbackForm() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Card>
      <form>
        <h2>Please rate your service with us</h2>
        {/*@todo - rating seelect component */}
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='write a review'
            value={text}
          />
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;

import React from 'react';
import { useState } from 'react';

function FeedbackElement({ element }) {
  return (
    <div className='card'>
      <div className='num-display'>{element.rating}</div>
      <div className='text-display'>{element.text}</div>
    </div>
  );
}

export default FeedbackElement;

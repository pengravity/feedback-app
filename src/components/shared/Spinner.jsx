import React from 'react';
import spinner from '../files/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '120px', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;

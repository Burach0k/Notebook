import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const Mark = ({ text }) => (
  <>
    <h5 className='point-name'>Point {text}</h5>
    <FontAwesomeIcon className='mark' icon='map-marker-alt' />
  </>
);

export default Mark;

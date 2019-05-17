import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { showPoint, hidePoint, deletePoint, showConfirmation } from '../../../store/action';
import './index.scss';

const Point = ({ index, point, showPoint, hidePoint, showConfirmation }) => {
  let del = false;
  const [show, useShow] = useState(false);
  const [status, useStatus] = useState('off');
  const showOnMap = () => {
    useShow(!show);
    if (!show && !del) {
      useStatus('on');
      showPoint({ ...point, index });
    } else {
      useStatus('off');
      hidePoint(point.id);
    }
  };
  const deleteCard = () => {
    del = true;
    showConfirmation({ confirmation: true, id: point.id });
  };

  return (
    <Card className={'card ' + status} onClick={(e) => showOnMap(e)}>
      <Card.Header>
        <h2>Point-{index}</h2>
        <div className='del-card' onClick={() => deleteCard()}>
          <FontAwesomeIcon icon='minus-circle' />
        </div>
      </Card.Header>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p className='coordinate'>Lat: {point.lat}</p>
          <p className='coordinate'>Lng: {point.lng}</p>
          <footer className='card-footer'>
            <nobr>{point.comment}</nobr>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators({ showPoint, hidePoint, deletePoint, showConfirmation }, dispatch);

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Point);

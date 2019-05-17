import React, { useState, useEffect } from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addPoint, changeModal, changeVisible } from '../../../store/action';
import firebase from '../../../dataBase/index';
import './index.scss';

const ModalWindow = ({ addPoint, show, changeModal, selectedPoint, changeVisible }) => {
  const [lat, useLat] = useState(selectedPoint.lat);
  const [lng, useLng] = useState(selectedPoint.lng);
  const [latBorder, useLatBorder] = useState('lat-success');
  const [lngBorder, useLngBorder] = useState('lng-success');
  const [comment, useComment] = useState('');

  const handleClose = () => changeModal(false);

  useEffect(() => {
    if (!show) {
      useLat(selectedPoint.lat);
      useLng(selectedPoint.lng);
      useComment('');
    }
  });

  const save = () => {
    if (+lat > 85 || +lat < -85) {
      useLatBorder('lat-error');
      return;
    } else useLngBorder('lat-success');

    if (+lng > 180 || +lng < -180) {
      useLngBorder('lng-error');
      return;
    } else useLngBorder('lng-success');

    const data = { lat: +lat, lng: +lng, comment, id: uuid() };
    addPoint(data);
    firebase.add(data);
    changeModal(false);
    changeVisible('add-button-hidden');
  };

  const add = () => {
    useLat('');
    useLng('');
    useComment('');
    changeModal(true);
  };

  return (
    <>
      <Button id='button-add' variant='primary' onClick={() => add()}>
        Add Point
      </Button>

      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Add Point</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>
                <FontAwesomeIcon icon='map-marked-alt' />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id={latBorder}
              onChange={(e) => useLat(e.target.value)}
              defaultValue={lat}
              placeholder='Lat...'
              aria-label=''
              aria-describedby='basic-addon1'
            />
            <FormControl
              id={lngBorder}
              onChange={(e) => useLng(e.target.value)}
              defaultValue={lng}
              placeholder='Lng...'
              aria-label=''
              aria-describedby='basic-addon1'
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FontAwesomeIcon icon='comment-alt' />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              defaultValue={comment}
              onChange={(e) => useComment(e.target.value)}
              placeholder='Comment...'
              as='textarea'
              maxLength = '1024'
              aria-label='With textarea'
            />
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant='primary' onClick={() => save()}>
            Save Point
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const matchDispatchToProps = (dispatch) => bindActionCreators({ addPoint, changeModal, changeVisible }, dispatch);

const mapStateToProps = ({ show, selectedPoint }) => ({ show, selectedPoint });

export default connect( mapStateToProps, matchDispatchToProps )(ModalWindow);

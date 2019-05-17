import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from '../../../dataBase';
import { showConfirmation, deletePoint } from '../../../store/action';

const Confirmation = ({ confirmation, showConfirmation, deletePoint, deleteId }) => {
  const handleClose = () => showConfirmation(false);
  const deleteCard = () => {
    deletePoint(deleteId);
    firebase.delete(deleteId);
    showConfirmation(false);
  };
  return (
    <>
      <Modal show={confirmation} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Modal.Title>Are you sure you want to delete this entry?</Modal.Title>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={() => handleClose()}>
            No
          </Button>
          <Button variant='primary' onClick={() => deleteCard()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const matchDispatchToProps = (dispatch) => bindActionCreators({ showConfirmation, deletePoint }, dispatch);

const mapStateToProps = ({ confirmation, deleteId }) => ({ confirmation, deleteId });

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Confirmation);

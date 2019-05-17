import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Point from '../Card';
import { addPoint } from '../../../store/action';
import firebase from '../../../dataBase';
import './index.scss';

let flag = true;

const CardsList = ({ points, addPoint }) => {
  if (flag) {
    flag = false;
    firebase.getPoints().then((querySnapshot) => {
      [...querySnapshot.docs].map((val) => addPoint(val.data()));
    });
  }
  return (
    <div id='points-list'>
      {points.map((point, index) => (
        <Point key={point.id} index={index} point={point} />
      ))}
    </div>
  );
};

const matchDispatchToProps = (dispatch) => bindActionCreators({ addPoint }, dispatch);

const mapStateToProps = (store) => ({ points: store.points });

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CardsList);

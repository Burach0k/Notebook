import React, { useState } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { bindActionCreators } from 'redux';
import { savePoint, changeModal, changeVisible } from '../../../store/action';
import Mark from '../../views/Mark';
import './index.scss';

const key = 'AIzaSyBR9DgFoLlmJ2i9mJIoo-4dkP14HUC9UZQ';
const zoom = 11;

const GoogleMap = ({ savePoint, selectedPoint, changeModal, marks, buttonVisible, changeVisible, lastTouch }) => {
  const onMapClick = ({ lat, lng }) => {
    changeVisible('add-button-visible');
    savePoint({ lat, lng });
  };

  const add = () => (changeModal(true));

  return (
    <div id='google-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center = {lastTouch}
        defaultZoom={zoom}
        onClick={(e) => onMapClick(e)}>

        <Mark key='42' lat={selectedPoint.lat} lng={selectedPoint.lng} text='' />

        {marks.map(({id,lat,lng,index}) => (<Mark key={id} lat={lat} lng={lng} text={index} />))}
      </GoogleMapReact>

      <button id='add-button-map' className={buttonVisible} onClick={() => add()}>
        Add Point
      </button>
    </div>
  );
};

const matchDispatchToProps = (dispatch) => bindActionCreators({ savePoint, changeModal, changeVisible }, dispatch);

const mapStateToProps = ({ selectedPoint, marks, buttonVisible, lastTouch }) => ({ selectedPoint, marks, buttonVisible, lastTouch });

export default connect( mapStateToProps, matchDispatchToProps)(GoogleMap);

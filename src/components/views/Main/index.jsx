import React from 'react';
import GoogleMap from '../../controls/Map';
import CardsList from '../../controls/CardsList';
import ModalWindow from '../../controls/Modal';
import Confirmation from '../../controls/Confirmation';
import './index.scss';

const Main = () => (
  <div id='main-page'>
    <GoogleMap />
    <CardsList />
    <ModalWindow />
    <Confirmation />
  </div>
);

export default Main;

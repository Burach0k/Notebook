import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faMapMarkedAlt,faMapMarkerAlt,faCommentAlt,faMinusCircle,} from '@fortawesome/free-solid-svg-icons';
import { store } from '../store';
import Main from './views/Main';

library.add(faMapMarkedAlt, faMapMarkerAlt, faCommentAlt, faMinusCircle);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;

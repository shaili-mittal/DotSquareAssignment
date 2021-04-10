import React from 'react';
import { Provider } from 'react-redux';
import Angle from './src/component/Angle';
import Test from './src/component/Test'

import store from './src/redux/store'
import Home from './src/screens/Home';

export default function App() {
  return (
    //Assignment 3
    <Provider store={store}>
      <Home />
    </Provider>
    // <Angle/> //Assignment 1
    // <Test /> //Assignment 2
  );
}


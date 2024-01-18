import React from 'react';
import {StatusBar} from 'react-native';
import MainContainer from './navigation/MainContainer';

const FilePicker = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <MainContainer />
    </>
  );
};

export default FilePicker;

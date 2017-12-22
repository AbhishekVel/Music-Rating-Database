import React from 'react';
// import { Text } from 'react-native';
import Header from './components/header';

export default class App extends React.Component {
  render() {
    return (
      <Header headerText={'MusiDB'} />
    );
  }
}

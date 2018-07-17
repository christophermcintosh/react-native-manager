import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDjPe4gAnjc7Ee-4tBJbKsANC1yhiWQR4c',
      authDomain: 'manager-be032.firebaseapp.com',
      databaseURL: 'https://manager-be032.firebaseio.com',
      projectId: 'manager-be032',
      storageBucket: '',
      messagingSenderId: '63601980787'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;

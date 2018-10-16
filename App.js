import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from '@firebase/app';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends Component{
  componentWillMount(){
    var config = {
      apiKey: 'AIzaSyCZcA_Pjipdb38D6GH_wIAw1aScLgxZKAA',
      authDomain: 'manager-97736.firebaseapp.com',
      databaseURL: 'https://manager-97736.firebaseio.com',
      projectId: 'manager-97736',
      storageBucket: 'manager-97736.appspot.com',
      messagingSenderId: '913045872826'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
    );
  }
}


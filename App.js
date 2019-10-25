import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCIf61fhy5Aw1h9nRbsK43V-i0i_iJxa_Q",
  authDomain: "socialapp-fbc17.firebaseapp.com",
  databaseURL: "https://socialapp-fbc17.firebaseio.com",
  projectId: "socialapp-fbc17",
  storageBucket: "socialapp-fbc17.appspot.com",
  messagingSenderId: "801453227816",
  appId: "1:801453227816:web:60582878a9783154c19a1d"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)
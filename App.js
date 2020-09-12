import * as React from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookTransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
export default class App extends React.Component{
  render(){
    return(
     
        <AppContainer/>
   
    )
  }
}
const tabNavigator=createBottomTabNavigator({
  BookTransactionScreen:{screen:BookTransactionScreen},
  SearchScreen:{screen:SearchScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName;
      if(routeName==="BookTransactionScreen"){
        return(
          <Image source={require('./assets/book.png')} style={{width:40, height:40}} />
        )
      }
      else if(routeName==="SearchScreen"){
        return(
          <Image source= {require('./assets/searchingbook.png')} style={{width:40, height:40}}/>
        )
      }
    }
  })
});

const AppContainer= createAppContainer(tabNavigator);
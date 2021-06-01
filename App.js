import * as React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import ReadScreen from './screens/ReadStoryScreen';
import WriteScreen from './screens/WritingStoryScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import fairyStory from './Story/fairyStory';
import readfairyStory from './Story/readfairyStory';
import moralStory from './Story/readmoralStory';
import readmoralStory from './Story/moralStory';
export default class App extends React.Component{
 render()
 {
   return(
     
     <AppContainer/>
   
   )
 }
}



var TabNavigator = createBottomTabNavigator({
  WriteStory : {screen:WriteScreen},
  ReadStory : {screen:ReadScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routName = navigation.state.routeName
      if(routName==='WriteStory')
      {
        return(
          <Image style={{width:40 , height:40}} source={require('./assets/write.png')}></Image>
        )
      }
     else if(routName==='ReadStory')
      {
        return(
          <Image style={{width:40 , height:40}} source={require('./assets/read.png')}></Image>
        )
      }
    }
  })
})

const AppNavigator = createSwitchNavigator({
  readfairyStory:readfairyStory,
  TabNavigator: TabNavigator,
  fairyStory: fairyStory,
  moralStory : moralStory ,
  readmoralStory :  readmoralStory ,
  
  
});

const AppContainer = createAppContainer(AppNavigator)

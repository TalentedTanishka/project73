import * as React from 'react';
import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import firebase from 'firebase';
import db from '../config.js';
import { Header } from 'react-native-elements';
import Untitled from '../assets/story.png'

export default class WriteScreen  extends React.Component{
 /*
       <View>
       <Image style={{width:300,height:150,alignSelf:"center",marginTop:40}} source={require('../assets/story.png')}></Image>
       </View>
       */
       goToFairyStory = () => {
        this.props.navigation.navigate('fairyStory');
      };

      goToMoralStory = () => {
        this.props.navigation.navigate('fairyStory');
      };

 render()
 {
   return(
   
    <div style={{  backgroundImage:`url(${Untitled})`}}>
     <View>
      <Text style={{fontSize:30,marginTop:10,textAlign:"center",backgroundColor:"purple",color:"white",
 fontWeight:"bold",padding:20}}>
   STORY HUB - Write Stories
   </Text>
     
       <TouchableOpacity onPress={()=>{
          this.goToFairyStory()
        }}>
       <Image 
style = {{width:600 , height:300 , marginLeft : 20,marginTop : 20}}
source = {require('../assets/fatrytale-story-logo.jpg')}
/>
       </TouchableOpacity>

       
       <TouchableOpacity onPress={()=>{
          this.goToFairyStory()
        }}>
       <Image 
style = {{width:600 , height:300 , marginLeft : 20,marginTop : 20}}
source = {require('../assets/funny-story-logo.jpg')}
/>
       </TouchableOpacity>


       <TouchableOpacity onPress={()=>{
          this.goToMoralStory()
        }}>
       <Image 
style = {{width:600 , height:300 , marginLeft : 955,marginTop : -620}}
source = {require('../assets/moral-story-logo.jpg')}
/>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{
          this.goToFairyStory()
        }}>
       <Image 
style = {{width:600 , height:300 , marginLeft : 955,marginTop : -300}}
source = {require('../assets/animal-story-logo.jpg')}
/>
       </TouchableOpacity>
       </View>
       </div>
        
   )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center'
  },
  inputbox: {
    borderColor:"black",
    borderWidth:2,
    fontSize: 20,
    marginLeft:10,
   alignItems:"center",
    color:"black",
    marginTop:5,
    borderRadius:2,
    padding:10
  },
});
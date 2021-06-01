import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput  } from 'react-native';
import { SearchBar } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config.js';
import * as Speech from 'expo-speech';
export default class readmoralStory extends React.Component{

  constructor(props)
  {
    super(props)

    this.state={
      allStories:[],
      dataSource:null,
      search:''
    }
  }
  componentDidMount=async()=>{
    
    const ref = await db.collection("fairy-story").get();
    ref.docs.map(doc=>{
      this.setState({
        allStories:[...this.state.allStories,doc.data()]
      })
    })
  }

  SearchFilterFunction=async()=>{
   
      if(this.state. dataSource!==null)
      {
      const ref = await db.collection("fairy-story").startAfter(this.state. dataSource).limit(10).get()
    
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
        })
      })
    }
    
  }

  Search=async(text)=>{
    var EnteredText = text.split('')
    
    if(EnteredText[0].toUpperCase() === 'T' && this.state.dataSource !== null)
    {
      const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state.dataSource).limit(10).get()
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
         dataSource:doc
        })
      })
    }else if(EnteredText[0].toUpperCase()=== 'A' && this.state.dataSource !== null)
    {
      const ref = await db.collection("fairy-story").where('author','==',text).startAfter(this.state.dataSource).limit(10).get()
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
         dataSource:doc
        })
      })
    }else if(EnteredText[0].toUpperCase()=== 'S' && this.state.dataSource !== null)
    {
      const ref = await db.collection("fairy-story").where('story','==',text).startAfter(this.state.dataSource).limit(10).get()
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
         dataSource:doc
        })
      })
    }
    console.log(EnteredText)
  }
 
  render() {
    return (
      <ScrollView>
 <Text style={{fontSize:30,marginTop:10,textAlign:"center",backgroundColor:"purple",color:"white",
 fontWeight:"bold",padding:20}}>
   STORY HUB
   </Text>
   <View>
   <SearchBar
        placeholder="Search Here......"
        onChangeText={(text)=>{
          this.setState({
            search:text
          })
        }}
      />
      <TouchableOpacity style={styles.searchButton} onPress={()=>{
               this.Search(this.state.search)
             }}>
            <Text style={{fontSize:15,textAlign:"center",marginTop:10}}>
              Search
            </Text>
          </TouchableOpacity>
   </View>
   

   
      
      
        {this.state.allStories.map((iteam,index)=>{
          return(
               <View style={{borderBottomWidth:10,marginTop:10,borderColor:"purple"}} key={index}>
                
         
              <Text style={{fontSize : 50,fontWeight:"100",marginLeft:10}}>
                {"Title : " + iteam.title}
              </Text>
              <Text style={{fontSize : 30, textDecorationLine: 'underline',marginLeft:10}}>
                {"Author : " + iteam.author}
              </Text>
               
              
              <TouchableOpacity style={styles.speechbutton}onPress={()=>{
          var say = iteam.title;
          Speech.speak(say)
          console.log("hi");
        }}>
          <Text style={{fontSize : 35,fontWeight:"100",textAlign:"center"}}>
            Listen
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.readbutton}onPress={()=>{
         <Text style={{fontSize : 50,fontWeight:"350",marginTop:10,marginLeft:10}}>
         story
       </Text>
        }}>
          <Text style={{fontSize : 35,fontWeight:"100",textAlign:"center"}}>
            Read 
          </Text>
        </TouchableOpacity>
            </View>
           
          )
        }   
        )   
      }
      
            
      </ScrollView>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
    storybutton:
    {
      backgroundColor:"yellow",
      borderWidth: 2,
      alignSelf: 'center',
      borderRadius:10,
     
    },

    searchButton:{
      borderWidth:1,
      height:50,
      width:60,
      backgroundColor:'yellow',
      marginTop:-49,
      marginLeft:1000,
      borderRadius:10
    },
    speechbutton:
    {
      backgroundColor:"yellow",
      borderWidth: 2,
      borderRadius:10,
    width:200,
     
    },
   readbutton:
    {
      backgroundColor:"yellow",
      borderWidth: 2,
      borderRadius:10,
    
      width:200,
     

    }
});
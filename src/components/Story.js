import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window');
const Story = (props) => {
  return (
    <View style={styles.container}>
      
    
      <View >
    <View style={{flexDirection:'row'}}>
    {/* <AddStory/> */}
     <TouchableOpacity>
    <Image style={styles.card}
    source={props.url}
    />
     </TouchableOpacity>
    
     <Image style={styles.profile} 
    source={props.url1}
    />
  
    
    <Text style={styles.text}>
      {props.name}
    </Text>
  
    </View>
    
  

      {/* <StoryType name={props.name}  url={props.url} url1={props.url1}/>
      <StoryType name={props.name}  url={props.url} url1={props.url1}/>
      <StoryType name={props.name}  url={props.url} url1={props.url1}/>
  <StoryType name={props.name}  url={props.url} url1={props.url1}/> */}
   
    </View>
   

  
  
    </View>

    
  );
}
const styles = StyleSheet.create({
container:{
  justifyContent:'space-between',
  backgroundColor:'white',

},

card:{
 width:100,
 height:150,
 borderWidth:1,
 borderRadius:10,
 marginLeft:5,
 marginTop:10,
 marginBottom:10
 
},
profile:{
 width:30,
 height:30,
 borderWidth:2,
 borderRadius:1000,
 borderColor:'blue',
 position:'absolute',
top:15,
left:10
},
text:{
 position:'absolute',
 top:130,
 left:10,
 color:'white'
},
});
export default Story;


import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions,ScrollView } from 'react-native'
import React from 'react'
import PostBottom from './PostBottom'

const {width}=Dimensions.get('window');
const PostType = (props) => {
  return (
    <View style={styles.container}>
        {/* user profile */}
    <View style={{flexDirection:'row',paddingHorizontal:10}}>
   <TouchableOpacity>
    <Image style={styles.profile} 
    source={props.userurl}
    /></TouchableOpacity>
   
<View > 
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity>
  <Text style={styles.text}>{props.username}</Text>
  </TouchableOpacity>
  </View>
 <View style={{flexDirection:'row'}}>
  <Text style={{marginLeft:10}}> 3 d .</Text>
  <Image style={{width:20,height:20,marginLeft:10}}
  source={require('../assets/images/globe.png')}
  />
  </View>
  
    </View>
    {/* cross and dots images  */}
    <View style={{flexDirection:'row',marginLeft:150,marginTop:10,justifyContent:'space-between'}}>
      <TouchableOpacity>
      <Image style={{width:20,height:20,marginRight:20}}
      source={require('../assets/images/dot.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={{width:20,height:20,marginLeft:10}}
      source={require('../assets/images/cross.png')}
      />
      </TouchableOpacity>
    </View>
    </View>
    {/* user post image */}
    <View>
    <TouchableOpacity>
    <Image style={{height:400,width:width,marginTop:10,resizeMode:'cover'}}
    source={props.posturl}
    />
    </TouchableOpacity>
    </View>
      
        <PostBottom/> 

    
  </View>
)
}
const styles = StyleSheet.create({
  container:{
     
      justifyContent:'space-between',
      backgroundColor:'white',
      marginTop:10,
      

  },
  profile:{
      width:50,
      height:50,
      borderRadius:1000,
      marginTop:10

  },
  text:{
      marginTop:10,
      width:100,
      marginLeft:10,
      fontWeight:'bold',
      
  },

});

export default PostType;


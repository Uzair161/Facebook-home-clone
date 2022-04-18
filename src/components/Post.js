import { StyleSheet, Text, Image,View,TouchableOpacity,ScrollView,Dimensions } from 'react-native'
import React from 'react'
import PostBottom from './PostBottom';
import PostType from './PostType';


const Post = (props) => {
  return (
    <View style={styles.container}>
        
        <PostType 
        username={props.username} 
        userurl={props.userurl}
        posturl={props.posturl}
        />
       
      
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      
        justifyContent:'space-between',
        
    },
    profile:{
        width:50,
        height:50,
        borderRadius:1000,
        marginTop:10

    },
    text:{
        marginTop:10,
        marginLeft:10,
        fontWeight:'bold',
        fontSize:20
    },
  
});
export default Post;


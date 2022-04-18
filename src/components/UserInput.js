import { View, Text,Image,StyleSheet,TextInput,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
const {width} = Dimensions.get('window');

const UserInput = () => {
  return (
    <View style={styles.container}>
        <View style={{width:width,flexDirection:'row',marginTop:15,justifyContent:'space-around'}}>
            <TouchableOpacity>
        <Image style={styles.image}
        source={require('../assets/images/avatar.jpg')}
        />
        </TouchableOpacity>
        <TextInput style={styles.input}
        placeholder="What's on your mind" 
        />
        <TouchableOpacity>
        <Image style={styles.icon}
        source={require('../assets/images/pic.png')}
        />
        </TouchableOpacity>

        </View>

    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        //paddingHorizontal:10,
        backgroundColor:'white',
    },
        image:{
        width:40,
        height:40,
        resizeMode:'contain',
        borderRadius: 1000,
        paddingBottom:10,
        marginBottom:10,
    

        
    },
    input:{
        borderColor:'black',
        borderRadius:25,
        width:260,
        height:35,
        borderWidth:1,
        
       padding:10,
       borderColor:'#dcdcdc',
    },
    icon:{
        width:35,
        height:35,
        
    },
   
    });

export default UserInput;

import { View, Text,StyleSheet,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const {width} = Dimensions.get('window');
const Menu = () => {
  return (
    <View style={styles.container}>
    <View style={{width:width,flexDirection:'row',marginTop:5,marginBottom:5,justifyContent:'space-around'}}>
    <TouchableOpacity>
    <View style={styles.reelicon}>
    <Icon name="film" size={20} color='#ff0000'/>
     <Text >Reel</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.reelicon}>
    <Icon name="video" size={20} color='#800080'/>
    <Text >Room</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
     <View style={styles.reelicon}>
     <Icon name="users"  size={20} color='#4169e1'/>
     <Text >Groups</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
     <View style={styles.reelicon}>
     <Icon  name="video"  size={20} color='#ff0000'/>
    <Text >Live</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        
        backgroundColor:'#f8f8ff'
        
    },
    reelicon:{
       width:85,
       height:30,
       borderWidth:1,
       borderRadius:25,
       backgroundColor:'white',
      flexDirection:'row',
       justifyContent:'space-between',
       paddingHorizontal:10,
       alignItems:'center',
       borderColor:'#dcdcdc',
       //marginLeft:10,
       fontWeight:"Bolt",
    },
    });

export default Menu;
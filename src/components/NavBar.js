import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions } from 'react-native';
import React from 'react';
const {width}=Dimensions.get('window');
const NavBar = () => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
       <View style={{width:width,flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
      
          <View>  
         <TouchableOpacity>
      <Image style={styles.image}
      source={require('../assets/images/home.png')}
      />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',}}>
      <TouchableOpacity>
      <Image style={styles.image}
      source={require('../assets/images/play.png')}
      />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',}}>
      <TouchableOpacity>
      <Image style={styles.image}
      source={require('../assets/images/market.png')}
      />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',}}>
      <TouchableOpacity>
       <Image style={styles.image}
      source={require('../assets/images/user.png')}
      />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',}}>
      <TouchableOpacity>
       <Image style={styles.image}
      source={require('../assets/images/bell.png')}
      />
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity>
      <Image style={styles.image}
      source={require('../assets/images/maneu.png')}
      />
      </TouchableOpacity>
      </View>
      </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
//flexDirection:'row',
//justifyContent:'space-between',
backgroundColor:'white',
borderBottomWidth:1,



},
image:{
  width:50,
  height:30,
  resizeMode:'contain',
  //marginLeft:10,
  marginBottom:5,
},

});


export default NavBar;


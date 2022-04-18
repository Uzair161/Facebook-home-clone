import { StyleSheet, Text, View, Image,TouchableOpacity,Dimensions } from 'react-native';
import React from 'react';
const {width} = Dimensions.get('window');
const Header = () => {
  return (
    <View style={styles.container}>
        <View style={{width:width,flexDirection:'row',justifyContent:'space-between'}}>
        <View>
            <TouchableOpacity>
        <Image style={styles.image}
        source={require('../assets/images/home/logo.jpeg')}
        />
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}} >
            <TouchableOpacity>
            <Image style={styles.searchicon}
            source={require('../assets/images/home/search.jpeg')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.searchicon}
            source={require('../assets/images/home/massenger.png')}
            />
            </TouchableOpacity>
        </View>



        </View>

    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    justifyContent:'space-between',
    
    backgroundColor:'white',
},
    image:{
    width:100,
    height:50,
    resizeMode:'contain',
},
searchicon:{
    width:50,
    height:50,
    resizeMode:'contain',
},

});

export default Header;
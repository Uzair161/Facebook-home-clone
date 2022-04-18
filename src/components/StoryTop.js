import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
const {width} = Dimensions.get('window');
const StoryTop = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',width:width}}>
      <TouchableOpacity>
      <Text style={styles.text1}>Stories</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.text1}>Reels</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.text1}>Rooms</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
 
        justifyContent:'space-between',
       
       
        marginTop:10,
        backgroundColor:'white',
      },
      text1:{
        marginLeft:16,
        marginTop:10,
        
        },
});
export default StoryTop;


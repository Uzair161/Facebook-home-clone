import { StyleSheet, Text, View ,Image,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window');

const PostBottom = () => {
  return (
    <View style={styles.container}>
        {/* like and comments Emoji */}
        <View style={{flexDirection:'row',width:width,justifyContent:'space-between'}}>
       <View style={{flexDirection:'row'}}>
       <TouchableOpacity>
      <Image style={styles.image}
      source={require('../assets/images/likeemo.png')}
      /></TouchableOpacity>
      <TouchableOpacity>
      <Image style={{width:20,height:20}}
      source={require('../assets/images/love.png')}
      /></TouchableOpacity>
      <Text >215</Text>
      </View>
      <View style={{marginRight:10}}>
      <TouchableOpacity>
          <Text>345 Comment</Text>
          </TouchableOpacity>
      </View>
      
      </View>
      <Text  style={{color:'lightgrey',marginLeft:10}}  numberOfLines={1}>               
          ________________________________________________________________
     </Text>
     {/* like , Comments and share button */}
     <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10,marginBottom:10}}>
     <TouchableOpacity>
   <View style={{flexDirection:'row',alignItems:'center',}}>
    <Image style={styles.img}
    source={require('../assets/images/like.png')}
    />
    <Text style={{marginLeft:10}}>Like</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{flexDirection:'row',alignItems:'center',}}>
    <Image style={styles.img}
    source={require('../assets/images/comment.png')}
    />
    <Text style={{marginLeft:10}}>Comment</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{flexDirection:'row',alignItems:'center',}}>
    <Image style={styles.img}
    source={require('../assets/images/share.png')}
    />
    <Text style={{marginLeft:10}}>Share</Text>
    </View>
    </TouchableOpacity>
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
         
         justifyContent:'space-between',
         
         backgroundColor:'white',
         marginTop:10,
         
    },
    image:{
        width:20,
        height:20,
        resizeMode:'stretch',
        marginLeft:10
    },
    img:{
        width:25,
        height:25,

    },
});
export default PostBottom;


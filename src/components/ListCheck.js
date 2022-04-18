import { StyleSheet, Text, View,FlatList,ActivityIndicator,Image,ScrollView,Dimensions} from 'react-native'
import React,{useEffect,useState} from 'react'
import Post from './Post';
const {height,width} = Dimensions.get('window');

const ListCheck = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getData = async () => {
        try {
         const response = await fetch('https://thapatechnical.github.io/userapi/users.json');
         const json = await response.json();
         console.log(json);
         setData(json);
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }
      useEffect(() => {
        
        getData();
    },[]);


  return (
    <View  style={{height:height,width:width}}>
        
      {isLoading ? <ActivityIndicator/> : (
        <ScrollView>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
            
            <Post username={item.name} 
            userurl={{uri : item.image}}
            posturl={{uri : item.image}}/>
            </View>
          )}
        />
         </ScrollView>
      )}
    
    </View>
  );
}

export default ListCheck;


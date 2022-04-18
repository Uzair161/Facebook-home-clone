import { View, Text, StyleSheet,ScrollView,Dimensions,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import Header from './Header';
import NavBar from './NavBar';
import UserInput from './UserInput';
import Menu from './Menu';
import Story from './Story';
import Post from './Post';
import StoryTop from './StoryTop';

const {height,width} = Dimensions.get('window');

const Facebook = () => {
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
    <View style={{ backgroundColor:'#D3D3D3',height:height,width:width}}>
      <Header/>
      <NavBar/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <UserInput/>
      <Menu/> 
      <StoryTop/>
      <FlatList horizontal showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View >
            <Story
            name={item.name}
            url={{uri : item.image}}
            url1={{uri : item.image}}
            />
         </View>
          )} 
        />
   <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
            <View>
            
            </View>
            <View>
            <Post username={item.name} 
            userurl={{uri : item.image}}
            posturl={{uri : item.image}}/>
         </View>
         </View>
          )} 
        />
      
      
      </ScrollView>
    </View>
    
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#D3D3D3',
    },
   
    });
export default Facebook;
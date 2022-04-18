import  React,{useEffect,useState} from 'react';
import {ScrollView,StyleSheet,Text,View,ActivityIndicator,FlatList} from 'react-native';

import Facebook from './src/components/Facebook';
import ListCheck from './src/components/ListCheck';

const App = () => {
 
  // const [data, setData] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  // const getData = async () => {
  //     try {
  //      const response = await fetch('https://reactnative.dev/movies.json');
  //      const json = await response.json();
  //      console.log(json.movies);
  //      setData(json.movies);
  //    } catch (error) {
  //      console.error(error);
  //    } finally {
  //      setLoading(false);
  //    }
  //  }
  //   useEffect(() => {
      
  //     getData();
  // },[]);
  return (
    
    <View >
      {/* {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )} */}
      {/* <ListCheck/> */}
      <Facebook/>
    </View>
   
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

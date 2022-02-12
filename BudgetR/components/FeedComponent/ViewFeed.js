import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getFeedData } from '../../controller/FeedData';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../ListFeed';



const ViewFeed = () => {
    const [FeedList, setFeedList] = useState([])

    useEffect(()=>{
      getFeedData(FeedDataRetrieved)
    },[]);


    function FeedDataRetrieved(FeedList){
        setFeedList(FeedList)
        console.log() 
    }



  return (
    <View>
      <FlatList style = {styles.FlatList}
        data = {FeedList}
        renderItem = {({item })=>
          <ListItem item = {item}/>
            

          
        } 

        />

    </View>
  );
};

export default ViewFeed;

const styles = StyleSheet.create({
  FlatList: {
    flex: 1,
  },
  container: {
    // backgroundColor: 'transparent'
  },
  itemTransaction: {
    
  }


});

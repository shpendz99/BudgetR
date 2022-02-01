import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getFeedData } from '../../controller/FeedData';


const ViewFeed = () => {
    const [FeedList, setFeedList] = useState()

    useEffect(()=>{
        getFeed()
    },[]);

    function getFeed(){
        getFeedData(FeedDataRetrieved)
    }
    function FeedDataRetrieved(FeedList){
        setFeedList(FeedList)
        
    }



  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default ViewFeed;

const styles = StyleSheet.create({});

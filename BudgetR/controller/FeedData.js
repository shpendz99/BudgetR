import {db} from '../firebase'

export async function getFeedData(FeedDataRetrieved){
    

try {
    var FeedList = [];
    var snapshot = await db
        .collection('users')
        .get();
    snapshot.forEach((doc) =>{
        const user  = doc.data()

        FeedList.push(user)
    });
    
    FeedDataRetrieved(FeedList)
    
    } catch {
    //do whatever
    }

}


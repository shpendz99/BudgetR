import {auth, db} from '../firebase'

export async function getFeedData(FeedDataRetrieved){
    

try {
    var FeedList = [];
    var snapshot = await db
        .collection('users')
        .doc(auth.currentUser.email)
        .collection('Account')
        .get();
    snapshot.forEach((doc) =>{
        const user  = doc.data()

        FeedList.push(user)
        console.log(user)
        
    });
    
    FeedDataRetrieved(FeedList)
    
    } catch {
    //do whatever
    }

}


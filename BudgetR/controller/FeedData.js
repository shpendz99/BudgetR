import {auth, db} from '../firebase'

export async function getFeedData(FeedDataRetrieved){
    
//Data is collected from database and stored in Feedlist
//All data in the 'transaction' collection is collected
try {
    var FeedList = [];
    var snapshot = await db
        .collection('users')
        .doc(auth.currentUser.email)
        .collection('transaction')
        .get();
    snapshot.forEach((doc) =>{
        const user  = doc.data()
        console.log("User's Financial Data: ")
        FeedList.push(user)
        console.log("Transactions: ", user)
        
    });
    FeedDataRetrieved(FeedList)

} catch {
    //do whatever
    }
}


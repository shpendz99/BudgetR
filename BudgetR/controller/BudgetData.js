import {auth, db} from '../firebase'

    
export async function getBudget(BudgetData){
    
    try{
        
        var userB;
        await db
        .collection('users')
        .doc(auth.currentUser.email)
        .get().then((doc) =>{
            const user  = doc.data().budget
            userB = user
            BudgetData(userB)
        });
        

        //Updates the user's Budget
        db.collection('users').doc(auth.currentUser.email).onSnapshot(docUpdate =>{ 
            const updateBudget = docUpdate.data().budget;
            userB = updateBudget
            BudgetData(userB)
        })
        
        console.log("Budget User", auth.currentUser.email)
    }catch{
        //do whatever
    }
}

export async function getFeedData(FeedDataRetrieved){
    

    try {
        var FeedList = [];
        var snapshot = await db
            .collection('users')
            .doc(auth.currentUser.email)
            .collection('transaction')
            .where('type', '==', 'Expense')
            .get();
        snapshot.forEach((doc) =>{
            const user  = doc.data().money
    
            FeedList.push(user)
            
        });
        
        FeedDataRetrieved(FeedList)
    
    } catch {
        //do whatever
        }
    
    }
    





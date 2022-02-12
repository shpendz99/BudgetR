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




// import {auth, db} from '../firebase'

    
// export async function getBudget(BudgetData){
    
//     try{
        
//         var userB;
//         await db
//         .collection('users')
//         .doc(auth.currentUser.email)
//         .get().then((doc) =>{
//             const user  = doc.data().budget;
//             userB = user
        
//         })

//         //Updates the user's Budget
//         db.collection('users').doc(auth.currentUser.email).onSnapshot(docUpdate =>{
//             const updateBudget = docUpdate.data().budget;
//             userB = updateBudget
        

//         //shows who is logged in at the moment
//         console.log("Budget User", auth.currentUser.email)

//         //this shares the value of this function with another function in a different class
//         BudgetData(userB)

        
//         })
        
        
        
//     }catch{
//         //do whatever
//     }
// }





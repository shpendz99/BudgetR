// import { useState } from 'react';
// import {auth, db} from '../firebase'

// export async function getBalance(BalanceRetrieved){
//     const [balance,setBalance] = useState(null)

//     try {
//         const Username =  auth.currentUser.email
//         console.log('Authenticated Email: ', Username)
//         const documentSnapshot = await db
//           .collection('users')
//           .doc(Username)
//           .get();

//         const userData = documentSnapshot.data().account_balance;
//             setBalance(userData)
            
//       } catch {
//         //do whatever
//       }
// }


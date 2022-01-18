import React, { useState, useEffect } from 'react'
import {SignedOutStack,  SignedInStack } from './navigation'
import {auth} from './firebase'

const AuthNavigation = () => {

    const [currentUser, setCurrentUser] = useState(null)

    //Checks if the user exists
    //--if user does not exist, it will be set to Null
    const userHandler = user =>
        user? setCurrentUser(user): setCurrentUser(null)

    //Always listening at Global Level via Firebase
    useEffect( () =>
        auth.onAuthStateChanged(user => userHandler(user)),
        []
    )
    return <>{currentUser ? <SignedInStack/>: <SignedOutStack/>}
    </>
}

export default AuthNavigation


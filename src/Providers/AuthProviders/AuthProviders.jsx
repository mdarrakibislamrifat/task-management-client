import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

export const AuthContext=createContext(null);
const AuthProviders = ({children}) => {

const [loading,setLoading]=useState(true);
const [user,setUser]=useState();


// create a new user
const createUser=(email,password,photo,name)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password,photo,name);
}

// sign in existing user
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const googleSignIn = (provider) => {
  setLoading(true); 
  return signInWithPopup(auth, provider);
};

const logOut=()=>{
    setLoading(true);
    return signOut(auth)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const userInfo={
        email:currentUser?.email
      }
    //   if (currentUser) {
    //     axiosPublic
    //       .post('/jwt', userInfo)
    //       .then(res => {
    //         if (res.data.token) {
    //           localStorage.setItem('access-token', res.data.token);
    //           setLoading(false);
    //         }
    //       })
    //       .catch(error => {
            
    //         console.error('Error fetching token:', error);
    //         setLoading(false);
    //       });
    //   } else {
    //     localStorage.removeItem('access-token');
    //     setLoading(false);
    //   }
        
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, );


const authInfo={
        user,createUser,signIn,googleSignIn,logOut,loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
import React, { useRef, useState } from 'react';
import Header from './Header';
import { BG_URL } from '../utils/constant';
import Footer from './Footer';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    const isError = checkValidateData(email.current.value, password.current.value);
    // console.log(isValid);
    if(isError){
    setErrorMessage(isError);
    } else{
      if(!isSignIn){
        // sign up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential)=>{
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          }).then(()=>{
            console.log(auth.currentUser);
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
            }));
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode+" And "+ errorMessage);
        });
      } else {
                // Sign in Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential)=>{
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" And "+ errorMessage);
        });
      }
    }
  }

  return (
    <div className='w-full h-full absolute top-0'>

      <div className='relative'>
        <img className='w-screen h-screen -z-30 absolute brightness-[50%]' src={BG_URL} alt="backroundImage" />
        <div className='flex w-full absolute mt-24 z-20 justify-center items-center'>
            <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 h-3/6 bg-black/60 p-8'>
              <h1 className='my-2 text-white font-bold text-2xl'>{isSignIn?"Sign In": "Sign Up"}</h1>
              { !isSignIn && <input ref={name} className='my-2 p-4 w-full bg-inherit text-white' type='text' placeholder='Enter Your Name'/>}
              <input ref={email} className='my-2 p-4 w-full bg-inherit text-white' type='email' placeholder='Enter Your Email'/>
              <input ref={password} className='my-2 p-4 w-full bg-inherit text-white' type='password' placeholder='Enter Your Password'/>
              <h1 className='text-red-500 p-2'>{errorMessage}</h1>
              <button className='bg-red-700 w-full p-2 text-white'
              onClick={()=>handleButtonClick()}
              >{isSignIn? "Sign In": "Sign Up"}</button>
              { isSignIn? 
                <div className='text-white'>
                Don't Have Account ? <span className='text-red-500' onClick={()=>setIsSignIn(false)}>Sign Up</span>
                </div> :
                 <div className='py-2 text-white'>
                 Already Have Account ? <span className='text-red-500' onClick={()=>setIsSignIn(true)}>Sign In</span>
                 </div>
              }
            </form>

        </div>
      </div>

      <div className='absolute bottom-0 w-full h-5'>
        <Footer/>
      </div>
    </div>   
  )
}

export default Login;
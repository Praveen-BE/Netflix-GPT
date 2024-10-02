import { signOut, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
// import LOGO from "../utils/LogoSVG.svg";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { removeUser, addUser } from '../utils/userSlice';
import { USER_PROFILE } from '../utils/constant';
import { toggleGptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/language';
import { langChange } from '../utils/langSlice';

const Header = () => {
  const user = useSelector((store)=>store.user);
  const gpts = useSelector((store)=>store.gpts.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(()=>{
    // console.log(user);
  // },[])
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      // navigate("/");
    }).catch((error)=>{
      console.log("Sign Out Error");
    });
  }

  const handleToggleGPT = ()=>{
    dispatch(toggleGptSearch());
  }

  const handleLanguageChange = (e)=>{
    // console.log(e.target.value);
    dispatch(langChange(e.target.value));
  }

  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
        }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    })

    return ()=> unsubscribe();
  },[]);

  return (
    <div className='p-6 flex justify-between bg-gradient-to-b from-black'>
      <p className='text-4xl w-10 h-10 font-bold text-red-700 shadow-2xl'>Netflix</p>       
      {user &&
      <div>
      <div className='flex'>
        <div className='flex items-center'>
          <select className='bg-blue-600 rounded-md text-white px-4 py-0 h-8'
          onChange={handleLanguageChange}>
            {
              SUPPORTED_LANGUAGES.map((lang)=>
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              )
            }
          </select>
        </div>
        <button className='mx-2 px-4 py-2 text-white bg-purple-800 rounded-lg' 
        onClick={()=>handleToggleGPT()}>
        { gpts? "Home Page" :  "GPT Search" }
        </button>
        <div>
        <img className='w-10 h-10' alt='ProfilePicture' src={USER_PROFILE}/>
        <h1 className='absolute text-white'>{user?.displayName}</h1>
        </div>
        <button className='text-red-600 font-bold' onClick={()=>handleSignOut()}>Sign Out</button>
      </div>

      </div>
      }
    </div>
  )
}

export default Header;
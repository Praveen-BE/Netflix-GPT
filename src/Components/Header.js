import { signOut, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
// import LOGO from "../utils/LogoSVG.svg";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser, addUser } from '../utils/userSlice';
import { USER_PROFILE } from '../utils/constant';
// import { toggleGeminiSearch } from '../utils/geminiSlice';
import { SUPPORTED_LANGUAGES } from '../utils/language';
import { langChange } from '../utils/langSlice';

const Header = () => {
  const user = useSelector((store)=>store.user);
  const [hamburger, setHamburger] = useState(false);
  const [hamburgerIcon, sethamburgerIcon] = useState(false);
  // const gemini = useSelector((store)=>store.gemini.showGeminiSearch);
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
    });

     window.addEventListener("resize", ()=>{
      const browserWidth = window.innerWidth;
      // console.log(browserWidth);
      if(browserWidth<431){
        sethamburgerIcon(true);
      } else{
        sethamburgerIcon(false); 
        setHamburger(false);
      }
    });

    const initialWidth = window.innerWidth;
      if(initialWidth<431){
        sethamburgerIcon(true);
      } else{
        sethamburgerIcon(false); 
        setHamburger(false);
      }

    return ()=> {
      unsubscribe();
    }
    
  },[]);

  return (
    <div className='px-6 py-3 h-12 md:h-auto md:py-6 flex justify-between bg-gradient-to-b from-black bg-black md:bg-transparent'>
      <p className='text-2xl w-10 h-10 font-bold text-red-700 shadow-2xl md:text-4xl'>Netflix</p>      
      {user &&  !hamburger &&
      <div className='bg-black absolute mt-6 md:mt-0 right-0 md:bg-none bg-opacity-80 md:bg-opacity-0'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex items-center'>
          <select className='bg-blue-600 mx-2 w-full rounded-md text-white px-4 py-0 h-8'
          onChange={handleLanguageChange}>
            {
              SUPPORTED_LANGUAGES.map((lang)=>
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              )
            }
          </select>
        </div>
        {/* <button className='mx-2 px-4 py-2 text-white bg-purple-800 rounded-lg' 
        onClick={()=>handleToggleGPT()}>
        { gemini? "Home Page" :  "Gemini Search" }
        </button> */}
        <Link to={"/browse"} className='mx-2 my-2 px-4 py-2 text-white bg-purple-800 rounded-lg'>
          Home Page
        </Link>
        <Link to={"/gemini"} className='mx-2 my-2 px-4 py-2 text-white bg-purple-800 rounded-lg'>
          Gemini Search
        </Link>
        <div className='mx-2'>
        <img className='w-10 h-10' alt='ProfilePicture' src={USER_PROFILE}/>
        <h1 className='absolute text-white'>{user?.displayName}</h1>
        </div>
        <button className='text-red-600 my-6 md:m-0 font-bold' onClick={()=>handleSignOut()}>Sign Out</button>
      </div>

      </div>
      }
      {
        user && hamburgerIcon &&
        <div onClick={()=>setHamburger(!hamburger)}>
          {
            hamburger ?
            <div className='m-1 relative'>
            <div className='w-5 h-[2px] md:w-6 md:h-[3px] bg-white'></div>
            <div className='w-5 h-[2px] md:w-6 md:h-[3px] bg-white my-1'></div>
            <div className='w-5 h-[2px] md:w-6 md:h-[3px] bg-white'></div> 
          </div> :
          <div className='m-1 flex'>
              <div className='absolute w-5 h-[2px] md:w-6 md:h-[3px] bg-white rotate-45'></div>
              <div className='w-5 h-[2px] md:w-6 md:h-[3px] bg-white -rotate-45'></div> 
          </div>
          }
        </div>
      }
    </div>
  )
}

export default Header;
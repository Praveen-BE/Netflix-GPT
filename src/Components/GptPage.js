import React from 'react';
import { BG_URL } from '../utils/constant';
import Header from './Header';
import lang from '../utils/language';
import { useSelector } from 'react-redux';

const GptPage = () => {
  const langKey = useSelector((store)=>store.lang.language)
  const langValue = lang;

  return (
    <div>
        <img className='absolute -z-10 w-screen h-screen brightness-[50%]' alt='BackgroundImage' src={BG_URL}/>
        <Header/>
        <div className='flex justify-center'>
        <div className="w-11/12 flex p-1 justify-center">
            <input className='w-9/12 p-3 bg-black rounded-l-lg border-[1px] border-black hover:border-white text-white'
            placeholder={langValue?.[langKey]?.gptSearchPlaceHolder}/>
            <button className='w-2/12 p-2 text-white bg-purple-800 rounded-r-lg hover:bg-purple-400'>{langValue?.[langKey]?.search}</button>
        </div>
        </div>
    </div>
  )
}

export default GptPage;
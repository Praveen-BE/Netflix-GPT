import React, { useEffect, useRef } from 'react';
import { BG_URL, OPTIONS_TOKEN, SEARCH_TMDB } from '../utils/constant';
import Header from './Header';
import lang from '../utils/language';
import { useDispatch, useSelector } from 'react-redux';
import model from '../utils/geminiAI';
import { geminiSearchStore, geminiTmdbSearchStore, unMountGeminiReset } from '../utils/geminiSlice';
import MoviesCardList from './MoviesCardList';
// import useSearchTmdbAPI from '../hooks/useSearchTmdbAPI';

const GeminiPage = () => {
  const langKey = useSelector((store)=>store.lang.language);
  const geminiPrompt = useRef(null);
  const dispatch = useDispatch();
  const geminiSearchStoreValue = useSelector((store)=>store.gemini.geminiSearchMovies);
  const geminiTmdbSearchStoreValue = useSelector((store)=>store.gemini.geminiTmdbSearchMovies);
  const TOKEN = process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN;
  const langValue = lang;

  const searchMoviesAPI= async(movieName)=>{
    const data = await fetch(SEARCH_TMDB+movieName, OPTIONS_TOKEN(TOKEN));
    const json = await data.json();
    return json.results;
    // console.log(json);
  }

  const handleGeminiSearch= async()=>{
  console.log(geminiPrompt.current.value);
    const GeminiQuery = "Act as movies Recommendation system and suggest some movies for the query is "+geminiPrompt.current.value+". only give me name of 5 movies, comma seperated like the example result given ahead, example result: Garden, sholay, Don, Golmaal, Koi Mil Gaya";
    const result = await model.generateContent(GeminiQuery);
    const geminiResult = result.response.text();
    console.log(geminiResult);
    const geminiMoviesArray = geminiResult.trim().split(",");
    console.log(geminiMoviesArray);
    dispatch(geminiSearchStore(geminiMoviesArray));
    // searchMoviesAPI(geminiMoviesArray[0])
    const PromiseArray = geminiMoviesArray.map((movie)=>searchMoviesAPI(movie));
    const geminitmdbSearchResults = await Promise.allSettled(PromiseArray);
    console.log(geminitmdbSearchResults);
    dispatch(geminiTmdbSearchStore(geminitmdbSearchResults));
  }

  useEffect(()=>{

    return ()=>{
      dispatch(unMountGeminiReset());
    }
  },[]);

  return (
    <div>
        <img className='fixed -z-10 w-screen h-screen brightness-[50%]' alt='BackgroundImage' src={BG_URL}/>
        <Header/>
        <div className='flex justify-center'>
        <form onSubmit={(e)=>e.preventDefault()} className="w-11/12 flex p-1 justify-center">
            <input ref={geminiPrompt} className='w-9/12 p-3 bg-black rounded-l-lg border-[1px] border-black hover:border-white text-white'
            placeholder={langValue?.[langKey]?.geminiSearchPlaceHolder}/>
            <button className='w-2/12 p-2 text-white bg-purple-800 rounded-r-lg hover:bg-purple-400'
            onClick={()=>handleGeminiSearch()}
            >
              {langValue?.[langKey]?.search}
            </button>
        </form>
        </div>
        <div>
          {
          geminiTmdbSearchStoreValue &&
          geminiSearchStoreValue.map(
          (movieCata, index)=><MoviesCardList key={movieCata} catagory={movieCata} moviesList={geminiTmdbSearchStoreValue[index].value}/>
            )
          }
        </div>
    </div>
  )
}

export default GeminiPage;
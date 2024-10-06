import React from 'react'
import { CDN_TMDB } from '../utils/constant';
import Shimmer from './Shimmer';

const MovieCard = ({movieData}) => {


  
  if(movieData==null){
    return <Shimmer/>
}

  // console.log(movieData);
  const { poster_path, title } = movieData;
  if(!poster_path) return null;
  return (
    <div className='p-4 w-[200px]'>
    <img alt={title} src={CDN_TMDB+poster_path} />
    </div>
  )
}

export default MovieCard
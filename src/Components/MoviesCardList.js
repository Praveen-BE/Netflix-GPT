import React from 'react'
import MovieCard from './MovieCard'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const MoviesCardList = ({ catagory,moviesList}) => {

  if(moviesList==null){
    return <Shimmer/>
}

  // const movieData = moviesList[0];   
  return (
    <div className='mt-6 px-6'>
        <h1 className='p-2 md:p-4 text-white font-bold text-lg md:text-2xl'>{catagory}</h1>
        <div className='flex overflow-x-scroll'>
          <div className='flex'>
            {
              moviesList.map((movieData)=>
                <div key={movieData?.id}>
              <MovieCard movieData={movieData}/>
              </div>)
            }
          </div>
        </div>
    </div>
  )
}

export default MoviesCardList;
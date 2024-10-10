import React from 'react'
import { CDN_TMDB } from '../utils/constant';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const MovieCard = ({movieData}) => {


  
  if(movieData==null){
    return <Shimmer/>
}

  // console.log(movieData);
  const { poster_path, title } = movieData;
  if(!poster_path) return null;
  return (
    <div className='p-2 md:p-4 w-[150px] md:w-[200px]'>
      <Link to={`/watch/${movieData?.id}`} >
    <img alt={title} src={CDN_TMDB+poster_path} />
    </Link>
    {/* {this.props.children} */}
    </div>
  )
}

export default MovieCard;
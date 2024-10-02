import React from 'react';
import PrimaryComponent from './PrimaryComponent';
import SecondaryCom from './SecondaryCom';
import useMoviesFetchAPI from '../hooks/useMoviesFetchAPI';

const Browse = () => {
    useMoviesFetchAPI();
  return (
    <div>
        <PrimaryComponent/>
        <SecondaryCom/>
    </div>
  )
}

export default Browse
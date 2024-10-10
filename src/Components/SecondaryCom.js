import { useSelector } from "react-redux"
import MoviesCardList from "./MoviesCardList";

const SecondaryCom = () => {
  const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store.movies.popularMovies);
  const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies);
  const upcommingMovies = useSelector((store)=>store.movies.upcommingMovies);

  
  
  return (
    <div className="pt-1 -mt-5 md:-mt-60 2xl:-mt-40 bg-black">
      <div className="mt-0 md:-mt-50 xl:-mt-56 bg-transparent relative z-50">
      <MoviesCardList catagory={"Now Playing Movies"} moviesList={nowPlayingMovies}/>
      <MoviesCardList catagory={"Poppular Movies"} moviesList={popularMovies}/>
      <MoviesCardList catagory={"Top Rated Movies"} moviesList={topRatedMovies}/>
      <MoviesCardList catagory={"Upcomming Movies"} moviesList={upcommingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryCom;
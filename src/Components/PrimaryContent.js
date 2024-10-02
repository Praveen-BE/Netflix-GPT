import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const PrimaryContent = () => {
    const bgData = useSelector((store)=>store.movies.playingMovieData);

    if(bgData==null){
        return (<Shimmer/>);
    }

    const { title, overview } = bgData;
  return (
    <div className="-mt-24 w-screen aspect-video bg-gradient-to-r from-black">
    <div className='w-4/12 pl-20 pt-40'>
        <h1 className='text-4xl font-bold text-red-500 font-serif[Arial]'>{title}</h1>
        <h1 className='mt-8 w-full text-white'>{overview}</h1>
        <div>
        <div className="w-8/12 pt-8 flex justify-between">
          <button className="py-4 px-12 bg-white text-black font-bold rounded-xl">Play</button>
          <button className="py-4 px-12 bg-white bg-opacity-20 text-white font-bold rounded-xl">Info</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default PrimaryContent;
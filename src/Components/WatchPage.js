import React from 'react'
import useWatchPageAPI from '../hooks/useWatchPageAPI'
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';
import useCreditCall from '../hooks/useCreditCall';

const WatchPage = () => {
    const watchData = useSelector((store)=>store.watch.watchMovieStore);
    const watchData1 = useSelector((store)=>store.watch.watchMovieData);
    const watchCredit = useSelector((store)=>store.watch.watchCreditData);

    useWatchPageAPI();
    // if(watchData1){
      useCreditCall();
    // }

    if(watchCredit==null){
        return <Shimmer/>
    }

    const {cast} = watchCredit;
  return (
    <div>
        <iframe
        className="w-screen fixed top-0 -z-50 aspect-video bg-cover"
        src={"https://www.youtube.com/embed/"+watchData?.key+"?&autoplay=1&mute=1"} 
        title="YouTube video player" 
        >
        </iframe>

        <div>
          <div className="-mt-24 w-screen aspect-video bg-gradient-to-r from-black">
            <div className='w-full lg:w-3/12 pl-1 md:pl-20 pt-40'>
                <div className='h-0 md:h-auto invisible md:visible'>
                  <h1 className='text-4xl font-bold text-red-500 font-serif[Arial]'>{watchData1?.title}</h1>
                  <h1 className='mt-8 w-full text-white'>{watchData1?.overview}</h1>
                  <div>
                    <div className="w-8/12 pt-8 flex justify-between">
                      <button className="py-4 px-12 bg-white text-black font-bold rounded-xl">Play</button>
                      <button className="py-4 ml-2 px-12 bg-white bg-opacity-20 text-white font-bold rounded-xl">Info</button>
                    </div>
                  </div>
                </div>
                  <div className='mt-5'>
                    { cast.map((cast)=>(<div className='flex' key={cast?.name || cast?.original_name}>
                    <h1 className='text-white'>{cast?.name || cast?.original_name } </h1>
                      <h1 className='text-red-500 ml-0 md:ml-1'>{" As "+cast?.character || cast?.role}</h1>
                      </div>))
                    }
                  </div>
            </div>
          </div>
        </div>

   
    </div>
  )
}

export default WatchPage;
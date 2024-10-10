import { useSelector } from "react-redux"
import Shimmer from "./Shimmer";

const PrimaryBackground = () => {
    const YT_KEY = useSelector((store)=>store.movies.backGroundPlayMovie);
    if(YT_KEY==null){
        return (<Shimmer/>)
    }
  return (
    <div className="absolute top-0 -z-10">
        <iframe
        className="w-screen aspect-video bg-cover mt-8 md:mt-0"
        src={"https://www.youtube.com/embed/"+YT_KEY+"?&autoplay=1&mute=1"} 
        title="YouTube video player" 
        >
          
        </iframe>
    </div>
  )
}

export default PrimaryBackground
import { Outlet } from 'react-router-dom';
import Header from './Header';
// import { useSelector } from 'react-redux';
// import GeminiPage from './GeminiPage';

const Body = () => {
  // const gemini = useSelector((store)=>store.gemini.showGeminiSearch);

  return (
    <>
    {/* { 
      gemini ?
      <div>
        <GeminiPage/>
      </div> : */}
      <div>
      <Header/>
      <Outlet/>
    </div>



    {/* } */}

    </>
  )
}

export default Body;
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useSelector } from 'react-redux';
import GptPage from './GptPage';

const Body = () => {
  const gpts = useSelector((store)=>store.gpts.showGptSearch)

  return (
    <>
    { 
      gpts ?
      <div>
        <GptPage/>
      </div> :
      <div>
      <Header/>
      <Outlet/>
    </div>



    }

    </>
  )
}

export default Body;
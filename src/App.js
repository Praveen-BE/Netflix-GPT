import './App.css';
import React from 'react';
// import Body from './Components/Body';
// import Footer from './Components/Footer';
import Login from './Components/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from './Components/Body';

function App() {


  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
      path: "/browse",
      element: <Body/>,
    },
      
  ]);


  return (
    <div className="App">
     <RouterProvider router={appRouter}>

     </RouterProvider>
    </div>
  );
}

export default App;

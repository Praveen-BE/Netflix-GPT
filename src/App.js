import './App.css';
import React from 'react';
import Login from './Components/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from './utils/appStore';
import Browse from './Components/Browse';
import Body from './Components/Body';
import GeminiPage from './Components/GeminiPage';
import WatchPage from './Components/WatchPage';
import Error from './Components/Error';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body/>,
        errorElement: <Error/>,
        children: [
          { 
            path: "/",
            element: <Login/>,
            errorElement: <Error/>,
          }, 
          {
            path: "/browse",
            element: 
            <ProtectedRoute>
              <Browse/>
            </ProtectedRoute>
              ,
            errorElement: <Error/>,
          },
          {
            path: "/gemini",
            element: <GeminiPage/>,
            errorElement: <Error/>,
          },
          {
            path: "/watch/:id",
            element: <WatchPage/>,
            errorElement: <Error/>,
          },
          {
            path: "/gemini/watch/:id",
            element: <WatchPage/>,
            errorElement: <Error/>,
          },
        ]
    },

      
  ]);


  return (

    <Provider store={appStore}>

    <div className="App">
      <div>
    <RouterProvider router={appRouter}>
    </RouterProvider>
    </div>
    </div>

    </Provider>

  );
}

export default App;

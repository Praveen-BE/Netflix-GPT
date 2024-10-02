import './App.css';
import React from 'react';
import Login from './Components/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from './utils/appStore';
import Browse from './Components/Browse';
import Body from './Components/Body';
import GptPage from './Components/GptPage';

function App() {


  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body/>,
        children: [
          { 
            path: "/",
            element: <Login/>,
          }, 
          {
            path: "/browse",
            element: <Browse/>,
          },
          {
            path: "/gptS",
            element: <GptPage/>
          }
        ]
    },

      
  ]);


  return (
    <Provider store={appStore}>
    <div className="App">
     <RouterProvider router={appRouter}>
     </RouterProvider>
    </div>
    </Provider>
  );
}

export default App;

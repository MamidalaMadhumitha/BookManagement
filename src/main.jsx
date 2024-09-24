import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import BrowseBooks from './Components/Browse.jsx';
import AddBooks from './Components/Add.jsx';
import PageNotFound from './Components/PageNotFound.jsx';
import Body from './Components/Body.jsx';
import ViewDetails from './Components/ViewDetails.jsx';
import BookDetail from './Components/BookDetail.jsx';
import { StrictMode } from 'react';




const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Body/>,
       },

      {
        path: "/Browse",
        element: <BrowseBooks />,
      },
      {
        path: "/Add",
        element: <AddBooks />,
      },
     
      {
        path: "/ViewDetails",
        element: <ViewDetails />,
      },
      {
        path: "/book/:id",
        element: <BookDetail />,
      },
      
    ],
    errorElement: <PageNotFound />,
  },
 
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={approuter}/>
  </StrictMode>
  
);

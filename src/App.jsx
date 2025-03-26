// src/App.js
import DisplayLayoutComponent from './DisplayLayoutComponent';

import { createBrowserRouter, RouterProvider , Route , createRoutesFromElements} from 'react-router';
import { NewRoot } from './NewRoot';
// import Loader from "./Loader"

const router = createBrowserRouter(createRoutesFromElements(

<Route path='/' element={<NewRoot />}>

<Route path='/' index element={<DisplayLayoutComponent />}/>


</Route>

)
  
//   [
  
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       {
//         path: '/',
//         element: <DisplayLayoutComponent />,
//         loader: countriesLoader,
//         HydrateFallback : Loader 
        
//       },
//     ],
//   },
// ]

);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

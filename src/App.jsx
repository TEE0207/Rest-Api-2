
import DisplayLayoutComponent from './DisplayLayoutComponent';
import { countriesLoader } from './OurListLoader';

import { createBrowserRouter, RouterProvider , Route , createRoutesFromElements} from 'react-router';
import { NewRoot } from './NewRoot';

const router = createBrowserRouter(createRoutesFromElements(

<Route path='/' element={<NewRoot />}>

<Route path='/' element={<DisplayLayoutComponent />} loader ={countriesLoader }/>


</Route>

)
  


);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

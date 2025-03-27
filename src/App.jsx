
import DisplayLayoutComponent from './DisplayLayoutComponent';
import { countriesLoader } from './OurListLoader';

import { createBrowserRouter, RouterProvider , Route , createRoutesFromElements} from 'react-router';
import { NewRoot } from './NewRoot';
import FinalCountryDetails from './FinalCountryDetails';

const router = createBrowserRouter(createRoutesFromElements(

<Route path='/' element={<NewRoot />}>

<Route path='/' element={<DisplayLayoutComponent />} loader ={countriesLoader }/>

<Route path="/country/:countryName" element={<FinalCountryDetails />} />



</Route>

)
  


);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

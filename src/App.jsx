
import DisplayLayoutComponent from './DisplayLayoutComponent';
import {  countriesLoader } from './OurListLoader';
import { createBrowserRouter, RouterProvider , Route , createRoutesFromElements} from 'react-router';
import { NewRoot } from './NewRoot';
import FinalCountryDetails from './DisplayDetails/FinalCountryDetails';


const router = createBrowserRouter(createRoutesFromElements(

<Route path='/' element={<NewRoot />}>

      <Route path='/' element={<DisplayLayoutComponent />} loader ={countriesLoader }/>
 {/* it is the :countryName you want to extract from the url and serve it into FinalCounrtyDetails component dynamically becaus it is FinalCounrtyDetails that will display the details of each country. THE country.name.common (which is extracted from DisplayLayoutComponent) is the :countryName here. SO when we get to FinalCountryDetails we'll use useParamms to country.name.common that :counrtyName is holding */}
      <Route path="/country/:countryName" element={<FinalCountryDetails />} />



</Route>

)
  


);

function App() {
  return  <RouterProvider router={router} />
}

export default App;

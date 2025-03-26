// src/App.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DisplayLayoutComponent from './DisplayLayoutComponent';
import RootLayout from './RootLayout';
import { countriesLoader } from './OurListLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index : true,
        element: <DisplayLayoutComponent />,
        loader: countriesLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// src/DisplayLayoutComponent.js

// import { NavLink, useLoaderData } from 'react-router';
import ListDisplayComponent from './AllOtherComponent/ListDisplayComponent';
import styles from './displaylayoutcomponent.module.css';
import { useEffect, useState } from 'react';
// import { countriesLoader } from './OurListLoader';




const DisplayLayoutComponent = () => {


  const [countries, setCountries] =useState([])

  useEffect(()=>{

    const countriesLoader = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       const data = await response.json();
      setCountries(data)
    }; countriesLoader()

  }, [])

  console.log(countries)

  // const countries = useLoaderData();
  // console.log(countries)

  

  const formatPopulation = (population) => {
    if (!population) return 'N/A';
    return new Intl.NumberFormat().format(population);
  };

  return (
    <div>
      <div className={styles.display}>

        

        {countries.slice(0,10).map((country, index) => (

          
          <div key={index} className={styles.displayEach}>
            {/* <a to={`/country/${country.name.common}`}> */}

              <ListDisplayComponent
                countryName={country.name.common}
                image={country.flags.svg}
                flagName={`Flag of ${country.name.common}`}
                population={formatPopulation(country.population)}
                region={country.region}
                capital={country.capital?.[0]}
              />
            {/* </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayLayoutComponent;



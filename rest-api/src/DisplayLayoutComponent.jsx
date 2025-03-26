// src/DisplayLayoutComponent.js
import { useLoaderData , NavLink } from 'react-router';
import ListDisplayComponent from './AllOtherComponent/ListDisplayComponent';
import styles from './displaylayoutcomponent.module.css';

const DisplayLayoutComponent = () => {

  const countries = useLoaderData();
  console.log(countries)

  const formatPopulation = (population) => {
    if (!population) return 'N/A';
    return new Intl.NumberFormat().format(population);
  };

  return (
    <div>
      <div className={styles.display}>
        {countries.map((country, index) => (
          <div key={index} className={styles.displayEach}>
            <NavLink to={`/country/${country.name.common}`}>

              <ListDisplayComponent
                countryName={country.name.common}
                image={country.flags.svg}
                flagName={`Flag of ${country.name.common}`}
                population={formatPopulation(country.population)}
                region={country.region}
                capital={country.capital?.[0]}
              />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayLayoutComponent;

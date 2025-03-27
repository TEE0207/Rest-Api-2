import { useState , useRef } from 'react';
import { IoMdSearch } from "react-icons/io";
import { NavLink, useLoaderData } from 'react-router';
import ListDisplayComponent from './AllOtherComponent/ListDisplayComponent';
import styles from './displaylayoutcomponent.module.css';

const DisplayLayoutComponent = () => {
  const countries = useLoaderData();

  const inputRef = useRef(null);

  // State for search query and region filter
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Function to format population numbers
  const formatPopulation = (population) => {
    if (!population) return 'N/A';
    return new Intl.NumberFormat().format(population);
  };

  // Function to filter countries based on search and region
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div>
      {/* Search and Filter Section */}
      <div className={styles.filterContainer} onClick={() => inputRef.current?.focus()}>
          <div className={styles.inputContainer} >

                <div className={styles.iconContainer}>
                  <IoMdSearch className={styles.icon}/>
                </div>
              <input
                type="text"
                placeholder="Search for a country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchBox}
              />
          </div>

          

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className={styles.customSelect}
            >
              <option value="All">All Continents</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          

      </div>

      {/* Display Filtered Countries */}
      <div className={styles.display}>
        {filteredCountries.map((country, index) => (
          <div key={index} className={styles.displayEach}>
            <NavLink to={`/country/${country.name.common}`} >
            
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

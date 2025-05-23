import { useState , useRef , useEffect , useMemo } from 'react';
import { IoMdSearch } from "react-icons/io";
import { NavLink, useLoaderData } from 'react-router';
import ListDisplayComponent from './AllOtherComponent/ListDisplayComponent';
import styles from './displaylayoutcomponent.module.css';
import { useTheme } from './AllOtherComponent/ThemeProvider';
import stylesOne from "./rootlayout.module.css"
import ShimmerLoader from './ShimmerLoader';




const DisplayLayoutComponent = () => {


  const data = useLoaderData();

  // State for search query and region filter
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const { isDarkMode } = useTheme();
  

  useEffect(() => {
    setCountries(data);
    setLoading(false);
  }, [data]);

  const inputRef = useRef(null);


 


  

  // Function to filter countries based on search and region 
  // To avoid re-running .filter() on every render unnecessarily:

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });

          //dependencies//
  }, [countries, search, selectedRegion]);


  // if (loading) return <ShimmerLoader />;

   return loading ? (
   <ShimmerLoader /> 
   ) : (
    <div className={styles.allContentContainer}>

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
                className={`${styles.searchBox} ${isDarkMode ? stylesOne.dark : stylesOne.light}`}
                
              />
          </div>

          

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className={`${styles.customSelect} ${isDarkMode ? stylesOne.dark : stylesOne.light}`}
            >
              <option value="All"> Filter by region</option>
              {/* <option value="All" >All Continents</option> */}
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

          //
          <div key={country.cca3 || index}
          className={styles.displayEach}>
            <NavLink to={`/country/${country.name.common}`} >

              <ListDisplayComponent
                countryName={country.name.common}
                image={country.flags?.svg || ""}
                flagName={`Flag of ${country.name?.common || "Unknown"}`}
                population = {new Intl.NumberFormat().format(country.population)}
                region={country.region}
                capital={country.capital?.[0] || "N/A"}
                />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayLayoutComponent;

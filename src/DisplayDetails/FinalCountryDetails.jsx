import { useEffect, useState } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router';
import BackButton from './BackButton';
import CountryDescription from './CountryDescription';
import FlagImageComponent from './FlagImageComponent';
import Borders from './BorderComponent';
import styles from "./finalcountrydisplay.module.css"
import LoadingSpinner from '../ShimmerLoader';


const FinalCountryDetails = () => {

  // we extract the country name from the url using useParams() which is saved in countryName
  const { countryName } = useParams();
  

  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoading(true);
        // we use the countryName to fetch the country data here
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        const data = await response.json();
        
        if (data.length > 0) {
          const countryData = data[0];
          setCountry(countryData);

          // Fetch all border countries in a single request
          if (countryData.borders && countryData.borders.length > 0) {
            const borderCodes = countryData.borders.join(',');
            const borderResponse = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCodes}`);
            const borderData = await borderResponse.json();
            setBorderCountries(borderData.slice(0, 3)); // Only take the first 3 borders
          } else {
            setBorderCountries([]); // No borders available
          }
        }
      } catch (error) {
        console.error('Error fetching country details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [countryName]);

  // if (loading) return <p>Loading country details...</p>;

  if (loading) {
      return <LoadingSpinner />;
    }
  if (!country) return <p>Country not found.</p>;

  const backButton = () => {
     navigate(-1)
  }

 

  return (
    <div className={styles.allContentContainer}>

        <div className={styles.backButtonContainer}>
            
          <BackButton
          // This back button is component that has onClick backButton as props. So we use the props here and write the onClick function
              backButton={ backButton}
            />
        </div>

     

     <div className={styles.flagAndDescriptionContainer}>

          <div className={styles.importedFlagContainer}>
              <FlagImageComponent 
                flagImage={country.flags ?.svg || ""}
                alt = {`Flag of ${country.name.common}`}
                />
          </div>
            

            
       <CountryDescription 
        country = {country.name.common} 
        nativeName = {country.name?.nativeName? Object.values(country.name.nativeName).map(n =>n.common).join(", ") : "N/A"}
        population = {new Intl.NumberFormat().format(country.population)}
        region = {country.region}
        subRegion = {country.subregion || "N/A"}
        capital  =  {country.capital?.[0] || 'N/A'}
        domin = {country.tld?.join(", ") || "N/A"}
        car = {country.car.side}
        currencies = {country.currencies ? 
            Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(", ") : "N/A"}
        
         languages = {Object.values(country.languages || {}).join(", ")}
         timeZone={country.timezones?.join(", ") || "N/A"}
       />



     </div>
     

      

      {/* Border Countries */}
      {borderCountries.length > 0 && (


       
        <div className={styles.borderSectionContainer}>
              <div className={styles.borderTitleContainer}><h3>BORDER COUNTRIES</h3></div>

              <div className={styles.borderContainer}>
                 {borderCountries.map((borderCountry) => (

              
                    
                    
                        <Borders
                        
                        flag = {borderCountry.flags.svg}
                        flagName ={`Flag of ${borderCountry.name.common}`} 
                        countryName ={borderCountry.name.common}
                        theLink = {{to : `/country/${borderCountry.name.common}`, text : "View Details"}}
                        key={borderCountry.cca3}
                        />
                ))}
                
              </div>
        </div>
      )}
    </div>
  );
};

export default FinalCountryDetails;

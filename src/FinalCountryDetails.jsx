import { useEffect, useState } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router';
import BackButton from './DisplayDetails/BackButton';
import CountryDescription from './DisplayDetails/CountryDescription';
import FlagImageComponent from './DisplayDetails/FlagImageComponent';
import Borders from './DisplayDetails/BorderComponent';

const FinalCountryDetails = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoading(true);
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

  if (loading) return <p>Loading country details...</p>;
  if (!country) return <p>Country not found.</p>;

  const backButton = () => {
     navigate(-1)
  }

 

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>


        <BackButton
          backButton={ backButton}
        />

      {/* <button onClick={() => navigate(-1)} style={{ marginBottom: '10px', padding: '5px 10px', cursor: 'pointer' }}>
        🔙 Back
      </button> */}

      {/* <h1>{country.name.common}</h1> */}
      {/* <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="200" /> */}
      {/* <p><strong>Region:</strong> {country.region}</p> */}
      {/* <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p> */}
      {/* <p><strong>Population:</strong> {new Intl.NumberFormat().format(country.population)}</p> */}

      <FlagImageComponent 
       flagImage={country.flags.svg}
       alt = {`Flag of ${country.name.common}`}
      />

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

      {/* Border Countries */}
      {borderCountries.length > 0 && (


       
        <div>
          <h3>Border Countries:</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {borderCountries.map((borderCountry) => (

                
        
            //   <div 
            //     key={borderCountry.cca3} 
            //     style={{
            //       border: '2px solid black',
            //       padding: '15px',
            //       borderRadius: '10px',
            //       background: '#f8f8f8',
            //       width: '200px',
            //       textAlign: 'center',
            //       boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
            //     }}
            //   >
            //     <img 
            //       src={borderCountry.flags.svg} 
            //       alt={`Flag of ${borderCountry.name.common}`} 
            //       width="100" 
            //       style={{ borderRadius: '5px' }} 
            //     />
            //     <h4>{borderCountry.name.common}</h4>
            //     <NavLink 
            //       to={`/country/${borderCountry.name.common}`} 
            //       style={{
            //         textDecoration: 'none',
            //         color: 'white',
            //         background: '#007BFF',
            //         padding: '5px 10px',
            //         borderRadius: '5px',
            //         display: 'inline-block',
            //         marginTop: '5px',
            //       }}
            //     >
            //       View Details
            //     </NavLink>
            //   </div>
                 <div>
                 
                    <Borders
                    
                     flag = {borderCountry.flags.svg}
                     flagName ={`Flag of ${borderCountry.name.common}`} 
                     countryName ={borderCountry.name.common}
                     theLink = {{to : `/country/${borderCountry.name.common}`, text : "view Details"}}
                     key={borderCountry.cca3}
                    />

                 </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalCountryDetails;

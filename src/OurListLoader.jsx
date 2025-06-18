

export const countriesLoader = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,flags,population,languages,area,cca2,cca3');
    if (!response.ok) {
      // throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }; 





export const countriesLoader = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }; 
  




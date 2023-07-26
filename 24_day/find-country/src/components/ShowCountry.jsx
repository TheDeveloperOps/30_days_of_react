import  { useState, useEffect } from 'react';
import './ShowCountry.css'
function ShowCountry() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data && Array.isArray(data)) {
          setCountryData(data);
        } else {
          throw new Error('Data is not in the expected format');
        }
      })
      .catch(error => {
        console.log(error);
        setCountryData([]);
      });
  }, []);

  return (
    <div className='content-container'>
      {countryData && countryData.length > 0 ? (
        countryData.map(country => (
          <div key={country.name.common} className='content'>
            <h2>{country.name.common}</h2>
            <img src={country.flags.svg} alt={`${country.name.common} flag`} width={250} />
            <p>Population: {country.population}</p>
            {country.currencies && Object.values(country.currencies)[0] && (
              <p>Currency: {Object.values(country.currencies)[0].name}</p>
            )}
          </div>
        ))
      ) : (
        <p>No country data available.</p>
      )}
    </div>
  );
}

export default ShowCountry;
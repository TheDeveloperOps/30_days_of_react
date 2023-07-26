import  { useState } from 'react';
import './SearchBar.css'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryData, setCountryData] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setCountryData(data[0]);
        } else {
          setCountryData(null);
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <div className='input-wrapper'>
      <form onSubmit={handleSearch}>
        <label>
          <center><input type="text"  placeholder='Type name of the country' value={searchTerm} onChange={event => setSearchTerm(event.target.value)} /></center>
        </label>
        <center><button type="submit" className='btn'>Search</button></center>
      </form>
      {countryData ? (
        <div className='content'>
          <h2>{countryData.name.common}</h2>
          <img src={countryData.flags.svg} alt={`${countryData.name.common} flag`} width={250}/>
          <p>Population: {countryData.population}</p>
          {countryData.currencies && Object.values(countryData.currencies)[0] && (
            <p>Currency: {Object.values(countryData.currencies)[0].name}</p>
          )}
        </div>
      ) : (
        <center><h2>No country data available.</h2></center>
      )}
    </div>
  );
}

export default SearchBar;
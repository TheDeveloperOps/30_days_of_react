import {Link} from "react-router-dom"
import { useState } from "react";
import './Search.css'
export  const Search = () => {
    const [catName, setCatName] = useState('');
    const [filteredCats, setFilteredCats] = useState([]);
  
    const handleSearch = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/breeds?name=${catName}`
        );
        const data = await response.json();
        setFilteredCats(data.map((cat) => ({ name: cat.name, breed: cat.name })));
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <Link to='*'>Home</Link>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a cat"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
  
        {filteredCats.map((cat, index) => (
          <div key={index}>
            <h3>{cat.name}</h3>
            <p>Breed: {cat.breed}</p>
          </div>
        ))}
      </div>
    );
  };
export default Search;


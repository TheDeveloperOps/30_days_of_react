import { useEffect,useState } from "react";
import './Container.css'
const Content = () => {
  const [catData, setCatData] = useState([]);

    useEffect(() => {
      fetch('https://api.thecatapi.com/v1/breeds')
        .then((response) => response.json())
        .then((data) => setCatData(data))
        .catch((error) => console.log(error));
    }, []);

    return (
      <div className="content-container">
        {catData.map((cat) => (
          <div key={cat.id} className="each-cat">
            <CatImage breedId={cat.id} />
            <h3>{cat.name}</h3>
            <p>Breed: {cat.name}</p>
            {/* Additional information about the cat */}
            <p>Origin: {cat.origin}</p>
            {/* <p>Description: {cat.description}</p> */}
            {/* ...and so on */}
          </div>
        ))}
      </div>
    );
  };

  const CatImage = ({ breedId }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
      fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`)
        .then((response) => response.json())
        .then((data) => setImageUrl(data[0]?.url || ''))
        .catch((error) => console.log(error));
    }, [breedId]);

    return <img src={imageUrl} alt="Cat" width={100} />;
  };
export default Content
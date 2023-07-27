import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="header-container">
        <h1> THE CAT API PROJECT </h1>
        <h2> By BalaTheDeveloperOps</h2>
        <Link to='/search'> Search</Link>
    </div>
  )
}

export default Header
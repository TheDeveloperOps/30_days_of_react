import { Link } from "react-router-dom"
export const Home = () => {
  return (
    <div>
      Home  
        <Link to='/user/profile'>Profile</Link>
        <Link to='/user/settings'>Settings</Link>
    </div>
  )
}

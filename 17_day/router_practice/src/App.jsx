import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { User } from './components/User'
import { Home } from './components/Home'
function App() {
  return (
    <div className="App">    
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/*' element={<User/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

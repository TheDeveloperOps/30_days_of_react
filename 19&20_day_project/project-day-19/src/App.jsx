import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function Original(){
  return(
    <div>
      <Header/>
      <Content/>
      <Footer/>
  </div>
  )

}
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<Original/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

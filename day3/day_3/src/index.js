import React from 'react';
import ReactDOM from 'react-dom';
import bala from './bala.jpg';

const Header=()=>{
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to my 30 days of reactjs learning challenge</h1>
      <h2>Getting Started with react</h2>
      <h3>Javascript Library</h3>
      <p>BALA MURUGAN GANESAN</p>
    </div>
  </header>
}

const UserCard=()=>{
  <div className='user-card'>
    <img src={bala} width={200} height={250} alt="author" />
    <h2>Author: Bala murugan</h2>
  </div>
}
const TechList=()=>{
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techFormatted=techs.map((tech)=><li key={tech}>tech</li>)
  return techFormatted
}

const Main=()=>{
  <main>
    <div>
      <p>
        Prerequisite to get started react.js
      </p>
      <ul>
        <TechList/>
      </ul>
      <UserCard/>
    </div>
  </main>
}
const Footer=()=>{
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2023</p>
    </div>
  </footer>
}
const App=()=>{
  <div>
    <Header/>
    <Main/>
    <Footer/>
  </div>

}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>,rootElement)
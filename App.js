import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './Css/App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import Characters from './Pages/Characters'

const image = new URL('./images/logooo.png', import.meta.url)

function App(){
  return(
    <Router>
      <Routes>
        <Route exact path='/' element={(
          <section className='main-container'>
          <div className='container-fluid'>
          <center>  <img src={image} max-width='500' max-height='180'></img> </center>
          </div>
            <div className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-3 mb-5'>
        <a href='/Characters'>
          <button className="button" role="button">Characters</button>
          </a>
          <a href='/Episodes'>
          <button className="button" role="button">Episodes</button>
          </a>
          <a href='/Location'>
          <button className="button" role="button">Location</button>
          </a>
          </div>
          
        </section>
        )}/>
        <Route path='/Characters' element={<Characters/>}/>
        <Route path='/Episodes' element={<Episodes/>}/>
        <Route path='/Location' element={<Location/>}/>
      </Routes>
    </Router>
    
  )
}



export default App;


// https://rickandmortyapi.com/documentation/#rest
//https://horadecodar.com.br/2022/05/05/como-colocar-uma-imagem-de-background-dinamica-em-react-js/
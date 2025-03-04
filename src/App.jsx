import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './components/home'
import About from './components/About'
import Countries from './components/Countries'
import Navbar from './components/Navbar/Navbar'
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/About' element={<About/>}/>
      <Route path='/Countries' element={<Countries/>}/>
      <Route path="/countries/:countryName" element={<CountryDetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

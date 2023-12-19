import { useState } from 'react'
import Header from './Component/Header'
import Slider from './Component/Slider'
import ProductionHouse from './Component/ProductionHouse'
import GenreMovieList from './Component/GenreMovieList'



function App() {
  

  return (
    <>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </>
  )
}

export default App

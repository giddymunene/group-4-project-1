import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Placeorder/Home'
import Placeorder from './pages/Home/Placeorder/Placeorder'

const App = () => {
  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Placeorder />} />
        </Routes>
      </div>

    </>
  )
}

export default App

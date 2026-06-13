import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'  

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Winter from './pages/Winter'
import Summer from './pages/Summer'
import AboutDetails from './pages/AboutDetails'


const App = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-r from-slate-300 to-slate-500'>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={ <About/>}/>
        {/*Dynamic Route */}
        <Route path='/about/:id' element={<AboutDetails/>} />

        {/*This is a nested Route */}
        <Route path='/product' element={ <Product/>}> 
          <Route path='/product/summer' element={<Summer/>} />
          <Route path='/product/winter' element={<Winter/>} />
        </Route>
        
        <Route path='*' element={ <NotFound/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
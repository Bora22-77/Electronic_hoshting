import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BottomBar from './Components/ui/BottomBar'

const App = () => {
  return (
    <div>
      <nav>
        <Navbar/>
        <BottomBar/>
      </nav>
      <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App